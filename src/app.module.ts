import { Module } from '@nestjs/common';

import { AppController } from '@app/src/app.controller';
import { AppService } from '@app/src/app.service';
import { UsuariosModule } from '@modules/usuarios/usuarios.module';
import { MovimientosModule } from '@modules/movimientos/movimientos.module';
import { PrestamosModule } from '@modules/prestamos/prestamos.module';
import { RolesModule } from '@modules/roles/roles.module';
import { MenusModule } from '@modules/menus/menus.module';

@Module({
  imports: [UsuariosModule, MovimientosModule, PrestamosModule, RolesModule, MenusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
