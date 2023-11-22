import { Component, OnInit } from '@angular/core';
import { GetClientesService } from '../get-clientes.service';
import { clientes } from '../models/Clientes.models';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Nombre', 'Direccion', 'Estatus', 'FechaActualiza', 'UsuarioActualiza'];
  dataSource: MatTableDataSource<clientes>;

  constructor(private ClientesService: GetClientesService) {
    this.dataSource = new MatTableDataSource<clientes>(); // Inicializa dataSource como una instancia de MatTableDataSource

    
  }

  ngOnInit() {
    this.dataSource.filterPredicate = (data: clientes, filter: string) => {
      return data.Nombre.toLowerCase().includes(filter) || 
             data.Id.toString().includes(filter); // Puedes añadir más campos si es necesario
    };
    this.ClientesService.GetClientes().subscribe({
      next: (response) => {
        console.log('Respuesta del servidor:', response.response.data); 
        if (response.success) {
          this.dataSource.data = response.response.data; // Asigna los datos al atributo 'data' de dataSource
        } else {
          // Manejar la respuesta en caso de fallo
        }
      },
      error: (error) => {
        // Manejar el error de la solicitud
      }
    });
  }
  // Método para realizar el filtrado
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}