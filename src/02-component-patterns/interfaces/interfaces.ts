import { CSSProperties, ReactElement } from 'react';

export interface Product {
    id: string;
    title: string;
    img?: string;
  }
  export interface PropsTitle {
    title?: string;
    className?: string;
  }
  export interface PropsImg {
    img?: string;
    className?: string;
    activeClass?:string;
  }
  export interface ProductContextProps {
    increaseBy: (value: number) => void;
    counter: number;
    product: Product;
    maxCount?:number;
  }
  export interface PropsButtons {
    className?: string;
    style?: CSSProperties
  }
  export interface ProductInCart extends Product {
    count: number;
  }

  export interface OnChangeArgs {
    product:Product; 
    count:number;
  }

  export interface useProductArgs{
    product:Product; 
    onChange?: (args:OnChangeArgs) => void;
    value?:number;
    initialValues?:InitialValues;
  }


  export interface InitialValues {
    count?:number;
    maxCount?:number;
  }
 
  export interface ProductCardProps {
   // children?: ReactElement | ReactElement[];
    children: (args:ProductCardHandler)=> JSX.Element;
    product: Product;
    className?:string
    style?: CSSProperties,
    onChange?: (args:OnChangeArgs) => void
    value?:number;
    initialValues?:InitialValues
  }
export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps ):JSX.Element,
    Title: (PropsTitle: PropsTitle) => JSX.Element,
    Image: (PropsImg: PropsImg) => JSX.Element,
    Buttons: (PropsButtons:PropsButtons) => JSX.Element
}

export interface ProductCardHandler {
  count: number;
  isMaxCountReached:boolean;
  maxCount?:number;
  product: Product;
  increaseBy: (value: number) => void;
  reset: () => void;
}