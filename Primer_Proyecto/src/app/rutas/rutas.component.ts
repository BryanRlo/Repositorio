import { Component, OnInit } from '@angular/core';
import { rutas } from '../models/Rutas.models';
import { GetRutasService } from '../get-rutas.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Nombre', 'Estatus', 'FechaActualiza', 'UsuarioActualiza'];
  dataSource: MatTableDataSource<rutas>;

  constructor(private RutasService: GetRutasService) {
    this.dataSource = new MatTableDataSource<rutas>(); // Inicializa dataSource como una instancia de MatTableDataSource

    
  }

  ngOnInit() {
    this.dataSource.filterPredicate = (data: rutas, filter: string) => {
      return data.Nombre.toLowerCase().includes(filter) || 
             data.Id.toString().includes(filter); // Puedes añadir más campos si es necesario
    };
    this.RutasService.GetRutas().subscribe({
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