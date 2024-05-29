import { ApiProperty } from '@nestjs/swagger';

export class BaseUserResDto {
  @ApiProperty({
    example: '123',
    description: 'The id of the user',
  })
  id: number;

  @ApiProperty({
    example: 'Leanne Graham',
    description: 'The name of the user',
  })
  public readonly name: string;

  @ApiProperty({
    example: 'graham@gmail.com',
    description: 'The email of the user',
  })
  public readonly email: string;

  @ApiProperty({
    example: 'Doctor....',
    description: 'Other info about the user',
  })
  public readonly bio?: number;

  @ApiProperty({
    example: 'https://www.example.com/avatar.jpg',
    description: 'The avatar of the user',
  })
  public readonly photo?: string;
}
