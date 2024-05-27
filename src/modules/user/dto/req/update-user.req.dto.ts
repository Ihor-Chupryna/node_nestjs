import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserReqDto {
  @ApiProperty({
    example: 'Leanne Graham',
    description: 'The name of the user',
    required: false,
  })
  public readonly name?: string;

  @ApiProperty({
    example: 'graham@gmail.com',
    description: 'The email of the user',
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
