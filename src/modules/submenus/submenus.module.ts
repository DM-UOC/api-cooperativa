import { Module } from '@nestjs/common';

import { SubmenusController } from '@controllers/submenus/submenus.controller';
import { SubmenusService } from '@services/submenus/submenus.service';

@Module({
  controllers: [SubmenusController],
  providers: [SubmenusService]
})
export class SubmenusModule {}
