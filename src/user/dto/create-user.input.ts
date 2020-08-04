import { InputType } from "@nestjs/graphql";
import { IsAlpha, IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateUserInput {
    @IsAlpha()
    @IsNotEmpty({message: 'Invalid characters'})
    name: string;

    @IsEmail()
    @IsNotEmpty({message: 'Invalid E-mail'})
    email: string;
}