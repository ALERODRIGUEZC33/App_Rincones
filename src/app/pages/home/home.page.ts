import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // <- módulo de Ionic
import { CommonModule } from '@angular/common'; // <- *ngIf, etc.
import { FormsModule } from '@angular/forms';   // <- ngModel si lo usas
import { RouterModule } from '@angular/router'; // <- routerLink

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class HomePage {}