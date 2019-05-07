import { Injectable } from '@nestjs/common';

import { OverpassService } from './overpass.service';
import { MapPartitionerService } from './map-partitioner.service';

@Injectable()
export class MapUpdaterService {

  constructor(
    private overpass: OverpassService,
    private mapPartitioner: MapPartitionerService,
  ) {}

  /**
   * Updates the map given the name of a reserve
   * @param name 
   */
  async updateMap(name: string) {
    name = name.replace(/[\[\]\(\)\"\']/, ''); // sanitise

    const reserve = await this.overpass.query(`relation["name"="${name}"]["type"="boundary"];
      /*added by auto repair*/
      (._;>;);
      /*end of auto repair*/
      out geom meta;
    `);
    console.log('reserve', reserve.features.length);
    const dams = await this.overpass.query(`area["name"="${name}"]->.boundaryarea;
    (
      nwr(area.boundaryarea)[leisure=reserve];
      nwr(area.boundaryarea)[water];
      nwr(area.boundaryarea)[waterway];
      nwr(area.boundaryarea)[natural="water"];
    );
    out geom meta;`);
    console.log('dams', dams.features.length);

    const roads = await this.overpass.query(`area["name"="${name}"]->.boundaryarea;
    (
      nwr(area.boundaryarea)[highway];
      nwr(area.boundaryarea)[route=road];
    );
    out geom meta;`);
    console.log('roads', roads.features.length);

    console.log('downloaded map data');

    const allFeatures = {
      reserve: reserve.features[0],
      dams: dams.features,
      roads: roads.features,
    };

    const grid = this.mapPartitioner.partitionMap(allFeatures.reserve, {
      roads: allFeatures.roads,
      water: allFeatures.dams,
    });

    console.log(grid.features.length);

    return allFeatures;
  }


  /**
   * Returns a list of reserves in a given bounding box
   * @param left 
   * @param bottom 
   * @param right 
   * @param top 
   */
  async findReservesInArea(left, bottom, right, top) {
    const query = `node[leisure=nature_reserve](${bottom},${left},${top},${right});out;`;
    return await this.overpass.query(query);
  }
}