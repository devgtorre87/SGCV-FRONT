import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToasterComponent } from './toaster/toaster.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UsuarioMantenimientoComponent } from './usuario/modal/usuario-mantenimiento/usuario-mantenimiento.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TableModule } from '../modules/table/table.module';
import { TableComponent } from '../modules/table/components/table/table.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CompraComponent } from './compra/compra.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ProductoComponent } from './producto/producto.component';
import { ProveedorMantenimientoComponent } from './proveedor/modal/proveedor-mantenimiento/proveedor-mantenimiento.component';
import { CompraMantenimientoComponent } from './compra/modal/compra-mantenimiento/compra-mantenimiento.component';
import { ProductoMantenimientoComponent } from './producto/modal/producto-mantenimiento/producto-mantenimiento.component';
import { VentaComponent } from './venta/venta.component';
import { VentaMantenimientoComponent } from './venta/modal/venta-mantenimiento/venta-mantenimiento.component';
import { ClienteComponent } from './cliente/cliente.component';
import { MedioPagoComponent } from './medio-pago/medio-pago.component';
import { MedioPagoMantenimientoComponent } from './medio-pago/modal/medio-pago-mantenimiento/medio-pago-mantenimiento.component';
import { ClienteMantenimientoComponent } from './cliente/modal/cliente-mantenimiento/cliente-mantenimiento.component';
import { ReporteComprasMesComponent } from './reporte/reporte-compras-mes/reporte-compras-mes.component';
import { ReporteComprasConsolidadoComponent } from './reporte/reporte-compras-consolidado/reporte-compras-consolidado.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ToasterComponent,
    PagesComponent,
    UsuarioComponent,
    UsuarioMantenimientoComponent,
    TableComponent,
    CompraComponent,
    ProveedorComponent,
    ProductoComponent,
    ProveedorMantenimientoComponent,
    CompraMantenimientoComponent,
    ProductoMantenimientoComponent,
    VentaComponent,
    VentaMantenimientoComponent,
    ClienteComponent,
    MedioPagoComponent,
    MedioPagoMantenimientoComponent,
    ClienteMantenimientoComponent,
    ReporteComprasMesComponent,
    ReporteComprasConsolidadoComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    MatDialogModule,
    TableModule,
    MatCheckboxModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class PagesModule { }
