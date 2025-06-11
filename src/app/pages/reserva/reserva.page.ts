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
  reservas: Reserva[] = [
    {
      id: 1,
      nombre: 'Juan Pérez',
      correo: 'juan@example.com',
      telefono: '123456789',
      fechaHora: new Date('2025-06-15T12:30:00'),
      restaurante: 'Japan Ramen'
    },
    {
      id: 2,
      nombre: 'Ana Torres',
      correo: 'ana@example.com',
      telefono: '987654321',
      fechaHora: new Date('2025-06-20T14:30:00'),
      restaurante: 'Macondo'
    }
  ];

  cancelarReserva(reserva: Reserva) {
    this.reservas = this.reservas.filter(r => r.id !== reserva.id);
  }
}
