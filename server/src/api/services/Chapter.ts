
import { readModuleFile } from "../helpers/read-file";


export async function RetrieveChapter(chapter: string, part: string): Promise<Buffer> {
    return await new Promise<Buffer>(async (resolve, reject) => {
        readModuleFile("./../../../chapters/" + chapter + "/parts/" + part + ".html", (err: any, content: Buffer) => {
            if (err) reject(Buffer.from(""));
            else resolve(content);
        });
    });
}

export async function RetrieveImage(chapter: string, image: string): Promise<Buffer> {
    return await new Promise<Buffer>(async (resolve, reject) => {
        readModuleFile("./../../../chapters/" + chapter + "/" + image, (err: any, content: Buffer) => {
            if (err) reject(Buffer.from(""));
            else resolve(content);
        });
    });
}



