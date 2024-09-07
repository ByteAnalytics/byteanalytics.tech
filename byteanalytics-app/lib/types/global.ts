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
  children: React.ReactNode;
  style?: string;
}

export interface IBreadCombLayoutPropType {
  routes: {
    title: string;
    linkto?: string;
  }[];
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

export interface IFormField {
  control: any;
  name: string;
  labelStyle?: string;
  label?: React.ReactNode | string;
  inputCategory: 'input' | 'select' | 'textArea';
  inputStyle?: string;
  inputType?: string;
  placeholder: string;
  readOnly?: boolean;
  required?: boolean;
  selectList?: string[];
}

export interface ICommandItemBox {
  route: string;
  title: string;
  desc: string;
}

export interface IWebsiteQueryProp {
  children: React.ReactNode
}

export type AppContextType = {
  isMounted: boolean;
  setIsMounted: React.Dispatch<React.SetStateAction<boolean>>;
  modalCloseTrigger: React.RefObject<HTMLButtonElement> | null;
};
