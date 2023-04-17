import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { CreateSolicitudeDto } from '@models/solicitudes/dto/create-solicitude.dto';
import { UpdateSolicitudeDto } from '@models/solicitudes/dto/update-solicitude.dto';

import { SolicitudesService } from '@services/solicitudes/solicitudes.service';

@Controller('solicitudes')
export class SolicitudesController {
  constructor(private readonly solicitudesService: SolicitudesService) {}

  @Post()
  create(@Body() createSolicitudeDto: CreateSolicitudeDto) {
    return this.solicitudesService.create(createSolicitudeDto);
  }

  @Get()
  findAll() {
    return this.solicitudesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solicitudesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSolicitudeDto: UpdateSolicitudeDto) {
    return this.solicitudesService.update(+id, updateSolicitudeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solicitudesService.remove(+id);
  }
}
