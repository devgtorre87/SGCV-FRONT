import { Component, OnInit } from '@angular/core';
import { TableColumn } from '../../../modules/table/models/table-column.model';
import { TableConfig } from '../../../modules/table/models/table-config.model';
import { ReporteComprasPorMes } from '../../../interfaces/reporte';


@Component({
  selector: 'app-reporte-compras-mes',
  templateUrl: './reporte-compras-mes.component.html',
  styleUrl: './reporte-compras-mes.component.css'
})
export class ReporteComprasMesComponent implements OnInit {
  tableColumns: TableColumn[] = [];
  tableConfig: TableConfig = {
    //isSelectable: true,
    isPaginable: true,
    showAction: false,
    showFilter: false
  };

  dataReporte: ReporteComprasPorMes[] = [];

  constructor() {

  }

  ngOnInit(): void {
    this.dataReporte = this.obtenerDatos();
    this.setTableColumns();
  }

  private obtenerDatos(): ReporteComprasPorMes[] {
    const data: ReporteComprasPorMes[] = [
      {
        nro: 1,
        tipoComprobante: 'FACTURA',
        fechaComprobante: new Date(2024, 11, 1),
        nroSerie: 'F001',
        nroComprobante: '00000123',
        rucProveedor: '20510011123',
        nombreProveedor: 'Proveedor A S.A.',
        montoSubTotal: 500.00,
        montoIgv: 90.00,
        montoTotal: 590.00
      },
      {
        nro: 2,
        tipoComprobante: 'BOLETA',
        fechaComprobante: new Date(2024, 11, 1),
        nroSerie: 'B002',
        nroComprobante: '00000234',
        rucProveedor: '20620022234',
        nombreProveedor: 'Proveedor B Ltda.',
        montoSubTotal: 350.00,
        montoIgv: 63.00,
        montoTotal: 413.00
      },
      {
        nro: 3,
        tipoComprobante: 'FACTURA',
        fechaComprobante: new Date(2024, 11, 2),
        nroSerie: 'F001',
        nroComprobante: '00000345',
        rucProveedor: '20730033345',
        nombreProveedor: 'Proveedor C S.A.',
        montoSubTotal: 800.00,
        montoIgv: 144.00,
        montoTotal: 944.00
      },
      {
        nro: 4,
        tipoComprobante: 'FACTURA',
        fechaComprobante: new Date(2024, 11, 5),
        nroSerie: 'F001',
        nroComprobante: '00000456',
        rucProveedor: '20840044456',
        nombreProveedor: 'Proveedor D SAC',
        montoSubTotal: 450.00,
        montoIgv: 81.00,
        montoTotal: 531.00
      },
      {
        nro: 5,
        tipoComprobante: 'FACTURA',
        fechaComprobante: new Date(2024, 11, 6),
        nroSerie: 'F001',
        nroComprobante: '00000567',
        rucProveedor: '20950055567',
        nombreProveedor: 'Proveedor E SRL',
        montoSubTotal: 650.00,
        montoIgv: 117.00,
        montoTotal: 767.00
      }
    ];

    return data;
  }

  setTableColumns() {
    this.tableColumns = [
      { label: '#', def: 'nro', dataKey: 'nro' },
      { label: 'Tipo Comprobante', def: 'tipoComprobante', dataKey: 'tipoComprobante' },
      { label: 'Fecha Comprobante', def: 'fechaComprobante', dataKey: 'fechaComprobante', dataType: 'date', format: 'dd/MM/yyyy' },
      { label: 'Nro. Serie', def: 'nroSerie', dataKey: 'nroSerie' },
      { label: 'Nro. Comprobante', def: 'nroComprobante', dataKey: 'nroComprobante' },
      { label: 'RUC', def: 'rucProveedor', dataKey: 'rucProveedor' },
      { label: 'Proveedor', def: 'nombreProveedor', dataKey: 'nombreProveedor' },
      { label: 'Sub Total', def: 'montoSubTotal', dataKey: 'montoSubTotal' },
      { label: 'IGV', def: 'montoIgv', dataKey: 'montoIgv' },
      { label: 'Total', def: 'montoTotal', dataKey: 'montoTotal' },
    ]
  }
}

