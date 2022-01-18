import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shareds/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos = this.data.lista();

  constructor(private data: DataService) { }

  ngOnInit(): void {

    

  }

}
