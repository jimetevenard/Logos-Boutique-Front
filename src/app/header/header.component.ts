import { Component, OnInit, Input } from '@angular/core';
import { ConnexionService } from '../service/connexion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  @Input()
  panierProduits;

  constructor(private connexionService: ConnexionService) { }

  ngOnInit() {
  }

}
