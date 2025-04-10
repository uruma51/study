import { AbstractControl, ValidationErrors } from "@angular/forms";
import { delay, Observable, of } from "rxjs";

export function customValidator(control: AbstractControl):ValidationErrors | null{
    const value = control.value;

    // Example: Ensuring the value contains "Angular"
    if (value && value[0] !== value[0].toUpperCase()) {
      return { missingAngular: true };
    }
  
    return null; // If valid
    
}


export function customValidator2(control: AbstractControl):ValidationErrors | null{
    const value = control.value;

    // Example: Ensuring the value contains "Angular"
    if (value && !value.includes('Angular')) {
      return { missingAngular: true };
    }
  
    return null; // If valid
    
}

export function asyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    const value = control.value;
    // მაგ: ვამოწმებთ, რომ მნიშვნელობა იყოს "Angular"
    return of(value === 'Jonka' ? null : { notAngular: true }).pipe(delay(1000)); // 1 წამში აბრუნებს შედეგს
  }