import { StaticImageData } from "next/legacy/image";

export interface ICourseCardPropType{
    img:StaticImageData,
    title:string,
    info:string,
    rating:number,
    price:string,
    star:string,
    actualPrice:string
}