import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  firstName: string = "Angular Tutorial";
  angularVersion = "Version 18";
  version: number =18;
  isActive: boolean = false;
  currentDate: Date = new Date();
  inputType : string = "button";
  selectedState: string = 'YOU';

  showWelcomeAlert(){
    alert("welcome to angular 18 tutorial");
    }
showMessage(message: string){
  alert("welcome to " + message + " training.")
  }

  // dt: string, number, boolean, date, object, array, null, undefined


}
