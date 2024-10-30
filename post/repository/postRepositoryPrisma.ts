import { PrismaClient } from "@prisma/client";
import { IData, IPostGateway, OData } from "../interfaces/post.interface";






export default class PostRespositoryPrisma  implements IPostGateway {

    private constructor(private readonly prisma:PrismaClient){}

    public  static criar(prisma:PrismaClient){
        return new PostRespositoryPrisma(prisma)
    }

    public static with(prisma: PrismaClient){
        return PostRespositoryPrisma.criar(prisma)
    }

    async criarPost(post: IData): Promise<OData> {
        const data ={
            title: post.title,
            content: post.content,
            author:post.author
        }
        const newPost=await this.prisma.post.create({
            data:{
                title:data.title,
                content:data.content,
                published:true,
                author:{
                    connect:{id:data.author}
                }
            }
        })

        return newPost
    }



}