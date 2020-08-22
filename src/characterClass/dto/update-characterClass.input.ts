import { InputType } from "@nestjs/graphql";
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateCharacterClassInput {
    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    name?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid description' })
    description?: string;

}