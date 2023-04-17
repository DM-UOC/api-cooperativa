import moment from "moment";

export class UtilitariosFechas {
  static retornaFechaActual(): Date {
    return moment().utc().toDate();
  }
}