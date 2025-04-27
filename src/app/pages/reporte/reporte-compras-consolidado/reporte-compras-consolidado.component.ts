import { Component, OnInit } from '@angular/core';
import { ReporteComprasConsolidado, ReporteComprasPorMes } from '../../../interfaces/reporte';
import { TableColumn } from '../../../modules/table/models/table-column.model';
import { TableConfig } from '../../../modules/table/models/table-config.model';

@Component({
  selector: 'app-reporte-compras-consolidado',
  templateUrl: './reporte-compras-consolidado.component.html',
  styleUrl: './reporte-compras-consolidado.component.css'
})
export class ReporteComprasConsolidadoComponent implements OnInit {
  tableColumns: TableColumn[] = [];
  tableConfig: TableConfig = {
    //isSelectable: true,
    isPaginable: true,
    showAction: false,
    showFilter: false
  };

  dataReporte: ReporteComprasConsolidado[] = [];

  constructor() {

  }

  ngOnInit(): void {
    this.dataReporte = this.obtenerDatos();
    this.setTableColumns();
  }

  private obtenerDatos(): ReporteComprasConsolidado[] {
    const data: ReporteComprasConsolidado[] = [
      // Enero
      {
        nro: 1,
        periodo: 'Enero 2024',
        tipoComprobante: 'Factura',
        totalComprobantes: 8,
        montoSubTotal: 4000.00,
        montoIgv: 720.00,
        montoTotal: 4720.00
      },
      {
        nro: 2,
        periodo: 'Enero 2024',
        tipoComprobante: 'Boleta',
        totalComprobantes: 5,
        montoSubTotal: 1500.00,
        montoIgv: 270.00,
        montoTotal: 1770.00
      },

      // Febrero
      {
        nro: 3,
        periodo: 'Febrero 2024',
        tipoComprobante: 'Factura',
        totalComprobantes: 10,
        montoSubTotal: 5000.00,
        montoIgv: 900.00,
        montoTotal: 5900.00
      },
      {
        nro: 4,
        periodo: 'Febrero 2024',
        tipoComprobante: 'Boleta',
        totalComprobantes: 7,
        montoSubTotal: 2100.00,
        montoIgv: 378.00,
        montoTotal: 2478.00
      },

      // Marzo
      {
        nro: 5,
        periodo: 'Marzo 2024',
        tipoComprobante: 'Factura',
        totalComprobantes: 12,
        montoSubTotal: 6000.00,
        montoIgv: 1080.00,
        montoTotal: 7080.00
      },
      {
        nro: 6,
        periodo: 'Marzo 2024',
        tipoComprobante: 'Boleta',
        totalComprobantes: 6,
        montoSubTotal: 1800.00,
        montoIgv: 324.00,
        montoTotal: 2124.00
      },

      // Abril
      {
        nro: 7,
        periodo: 'Abril 2024',
        tipoComprobante: 'Factura',
        totalComprobantes: 9,
        montoSubTotal: 4500.00,
        montoIgv: 810.00,
        montoTotal: 5310.00
      },
      {
        nro: 8,
        periodo: 'Abril 2024',
        tipoComprobante: 'Boleta',
        totalComprobantes: 5,
        montoSubTotal: 1500.00,
        montoIgv: 270.00,
        montoTotal: 1770.00
      },

      // Mayo
      {
        nro: 9,
        periodo: 'Mayo 2024',
        tipoComprobante: 'Factura',
        totalComprobantes: 11,
        montoSubTotal: 5500.00,
        montoIgv: 990.00,
        montoTotal: 6490.00
      },
      {
        nro: 10,
        periodo: 'Mayo 2024',
        tipoComprobante: 'Boleta',
        totalComprobantes: 6,
        montoSubTotal: 1800.00,
        montoIgv: 324.00,
        montoTotal: 2124.00
      },

      // Junio
      {
        nro: 11,
        periodo: 'Junio 2024',
        tipoComprobante: 'Factura',
        totalComprobantes: 13,
        montoSubTotal: 6500.00,
        montoIgv: 1170.00,
        montoTotal: 7670.00
      },
      {
        nro: 12,
        periodo: 'Junio 2024',
        tipoComprobante: 'Boleta',
        totalComprobantes: 8,
        montoSubTotal: 2400.00,
        montoIgv: 432.00,
        montoTotal: 2832.00
      },

      // Julio
      {
        nro: 13,
        periodo: 'Julio 2024',
        tipoComprobante: 'Factura',
        totalComprobantes: 14,
        montoSubTotal: 7000.00,
        montoIgv: 1260.00,
        montoTotal: 8260.00
      },
      {
        nro: 14,
        periodo: 'Julio 2024',
        tipoComprobante: 'Boleta',
        totalComprobantes: 9,
        montoSubTotal: 2700.00,
        montoIgv: 486.00,
        montoTotal: 3186.00
      },

      // Agosto
      {
        nro: 15,
        periodo: 'Agosto 2024',
        tipoComprobante: 'Factura',
        totalComprobantes: 10,
        montoSubTotal: 5000.00,
        montoIgv: 900.00,
        montoTotal: 5900.00
      },
      {
        nro: 16,
        periodo: 'Agosto 2024',
        tipoComprobante: 'Boleta',
        totalComprobantes: 7,
        montoSubTotal: 2100.00,
        montoIgv: 378.00,
        montoTotal: 2478.00
      },

      // Septiembre
      {
        nro: 17,
        periodo: 'Septiembre 2024',
        tipoComprobante: 'Factura',
        totalComprobantes: 11,
        montoSubTotal: 5500.00,
        montoIgv: 990.00,
        montoTotal: 6490.00
      },
      {
        nro: 18,
        periodo: 'Septiembre 2024',
        tipoComprobante: 'Boleta',
        totalComprobantes: 6,
        montoSubTotal: 1800.00,
        montoIgv: 324.00,
        montoTotal: 2124.00
      },

      // Octubre
      {
        nro: 19,
        periodo: 'Octubre 2024',
        tipoComprobante: 'Factura',
        totalComprobantes: 12,
        montoSubTotal: 6000.00,
        montoIgv: 1080.00,
        montoTotal: 7080.00
      },
      {
        nro: 20,
        periodo: 'Octubre 2024',
        tipoComprobante: 'Boleta',
        totalComprobantes: 8,
        montoSubTotal: 2400.00,
        montoIgv: 432.00,
        montoTotal: 2832.00
      },

      // Noviembre
      {
        nro: 21,
        periodo: 'Noviembre 2024',
        tipoComprobante: 'Factura',
        totalComprobantes: 15,
        montoSubTotal: 7500.00,
        montoIgv: 1350.00,
        montoTotal: 8850.00
      },
      {
        nro: 22,
        periodo: 'Noviembre 2024',
        tipoComprobante: 'Boleta',
        totalComprobantes: 10,
        montoSubTotal: 3000.00,
        montoIgv: 540.00,
        montoTotal: 3540.00
      },

      // Diciembre
      {
        nro: 23,
        periodo: 'Diciembre 2024',
        tipoComprobante: 'Factura',
        totalComprobantes: 13,
        montoSubTotal: 6500.00,
        montoIgv: 1170.00,
        montoTotal: 7670.00
      },
      {
        nro: 24,
        periodo: 'Diciembre 2024',
        tipoComprobante: 'Boleta',
        totalComprobantes: 9,
        montoSubTotal: 2700.00,
        montoIgv: 486.00,
        montoTotal: 3186.00
      }
    ];

    return data;
  }

  setTableColumns() {
    this.tableColumns = [
      { label: '#', def: 'nro', dataKey: 'nro' },
      { label: 'Periodo', def: 'periodo', dataKey: 'periodo' },      
      { label: 'Tipo Comprobante', def: 'tipoComprobante', dataKey: 'tipoComprobante' },
      { label: 'Total Comprobantes', def: 'totalComprobantes', dataKey: 'totalComprobantes' },
      { label: 'Sub Total', def: 'montoSubTotal', dataKey: 'montoSubTotal' },
      { label: 'IGV', def: 'montoIgv', dataKey: 'montoIgv' },
      { label: 'Total', def: 'montoTotal', dataKey: 'montoTotal' },
    ]
  }
}
