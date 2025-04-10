import {Component, computed, effect, inject, OnInit, Signal, signal, WritableSignal} from '@angular/core';
import {SignalService} from '../signals.service';

interface data {
  errorMessages: string,
  content: any[],
  pageSize: number,
}

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.less',
  providers: [SignalService],
})


export class SignalComponent implements OnInit {
  signalsService: SignalService = inject(SignalService);
  list: WritableSignal<any> = signal(this.signalsService.getUsersListFromService());
  totlaElements = this.signalsService.totalElements()

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
    console.log();
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
    setTimeout(() => {
      if (this.reqForAddUser() === 'userSuccessAdded') {
        this.updateUsersList(value)
      }
    }, 300);
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
      const updatedList = oldVal.filter((user: any) => user.firstName === 'Lily');
      return [...updatedList];
    })
  }
  }
