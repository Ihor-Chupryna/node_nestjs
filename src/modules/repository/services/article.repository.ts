import { Injectable } from '@nestjs/common';
import { query } from 'express';
import { DataSource, Repository } from 'typeorm';

import { ArticleEntity } from '../../../database/entities/article.entity';
import { IUserData } from '../../auth/interfaces/user-data.interface';

@Injectable()
export class ArticleRepository extends Repository<ArticleEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(ArticleEntity, dataSource.manager);
  }
  public async getList(
    userData: IUserData,
    query: any,
  ): Promise<[ArticleEntity[], number]> {
    const qb = this.createQueryBuilder('article');
    qb.leftJoinAndSelect('article.tags', 'tag');
    qb.leftJoinAndSelect('article.user', 'user');
    qb.leftJoinAndSelect(
      'user.followings',
      'follow',
      'follow.follower_id = :myId',
    );
    qb.setParameter('myId', userData.userId);

    qb.orderBy('article.created', 'DESC');
    qb.take(query.limit || 5);
    qb.skip(query.offset || 0);

    return await qb.getManyAndCount();
  }

  public async findArticleById(
    userData: IUserData,
    articleId: string,
  ): Promise<ArticleEntity> {
    const qb = this.createQueryBuilder('article');
    qb.leftJoinAndSelect('article.tags', 'tag');
    qb.leftJoinAndSelect('article.user', 'user');
    qb.leftJoinAndSelect(
      'user.followings',
      'follow',
      'follow.follower_id = :myId',
    );

    qb.where('article.id = :articleId');
    qb.setParameter('articleId', articleId);
    qb.setParameter('myId', userData.userId);

    return await qb.getOne();
  }
}
