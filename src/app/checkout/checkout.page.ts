import { Component, OnInit } from '@angular/core';
import { EventsService } from '../service/events.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  evento?: any;
  id!: any;
  index: any;
  constructor(
    private service: EventsService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (response: any) => {
        console.log("Param", response);
        this.id = response.id;
        console.log(this.id);
        this.service.listarDetalhes(this.id).subscribe((data) => {
            this.evento = data;
            console.log(this.evento);
          });
      },
      (error: any) => {
        console.log("Error", error);
      }
    );
  }

}
