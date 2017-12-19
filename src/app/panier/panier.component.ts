import { Component, OnInit,Input } from '@angular/core';
import { PanierService } from '../service/panier-service';

@Component({
  selector: 'panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  


  constructor(private panierService: PanierService) { }

  ngOnInit() {
  }

}
