import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { CreateSubmenuDto } from '@models/submenus/dto/create-submenu.dto';
import { UpdateSubmenuDto } from '@models/submenus/dto/update-submenu.dto';
import { SubmenusService } from '@services/submenus/submenus.service';

@Controller('submenus')
export class SubmenusController {
  constructor(private readonly submenusService: SubmenusService) {}

  @Post()
  create(@Body() createSubmenuDto: CreateSubmenuDto) {
    return this.submenusService.create(createSubmenuDto);
  }

  @Get()
  findAll() {
    return this.submenusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.submenusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubmenuDto: UpdateSubmenuDto) {
    return this.submenusService.update(+id, updateSubmenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.submenusService.remove(+id);
  }
  
}
