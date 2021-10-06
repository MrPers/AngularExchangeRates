import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-admin',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    }

}
