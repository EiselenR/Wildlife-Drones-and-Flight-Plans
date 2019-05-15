import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class AnimalLocation {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    animalId: string;

    @Column()
    timestamp: Date;

    @Column()
    month: number;

    @Column()
    time: number;

    @Column()
    longitude: number; 

    @Column()
    latitude: number;

    @Column()
    temperature: number;

    @Column()
    habitat: string;
   

}