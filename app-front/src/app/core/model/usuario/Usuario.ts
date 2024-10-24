import { JwtToken } from "./Jwt";

export interface Usuario {
    idUsuario: number;
    idCartaVirtual: number;
    idRol: number;
    nombres: string;
    apPaterno: string;
    apMaterno: string;
    correo: string;
    jwtToken: JwtToken;
  }