import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent {
  users1 = [
    {
      name: 'Leanne Grahams',
      username: 'Bret',
      address: 'Avenida Sucre, Número 456, Lince',
      email: 'lisa.watson@example.com',
      phone: '(+51) 555-0104',
    }
  ];
  users2= [
    {
      name: 'Savannah Howards',
      username: 'Savannah Howard',
      address: '8445 Railroad St undefined Tampa',
      email: 'jeff.brown@example.com',
      phone: '(201) 555-0124',
    }
  ];
  users3 = [
    {
      name: 'Morris Coopers',
      username: 'Morris Cooper',
      address: '8584 W Sherman Dr undefined Desoto',
      email: 'terra.hamilton@example.com',
      phone: '(505) 555-0124',
    }
  ];
  users4 = [
    {
      name: 'Victoria Lanes',
      username: 'Victoria Lane',
      address: '1921 Ranchview Dr undefined San Francisco',
      email: 'deanna.curtis@example.com',
      phone: '(704) 555-0127',
    }
  ];
  users5 = [
    {
      name: 'Stella Warrens',
      username: 'Stella Warren',
      address: '6380 Fincher Rd undefined Tucson',
      email: 'keith.richards@example.com',
      phone: '(219) 555-0114',
    }
  ];
  users6 = [
    {
      name: 'Max Alexanders',
      username: 'Max Alexander',
      address: '4324 Mcclellan Rd undefined Denton',
      email: 'max.terry@example.com',
      phone: '(319) 555-0115',
    }
  ];
  activeUserIndex: number = -1;
  toggleUserDetails(index: number) {
    if (this.activeUserIndex === index) {
      this.activeUserIndex = -1;
    } else {
      this.activeUserIndex = index;
    }
  }

  activeUserIndex2: number = -1;
  toggleUserDetails2(index: number) {
    if (this.activeUserIndex2 === index) {
      this.activeUserIndex2 = -1;
    } else {
      this.activeUserIndex2 = index;
    }
  }

  activeUserIndex3: number = -1;
  toggleUserDetails3(index: number) {
    if (this.activeUserIndex3 === index) {
      this.activeUserIndex3 = -1;
    } else {
      this.activeUserIndex3 = index;
    }
  }

  activeUserIndex4: number = -1;
  toggleUserDetails4(index: number) {
    if (this.activeUserIndex4 === index) {
      this.activeUserIndex4 = -1;
    } else {
      this.activeUserIndex4 = index;
    }
  }

  activeUserIndex5: number = -1;
  toggleUserDetails5(index: number) {
    if (this.activeUserIndex5 === index) {
      this.activeUserIndex5 = -1;
    } else {
      this.activeUserIndex5 = index;
    }
  }

  activeUserIndex6: number = -1;
  toggleUserDetails6(index: number) {
    if (this.activeUserIndex6 === index) {
      this.activeUserIndex6 = -1;
    } else {
      this.activeUserIndex6 = index;
    }
  }

}
