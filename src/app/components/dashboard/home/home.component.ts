import { Router } from '@angular/router';

import { MyService } from './../myService.service';
import {
  Component,
  computed,
  effect,
  inject,
  Injector,
  OnInit,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { log } from 'node:console';
import { Colors } from '../../../test.enum';
import {
  asyncValidator,
  customValidator,
} from '../../../validators/form-validators';
import { CategoryComponent } from '../category/category.component';

export interface permissionsModel {
  id: string;
  perName: string;
  name: string;
}

export interface userIntf {
  name: string;
  age: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
  providers: [MyService],
})
export class HomeComponent implements OnInit {
  Router = inject(Router);

  MyService = inject(MyService);

  fb = inject(FormBuilder);

  injector = inject(Injector);

  firstSignal = signal<string[]>([]);

  computedSignal: Signal<any> = computed<any>(() => this.firstSignal()[0]);
  showGreeting = false;

  // formArrayExample = this.fb.group({
  //   name: 'Nika',
  //   userName: 'Urumashvili',
  //   Id: 1,
  //   emails: this.fb.array([]),
  //   personsChild: this.fb.group({
  //     childrens: this.fb.array([1, 2, 3, 4]),
  //     count: '',
  //   }),
  // });

  // get emails() {
  //   return this.formArrayExample.controls.emails as FormArray;
  // }

  userRegisterForm = this.fb.group({
    name: [
      '',
      Validators.compose([
        customValidator,
        Validators.required,
        Validators.minLength(3),
      ]),
      asyncValidator,
    ],
    lastName: ['', Validators.required],
    permissionsList: this.fb.array<permissionsModel[]>([], Validators.required),
  });
string: any;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.showGreeting = true;
    }, 1000);
    setTimeout(() => {
      this.showGreeting = false;
    }, 3000);
  }



  tasks: { name: string; completed: boolean }[] = [];
  newTask: string = '';

  addTask(value:string):void {

      this.newTask.trim()
      this.tasks.push({ name: value, completed: false });
      value = '';
      console.log(this.tasks);
    
    
  }


  // get permisions(): FormArray {
  //   return this.userRegisterForm.get('permissionsList') as FormArray;
  // }

  // addEmailField(newEmail: string) {
  //   this.permisions.push(
  //     this.fb.group<permissionsModel>({
  //       id: '',
  //       perName: '',
  //       name: '',
  //     })
  //   );
  // }

  // show() {
  //   console.log(this.userRegisterForm.value);
  //   this.MyService.setName(this.userRegisterForm?.controls.name.value ?? '');
  //   this.Router.navigate(['dashboard/category']);
  // }

  // removeEmailField(index: number) {
  //   // this.emails.removeAt(index); // ველის წაშლა
  // }

  // clearFormArray() {
  //   // this.permisions.clear();
  //   // this.userRegisterForm.reset();
  //   const person: permissionsModel = {
  //     id: '1',
  //     perName: 'admin',
  //     name: 'Nika',
  //   };

  //   // this.userRegisterForm.reset();
  //   const person2: userIntf = {
  //     name: 'Giga',
  //     age: '32',
  //   };

    
    
  
  //   console.log(this.MyService.addElemnt<string, permissionsModel>('person',person,'id'));
    
    
  //   // console.log(this.MyService.addElemnt<number, userIntf>(1,person2));
    
    
  //   // this.MyService.addElemnt(person2)
    

  //   setTimeout(() => {
      
  //     console.log(this.MyService.getElement('name'));
      
  //   }, 700);
    
  // }

  // getFormGroup(index: number): FormGroup {
  //   return this.permisions.at(index) as FormGroup;
  // }
}
