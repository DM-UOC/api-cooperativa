import { Module } from '@nestjs/common';

import { MenusController } from '@controllers/menus/menus.controller';
import { MenusService } from '@services/menus/menus.service';

@Module({
  controllers: [MenusController],
  providers: [MenusService]
})
export class MenusModule {}
