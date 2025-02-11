import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../friends.service'; // Import du service
import { Friend } from '../models/friend.interface'; // Import du type Friend
import { OneFriendComponent } from '../one-friend/one-friend.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-friends',
  standalone: true,
  imports: [CommonModule, OneFriendComponent, FormsModule],
  templateUrl: './list-friends.component.html',
  styleUrls: ['./list-friends.component.css'],
})
export class ListFriendsComponent implements OnInit {
  isDisabled = false;
  textInput = '';
  isClicked = false;
  newlyAddedFriend = '';
  constructor(public friendsService: FriendsService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isDisabled = true;
    }, 3000);
  }

  handleClick = (): void => {
    if (this.textInput) {
      this.friendsService.addFriend(this.textInput);
      this.isClicked = true;
      this.newlyAddedFriend = this.textInput;
      this.textInput = '';
    }
  };
}
