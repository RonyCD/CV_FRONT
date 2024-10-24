import { Usuario } from "./Usuario";

export interface LoginResponse {
    success: boolean;
    code: string | null;
    message: string;
    validations: any | null;
    data: Usuario | null;
  }

  