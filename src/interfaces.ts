export interface IAppContext {
    products:IProduct[]
  }

  export interface IAppProvider {
    children: React.ReactNode;
  }


  export interface IProduct {
    category:boolean,
    createdAt:string,
    description:string[]
  instantDelivery:boolean,
  price:number
  publishedAt:string,
  title:string
  updatedAt:string,
  whatsIncluded:boolean

  }