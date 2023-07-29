import { CategoryEntity } from 'src/modules/category/entities/category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SubCategoryEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'text' })
  subCategoryName: string;

  @ManyToOne((type) => CategoryEntity, (category) => category.subCategories)
  category: CategoryEntity;
}
