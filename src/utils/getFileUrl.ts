import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { s3, BUCKET_NAME } from "../config/storage";


const encodeKey = (key: string): string => 
    key.split("/").map(encodeURIComponent).join("/");


export const getPresignedFileUrl = async (key: string): Promise<string> => {
    return getSignedUrl(
        s3,
        new GetObjectCommand({
            Bucket: BUCKET_NAME,
            Key: key
        })
    )
}


export const getPublicCdnFileUrl = async (key: string): Promise<string> => {
    if (!process.env.FILES_URL) {
        throw new Error("FILES_URL not configured")
    }

    return `${process.env.FILES_URL}/buckets/${BUCKET_NAME}/${encodeKey(key)}`
}

export function getFileUrl (key: string): Promise<string> {
    return process.env.NODE_ENV !== "production"
            ? getPresignedFileUrl(key)
            : getPublicCdnFileUrl(key)
}
