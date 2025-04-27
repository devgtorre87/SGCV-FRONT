import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TABLE_ACTION } from '../../../../modules/table/enums/table-action.enum';
import { TableColumn } from '../../../../modules/table/models/table-column.model';
import { TableConfig } from '../../../../modules/table/models/table-config.model';
import { ComprobanteDetalle } from '../../../../interfaces/comprobante';
import { TableAction } from '../../../../modules/table/models/table-action.model';

@Component({
  selector: 'app-compra-mantenimiento',
  templateUrl: './compra-mantenimiento.component.html',
  styleUrl: './compra-mantenimiento.component.css'
})
export class CompraMantenimientoComponent implements OnInit {
  titleModal: string = 'Registrar Comprobante';

  tableColumns: TableColumn[] = [];
  tableConfig: TableConfig = {
    //isSelectable: true,
    isPaginable: false,
    showAction: true,
    showFilter: false
  };

  productosComprobante: ComprobanteDetalle[] = [];

  constructor(
    //private builder: FormBuilder,
    public dialogRef: MatDialogRef<CompraMantenimientoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log("modal:", this.data);
  }

  ngOnInit(): void {
    //this.buildForm();
    if (this.data.action === TABLE_ACTION.EDIT) {
      //this.patchFormValues(this.data.item);
      this.titleModal = 'Editar Comprobante';
    }

    this.productosComprobante= this.obtenerDatos();

    this.setTableColumns();
  }

  onTableAction(tableAction: TableAction) {
    console.log(tableAction);

    switch (tableAction.action) {
      case TABLE_ACTION.EDIT:
        //this.onEdit(tableAction.row);
        break;
      case TABLE_ACTION.DELETE:
        //this.onDelete();
        break;
      default: break;
    }
  }

  setTableColumns() {
    this.tableColumns = [
      { label: 'Producto', def: 'producto', dataKey: 'producto' },
      { label: 'Cantidad', def: 'cantidad', dataKey: 'cantidad' },
      { label: 'Unidad Medida', def: 'unidadMedida', dataKey: 'unidadMedida' },
      { label: 'Precio Unitario', def: 'precioUnitario', dataKey: 'precioUnitario' },
      { label: 'Sub Total', def: 'montoSubTotal', dataKey: 'montoSubTotal' },
      { label: 'IGV', def: 'mongtoIgv', dataKey: 'mongtoIgv' },
      { label: 'Total', def: 'montoTotal', dataKey: 'montoTotal' }      
    ]
  }

   private obtenerDatos(): ComprobanteDetalle[] {
      let datos: ComprobanteDetalle[] = [
        {
          producto: 'ENFAGROW',
          cantidad: 10,
          unidadMedida: 'CAJA',
          precioUnitario: 100,
          montoSubTotal: 1000.00,
          montoIgv: 180,
          montoTotal: 1180.00  
        }
      ];
      return datos;
    }

}
