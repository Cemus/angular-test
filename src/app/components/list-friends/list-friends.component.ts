import { Component, OnInit } from '@angular/core';
import { OneFriendComponent } from '../one-friend/one-friend.component';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PeopleService } from '../../services/friends/people.service';

@Component({
  selector: 'app-list-friends',
  standalone: true,
  imports: [NgIf, NgFor, OneFriendComponent, FormsModule],
  templateUrl: './list-friends.component.html',
  styleUrls: ['./list-friends.component.css'],
})
export class ListFriendsComponent implements OnInit {
  isDisabled = false;
  textInput = '';
  isClicked = false;
  newlyAddedFriend = '';

  constructor(public PeopleService: PeopleService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isDisabled = true;
    }, 3000);
  }

  handleClick = (): void => {
    if (this.textInput) {
      this.PeopleService.add(this.textInput);
      this.isClicked = true;
      this.newlyAddedFriend = this.textInput;
      this.textInput = '';
    }
  };
}
