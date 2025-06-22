import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; 
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';  
import { RouterModule } from '@angular/router'; 

interface Reserva {
  id: number;
  nombre: string;
  correo: string;
  telefono: string;
  fechaHora: Date;
  restaurante: string;
}

@Component({
  
  selector: 'app-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
 
})
export class ReservaPage {
  reservas: Reserva[] = [];

   ionViewWillEnter() {
    const datos = localStorage.getItem('reservas');
    this.reservas = datos ? JSON.parse(datos) : [];
  }

  cancelarReserva(reserva: Reserva) {
    this.reservas = this.reservas.filter(r => r.id !== reserva.id);
    localStorage.setItem('reservas', JSON.stringify(this.reservas));
  }
  
  formatearFecha(fecha: Date): string {
    const date = new Date(fecha);

    const meses = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];

    const dia = date.getDate().toString().padStart(2, '0');
    const mes = meses[date.getMonth()];
    const anio = date.getFullYear();
    const hora = date.getHours().toString().padStart(2, '0');
    const minutos = date.getMinutes().toString().padStart(2, '0');

    return `${dia} de ${mes} de ${anio}, ${hora}:${minutos}`;
  }

}
