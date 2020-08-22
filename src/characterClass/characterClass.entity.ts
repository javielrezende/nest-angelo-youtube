import { ObjectType, Field, ID } from "@nestjs/graphql";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@ObjectType()
@Entity()
export class CharacterClass {
    @PrimaryGeneratedColumn()
    @Filed(() => ID)
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;
    
}