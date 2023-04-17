import { Injectable } from '@nestjs/common';

import { CreateSubmenuDto } from '@models/submenus/dto/create-submenu.dto';
import { UpdateSubmenuDto } from '@models/submenus/dto/update-submenu.dto';

@Injectable()
export class SubmenusService {
  create(createSubmenuDto: CreateSubmenuDto) {
    return 'This action adds a new submenu';
  }

  findAll() {
    return `This action returns all submenus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} submenu`;
  }

  update(id: number, updateSubmenuDto: UpdateSubmenuDto) {
    return `This action updates a #${id} submenu`;
  }

  remove(id: number) {
    return `This action removes a #${id} submenu`;
  }
}
