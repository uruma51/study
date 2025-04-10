import { Component, OnInit } from '@angular/core';
import { MyTestComponentComponent } from './components/my-test-component/my-test-component.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
