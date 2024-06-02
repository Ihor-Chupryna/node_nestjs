import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsEmail,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Matches,
  Max,
  MaxLength,
  Min,
  ValidateIf,
} from 'class-validator';

import { TransformHelper } from '../../../../common/helpers/transform.helper';

export class CreateUserReqDto {
  @IsString({ message: 'Must be an letters' })
  @Length(3, 20)
  @Transform(TransformHelper.trim)
  @ApiProperty({
    example: 'Leanne Graham',
    description: 'The name of the user',
    required: true,
  })
  public readonly name: string;

  @IsEmail()
  @IsString()
  @Transform(TransformHelper.trim)
  @Transform(TransformHelper.toLowerCase)
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
  @Transform(TransformHelper.trim)
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
  public readonly image?: string;

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

// import { Transform, Type } from 'class-transformer';
// import {
//   IsInt,
//   IsNumber,
//   IsObject,
//   IsOptional,
//   IsString,
//   Length,
//   Matches,
//   Max,
//   MaxLength,
//   Min,
//   ValidateIf,
//   ValidateNested,
// } from 'class-validator';
//
// import { TransformHelper } from '../../../../common/helpers/transform.helper';
//
// class CarReqDto {
//   @IsString()
//   @MaxLength(255)
//   producer: string;
//
//   @IsString()
//   model: string;
// }
//
// export class CreateUserReqDto {
//   @IsString()
//   @Length(3, 30)
//   @Transform(TransformHelper.trim)
//   public readonly name: string;
//
//   @Matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, {
//     message: 'Invalid email',
//   })
//   @IsString()
//   @Transform(TransformHelper.trim)
//   @Transform(TransformHelper.toLowerCase)
//   public readonly email: string;
//
//   @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
//     message: 'Invalid password',
//   })
//   @IsString()
//   @Transform(TransformHelper.trim)
//   public readonly password: string;
//
//   @IsOptional()
//   @IsString()
//   @ValidateIf((object) => object.age > 25)
//   @MaxLength(255)
//   @Transform(TransformHelper.trim)
//   public readonly avatar?: string;
//
//   @IsInt()
//   @IsNumber()
//   @Min(18)
//   @Max(150)
//   @IsOptional()
//   @Type(() => Number)
//   public readonly age?: number;
//
//   @IsOptional()
//   @IsObject()
//   @Type(() => CarReqDto)
//   @ValidateNested({ each: true })
//   car: CarReqDto;
// }
