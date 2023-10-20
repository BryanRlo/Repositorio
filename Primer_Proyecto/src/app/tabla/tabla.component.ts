import { Component } from '@angular/core';



export interface PeriodicElement {
  curp: string;
  nombre: string;
  matricula: number;
  telefono: number;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {matricula: 12763, curp: 'ROMB041124HNLSDRA9', nombre: 'Bryan Rolando de la Rosa Medrano', telefono: 8211028403},
  {matricula: 12754, curp: 'BEGF040906HTSRZLA1', nombre: 'Felipe de Jesús Bernal Gazca', telefono: 8341303508},
  {matricula: 12781, curp: 'SAGB990213HNLRNR06', nombre: 'Brandon Arturo Saravia Gonzales', telefono: 8211110434},
  {matricula: 12780, curp: 'SAVY040926MNLNZRA0', nombre: 'Yaretzi Yamileth Sandoval Vázquez', telefono:  5628414013},
  {matricula: 12772, curp: 'LUZA010301MNLCXLA2', nombre: 'Alejandra Jacqueline Lucio Zúñiga', telefono: 8212116688},
  {matricula: 12753, curp: 'AAMC041101HNLLNRA0', nombre: 'Carlos Alberto Alvarez Montes', telefono: 8443107971},
  {matricula: 12752, curp: 'AAMK030619MNLLRRB6', nombre: 'Karen Sofia Alvarez Martinez', telefono: 8211066839},
  {matricula: 12761, curp: 'COLC010315HCHRPRA2', nombre: 'Carlos Manuel Cortes Lopez', telefono: 6761141373},
  {matricula: 12755, curp: 'BORG040523HNLRMSA7', nombre: 'Gustavo Angel Borrego Ramírez', telefono: 8211202886},
  {matricula: 12782, curp: 'SIGR040605HNLLRYA', nombre: 'José Reynaldo Sillas Guerrero', telefono: 8261542697},
  {matricula: 12754, curp: 'BEGF040906HTSRZLA1', nombre: 'Felipe de Jesús Bernal Gazca', telefono: 8341303508},
  {matricula: 12765, curp: 'FUIM050817HNLNRNA0', nombre: 'Jose Manuel de la Fuente Iracheta', telefono: 8135585770},
  {matricula: 12779, curp: 'RURJ041030HNLBYRA0', nombre: 'Jorge Alberto Rubio Reyna', telefono: 5631723441},
  {matricula: 12762, curp: ' COPJ040126HVZRRNA4', nombre: 'Jonathan Cortes Pérez', telefono: 8287686734},
 
];


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
  
})

export class TablaComponent {
  displayedColumns: string[] = ['matricula', 'curp', 'nombre', 'telefono'];
  dataSource = ELEMENT_DATA;
}
