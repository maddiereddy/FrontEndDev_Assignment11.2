import { Component } from '@angular/core'
import { UserListComponent } from './user-list.component'

@Component({
    selector: 'my-users',
    template:
        `<h2>List of Users and Info</h2>
        <user-list></user-list>`,

    styles: ['h2 {color: blue}']
})

export class UsersComponent {}

