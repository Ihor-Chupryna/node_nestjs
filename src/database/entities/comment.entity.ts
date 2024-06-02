import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { ArticleEntity } from './article.entity';
import { TableNameEnum } from './enums/table-name.enum';
import { BaseModel } from './models/base.model';
import { UserEntity } from './user.entity';

@Entity({ name: TableNameEnum.COMMENTS })
export class CommentEntity extends BaseModel {
  @Column('text')
  body: string;

  @Column()
  article_id: string;
  @ManyToOne(() => ArticleEntity, (user) => user.comments)
  @JoinColumn({ name: 'article_id' })
  article?: ArticleEntity;

  @Column()
  user_id: string;
  @ManyToOne(() => UserEntity, (user) => user.comments)
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;
}
