import { Component }    from '@angular/core'
import { User }     from './user'
import { UserService }  from './user.service'


@Component({
    selector: 'user-list',
    providers: [UserService],
    template:
        `<div *ngFor="let user of users">
            <b myHighlight>{{user.name}}, </b>
            <h4 [myNgShow]=false>I am testing, hide this!</h4>
            <h4 [myNgShow]=true>I am testing, show this!</h4>
            <p><b>DOB: </b>{{user.dob}}, 
            <b>Email: </b>{{user.email}}, 
            <b>Status: </b>{{user.status}}, 
            <b>Enroll: </b><a href={{user.enroll}} myHighlight>Enroll test here</a>
            <br>
         </div>`
})

export class UserListComponent {
    users: User[];
    constructor(userService: UserService) {
        this.users = userService.getUsers()
    }
}

