import { post } from "~encore/clients"
import { serviceCriarPost } from "../services/criarPost.service"
import { OData } from "../interfaces/post.interface"
import { APIError } from "encore.dev/api"



interface IData{
    title:string,
    content:string,
    author:number
}




export const criarPost=async ({author,content,title}:IData):Promise<OData> =>{
  
    const data = serviceCriarPost.criarPost({
        author,
        content,
        title
    })

    return data
   
}