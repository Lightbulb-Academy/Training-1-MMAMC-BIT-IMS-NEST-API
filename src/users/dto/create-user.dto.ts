import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    first_name: string;

    @IsString()
    @IsOptional()
    @MaxLength(100)
    middle_name?: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    last_name: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(191)
    email: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(191)
    password: string;

    @IsNumber()
    @IsNotEmpty()
    role_id: number;
}
