export interface CategoriaResponse {
    success: boolean;
    code: string;
    message: string | null;
    validations: any[];
    data: Categoria[];
}
  
interface Categoria {
    idCategoria: number;
    idCartaVirtual: number;
    nombreCategoria: string;
    descCategoria: string;
}