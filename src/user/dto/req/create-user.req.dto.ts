import { ApiProperty } from '@nestjs/swagger';

export class CreateUserReqDto {
  @ApiProperty({
    example: '123',
    description: 'The id of the user',
    required: true,
  })
  id: number;

  @ApiProperty({
    example: 'Leanne Graham',
    description: 'The name of the user',
    required: true,
  })
  public readonly name: string;

  @ApiProperty({
    example: 'graham@gmail.com',
    description: 'The email of the user',
    required: true,
  })
  public readonly email: string;

  @ApiProperty({
    example: 'https://www.example.com/avatar.jpg',
    description: 'The avatar of the user',
    required: false,
  })
  public readonly avatar?: string;

  @ApiProperty({
    example: 39,
    description: 'The age of the user',
    required: false,
  })
  public readonly age?: number;
}
