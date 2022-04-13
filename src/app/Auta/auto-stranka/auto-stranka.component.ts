import { Component, OnInit } from '@angular/core';
import {Auto, AutoZoznam} from "../../models/auto.model";
import {Router} from "@angular/router";
import {AutoServiceService} from "../../../Services/auto-service.service";

@Component({
  selector: 'app-auto-stranka',
  templateUrl: './auto-stranka.component.html',
  styleUrls: ['./auto-stranka.component.css']
})
export class AutoStrankaComponent implements OnInit {

  auta: AutoZoznam[] = [];

  autoNaUpravu?: Auto;

  constructor(private router: Router, private autoService: AutoServiceService) { }

  ngOnInit(): void {
    this.refreshAut();
  }

  refreshAut(): void {
    this.autoService.getAuta().subscribe(data => {
      console.log('prislo:', data);
      this.auta = data;
    });
  }

  exportAut(): void{
    this.autoService.exportAuto().subscribe(x =>{
      const blob = new Blob([x], {type: 'application/pdf'});
      const data = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = data;
      link.download = 'cars.pdf';
      link.dispatchEvent(new MouseEvent('click'));
    });
  }

  chodSpat(): void {
    this.router.navigate(['']);
  }

  pridaj(auto: Auto): void {
    this.autoService.createAuto(auto).subscribe(data => {
      console.log('prislo:', data);
      this.refreshAut();
    });
  }
  uprav(auto: Auto): void {
    if (auto.id !== undefined) {
      this.autoService.updateAuto(auto.id, auto).subscribe(data => {
        console.log('prislo:', data);
        this.refreshAut();
      });
    }
  }

  upravZoZoznamu(autoId: number): void {
    this.autoService.getAuto(autoId).subscribe(data => {
      console.log('prislo:', data);
      this.autoNaUpravu = data;
    });
  }

  zmazZoZoznamu(autoId: number): void {
    this.autoService.deleteAuto(autoId).subscribe(data => {
      this.refreshAut();
    });
  }

}
