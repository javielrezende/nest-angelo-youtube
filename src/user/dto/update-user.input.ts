import { InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateUserInput {
    @IsOptional()
    @IsString()
    @IsNotEmpty({message: 'Invalid characters'})
    name?: string;

    @IsOptional()
    @IsEmail()
    @IsNotEmpty({message: 'Invalid E-mail'})
    email?: string;
}