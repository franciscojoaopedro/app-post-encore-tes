

export interface IData{
    title:string,
    content:string,
    author:number
}

export interface OData{
    id: number;
    content: string | null;
    title: string;
    published: boolean;
    authorId: number;
   
}


export interface IPostGateway{
    criarPost(post:IData):Promise<OData>
}