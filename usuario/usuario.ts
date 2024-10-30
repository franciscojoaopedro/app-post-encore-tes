import { api, APIError, APIOptions, Header, } from "encore.dev/api";
import prisma from "../database/prisma";

interface IUser {
  id: number;
  email: string;
  name: string | null;
}

interface ListaUser {
  users: IUser[];
}

interface MessageError{
    message: string;
    code:number
}
export const get = api(
  {
    method: "GET",
    path: "/usuarios",
    expose: true,
    auth: false,
  },
  async (): Promise<ListaUser> => {
    const users = await prisma.user.findMany();

 

    
    return { users:users };
  }
);




export const post = api(
  { path: "/usuarios", method: "POST", auth: false ,expose:false},
  async ({name,email}:{
    email: string
    name: string 
  }): Promise<IUser> => {
    const user = await prisma.user.create({
      data: { email: email, name: name },
    });

    const test={email: email, name: name ,id:1}
   
    return user;
  }
);
