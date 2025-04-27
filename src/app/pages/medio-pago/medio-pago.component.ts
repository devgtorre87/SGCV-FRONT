import { Component, OnInit } from '@angular/core';
import { MedioPago } from '../../interfaces/medio-pago';
import { MedioPagoMantenimientoComponent } from './modal/medio-pago-mantenimiento/medio-pago-mantenimiento.component';
import { TABLE_ACTION } from '../../modules/table/enums/table-action.enum';
import Swal from 'sweetalert2';
import { TableAction } from '../../modules/table/models/table-action.model';
import { MatDialog } from '@angular/material/dialog';
import { TableColumn } from '../../modules/table/models/table-column.model';
import { TableConfig } from '../../modules/table/models/table-config.model';

@Component({
  selector: 'app-medio-pago',
  templateUrl: './medio-pago.component.html',
  styleUrl: './medio-pago.component.css'
})
export class MedioPagoComponent implements OnInit {

  tableColumns: TableColumn[] = [];
  tableConfig: TableConfig = {
    //isSelectable: true,
    isPaginable: true,
    showAction: true,
    showFilter: true
  };

  mediosPago: MedioPago[] = [];

  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.mediosPago = this.obtenerDatos();
    this.setTableColumns();
  }

  openDialog() {
    const dialogRef = this.dialog.open(MedioPagoMantenimientoComponent, {
      width: '30vw',
      //height: '85vh',
      data: { action: TABLE_ACTION.NEW, item: null },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  private obtenerDatos(): MedioPago[] {
    let datos: MedioPago[] = [
      {
        id: 1,
        nombre: 'EFECTIVO',
        estado: 'ACTIVO',
        usuarioRegistra: 'admin',
        fechaRegistra: new Date(2024, 11, 2, 15, 32, 1),
      },
      {
        id: 2,
        nombre: 'TRANSFERENCIA',
        estado: 'ACTIVO',
        usuarioRegistra: 'admin',
        fechaRegistra: new Date(2024, 11, 2, 15, 32, 1),
      },
    ];
    return datos;
  }

  setTableColumns() {
    this.tableColumns = [
      { label: 'ID', def: 'id', dataKey: 'id' },
      { label: 'Nombre', def: 'nombre', dataKey: 'nombre' },
      { label: 'Estado', def: 'estado', dataKey: 'estado' },
      { label: 'Usuario Registra', def: 'usuarioRegistra', dataKey: 'usuarioRegistra' },
      { label: 'Fecha y Hora del registro', def: 'fechaRegistra', dataKey: 'fechaRegistra', dataType: 'date', format: 'dd/MM/yyyy HH:mm:ss' }
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

  onEdit(data: MedioPago) {
    const dialogRef = this.dialog.open(MedioPagoMantenimientoComponent, {
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
      title: "Eliminar medio de pago",
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
          text: "El medio de pago ha sido eliminado satisfactoriamente.",
          icon: "success"
        });
      }
    });
  }

}

