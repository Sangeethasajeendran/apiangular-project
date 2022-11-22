import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  constructor(private apiService: ApiService) { }
 userList: any = [];
  ngOnInit(): void {
    this.apiService.getViewUser()
      .subscribe((result): void => {
        this.userList = result
       console.log(this.userList['users']);

      })
  }

}
