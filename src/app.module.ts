import { Module } from '@nestjs/common';
import { CategoryModule } from './modules/category/category.module';
import { DbmoduleModule } from './db-config/dbmodule.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubCategoryModule } from './modules/subcategory/sub-category.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    CategoryModule,
    SubCategoryModule,
    DbmoduleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
