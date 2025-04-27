import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  onLogin() {
    // Swal.fire({
    //  // position: 'top-end',
    //   icon: 'error',
    //   title: 'El usuario no existe...',
   
    // });

    // debugger;
    location.href = "dashboard";
  }
}
