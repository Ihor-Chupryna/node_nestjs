import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { RefreshTokenRepository } from '../../repository/services/refresh-token.repository';
import { UserRepository } from '../../repository/services/user.repository';
import { SKIP_AUTH } from '../constants/constants';
import { TokenType } from '../enums/token-type.enum';
import { AuthMapper } from '../services/auth.mapper';
import { AuthCacheService } from '../services/auth-cache.service';
import { TokenService } from '../services/token.service';

@Injectable()
export class JwtRefreshGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly tokenService: TokenService,
    private readonly refreshTokenRepository: RefreshTokenRepository,
    private readonly userRepository: UserRepository,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const refreshToken = request.get('Authorization')?.split('Bearer ')[1];
    if (!refreshToken) {
      throw new UnauthorizedException();
    }

    const payload = await this.tokenService.verifyToken(
      refreshToken,
      TokenType.REFRESH,
    );
    if (!payload) {
      throw new UnauthorizedException();
    }

    const isExist =
      await this.refreshTokenRepository.isTokenExist(refreshToken);
    if (!isExist) {
      throw new UnauthorizedException();
    }

    const user = await this.userRepository.findOneBy({
      id: payload.userId,
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    request.user = AuthMapper.toUserDataDTO(user, payload.deviceId);
    return true;
  }
}
