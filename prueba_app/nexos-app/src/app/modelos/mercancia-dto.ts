export class MercanciaDto {
    id: number;
    nombreMercancia:string;
    cantidad:number;
    fechaRegistro: Date;
    usuarioRegistro: number;
    fechaModificacion: Date;
    usuarioModificacion: number;
}

export class MercanciaRequestDeleteDto{
    mercancia: MercanciaDto;
    idUsuario: number;
}
