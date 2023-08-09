export interface Product {
  Id_producto: number;
  nombre: string;
  precio: number;
  imagen: string;
  filtro: string;
  cantidad: number;
  detalle: {
    color: string,
    drand: string,
    warranty: string
  };
  descripcion: string
}
