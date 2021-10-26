import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');
  use(req: Request, res: Response, next: NextFunction) {
    //response에 대한 상태값도 반환
    //finish는 응답이 마무리되었을 경우
    res.on('finish', () => {
      this.logger.log(`${req.ip} ${req.method}`, req.originalUrl);
      this.logger.log(res.statusCode);
    });
    next();
  }
}
