import { BaseModelProduct } from "./base.modelo";

export interface ModeloCart extends  BaseModelProduct{
  id?:number | string,
  idusuario:number,
}
