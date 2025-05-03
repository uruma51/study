import {
  ChangeDetectionStrategy,
  Component,

  inject,
  model,
  OnInit,
  Signal,
  signal, viewChild,
  WritableSignal
} from '@angular/core';
import {SignalService} from '../signals.service';

import {FormsModule} from '@angular/forms';
import {SecondSignalsComponent} from '../second-signals/second-signals.component';
import {ActivatedRoute, Router} from '@angular/router';

interface data {
  errorMessages: string,
  content: any[],
  pageSize: number,
}

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [

    FormsModule,
    SecondSignalsComponent
  ],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.less',
  providers: [SignalService],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class SignalComponent implements OnInit {

  signalsService: SignalService = inject(SignalService);

  route: ActivatedRoute = inject(ActivatedRoute);

  list: WritableSignal<any> = signal(this.signalsService.getUsersListFromService());

  userName = 'Nika Uruamshvili'

  totlaElements = this.signalsService.totalElements();

  inputName: WritableSignal<string> = model('');

  // viewChildSignalComponent:Signal<SecondSignalsComponent | undefined> = viewChild(SecondSignalsComponent,{
  //   read:SecondSignalsComponent
  // });

  responseFromChild:WritableSignal<string> = signal('');

  data = signal(this.route.snapshot.data['data']);

  // userNameSignal: WritableSignal<number> = signal(0);
  //
  // ifUserIsAdult:Signal<boolean> = computed(()=>{
  //   return this.userNameSignal()  > 18;
  // });

  // userNameEffect = effect(()=>{
  //   if (this.userNameSignal() === 35){
  //     alert('Welcome to the user');
  //   }else{
  //     alert('Fuck you');
  //   }
  //
  // })

  usersList: WritableSignal<string[]> = signal([]);


  ngOnInit(): void {
    setTimeout(()=>{
      this.userName = 'Tornike Shatberashvili'
    },1000);
    console.log(this.data());
  }

  getList() {
    // this.usersList.set([]);
    setTimeout(() => {
      this.usersList.set([
        'Nika',
        'Giga',
        'Tornike']);
    }, 2000)
  }

  addNewUser(value: string) {
    // console.log(this.viewChildSignalComponent()?.ifNameIsAdmin());

    // setTimeout(() => {
    //   if (this.reqForAddUser() === 'userSuccessAdded') {
    //     this.updateUsersList(value)
    //   }
    // }, 300);
  }

  updateUsersList(value: string) {
    this.usersList.update((oldVal: string[]) => {
      return oldVal.concat(value);
    })
  }

  reqForAddUser(): string {
    return 'userSuccessAdded';

  }

  deleteUser(user: string): void {
    this.usersList.update((oldVal: string[]) => {
      const index = oldVal.indexOf(user);
      oldVal.splice(index, 1)
      return [...oldVal];
    })
  }

  filterUsers() {
    this.list.update((oldVal: string[]) => {
      const updatedList = oldVal.filter((user: any) => user.firstName === this.inputName());
      return [...updatedList];
    })
  }

  resetList(list:any) {
    this.list.set(this.signalsService.constantList()?.users)
  }
}
