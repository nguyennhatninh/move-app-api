import { Thumbnail } from '@/entities/thumbnail.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import { ThumbnailRepository } from './thumbnail.repository';
import { UploadService } from '@/shared/services/storage-firebase.service';

@Injectable()
export class ThumbnailService {
  constructor(
    private readonly uploadFileService: UploadService,
    private thumbnailRepository: ThumbnailRepository,
    private readonly i18n: I18nService,
  ) {}

  async saveThumbnails(files: Array<Express.Multer.File>, selected: number, videoId: number) {
    const result = await Promise.all(
      files.map(async (file, index) => {
        const linkThumbnail = await this.uploadFileService.uploadFile(file);
        if (selected === index) {
          this.thumbnailRepository
            .saveThumbnail(linkThumbnail, true, videoId)
            .then(() => {})
            .catch((error) => {
              throw new BadRequestException({
                message: this.i18n.t('exceptions.video.UPLOAD_THUMBNAIL_FAIL'),
              });
            });
        } else {
          try {
            await this.thumbnailRepository.saveThumbnail(linkThumbnail, false, videoId);
          } catch (error) {}
        }
      }),
    );
    return result;
  }

  async getSelectedThumbnail(videoId: number): Promise<Thumbnail> {
    return await this.thumbnailRepository.findSelectedThumbnail(videoId);
  }

  async getThumbnails(videoId: number): Promise<Thumbnail[]> {
    return await this.thumbnailRepository.findThumbnails(videoId);
  }

  async updateThumbnail(thumbnailUrl: string, isSelected: boolean, videoId: number): Promise<void> {
    const thumbnail = await this.thumbnailRepository.findThumbnails(videoId);
    const selectedThumbnail = thumbnail.find((item) => item.selected);

    if (selectedThumbnail) {
      selectedThumbnail.image = thumbnailUrl;
      selectedThumbnail.selected = isSelected;
      await this.thumbnailRepository.updateThumbnail(selectedThumbnail);
    }
  }
}
