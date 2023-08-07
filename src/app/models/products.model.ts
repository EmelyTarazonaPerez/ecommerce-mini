export interface Product {
  Id_producto: number;
  nombre: string;
  precio: number;
  imagen: string;
  filtro: string;
  cantidad: number;
  detalle: {
    Color: string,
    Marca: string,
    Garantia: string
  };
  descripcion: string
}
