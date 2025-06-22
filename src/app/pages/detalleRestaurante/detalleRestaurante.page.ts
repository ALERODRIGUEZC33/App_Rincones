import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detalleRestaurante',
  templateUrl: './detalleRestaurante.page.html',
  styleUrls: ['./detalleRestaurante.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class DetalleRestaurantePage {
    constructor() {}
 }
