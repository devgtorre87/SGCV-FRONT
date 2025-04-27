export interface ReporteComprasPorMes {
    nro: number;
    tipoComprobante: string;
    fechaComprobante: Date,
    nroSerie: string;
    nroComprobante: string;
    rucProveedor: string;
    nombreProveedor: string;
    montoSubTotal: number;
    montoIgv: number;
    montoTotal: number;
}

export interface ReporteComprasConsolidado {
    nro: number;
    periodo: string;
    tipoComprobante: string;
    totalComprobantes: number;
    montoSubTotal: number;
    montoIgv: number;
    montoTotal: number;
}
