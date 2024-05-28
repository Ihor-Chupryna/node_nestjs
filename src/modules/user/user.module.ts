import { Module } from '@nestjs/common';

import { LoggerModule } from '../logger/logger.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  // imports:[LoggerModule]
})
export class UserModule {}
