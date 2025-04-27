import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  nombreUsuario = "Guido Torre" //localStorage.getItem('nombre');
  public menuItems: any[] = [
    {
      titulo: 'Seguridad',
      icono: 'nav-icon fas fa-tachometer-alt',
      submenu: [
        { titulo: 'Usuario', url: 'usuario', icon: 'fa-solid fa fa-users' },
      ]
    },
    {
      titulo: 'Compras',
      icono: 'nav-icon fas fa-tachometer-alt',
      submenu: [
        { titulo: 'Comprobante', url: 'compra', icon: 'fa fa-shopping-cart' },
        { titulo: 'Proveedor', url: 'proveedor', icon: 'fa fa-address-book' },
        { titulo: 'Producto', url: 'producto', icon: 'fa fa-barcode' },
      ]
    },
    {
      titulo: 'Ventas',
      icono: 'nav-icon fas fa-tachometer-alt',
      submenu: [
        { titulo: 'Comprobante', url: 'venta', icon: 'fa fa-archive' },
        { titulo: 'Cliente', url: 'cliente', icon: 'fa fa-address-card' },
        { titulo: 'Medio de Pago', url: 'medio-pago', icon: 'fa fa-credit-card' },
      ]
    },
    {
      titulo: 'Reportes',
      icono: 'nav-icon fas fa fa-print',
      submenu: [
        { titulo: 'Compras realizadas por mes', url: 'reporte-compra-mes', icon: 'fa fa-area-chart' },
        { titulo: 'Consolidado de Compras por rango', url: 'reporte-compra-consolidado', icon: 'fa fa-bar-chart' },
      ]
    }
    /*
    {
      titulo: 'Dashboard',
      icono: 'nav-icon fas fa-tachometer-alt',
      submenu: [
        { titulo: 'DataTable', url: 'heroes', icon: 'far fa-circle' },
        { titulo: 'Toaster', url: 'toaster', icon: 'far fa-circle' },
        {
          titulo: 'Advanced',
          icon: 'far fa-circle',
          submenu: [ // Submenú dentro de otro submenú
            { titulo: 'Settings', url: 'advanced/settings', icon: 'far fa-dot-circle' },
            { titulo: 'Logs', url: 'advanced/logs', icon: 'far fa-dot-circle' },
          ]
        },
      ]
    },
    {
      titulo: 'Settings', // Menú adicional
      icono: 'nav-icon fas fa-cogs',
      submenu: [
        { titulo: 'Profile', url: 'profile', icon: 'far fa-user' },
        { titulo: 'Privacy', url: 'privacy', icon: 'fa fa-lock' },
      ]
    }*/
  ];


  logout() {
    location.href = 'login';
  }

}
