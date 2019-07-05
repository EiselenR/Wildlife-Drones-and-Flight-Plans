import { Injectable, RequestTimeoutException } from '@nestjs/common';
import { DatabaseService } from './db.service';
import { PoachingIncident } from '../entity/poaching-incident.entity';
import { PoachingIncidentType } from '../entity/poaching-incident-type.entity';

@Injectable()
export class PoachingIncidentService {
  constructor(private readonly databaseService: DatabaseService) {}

  async addPoachingIncident(
    long: number,
    lat: number,
    pType: string,
  ): Promise<boolean> {
    const con = await this.databaseService.getConnection();
    const poachingIncident = new PoachingIncident();

    try {
      const poachingIncidentType = await con
        .getRepository(PoachingIncidentType)
        .findOne({ type: pType });

      poachingIncident.timestamp = new Date();
      poachingIncident.longitude = long;
      poachingIncident.latitude = lat;
      poachingIncident.type = poachingIncidentType;
      // tslint:disable-next-line:no-console
      const addedPoachingIncident = await con
        .getRepository(PoachingIncident)
        .save(poachingIncident);
      console.log(
        'Saved a new poaching incident with id: ' + poachingIncident.id,
      );

      return addedPoachingIncident != null;
    } catch (error) {
      console.log('The type of incident does not exist.');
      return false;
    }
  }
}
