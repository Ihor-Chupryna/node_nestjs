import { Module, Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config/dist/config.service';
import { Redis } from 'ioredis';

import { Config, RedisConfig } from '../../configs/configs.type';
import { REDIS_CLIENT } from './redis.constants';
import { RedisService } from './redis.service';

const redisProvider: Provider = {
  useFactory: (config: ConfigService<Config>): Redis => {
    const redisConfig = config.get<RedisConfig>('redis');

    return new Redis({
      port: redisConfig.port,
      host: redisConfig.host,
      password: redisConfig.password,
    });
  },
  inject: [ConfigService],
  provide: REDIS_CLIENT,
};

@Module({
  providers: [redisProvider, RedisService],
  exports: [redisProvider, RedisService],
})
export class RedisModule {}
