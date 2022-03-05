
import { readModuleFile } from "../helpers/read-file";


export async function RetrieveChapter(chapter: string): Promise<Buffer> {
    return await new Promise<Buffer>(async (resolve, reject) => {
        readModuleFile("./../../../chapters/" + chapter, (err: any, content: Buffer) => {
            if (err) reject(null);
            else resolve(content);
        });
    });
}

export async function RetrieveImage(image: string): Promise<Buffer> {
    return await new Promise<Buffer>(async (resolve, reject) => {
        readModuleFile("./../../../chapters/" + image, (err: any, content: Buffer) => {
            if (err) reject(Buffer.from(""));
            else resolve(content);
        });
    });
}



