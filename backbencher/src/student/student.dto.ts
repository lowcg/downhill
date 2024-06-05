import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsNumber, IsString } from 'class-validator';

@Exclude()
export class StudentDTO {
  @ApiProperty({ example: "John Doe" })
  @Expose()
  @IsString()
  name: string;

  @ApiProperty({ example: 6 })
  @Expose()
  @IsNumber()
  semester: number;

  @ApiProperty({ example: "16900121116" })
  @Expose()
  @IsString()
  roll: string;

  @ApiProperty({ example: "john.doe.21@aot.edu.in" })
  @Expose()
  @IsEmail()
  collegeMail: string;

  @ApiProperty({ example: "1234567890" })
  @Expose()
  @IsString()
  phone: string;

  constructor(o: Partial<StudentDTO>) {
    Object.assign(this, o);
  }
}
