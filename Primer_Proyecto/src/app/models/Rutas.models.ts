export interface rutas
{
    Id: number;
    Nombre: string; 
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
        data: rutas[];
    };
}