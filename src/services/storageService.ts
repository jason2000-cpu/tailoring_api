import { Upload } from '@aws-sdk/lib-storage';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { s3 } from '../config/storage'


export class StorageService {
    static async uploadFile(file: any, id: string) {
        try {
            const { createReadStream, filename, mimetype } = await file;

            const stream = createReadStream();
            const ext = extname(filename);
            const fileId = uuidv4();

            const key = `users/${id}/uploads/${fileId}${ext}`;

            const upload = new Upload({
                client: s3,
                params: {
                    Bucket: "app-storage",
                    Key: key,
                    Body: stream,
                    ContentType: mimetype
                }
            })

            await upload.done;

            return key
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}
