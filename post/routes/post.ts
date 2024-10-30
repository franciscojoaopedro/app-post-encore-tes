import { api, } from "encore.dev/api";
import { OData } from "../interfaces/post.interface";
import { criarPost } from "../controllers/criarPost";

export const create = api(
  {
    method: "POST",
    path: "/post",
    auth: false,
    expose: false,
  },

  async ({
    content,
    title,
  }: {
    title: string;
    content: string;
  }): Promise<OData> =>
    criarPost({
      author: 1,
      content: content,
      title: title,
    })
    
);


