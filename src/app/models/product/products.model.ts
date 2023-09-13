import { BaseModelProduct } from "./base.modelo";

export interface Category {
  id: number;
  name: string;
}

export interface Product extends BaseModelProduct {
  description: string;
  category: Category;
  catergoria: number;
  detail: {
    color: string,
    drand: string,
    warranty: string
  };
}
