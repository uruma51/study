import {Component, computed, input, InputSignal, output, Signal, WritableSignal} from '@angular/core';

@Component({
  selector: 'app-second-signals',
  standalone: true,
  imports: [],
  templateUrl: './second-signals.component.html',
  styleUrl: './second-signals.component.less'
})
export class SecondSignalsComponent {
  inputNameFromParent: InputSignal<string> = input.required()
  ifNameIsAdmin: Signal<any> = computed(() => this.inputNameFromParent() === 'Nika');
  responseFromChild = output<string>();

  response(){
    this.responseFromChild.emit('responseFromChild');
  }

}
