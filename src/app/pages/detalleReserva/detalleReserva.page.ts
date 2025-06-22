import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-detalleReserva',
  templateUrl: './detalleReserva.page.html',
  styleUrls: ['./detalleReserva.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class DetalleReservaPage {
 nombre: string='';
 fechaHora: string = '';
  fechaHoraFormatted: string = '';
  mostrarDatetime: boolean = false;

  personas: number = 1;
  correo: string = '';
  telefono: string = '';

  constructor(private router: Router) {}

  abrirDatetime() {
    this.mostrarDatetime = true;
  }

  cerrarDatetime() {
    this.mostrarDatetime = false;
  }

 onFechaHoraChange(event: any) {
  const selectedDate = new Date(event.detail.value);
  this.fechaHora = event.detail.value;

  // Formato manual en español
  const meses = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];

  const dia = selectedDate.getDate().toString().padStart(2, '0');
  const mes = meses[selectedDate.getMonth()];
  const anio = selectedDate.getFullYear();
  const hora = selectedDate.getHours().toString().padStart(2, '0');
  const minutos = selectedDate.getMinutes().toString().padStart(2, '0');

  this.fechaHoraFormatted = `${dia} de ${mes} de ${anio}, ${hora}:${minutos}`;
  this.mostrarDatetime = false;
}

  confirmarReserva() {
    const reserva = {
      id: Date.now(),
      nombre: 'Yesika Rodriguez',
      correo: this.correo,
      telefono: this.telefono,
      fechaHora: new Date(this.fechaHora),
      restaurante: 'Historia de amore'
    };

    const reservasGuardadas = JSON.parse(localStorage.getItem('reservas') || '[]');
    reservasGuardadas.push(reserva);
    localStorage.setItem('reservas', JSON.stringify(reservasGuardadas));

    alert('¡Su reserva fue realizada con éxito!');
    this.router.navigate(['/tabs/reserva']);
  }
    
 }