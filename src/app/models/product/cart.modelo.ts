import { BaseModelProduct } from "./base.modelo";

export interface ModeloCart extends  BaseModelProduct{
  id?:number | string,
  idusuario:number,
}

export interface getOrdersByUser {
  id?: number,
  imagen: string,
  name: string,
  price: number,
  quantity: number,
  idusuario: number | undefined,
  idproducto?: number
}
