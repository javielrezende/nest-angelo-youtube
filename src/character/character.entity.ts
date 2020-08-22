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

    @Column({ type: 'int' })
    level: number;

    @Column()
    description: string;


    @Column({ type: 'int' })
    strength: number;

    @Column({ type: 'int' })
    intelligence: number;

    @Column({ type: 'int' })
    agility: number;

}
