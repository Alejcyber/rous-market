import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  productos = new Array<Producto>();

  constructor() { 
    this.productos.push({nombre: 'Crema Skala', categoria: 'Belleza', precio: 7, img: '/assets/img/skala1.jpeg'});
    this.productos.push({nombre: 'Peine', categoria: 'Belleza', precio: 3, img: '/assets/img/peine.jpeg'});
    this.productos.push({nombre: 'Champu', categoria: 'Belleza', precio: 2, img: '/assets/img/champu.jpeg'});
    this.productos.push({nombre: 'Jabon', categoria: 'Belleza', precio: 1, img: '/assets/img/jabon.jpeg'});
  }

  lista(): Array<Producto> {
    return this.productos;
  }



}
