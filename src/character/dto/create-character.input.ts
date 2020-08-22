import { InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString, IsInt } from 'class-validator';

@InputType()
export class CreateCharacterInput {
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    name: string;

    @IsInt()
    @IsNotEmpty({ message: 'Invalid level' })
    level: number;

    @IsString()
    @IsNotEmpty({ message: 'Invalid description' })
    description: string;

    @IsInt()
    @IsNotEmpty({ message: 'Invalid strength' })
    strength: number;

    @IsInt()
    @IsNotEmpty({ message: 'Invalid intelligence' })
    intelligence: number;

    @IsInt()
    @IsNotEmpty({ message: 'Invalid agility' })
    agility: number;
}