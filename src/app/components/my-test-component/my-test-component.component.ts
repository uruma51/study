import {
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-my-test-component',
  standalone: true,
  imports: [],
  templateUrl: './my-test-component.component.html',
  styleUrl: './my-test-component.component.less',
})
export class MyTestComponentComponent implements OnInit, OnChanges, DoCheck ,AfterContentInit ,AfterViewInit {
  @Input() testInput: string | undefined;
  name:string = ''

  constructor() {}

  ngOnInit(): void {
   console.log('Hello i am Oninit'); 
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      console.log('Hello i am OnChanges');
    }
  }

  ngDoCheck(): void {
    console.log('Hello i am Dochek');
  }
  ngAfterContentInit(): void {
    this.name = 'Nika'
  }

  ngAfterViewInit(): void { 
    this.name = 'Gigas'
  }


}
