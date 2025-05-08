import {Component, input} from '@angular/core';
import {NgClass, NgOptimizedImage, NgStyle} from '@angular/common';


@Component({
  selector: 'app-second-signals',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgStyle,
    NgClass
  ],
  templateUrl: './second-signals.component.html',
  styleUrl: './second-signals.component.less'
})
export class SecondSignalsComponent {

  // inputNameFromParent: InputSignal<string> = input.required();
  //
  // ifNameIsAdmin: Signal<any> = computed(() => this.inputNameFromParent() === 'Nika');
  //
  // responseFromChild = output<string>()
  borderColor = input('')
  flipped: string  ='';

  response(){
    // this.responseFromChild.emit('responseFromChild');
  }


}
