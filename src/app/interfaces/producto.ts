export interface Producto {
    id: number;
    codigo: string;
    nombre: string;
    unidadMedida: string;
    precio: number;
    stock: number;
    estado: string;
    usuarioRegistra: string;
    fechaRegistra: Date;
}
