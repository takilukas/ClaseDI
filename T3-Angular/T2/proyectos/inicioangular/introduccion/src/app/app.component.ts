import { Component, OnInit } from "@angular/core";
import { Tecnologia } from "./utils/tecnologia";
import { TecnologiaInt } from "./utils/tecnologia_dos";
import { Asignatura } from "./utils/asignatura";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "introduccion";
  nombre: string = "Borja Martin";
  mostrarTecnologias: boolean = true;
  mostrarCurso: string;
  rutaImagen: string = "../assets/images/java.png";
  objetoJava: Tecnologia = new Tecnologia(
    "Java",
    "Multiplataforma desarrollado por Oracle",
    "../assets/images/java.png"
  );
  objetoPs: Tecnologia = new Tecnologia(
    "Powershell",
    "Desarrollado para la administración de SO",
    "../assets/images/powershell.png"
  );
  objetoHtml: Tecnologia = new Tecnologia(
    "HTML",
    "DEsarrollado para el desarrollo de paginas webs",
    "../assets/images/html.jpeg"
  );
  objetoMysql: Tecnologia = new Tecnologia(
    "Mysql",
    "Desarrollado para base de datos",
    "../assets/images/mysql.jpg"
  );
  objetoPhp: Tecnologia = new Tecnologia(
    "PHP",
    "Desarrollado para webs dinámicas",
    "../assets/images/php.png"
  );
  objetoPy: Tecnologia = new Tecnologia(
    "Python",
    "Desarrollado para backend y ia",
    "../assets/images/python.jpg"
  );
  objetoAn: Tecnologia = new Tecnologia(
    "Angular",
    "Multiplataforma desarrollado por google",
    "../assets/images/angular-icon.svg"
  );
  objetoJs: Tecnologia = new Tecnologia(
    "JavaScript",
    "BackEnd y FrontEnd",
    "../assets/images/js.jpg"
  );
  elementos: Tecnologia[] = [
    this.objetoJava,
    this.objetoPs,
    this.objetoHtml,
    this.objetoMysql,
    this.objetoPhp,
    this.objetoPy,
    this.objetoAn,
    this.objetoJs
  ];
  asignaturasDAM1: Asignatura[] = [
    {
      nombre: "Programación",
      ciclo: "DAM1",
      siglas: "PRO",
      tecnologias: [this.objetoJava],
      conocimientos: ["Programación", "Herencia", 'Polimorfismo']
    }, 
    {
      nombre: "Sistemas",
      ciclo: "DAM1",
      siglas: "SI",
      tecnologias: [this.objetoPs, this.objetoJs],
      conocimientos: ['Sistemas Operativos', 'Windows', 'Linux']
    }, 
    {
      nombre: "Lenguaje de marcas",
      ciclo: "DAM1",
      siglas: "XML",
      tecnologias: [this.objetoJs, this.objetoHtml],
      conocimientos: ['XML', 'Webs', 'Wordpress']
    }
  ];;
  asignaturasDAM2: Asignatura[] = [
    {
      nombre: "Desarrollo de interfaces",
      ciclo: "DAM2",
      siglas: "DI",
      tecnologias: [this.objetoJava, this.objetoAn],
      conocimientos: ["Utilizadad", "Interfaces", "Multiplataforma"]
    }, 
    {
      nombre: "Programación multimedia",
      ciclo: "DAM2",
      siglas: "PMDM",
      tecnologias: [this.objetoJava, this.objetoAn],
      conocimientos: ['Android', 'Moviles', 'XML']
    }, 
    {
      nombre: "Programación de proceses",
      ciclo: "DAM2",
      siglas: "PSP",
      tecnologias: [this.objetoJava, this.objetoAn],
      conocimientos: ['Hilos', 'Procesos', 'Comunicaciones']
    }
  ];













  asignaturaEjemplo: Asignatura = {
    nombre: "Desarrollo de interfaces",
    ciclo: "DAM2",
    siglas: "DI",
    tecnologias: [this.objetoJava, this.objetoAn],
    conocimientos: ["Utilizadad", "Interfaces", "Multiplataforma"]
  };

  mandarMensaje(elemento: Tecnologia) {
    console.log(elemento.getDescripcion());
  }

  cambiarTecnologia() {
    console.log(this.mostrarTecnologias);
    this.mostrarTecnologias = !this.mostrarTecnologias;
  }

  cambiarCurso(elemento: string) {
    this.mostrarCurso = elemento;
  }
}