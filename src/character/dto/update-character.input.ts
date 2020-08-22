import { InputType } from "@nestjs/graphql";
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateCharacterInput {
    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    name?: string;

    @IsOptional()
    @IsInt()
    @IsNotEmpty({ message: 'Invalid level' })
    level?: number;

    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid description' })
    description?: string;

    @IsOptional()
    @IsInt()
    @IsNotEmpty({ message: 'Invalid strength' })
    strength?: number;

    @IsOptional()
    @IsInt()
    @IsNotEmpty({ message: 'Invalid intelligence' })
    intelligence?: number;

    @IsOptional()
    @IsInt()
    @IsNotEmpty({ message: 'Invalid agility' })
    agility?: number;
}