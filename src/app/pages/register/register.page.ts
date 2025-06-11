import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // <- módulo de Ionic
import { CommonModule } from '@angular/common'; // <- *ngIf, etc.
import { FormsModule } from '@angular/forms';   // <- ngModel si lo usas
import { RouterModule } from '@angular/router'; // <- routerLink

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule] // <-- esto es clave
})
export class RegisterPage {}