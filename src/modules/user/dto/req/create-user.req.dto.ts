import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsOptional,
  IsString,
  Length,
  Matches,
  MaxLength,
  ValidateIf,
} from 'class-validator';

import { TransformerHelper } from '../../../../common/helpers/transformer.helper';

export class CreateUserReqDto {
  @IsString({ message: 'Must be an letters' })
  @Length(3, 20)
  @Transform(TransformerHelper.trim)
  @ApiProperty({
    example: 'Leanne Graham',
    description: 'The name of the user',
    required: true,
  })
  public readonly name: string;

  @IsEmail()
  @IsString()
  @Transform(TransformerHelper.trim)
  @Transform(TransformerHelper.toLoverCase)
  @Matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, {
    message: 'Invalid email',
  })
  @ApiProperty({
    example: 'graham@gmail.com',
    description: 'The email of the user',
    required: true,
  })
  public readonly email: string;

  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message: 'Invalid password',
  })
  @IsString()
  @Transform(TransformerHelper.trim)
  @ApiProperty({
    example: 'Password123',
    description: 'The password of the user',
    required: true,
  })
  public readonly password: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  @ApiProperty({
    example: 'Doctor....',
    description: 'Other info about the user',
    required: false,
  })
  public readonly bio?: string;

  @IsOptional()
  @IsString()
  @ValidateIf((object) => object.age > 25)
  @MaxLength(255)
  @ApiProperty({
    example: 'https://www.example.com/avatar.jpg',
    description: 'The avatar of the user',
    required: false,
  })
  public readonly photo?: string;

  // @IsInt()
  // @IsNumber()
  // @IsOptional()
  // @Min(18)
  // @Max(150)
  // @Type(() => Number)
  // @ApiProperty({
  //   example: 39,
  //   description: 'The age of the user',
  //   required: false,
  // })
  // public readonly age?: number;
}
