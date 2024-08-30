import { StaticImageData } from 'next/legacy/image';

export interface ITextPropType {
  style?: string;
  children: React.ReactNode;
  as?: 'h2' | 'h1' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  clickFunc?: () => void;
}

export interface ICustomImagePropType {
  src: StaticImageData;
  alt?: string;
  imgStyle?: string;
  style: string;
}

export interface IMaxScreenWrapperPropType {
  children:React.ReactNode;
  style?:string
}

export interface IBreadCombLayoutPropType{
  routes:{
    title:string, 
    linkto ?:string
  }[]
}

export interface IIconInputPropType {
  defaultValue?: string;
  contStyle?: string;
  handleChange?: (e: any) => void;
  icon: React.ReactNode;
  placeHolder: string;
  type: string;
  style?: string;
  category?: 'formInput';
  field?: any;
}

export interface ILogoPropType {
  style?: string;
}
