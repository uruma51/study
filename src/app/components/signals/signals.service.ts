
import {computed, inject, Injectable, Signal} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {toSignal} from '@angular/core/rxjs-interop';


@Injectable()
export class SignalService{
  private httpClint = inject(HttpClient);
  private usersFullData:Signal<any> =  this.getUsersList();
  readonly constantList:Signal<any> = computed(()=>this.usersFullData())
  readonly totalElements:Signal<number> = computed(()=>this.usersFullData()?.total)

  getUsersList():Signal<any>{
    console.log(' i am here')
     return toSignal(this.httpClint.get(`https://dummyjson.com/users`))
  };

  getUsersListFromService():any[]{
    return this.usersFullData()?.users
  }

}
