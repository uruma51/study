import { NgModule } from '@angular/core';
import { MyService } from './myService.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
  
  ],
  imports: [
    // Other Angular modules or custom modules to use in this module
    HomeComponent
  ],
  exports:[
    HomeComponent
  ],
  providers: [
    MyService
  ],
})
export class SharedModule {}
