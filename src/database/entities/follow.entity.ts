import { Column, Entity, JoinTable, ManyToOne } from 'typeorm';

import { TableNameEnum } from './enums/table-name.enum';
import { UserEntity } from './user.entity';
import { BaseModel } from './models/base.model';

@Entity({ name: TableNameEnum.FOLLOW })
export class FollowEntity extends BaseModel {
  @Column()
  follower_id: string;
  @ManyToOne(() => UserEntity, (entity) => entity.followers)
  @JoinTable({ name: 'follower_id' })
  follower?: UserEntity;

  @Column()
  following_id: string;
  @ManyToOne(() => UserEntity, (entity) => entity.followings)
  @JoinTable({ name: 'followings_id' })
  following?: UserEntity;
}
