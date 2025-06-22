import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mejores',
  templateUrl: './mejores.page.html',
  styleUrls: ['./mejores.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class MejoresPage { 
restaurantes = [
    {
      nombre: 'Japan Ramen',
      descripcion: 'Ubicado en una zona estratégica de Cali, Japan Ramen es conocido por su especialidad en ramen auténtico japonés. El restaurante presenta un ambiente minimalista y limpio, inspirado en la estética japonesa, que invita a los comensales a disfrutar de una experiencia gastronómica auténtica. La comida en Japan Ramen destaca por su caldo casero, fideos artesanales y toppings tradicionales como cerdo chashu, huevo marinado y verduras frescas. La experiencia se centra en ofrecer un sabor genuino y una textura perfecta en cada bol, brindando una verdadera sensación de Japón en pleno Cali. Es un lugar ideal para los amantes de la comida japonesa y del ramen en particular.',
      imagen: '/assets/img/Mejores1.png'
    },
    {
      nombre: 'Aldea Asiatica',
      descripcion: 'Ubicado en el corazón de Cali, Aldea Asiática ofrece una experiencia culinaria que fusiona sabores tradicionales de países asiáticos como Tailandia, Vietnam, China y Japón. Su ambiente moderno y acogedor invita a los comensales a sumergirse en un viaje gastronómico lleno de aromas exóticos y preparaciones auténticas. La calidad de la comida se destaca por el uso de ingredientes frescos y técnicas tradicionales, garantizando un sabor intenso y satisfactorio en cada plato. Entre sus especialidades encontrarás sushi, dumplings, pho y curry, ideales para quienes buscan una experiencia diversa y enriquecedora en la gastronomía asiática.',
      imagen: '/assets/img/Mejores2.png'
    },
    {
      nombre: 'Café Macondo',
      descripcion: 'Situado en una zona cultural y vibrante de Cali, Macondo es un restaurante que celebra la culinaria colombiana con un toque contemporáneo. La experiencia en este lugar combina un ambiente cálido y artístico, complementado con una propuesta de comida que resalta los sabores típicos de Colombia, con presentaciones modernas y creativas. La carta ofrece platos tradicionales como bandeja paisa, tamales, y empanadas, acompañados de ingredientes frescos y de alta calidad. Macondo se destaca por su capacidad de transportar a los clientes a un recorrido por la historia y cultura del país, haciendo de cada visita una experiencia memorable llena de sabor y tradición.',
      imagen: '/assets/img/Mejores3.png'
    }
  ];

}
