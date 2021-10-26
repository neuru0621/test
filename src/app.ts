import * as express from "express";
import catsRouter from "./cats/cats.route";

//싱글톤 패턴 만들기. -객체의 인스턴스가 오직 한개만 생성되도록하는 패턴
//app전역으로 사용될 수 있는 변수니까

class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log("this is logging middleware ");
      next();
    });
    this.app.use(express.json());

    this.app.use((req, res, next) => {
      console.log("this is error middleware ");
      res.send({ error: "404 not found error" });
    });
  }

  public listen() {
    this.setMiddleware();
    const port = 3000;
    this.app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();

//미들웨어만들기
//next()를 통해 미들웨어는 다음 엔드포인트로 실행 순서를 넘겨준다.
// app.use((req, res, next) => {
//   console.log("this is logging middleware ");
//   next();
// });

//express json 미들웨어추가하기

// app.get("/", function (req, res) {
//   // console.log(req);
//   res.send({ cats: Cat[0] });
// });

// app.post("/test", function (req, res) {
//   console.log(req.rawHeaders[1]);
//   res.send({ cats: Cat[0] });
// });
