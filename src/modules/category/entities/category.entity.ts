import { SubCategoryEntity } from 'src/modules/subcategory/entities/sub-category.entity';
import { text } from 'stream/consumers';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CategoryEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'text' })
  categoryName: string;

  @OneToMany(
    (type) => SubCategoryEntity,
    (subCategoryEntity) => subCategoryEntity.category,
  )
  subCategories: SubCategoryEntity[];
}
