import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsString } from "class-validator";
import { UserType } from "./user.entity";

export class UserDTO {
  @ApiProperty({ example: "john@example.com" })
  @IsString()
  email: string;

  @ApiProperty({ example: "12345678" })
  @IsString()
  password: string;

  @ApiProperty()
  @IsEnum(UserType)
  type: UserType;
}