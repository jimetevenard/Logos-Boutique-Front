import { Component, OnInit, Output, Input } from '@angular/core';
import { Produit } from '../models/Produit.model';
import { ProduitApresFiltrationService } from '../service/produit-apres-filtration.service';

@Component({
  selector: 'app-filtre-board',
  templateUrl: './filtre-board.component.html',
  styleUrls: ['./filtre-board.component.css']
})
export class FiltreBoardComponent implements OnInit {

  @Input()
  listBeforeFiltered: Produit[];


  isCD: boolean = true;

  isDVD: boolean = true;

  isLivre: boolean = true;



  filtre(): void {
    this.produitApresFiltrationService.
      produitsApresFiltration = [];
    console.log("New filtration : ");
    console.log("isCD : " + this.isCD);
    console.log("isDVD : " + this.isDVD);
    console.log("isLivre : " + this.isLivre);
    if (this.isCD) {
      console.log("is it a CD filtration ? " + this.isCD);
      this.listBeforeFiltered.forEach(element => {
        if (element.categorie.id == 2) {
          console.log("after filtration CD " + element.id);
          this.produitApresFiltrationService.
            produitsApresFiltration.push(element);
          console.log("add in CD filtration");
        }

      });
    };
    if (this.isDVD) {
      console.log("is it a DVD filtration ? " + this.isDVD);
      this.listBeforeFiltered.forEach(element => {
        if (element.categorie.id == 3) {
          console.log("after filtration DVD " + element.id);
          this.produitApresFiltrationService.
            produitsApresFiltration.push(element);
          console.log("add in DVD filtration");
        }


      });
    };
    if (this.isLivre) {
      console.log("is it a Livre filtration ? " + this.isLivre);
      this.listBeforeFiltered.forEach(element => {
        if (element.categorie.id == 1) {
          console.log("after filtration livre " + element.id);
          this.produitApresFiltrationService.
            produitsApresFiltration.push(element);
          console.log("add in Livre filtration");
        }

      });
    };



    console.log("----------------------------------");
    console.log("product list after all filtrations");
    this.produitApresFiltrationService.
      produitsApresFiltration.forEach(f => {

        console.log("after filtration " + f.id);

      });


  }


  constructor(private produitApresFiltrationService: ProduitApresFiltrationService) {
    this.produitApresFiltrationService.
      produitsApresFiltration = this.listBeforeFiltered;
  }

  ngOnInit() {

  }

}
