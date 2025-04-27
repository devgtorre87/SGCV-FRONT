import { Component, OnInit } from '@angular/core';
import { TableColumn } from '../../modules/table/models/table-column.model';
import { Producto } from '../../interfaces/producto';
import { MatDialog } from '@angular/material/dialog';
import { TableConfig } from '../../modules/table/models/table-config.model';
import { ProductoMantenimientoComponent } from './modal/producto-mantenimiento/producto-mantenimiento.component';
import { TABLE_ACTION } from '../../modules/table/enums/table-action.enum';
import { TableAction } from '../../modules/table/models/table-action.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit {
  tableColumns: TableColumn[] = [];
  tableConfig: TableConfig = {
    //isSelectable: true,
    isPaginable: true,
    showAction: true,
    showFilter: true
  };

  productos: Producto[] = [];

  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.productos = this.obtenerDatos();
    this.setTableColumns();
  }

  openDialog() {
    const dialogRef = this.dialog.open(ProductoMantenimientoComponent, {
      width: '30vw',
      //height: '85vh',
      data: { action: TABLE_ACTION.NEW, item: null },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  private obtenerDatos(): Producto[] {
    let datos: Producto[] = [
      {
        id: 1,
        codigo: 'P0001',
        nombre: 'ENFAGROW',
        unidadMedida: 'CAJA',
        precio: 100,
        stock: 20,
        estado: 'ACTIVO',
        usuarioRegistra: 'admin',
        fechaRegistra: new Date(2024, 11, 1, 9, 32, 1),
      },
      {
        id: 2,
        codigo: 'P0002',
        nombre: 'CLONAZEPAN',
        unidadMedida: 'CAJA',
        precio: 50,
        stock: 30,
        estado: 'ACTIVO',
        usuarioRegistra: 'admin',
        fechaRegistra: new Date(2024, 11, 1, 9, 32, 1),
      },
    ];
    return datos;
  }

  setTableColumns() {
    this.tableColumns = [
      { label: '#', def: 'id', dataKey: 'id' },
      { label: 'Codigo', def: 'codigo', dataKey: 'codigo' },
      { label: 'Nombre', def: 'nombre', dataKey: 'nombre' },
      { label: 'Unidad Medida', def: 'unidadMedida', dataKey: 'unidadMedida' },
      { label: 'Precio', def: 'precio', dataKey: 'precio' },
      { label: 'Stock', def: 'stock', dataKey: 'stock' },
      { label: 'Estado', def: 'estado', dataKey: 'estado' },
      { label: 'Usuario Registra', def: 'usuarioRegistra', dataKey: 'usuarioRegistra' },
      { label: 'Fecha de Registro', def: 'fechaRegistra', dataKey: 'fechaRegistra', dataType: 'date', format: 'dd/MM/yyyy HH:mm:ss' },
    ]
  }

  onSelect(data: any) {
    console.log(data);
  }

  onTableAction(tableAction: TableAction) {
    console.log(tableAction);

    switch (tableAction.action) {
      case TABLE_ACTION.EDIT:
        this.onEdit(tableAction.row);
        break;
      case TABLE_ACTION.DELETE:
        this.onDelete();
        break;
      default: break;
    }
  }

  onEdit(data: Producto) {
    const dialogRef = this.dialog.open(ProductoMantenimientoComponent, {
      width: '30vw',
      //height: '85vh',
      data: { action: TABLE_ACTION.EDIT, item: data },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onDelete() {
    Swal.fire({
      title: "Eliminar producto",
      text: "¿Desea eliminar el siguiente registro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminado!",
          text: "El producto ha sido eliminado satisfactoriamente.",
          icon: "success"
        });
      }
    });
  }
}
