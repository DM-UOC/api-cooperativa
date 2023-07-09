import * as moment from "moment-timezone";

export class UtilitariosFechas {

  static retornaFechaActual(): string {
    return moment.tz("America/Guayaquil").format();
  }
    
}