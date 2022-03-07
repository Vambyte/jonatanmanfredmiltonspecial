import { APIResponse } from "../../interfaces/api-response";
import { UserModel } from "../../models/user";

export async function GetChapterInfo(reqData: any): Promise<APIResponse> {
    return await new Promise<APIResponse>(async (resolve, reject) => {
        UserModel.find({email: reqData.email}).exec()
        .then(user => {
            if (user.length < 1) {
                return reject(<APIResponse>({
                    status: 500,
                    success: false,
                    code: "ERROR",
                    msg: "Could not find user",
                    data: null
                }));
            }

            const chapter = user[0].chapter_info.current_chapter;
            const part = user[0].chapter_info.current_part;

            if (chapter == null || part == null) {
                return reject(<APIResponse>({
                    status: 500,
                    success: false,
                    code: "ERROR",
                    msg: "Missing internal data",
                    data: null
                }));
            }

            return resolve(<APIResponse>({
                status: 200,
                success: true,
                code: "OK",
                msg: "",
                data: {
                    chapter: chapter,
                    part: part
                }
            }));
            
        });
    });
}

export async function SetCurrentChapter(reqData: any): Promise<APIResponse> {
    return await new Promise<APIResponse>(async (resolve, reject) => {
        UserModel.find({email: reqData.email}).exec()
        .then(user => {
            if (user.length < 1) {
                return reject(<APIResponse>({
                    status: 500,
                    success: false,
                    code: "ERROR",
                    msg: "Could not find user",
                    data: null
                }));
            }

            user[0].chapter_info.current_chapter = reqData.newChapter;
            user[0].markModified("chapter_info");

            user[0].save()
            .then(() => {
                return resolve(<APIResponse>({
                    status: 200,
                    success: true,
                    code: "OK",
                    msg: "",
                    data: { chapter_info: user[0].chapter_info }
                }));
            }).catch(() => {
                return reject(<APIResponse>({
                    status: 500,
                    success: false,
                    code: "ERROR",
                    msg: "Could not set chapter info",
                    data: null
                }));
            });
            
        });
    });
}

export async function SetCurrentPart(reqData: any): Promise<APIResponse> {
    return await new Promise<APIResponse>(async (resolve, reject) => {
        UserModel.find({email: reqData.email}).exec()
        .then(user => {
            if (user.length < 1) {
                return reject(<APIResponse>({
                    status: 500,
                    success: false,
                    code: "ERROR",
                    msg: "Could not find user",
                    data: null
                }));
            }

            user[0].chapter_info.current_part = reqData.newPart;
            user[0].markModified("chapter_info");

            user[0].save()
            .then(() => {
                return resolve(<APIResponse>({
                    status: 200,
                    success: true,
                    code: "OK",
                    msg: "",
                    data: { chapter_info: user[0].chapter_info }
                }));
            }).catch(() => {
                return reject(<APIResponse>({
                    status: 500,
                    success: false,
                    code: "ERROR",
                    msg: "Could not set part info",
                    data: null
                }));
            });
            
        });
    });
}