import { forwardRef, Module } from '@nestjs/common';
import { ThumbnailService } from './thumbnail.service';
import { ThumbnailController } from './thumbnail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Thumbnail } from '@/entities/thumbnail.entity';
import { UserModule } from '../user/user.module';
import { JwtService } from '@nestjs/jwt';
import { ThumbnailRepository } from './thumbnail.repository';
import { GeneratorService } from '@/shared/services/generator.service';
import { UploadService } from '@/shared/services/storage-firebase.service';

@Module({
  imports: [TypeOrmModule.forFeature([Thumbnail]), forwardRef(() => UserModule)],
  controllers: [ThumbnailController],
  providers: [ThumbnailService, JwtService, ThumbnailRepository, GeneratorService, UploadService],
  exports: [ThumbnailService, ThumbnailRepository],
})
export class ThumbnailModule {}
