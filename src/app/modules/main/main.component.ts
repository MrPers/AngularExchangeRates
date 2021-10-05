import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    }
  coins(){
      this.router.navigate(['coins'], {relativeTo:this.route});
    }
  notes(){
      this.router.navigate(['notes'], {relativeTo:this.route});
    }

}
