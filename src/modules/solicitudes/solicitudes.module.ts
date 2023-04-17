import { Module } from '@nestjs/common';

import { SolicitudesController } from '@controllers/solicitudes/solicitudes.controller';
import { SolicitudesService } from '@services/solicitudes/solicitudes.service';

@Module({
  controllers: [SolicitudesController],
  providers: [SolicitudesService]
})
export class SolicitudesModule {}
