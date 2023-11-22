export interface clientes
{
    Id: number;
    Nombre: string; 
    Direccion: string; 
    Estatus: string; 
    FechaActualiza: string; 
    UsuarioActualiza: number; 
}

export interface ApiResponse 
{
    statuscode: number; 
    success: boolean;
    fecha: string; 
    message: string; 
    response: {
        data: clientes[];
    };
}