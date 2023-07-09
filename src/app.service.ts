import { Injectable } from '@nestjs/common';
import { UtilitariosFechas } from './services/utilitarios/utilitariosfechas.service';

@Injectable()
export class AppService {
  getHello() {
    return {
      mensaje: "API cooperativa cargada correctamente",
      fecha: UtilitariosFechas.retornaFechaActual(),
      status: 'OK'
    };
  }
}
