import { Cat, CatType } from "./cats.model";
import { Request, Response } from "express";

//Read 고양이 전체 데이터 다 조회
//모듈 수출하기
export const readAllcat = (req: Request, res: Response) => {
  try {
    const cats = Cat;
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};
