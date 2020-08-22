import { ObjectType, Field, ID } from "@nestjs/graphql";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@ObjectType()
@Entity()
export class Character {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: string;

    @Column()
    name: string;

    @Column()
    level: number;

    @Column()
    description: string;


    @Column()
    strength: number;

    @Column()
    intelligence: number;

    @Column()
    agility: number;

}
