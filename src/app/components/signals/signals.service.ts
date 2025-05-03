
import {computed, inject, Injectable, Signal} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {toSignal} from '@angular/core/rxjs-interop';
import {ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SignalService implements Resolve<any>{
  private httpClint = inject(HttpClient);
  private usersFullData:Signal<any> =  this.getUsersList();
  readonly constantList:Signal<any> = computed(()=>this.usersFullData())
  readonly totalElements:Signal<number> = computed(()=>this.usersFullData()?.total)

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<any> {
    return this.httpClint.get(`https://jsonplaceholder.typicode.com/users`);
  }

  // https://jsonplaceholder.typicode.com/users/1

  getUsersList():Signal<any>{
    console.log(' i am here')
     return toSignal(this.httpClint.get(`https://jsonplaceholder.typicode.com/users/1`))
  };

  getUsersListFromService():any[]{
    return this.usersFullData()?.users
  }



}
