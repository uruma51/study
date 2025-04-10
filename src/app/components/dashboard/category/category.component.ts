import { MyService } from './../myService.service';
import { CommonModule } from '@angular/common';
import {
  HttpClient,
  HttpClientModule,
  provideHttpClient,
} from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SharedModule } from '../shared.module';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
  
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.less',
})
export class CategoryComponent implements OnInit {
  myService = inject(MyService);

  interval: any = null;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      console.log('I am here');
    }, 500);

    setTimeout(() => {
      clearInterval(this.interval);
    }, 4000);
  }
  http = inject(HttpClient);

  test() {
    this.http.get('');
  }
}
function withFetch(): import('@angular/common/http').HttpFeature<
  import('@angular/common/http').HttpFeatureKind
> {
  throw new Error('Function not implemented.');
}
