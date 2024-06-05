import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsJWT,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class BasicAuthDTO {
  @ApiProperty({ example: "john@example.com" })
  @IsEmail()
  email: string;

  @ApiProperty({ example: "12345678" })
  @IsString()
  @MinLength(8)
  password: string;
}

export class TokenDTO {
  @ApiProperty()
  @IsJWT()
  accessToken: string;
}

export class BasicAuthResponseDTO {
  @ApiProperty()
  @IsBoolean()
  ok: boolean;

  @ApiProperty()
  @ValidateNested()
  data: TokenDTO;
}
