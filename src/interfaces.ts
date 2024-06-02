export interface IAppContext {
    products:IProduct[]
  }

  export interface IAppProvider {
    children: React.ReactNode;
  }


  export interface IProduct {
    id:number,
    attributes:IProductAttributes


  }

  export interface IProductAttributes{
    banner: { data: { attributes: IBanner } };
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

  export interface IBanner{

    alternativeText: boolean ;
    caption: boolean ;
    createdAt: string;
    ext: string;
    formats: IBannerFormats;
    hash: string;
    height: number;
    mime: string;
    name: string;
    previewUrl: boolean;
    provider: string;
    provider_metadata: boolean;
    size: number;
    updatedAt: string;
    url: string;
    width: number;
  }

  export interface IFormatDetails {
    url: string;
    width: number;
    height: number;
  }
  export interface IBannerFormats {
    thumbnail: IFormatDetails;
    medium: IFormatDetails;
    small: IFormatDetails;
  }