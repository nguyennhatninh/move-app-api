import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VideoTrend } from '@/entities/video-trend.entity';

export class VideoTrendService {
  constructor(@InjectRepository(VideoTrend) private readonly videoTrendRepository: Repository<VideoTrend>) {}

  async createVideoTrend(obj: any) {
    const newVideoTrend = this.videoTrendRepository.create({
      videoId: obj.id,
      title: obj.title,
      workoutLevel: obj.workoutLevel,
      createdAt: obj.createdAt,
      duration: obj.duration,
      videoLength: obj.videoLength,
      ratings: obj.ratings,
      numberOfViews: obj.numberOfViews,
      categoryId: obj.category.id,
      channelId: obj.channel.id,
    });

    return await this.videoTrendRepository.save(newVideoTrend);
  }
  async deleteAll() {
    await this.videoTrendRepository.clear();
  }

  async deleteVideoOld(limit: number) {
    const oldVideos = await this.videoTrendRepository.find({
      take: limit,
      order: {
        createdAt: 'ASC',
      },
    });

    for (const video of oldVideos) {
      await this.videoTrendRepository.delete(video.id);
    }
  }

  async getAll() {
    return await this.videoTrendRepository.find();
  }
}
