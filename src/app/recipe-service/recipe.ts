export interface Review {
    rate:number;
    name:string;
    email?:string;
    submitted:any;
    text:string;
}

export class ReviewImpl implements Review {

    constructor(
                public name: string,
                public rate: number,
                public text: string,
                public submitted: any,
                public email?: string) {
    }
}

export interface Recipe {
    ingredients:string[];
    url:string;
    image:string;
    datePublished:any;
    source:string;
    prepTime:string;
    description:string | null;
    id:string;
    title:string;
    difficulty:number;
    reviews:Review[];
    totalTime?:string;
    recipeYield:string;
    cookTime:string;
}


