
import mongoose from "mongoose";
import { readModuleFile } from "../helpers/read-file";
import { APIResponse } from "../interfaces/api-response";
import { TestQuestionsModel } from "../models/test-data";


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

export async function SetQuestions(reqData: any): Promise<APIResponse> {
    return await new Promise<APIResponse>(async (resolve, reject) => {
        TestQuestionsModel.find({ chapter: reqData.chapter }).exec().then((chapters) => {

            if (chapters.length < 1) {
                
                let testQuestions = new TestQuestionsModel({
                    chapter: reqData.chapter,
                    questions: reqData.questions
                });

                testQuestions.save()
                .then(() => {
                    return resolve(<APIResponse>({
                        status: 200,
                        success: true,
                        code: "OK",
                        msg: "",
                        data: null
                    }));
                }).catch(() => {
                    return reject(<APIResponse>({
                        status: 500,
                        success: false,
                        code: "ERROR",
                        msg: "Could not save questions",
                        data: null
                    }));
                });
            } else {
                chapters[0].questions = reqData.questions;
                chapters[0].markModified("questions");
    
                chapters[0].save().then(() => {
                    return resolve(<APIResponse>({
                        status: 200,
                        success: true,
                        code: "OK",
                        msg: "",
                        data: null
                    }));
                }).catch(() => {
                    return reject(<APIResponse>({
                        status: 500,
                        success: false,
                        code: "ERROR",
                        msg: "Could not save questions",
                        data: null
                    }));
                });    
            }
        }).catch(() => {
            return reject(<APIResponse>({
                status: 500,
                success: false,
                code: "ERROR",
                msg: "Database error",
                data: null
            }));
        });
    });
}

export async function GetQuestions(): Promise<APIResponse> {
    return await new Promise<APIResponse>(async (resolve, reject) => {
        TestQuestionsModel.find().exec().then((chapters) => {
            return reject(<APIResponse>({
                status: 200,
                success: true,
                code: "OK",
                msg: "",
                data:  { chapters: chapters } 
            }));
            
        }).catch(() => {
            return reject(<APIResponse>({
                status: 500,
                success: false,
                code: "ERROR",
                msg: "Database error",
                data: null
            }));
        });
    });
}


export async function AddChapterTest(chapter: any): Promise<APIResponse> {
    return await new Promise<APIResponse>(async (resolve, reject) => {
        let chapterTest = new TestQuestionsModel({ _id: new mongoose.Types.ObjectId(), chapter: chapter, questions: []});
        chapterTest.save().then(() => {
            return resolve(<APIResponse>({
                status: 200,
                success: true,
                code: "OK",
                msg: "",
                data: null
            }));
            
        }).catch(() => {
            return reject(<APIResponse>({
                status: 500,
                success: false,
                code: "ERROR",
                msg: "Could not add chapter test",
                data: null
            }));
        });
    });
}

export async function RemoveChapterTest(chapter: any): Promise<APIResponse> {
    return await new Promise<APIResponse>(async (resolve, reject) => {
        TestQuestionsModel.deleteMany({chapter: chapter}).then(() => {
            return reject(<APIResponse>({
                status: 200,
                success: true,
                code: "OK",
                msg: "",
                data: null
            }));
        }).catch(() => {
            return reject(<APIResponse>({
                status: 500,
                success: false,
                code: "ERROR",
                msg: "Could not delete chapter test",
                data: null
            }));
        });
    });
}




