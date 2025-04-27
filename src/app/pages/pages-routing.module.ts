import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToasterComponent } from './toaster/toaster.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CompraComponent } from './compra/compra.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ProductoComponent } from './producto/producto.component';
import { VentaComponent } from './venta/venta.component';
import { ClienteComponent } from './cliente/cliente.component';
import { MedioPagoComponent } from './medio-pago/medio-pago.component';
import { ReporteComprasMesComponent } from './reporte/reporte-compras-mes/reporte-compras-mes.component';
import { ReporteComprasConsolidadoComponent } from './reporte/reporte-compras-consolidado/reporte-compras-consolidado.component';

const routes: Routes = [
  {
    path: 'dashboard', component: PagesComponent,
    children: [      
      { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },
      { path: 'toaster', component: ToasterComponent, data: { titulo: 'Toaster' } },
      { path: 'usuario', component: UsuarioComponent, data: { titulo: 'Usuario' } },

      { path: 'compra', component: CompraComponent, data: { titulo: 'Compra' } },
      { path: 'proveedor', component: ProveedorComponent, data: { titulo: 'Proveedor' } },
      { path: 'producto', component: ProductoComponent, data: { titulo: 'Producto' } },

      { path: 'venta', component: VentaComponent, data: { titulo: 'Venta' } },
      { path: 'cliente', component: ClienteComponent, data: { titulo: 'Cliente' } },
      { path: 'medio-pago', component: MedioPagoComponent, data: { titulo: 'Medio Pago' } },

      { path: 'reporte-compra-mes', component: ReporteComprasMesComponent, data: { titulo: 'Reporte de Compras por Mes' } },
      { path: 'reporte-compra-consolidado', component: ReporteComprasConsolidadoComponent, data: { titulo: 'Reporte de Consolidado de Compras' } }
    ]
  },
  {
    path: 'compra', component: PagesComponent,
    children: [      
      { path: '', component: CompraComponent, data: { titulo: 'Compra' } },
      { path: 'toaster', component: ToasterComponent, data: { titulo: 'Toaster' } },
      { path: 'usuario', component: UsuarioComponent, data: { titulo: 'Usuario' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
