import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import Address from './address.entity';
import PostEntity from 'src/posts/entities/post.entity';
import PublicFileEntity from 'src/files/publicFile.entity';

@Entity()
class UserEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  public email: string;

  @Column()
  public name: string;

  @Column()
  @Exclude()
  public password: string;

  @OneToOne(() => Address, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  public address: Address;

  @OneToMany(() => PostEntity, (post: PostEntity) => post.author)
  public posts: PostEntity[];

  public avatar?: PublicFileEntity;
}

export default UserEntity;
