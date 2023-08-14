import { Category } from "./categories.model";
import { BaseModelProduct } from "./base.modelo";

export interface Product extends BaseModelProduct {
  description: string
  category: Category
  detail: {
    color: string,
    drand: string,
    warranty: string
  };
}
