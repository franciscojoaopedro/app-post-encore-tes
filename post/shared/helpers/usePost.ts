import { PrismaClient } from "@prisma/client";
import PostRespositoryPrisma from "../../repository/postRepositoryPrisma";
import CriarPostUseCase from "../../usecases/createPost";



export default function usePost(prisma:PrismaClient){
    const postRespositoryPrisma=PostRespositoryPrisma.with(prisma)
    const criarPostUseCase=CriarPostUseCase.with(postRespositoryPrisma)




    return {
        criarPostUseCase

    }
}