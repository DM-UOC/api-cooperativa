import { Module } from '@nestjs/common';

import { AppController } from '@app/src/app.controller';

import { UsuariosModule } from '@modules/usuarios/usuarios.module';
import { MovimientosModule } from '@modules/movimientos/movimientos.module';
import { PrestamosModule } from '@modules/prestamos/prestamos.module';
import { RolesModule } from '@modules/roles/roles.module';
import { MenusModule } from '@modules/menus/menus.module';
import { SubmenusModule } from '@modules/submenus/submenus.module';
import { SolicitudesModule } from '@modules/solicitudes/solicitudes.module';

import { AppService } from '@app/src/app.service';
import { UtilitariosFechas } from '@services/utilitarios/utilitariosfechas.service';

@Module({
  imports: [UsuariosModule, MovimientosModule, PrestamosModule, RolesModule, MenusModule, SubmenusModule, SolicitudesModule],
  controllers: [AppController],
  providers: [AppService, UtilitariosFechas],
})
export class AppModule {}
