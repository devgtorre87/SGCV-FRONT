import { Component, OnInit } from '@angular/core';
import { TableColumn } from '../../modules/table/models/table-column.model';
import { TableConfig } from '../../modules/table/models/table-config.model';
import { Proveedor } from '../../interfaces/proveedor';
import { MatDialog } from '@angular/material/dialog';
import { TABLE_ACTION } from '../../modules/table/enums/table-action.enum';
import { ProveedorMantenimientoComponent } from './modal/proveedor-mantenimiento/proveedor-mantenimiento.component';
import { TableAction } from '../../modules/table/models/table-action.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrl: './proveedor.component.css'
})
export class ProveedorComponent implements OnInit {
  tableColumns: TableColumn[] = [];
  tableConfig: TableConfig = {
    //isSelectable: true,
    isPaginable: true,
    showAction: true,
    showFilter: true
  };

  proveedores: Proveedor[] = [];

  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.proveedores = this.obtenerDatos();
    this.setTableColumns();
  }

  openDialog() {
    const dialogRef = this.dialog.open(ProveedorMantenimientoComponent, {
      width: '50vw',
      //height: '85vh',
      data: { action: TABLE_ACTION.NEW, item: null },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  private obtenerDatos(): Proveedor[] {
    let datos: Proveedor[] = [
      {
        id: 1,
        ruc: '20123456789',
        razonSocial: 'FARMACIA UNIVERSAL S.A.C.',
        direccion: 'AV. EMANCIPACION 123',
        telefono: '01-3157894',
        correo: 'compras@farmacia.universal.com.pe',
        estado: 'ACTIVO',
        usuarioRegistra: 'admin',
        fechaRegistra: new Date(2024, 12, 1, 9, 32, 1),
      },
      {
        id: 2,
        ruc: '20548975896',
        razonSocial: 'PROVEEDORES DEL PERU',
        direccion: 'AV. PERU 123',
        telefono: '01-1524789',
        correo: 'atencion@proveedoresperu.com.pe',
        estado: 'ACTIVO',
        usuarioRegistra: 'admin',
        fechaRegistra: new Date(2024, 12, 1, 9, 32, 1),
      },
    ];
    return datos;
  }

  setTableColumns() {
    this.tableColumns = [
      { label: '#', def: 'id', dataKey: 'id' },
      { label: 'RUC', def: 'ruc', dataKey: 'ruc' },
      { label: 'Razon Social', def: 'razonSocial', dataKey: 'razonSocial' },
      { label: 'Direccion', def: 'direccion', dataKey: 'direccion' },
      { label: 'Telefono', def: 'telefono', dataKey: 'telefono' },
      { label: 'Correo', def: 'correo', dataKey: 'correo' },
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

  onEdit(data: Proveedor) {
    const dialogRef = this.dialog.open(ProveedorMantenimientoComponent, {
      width: '50vw',
      //height: '85vh',
      data: { action: TABLE_ACTION.EDIT, item: data },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onDelete() {
    Swal.fire({
      title: "Eliminar proveedor",
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
          text: "El proveedor ha sido eliminado satisfactoriamente.",
          icon: "success"
        });
      }
    });
  }

}
