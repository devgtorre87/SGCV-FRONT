import { Component, OnInit } from '@angular/core';
import { TableColumn } from '../../modules/table/models/table-column.model';
import { TableConfig } from '../../modules/table/models/table-config.model';
import { Cliente } from '../../interfaces/cliente';
import { MatDialog } from '@angular/material/dialog';
import { ClienteMantenimientoComponent } from './modal/cliente-mantenimiento/cliente-mantenimiento.component';
import { TABLE_ACTION } from '../../modules/table/enums/table-action.enum';
import { TableAction } from '../../modules/table/models/table-action.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent implements OnInit {
  tableColumns: TableColumn[] = [];
  tableConfig: TableConfig = {
    //isSelectable: true,
    isPaginable: true,
    showAction: true,
    showFilter: true
  };

  clientes: Cliente[] = [];

  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.clientes = this.obtenerDatos();
    this.setTableColumns();
  }

  openDialog() {
    const dialogRef = this.dialog.open(ClienteMantenimientoComponent, {
      width: '50vw',
      //height: '85vh',
      data: { action: TABLE_ACTION.NEW, item: null },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  private obtenerDatos(): Cliente[] {
    let datos: Cliente[] = [
      {
        id: 1,
        ruc: '10009205894',
        nombre: 'MANUEL PRADO MENDOZA',
        direccion: 'AV. EMANCIPACION 123',
        telefono: '998548956',
        correo: 'mprado@gmail.com',
        estado: 'ACTIVO',
        usuarioRegistra: 'admin',
        fechaRegistra: new Date(2024, 11, 1, 9, 32, 1),
      },
      {
        id: 2,
        ruc: '10123456789',
        nombre: 'JUAN PEREZ HURTADO',
        direccion: 'AV. PERU 123',
        telefono: '982045896',
        correo: 'jperez81@outlook.com',
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
      { label: 'RUC/DNI', def: 'ruc', dataKey: 'ruc' },
      { label: 'Nombre', def: 'nombre', dataKey: 'nombre' },
      { label: 'Direccion', def: 'direccion', dataKey: 'direccion' },
      { label: 'Celular', def: 'telefono', dataKey: 'telefono' },
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

  onEdit(data: Cliente) {
    const dialogRef = this.dialog.open(ClienteMantenimientoComponent, {
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
      title: "Eliminar cliente",
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
          text: "El cliente ha sido eliminado satisfactoriamente.",
          icon: "success"
        });
      }
    });
  }

}

