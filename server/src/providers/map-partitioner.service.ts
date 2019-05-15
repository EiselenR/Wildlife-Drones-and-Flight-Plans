import { Injectable } from '@nestjs/common';
import { GeoService } from './geo.service';
import squareGrid from '@turf/square-grid';
import simplify from '@turf/simplify';
import center from '@turf/center';

@Injectable()
export class MapPartitionerService {
  constructor(
    private geo: GeoService,
  ) {}

  /**
   * Returns a grid representation of the map.
   * 
   * @param area 
   * @param features 
   * @param cellSize 
   */
  public partitionMap(area, features: { roads: any[]; water: any[]; }, cellSizeKm: number = 1) {
    console.log('partitioning map');
    const bounds = this.geo.getBoundingBox(area);

    // simplify the area. Kruger would require over 240 million iterations at cellSizeKm = 0.5km
    console.time('simplify area');
    const simplifiedArea = simplify(JSON.parse(JSON.stringify(area)), {
      mutate: true,
      tolerance: 0.01,
      highQuality: false,
    });
    console.timeEnd('simplify area');
    console.log('area len        ', area.geometry.coordinates[0].length);
    console.log('simple area len ', simplifiedArea.geometry.coordinates[0].length);

    console.time('build kd');
    const kd = this.geo.createFastSearchDataset(features.water);
    console.timeEnd('build kd');

    console.time('calculate grid');
    const grid = squareGrid(bounds, cellSizeKm, {
      units: 'kilometers',
    }).features
      .filter(feature => this.geo.isInPolygon(feature, simplifiedArea));
    console.log('calculated grid', grid.length);
    console.timeEnd('calculate grid');

    console.time('distances');
    grid.forEach((cell, count) => {
      // console.time('cellDistance');
      const cellCenter = center(cell);

      const nearest = kd.getNearest(
        cellCenter.geometry.coordinates[0],
        cellCenter.geometry.coordinates[1],
      );
      cell.properties['distanceToWater'] = nearest.distance;
      cell.properties['closestPoint'] = nearest.point;

      // console.timeEnd('cellDistance');
      console.log(`${count + 1}/${grid.length} (${count / grid.length * 100}%)`);
    });
    console.timeEnd('distances');

    return grid;
  }
}

export interface Cell {
  lat: number;
  lng: number;
  distances: {
    water: number;
    vegetation: number;
    settlement: number;
    road: number;
  }
}