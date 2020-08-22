import { InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString, IsInt } from 'class-validator';

@InputType()
export class CreateCharacterClassInput {
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    name: string;

    @IsString()
    @IsNotEmpty({ message: 'Invalid description' })
    description: string;
}