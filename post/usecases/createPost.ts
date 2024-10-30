import { IData, IPostGateway, OData } from "../interfaces/post.interface"


export default class CriarPostUseCase{
    private constructor(private readonly  IGateway:IPostGateway){}

    public static criar(IGateway:IPostGateway){
        return new CriarPostUseCase(IGateway)
    }

    public static with(IGateway:IPostGateway){
        return CriarPostUseCase.criar(IGateway)
    }

    public  async execute(data:IData):Promise<OData>{

        const resultado= await this.IGateway.criarPost(data)

        return resultado

    }


}