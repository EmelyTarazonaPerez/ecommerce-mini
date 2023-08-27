import { Observable } from "rxjs";
import { Product } from "../product/products.model";
import { ModeloCart } from "../product/cart.modelo";

export interface BaseModelClassApi {
  get(): Observable<Product[]> | Observable<ModeloCart[]>
}
