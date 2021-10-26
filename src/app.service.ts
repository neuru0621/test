import { Injectable } from '@nestjs/common';

//controller과 service를 나누는 이유
//의존성 주입과 라우터 분리와 같은 개념으로 유지보수와 가독성, 디자인 패턴을 위해서 분리.
@Injectable() //의존성 주입
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
