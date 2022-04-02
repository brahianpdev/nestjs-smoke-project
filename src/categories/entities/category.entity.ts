import PostEntity from 'src/posts/entities/post.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class CategoryEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToMany(() => PostEntity, (post: PostEntity) => post.categories)
  public posts: PostEntity[];

  @Column()
  public name: string;
}

export default CategoryEntity;
