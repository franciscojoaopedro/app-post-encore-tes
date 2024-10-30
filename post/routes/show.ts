import { api, APIError, ErrCode } from "encore.dev/api";
import prisma from "../../database/prisma";

interface IPost {
  id: number;
  title: string;
  content: string | null;
  published: boolean;
  authorId: number;
}

interface Response {
  posts: IPost[];
}

export const show = api(
  {
    method: "GET",
    path: "/showPost",
    auth: false,
    expose: true,
  },
  async (): Promise<Response> => {
    try {
      const posts = await prisma.post.findMany({});
      return {
        posts: posts,
      };
    } catch (error) {
      const errorMessage = error instanceof Error;
      
      throw new APIError(
        ErrCode.Internal,
        "Não foi possível buscar os posts",
        {
          message: errorMessage ? error.message : "Erro desconhecido",
          name: errorMessage ? error.name : "nome do erro desconhecido",
          cause: errorMessage ? error.cause : "causa do erro desconhecido",
          stack: errorMessage ? error.stack : "pila de chamada desconhecida",
        },
        {
          message: errorMessage ? error.message : "Erro desconhecido",
          name: errorMessage ? error.name : "nome do erro desconhecido",
          cause: errorMessage ? error.cause : "causa do erro desconhecido",
          stack: errorMessage ? error.stack : "pila de chamada desconhecida",
        }
      );
    }
  }
);
