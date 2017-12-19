import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../models/Produit.model';

@Component({
  selector: 'app-filtre-board',
  templateUrl: './filtre-board.component.html',
  styleUrls: ['./filtre-board.component.css']
})
export class FiltreBoardComponent implements OnInit {

  @Input()
  listBeforeFiltered: Produit[];
  
  isCD: boolean = false;
  isDVD: boolean = false;
  isLivre: boolean = false;

  changeValueCD() : void {
    this.isCD = !this.isCD;
  }
  changeValueDVD() : void {
    this.isDVD = !this.isDVD;
  }
  changeValueLivre() : void {
    this.isLivre = !this.isLivre;
  }

  filtreCD() : void {
    console.log("is it a CD filtration ? " + !this.isCD);
    this.listBeforeFiltered.forEach(element => {
      if (element.categorie.libelle == "CD"){
        console.log(element.categorie.libelle + " after CD filtration ? " + element.id);
      };
    });
  }
  filtreDVD() : void {
    console.log("is it a DVD filtration? " + !this.isDVD);
  }
  filtreLivre() : void {
    console.log("is it a book filtration? " + !this.isLivre);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
