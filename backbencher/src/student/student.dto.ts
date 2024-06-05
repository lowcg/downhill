import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNumber, IsString } from 'class-validator';

export class StudentDTO {
  @ApiProperty({ example: "John Doe" })
  @IsString()
  name: string;

  @ApiProperty({ example: 6 })
  @IsNumber()
  semester: number;

  @ApiProperty({ example: "16900121116" })
  @IsString()
  roll: string;

  @ApiProperty({ example: "john.doe.21@aot.edu.in" })
  @IsEmail()
  collegeMail: string;

  @ApiProperty({ example: "1234567890" })
  @IsString()
  phone: string;
}
