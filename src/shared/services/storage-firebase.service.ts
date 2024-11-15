import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';
import { firebaseStorage } from '../firebase/firebase.config';
import { validateAvatarFile } from '../utils/validate-avatar.utils';
import { I18nService } from 'nestjs-i18n';

@Injectable()
export class UploadService {
  constructor(private readonly i18n: I18nService) {}
  async uploadFile(file: Express.Multer.File): Promise<string> {
    const filename = `${uuidv4()}${extname(file.originalname)}`;

    const fileRef = firebaseStorage.file(filename);
    const stream = fileRef.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
    });

    return new Promise((resolve, reject) => {
      stream.on('error', (error) => reject(`Upload error: ${error}`));
      stream.on('finish', async () => {
        await fileRef.makePublic();

        const url = `https://storage.googleapis.com/${firebaseStorage.name}/${filename}`;
        resolve(url);
      });
      stream.end(file.buffer);
    });
  }

  async uploadAvatar(file: Express.Multer.File): Promise<string> {
    await validateAvatarFile(file, this.i18n);
    return await this.uploadFile(file);
  }
}
