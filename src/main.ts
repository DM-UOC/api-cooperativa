import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import config from '@app/libs/config/config';
import { Globals } from "@app/libs/config/globals";
declare const global: Globals;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // cors...
  app.enableCors();
  // configuraciones yaml...
  global.$config = config();
  // start app...  
  await app.listen(config().port, () => {
    console.log("¡api cooperativa cargada correctamente!");
  });
}
bootstrap();
