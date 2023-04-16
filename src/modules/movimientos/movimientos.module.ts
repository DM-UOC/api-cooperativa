import { Module } from '@nestjs/common';

import { MovimientosController } from '@controllers/movimientos/movimientos.controller';
import { MovimientosService } from '@services/movimientos/movimientos.service';

@Module({
  controllers: [MovimientosController],
  providers: [MovimientosService]
})
export class MovimientosModule {}
