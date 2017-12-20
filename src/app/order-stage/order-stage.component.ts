import { Component, OnInit } from '@angular/core';
import { PanierService } from '../service/panier-service';
import { CommandeService } from '../service/commande.service';
import { WindowRef } from '../service/window.service';

@Component({
  selector: 'order-stage',
  templateUrl: './order-stage.component.html',
  styleUrls: ['./order-stage.component.css']
})
export class OrderStageComponent implements OnInit {

  constructor(
    private panierService: PanierService,
    private commandeService: CommandeService,
    private winRef: WindowRef
  ) { }

  ngOnInit() {
    console.log("dans OrderStageComponent");
    console.log(this.commandeService);
  }

  jumpToStep(step: string){
    let win = this.winRef.nativeWindow;
    win.$('#order-stage-tabs .nav-pills li').removeClass('active');
    win.$('#order-stage-tabs .tab-pane').removeClass('in active');

    win.$('#order-stage-tabs .nav-pills li[data-step="'+step+'"]').addClass('active');
    win.$('#order-stage-tabs .tab-pane[data-step="'+step+'"]').addClass('in active');

  }

}
