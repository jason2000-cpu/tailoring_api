import {
    S3Client, CreateBucketCommand,
    HeadBucketCommand
} from '@aws-sdk/client-s3';


export const s3 = new S3Client({
    endpoint: process.env.S3_ENDPOINT,
    region: "us-east-1",
    forcePathStyle: true,
    credentials: {
        accessKeyId: "mavazidesk",
        secretAccessKey: "mavazidesk"
    }
})


export const  BUCKET_NAME = "app-storage";

export const ensureBucketExists = async () => {
    try {
        await s3.send(new HeadBucketCommand({ Bucket: BUCKET_NAME }));
    } catch (error) {
        await s3.send(new CreateBucketCommand({ Bucket: BUCKET_NAME }));
    }
}
