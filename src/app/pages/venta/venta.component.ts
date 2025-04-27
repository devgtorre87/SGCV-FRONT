import { Component, OnInit } from '@angular/core';
import { TableColumn } from '../../modules/table/models/table-column.model';
import { TableConfig } from '../../modules/table/models/table-config.model';
import { Comprobante } from '../../interfaces/comprobante';
import { MatDialog } from '@angular/material/dialog';
import { VentaMantenimientoComponent } from './modal/venta-mantenimiento/venta-mantenimiento.component';
import { TABLE_ACTION } from '../../modules/table/enums/table-action.enum';
import { TableAction } from '../../modules/table/models/table-action.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrl: './venta.component.css'
})
export class VentaComponent implements OnInit {

  tableColumns: TableColumn[] = [];
  tableConfig: TableConfig = {
    //isSelectable: true,
    isPaginable: true,
    showAction: true,
    showFilter: true
  };

  comprobantesVenta: Comprobante[] = [];

  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.comprobantesVenta = this.obtenerDatos();
    this.setTableColumns();
  }

   openDialog() {
      const dialogRef = this.dialog.open(VentaMantenimientoComponent, {
        width: '90vw',
        //height: '85vh',
        data: { action: TABLE_ACTION.NEW, item: null },
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

  private obtenerDatos(): Comprobante[] {
    let datos: Comprobante[] = [
      {
        nro: 1,
        tipoComprobante: 'FACTURA',
        nroSerie: 'F001',
        nroComprobante: '000001',
        fechaEmision: new Date(2024, 11, 1, 9, 32, 1),
        idProveedor: 1,
        rucProveedor: '10009205894',
        nombreProveedor: 'MANUEL PRADO MENDOZA',
        montoSubTotal: 100.00,
        mongtoIgv: 18,
        montoTotal: 118.00,
        estado: 'EMITIDO',
        usuarioRegistra: 'admin'

      },
      {
        nro: 2,
        tipoComprobante: 'BOLETA',
        nroSerie: 'B001',
        nroComprobante: '000001',
        fechaEmision: new Date(2024, 11, 1, 9, 32, 1),
        idProveedor: 1,
        rucProveedor: '10123456789',
        nombreProveedor: 'JUAN PEREZ HURTADO',
        montoSubTotal: 50.00,
        mongtoIgv: 9,
        montoTotal: 59.00,
        estado: 'EMITIDO',
        usuarioRegistra: 'admin'
      },
    ];
    return datos;
  }

  setTableColumns() {
    this.tableColumns = [
      { label: '#', def: 'nro', dataKey: 'nro' },
      { label: 'Tipo Comprobante', def: 'tipoComprobante', dataKey: 'tipoComprobante' },
      { label: 'Serie', def: 'nroSerie', dataKey: 'nroSerie' },
      { label: 'Nro. Comprobante', def: 'nroComprobante', dataKey: 'nroComprobante' },
      { label: 'Fecha de Emision', def: 'fechaEmision', dataKey: 'fechaEmision', dataType: 'date', format: 'dd/MM/yyyy HH:mm:ss' },
      { label: 'RUC Cliente', def: 'rucProveedor', dataKey: 'rucProveedor' },
      { label: 'Nombre Cliente', def: 'nombreProveedor', dataKey: 'nombreProveedor' },
      { label: 'Sub Total', def: 'montoSubTotal', dataKey: 'montoSubTotal' },
      { label: 'IGV', def: 'mongtoIgv', dataKey: 'mongtoIgv' },
      { label: 'Total', def: 'montoTotal', dataKey: 'montoTotal' },
      { label: 'Estado', def: 'estado', dataKey: 'estado' },
      { label: 'Usuario Registra', def: 'usuarioRegistra', dataKey: 'usuarioRegistra' },
      
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

  onEdit(data: Comprobante) {
    const dialogRef = this.dialog.open(VentaMantenimientoComponent, {
      width: '90vw',
      //height: '85vh',
      data: { action: TABLE_ACTION.EDIT, item: data },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onDelete() {
    Swal.fire({
      title: "Eliminar comprobante",
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
          text: "El comprobante ha sido eliminado satisfactoriamente.",
          icon: "success"
        });
      }
    });
  }

}

