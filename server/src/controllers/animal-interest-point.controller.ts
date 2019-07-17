import { Controller, Get, Post, Body } from '@nestjs/common';
import { AnimalInterestPointService } from '../services/animal-interest-point.service';

@Controller()
export class AnimalInterestPointController {
  constructor(
    private readonly animalInterestPointService: AnimalInterestPointService,
  ) {}

 /**
   * Adds a new animal interest point to the system
   * This will be saved in a table within the database
   * Returns a value of true if the function executed sucessfully
   */
  @Post('addAnimalInterestPoint')
  async addAnimalInterestPoint() :Promise <boolean> {
    return this.animalInterestPointService.addAnimalInterestPoint();
  }
}
