import { VideoService } from '@/modules/video/video.service';
import { forwardRef, Module } from '@nestjs/common';
import { VideoController } from './video.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Video } from '@/entities/video.entity';
import { VideoRepository } from './video.repository';
import { GeneratorService } from '@/shared/services/generator.service';
import { CategoryModule } from '../category/category.module';
import { CategoryService } from '../category/category.service';
import { VimeoService } from '@/shared/services/vimeo.service';
import { UserModule } from '../user/user.module';
import { JwtService } from '@nestjs/jwt';
import { ChannelModule } from '../channel/channel.module';
import { ThumbnailModule } from '../thumbnail/thumbnail.module';
import { WatchingVideoHistoryModule } from '../watching-video-history/watching-video-history.module';
import { Follow } from '@/entities/follow.entity';
import { ViewModule } from '../view/view.module';
import { DonationModule } from '../donation/donation.module';
import { NotificationModule } from '../notification/notification.module';
import { UploadService } from '@/shared/services/storage-firebase.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Video, Follow]),
    CategoryModule,
    WatchingVideoHistoryModule,
    forwardRef(() => UserModule),
    forwardRef(() => ChannelModule),
    forwardRef(() => WatchingVideoHistoryModule),
    ThumbnailModule,
    ViewModule,
    forwardRef(() => DonationModule),
    NotificationModule,
    // DonationModule
  ],
  controllers: [VideoController],
  providers: [
    VideoService,
    VideoRepository,
    JwtService,
    GeneratorService,
    CategoryService,
    VimeoService,
    UploadService,
  ],
  exports: [VideoService, VideoRepository],
})
export class VideoModule {}
