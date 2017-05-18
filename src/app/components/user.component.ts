import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
    moduleId : module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [PostsService]
})
export class UserComponent {
    name: string;
    company: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;
    posts: Post[];

    constructor(private postsService: PostsService) {
        console.log('constructor completed');
        this.name = 'Jasper';
        this.company = "Upstream Works";
        this.email = 'jzhou@upstreamworks.com'
        this.address = {
            street: '8000 Jane st',
            city: 'Vaughan',
            state: 'ON'
        };
        this.hobbies = ['Music', 'Basketball', 'Piano'];
        this.showHobbies = false;
        this.postsService.getPosts().subscribe(posts => {
            this.posts = posts;

        })
    }
    toggleHobbies() {
        console.log("Show Hobbies");
        this.showHobbies = !this.showHobbies;
    }

    addHobby(hobby: string) {
        console.log(hobby);
        this.hobbies.push(hobby);
    }
    deleteHobby(i: number) {
        this.hobbies.splice(i, 1);
    }
}

interface address {
    street: string;
    city: string;
    state: string;
}

interface Post {
    id: number;
    title: string;
    body: string;
}


