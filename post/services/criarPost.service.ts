import prisma from "../../database/prisma";
import { IData } from "../interfaces/post.interface";
import usePost from "../shared/helpers/usePost";



const {criarPostUseCase}=usePost(prisma)

export class ServiceCriarPost{
    async criarPost(data:IData){
         const post= await criarPostUseCase.execute(data)
         return post
    }
}


export const  serviceCriarPost=new ServiceCriarPost()