import { Component, OnInit } from '@angular/core';
import { MyTestComponentComponent } from './components/my-test-component/my-test-component.component';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent implements OnInit {
  data: string = 'Tornike';
  title = 'angular-topic';
  ngOnInit(): void {
    setTimeout(() => {
      this.data = 'Giga';
    }, 3000);
  }

}
