import { StaticImageData } from "next/legacy/image";

export enum CourseTagBg{
    analytics ='border border-[#CC54FF33] text-[#CC54FF33]',
    engineering ='border border-[#40BFB1] text-[#40BFB1]',
    science = 'border border-[#6997FF] text-[#6997FF]'
}

export interface IOfferCardPropType{
    img:StaticImageData,
    title:string,
    info:string,
    course:number
    courseBgFor:CourseTagBg
}