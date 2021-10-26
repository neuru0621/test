import { Cat, CatType } from "./cats.model";
import { Router } from "express";
import { readAllcat } from "./cats.servic";

const router = Router();

//Read 고양이 전체 데이터 다 조회
// router.get("/cats", (req, res) => {
//   try {
//     const cats = Cat;
//     res.status(200).send({
//       success: true,
//       data: {
//         cats,
//       },
//     });
//   } catch (error: any) {
//     res.status(400).send({
//       success: false,
//       error: error.message,
//     });
//   }
// });

router.get("/cats", readAllcat);

//*Read 고양이 특정 데이터 조회 - 동적 라우팅 - id를 변수처럼 쓰기
router.get("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    console.log(params);
    const cats = Cat.find((cat) => {
      return cat.id === params.id;
    });
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
});

//create 새로운 고양이 추가 API
router.post("/cats", (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    res.status(200).send({
      success: true,
      data: {},
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//update 고양이 업데이트 API
router.put("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = body;
        result = cat;
      }
    });
    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (error: any) {}
});

//update 고양이 부분 업데이트 API
router.patch("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;
    Cat.forEach((cat) => {
      if (cat.id === params.id) {
        cat = { ...cat, ...body };
        result = cat;
      }
    });
    res.status(200).send({
      success: true,
      data: {
        cat: result,
      },
    });
  } catch (error: any) {}
});

//delete 고양이 삭제 API
router.delete("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    const newCat = Cat.filter((cat) => cat.id !== params.id);
    res.status(200).send({
      success: true,
      data: newCat,
    });
  } catch (error: any) {}
});

export default router;
