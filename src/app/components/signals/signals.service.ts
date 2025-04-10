
import {computed, inject, Injectable, signal, Signal, WritableSignal} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {toSignal} from '@angular/core/rxjs-interop';
import {tap} from 'rxjs';

@Injectable()
export class SignalService{
  private httpClint = inject(HttpClient);
  private usersFullData:Signal<any> =  this.getUsersList();
  readonly totalElements:Signal<number> = computed(()=>this.usersFullData()?.total)

  getUsersList():Signal<any>{
     return toSignal(this.httpClint.get(`https://dummyjson.com/users`))
  };

  getUsersListFromService():any[]{
    return this.usersFullData()?.users
  }

}
