export interface Comprobante {
    nro: number;
    tipoComprobante: string;
    nroSerie: string;
    nroComprobante: string;
    fechaEmision: Date;
    idProveedor: number;
    rucProveedor: string;
    nombreProveedor: string;
    montoSubTotal: number;
    mongtoIgv: number;
    montoTotal: number;
    estado: string;
    usuarioRegistra: string;
}

export interface ComprobanteDetalle {
    producto: string;
    cantidad: number;
    unidadMedida: string;
    precioUnitario: number;
    montoSubTotal: number;
    montoIgv: number;
    montoTotal: number;
}