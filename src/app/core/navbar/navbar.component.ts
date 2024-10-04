import { Component } from '@angular/core';
import { ConversationsListComponent } from '../../components/conversations-list/conversations-list.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ConversationsListComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  conversations: any[] = [];

  constructor() {
    for (let i = 0; i < 20; i++) {
      const dateNow = new Date();

      const options: Intl.DateTimeFormatOptions = {};
      options.year = 'numeric';
      options.month = 'long';
      options.day = 'numeric';
      options.hour = '2-digit';
      options.minute = '2-digit';

      const createdAt = new Intl.DateTimeFormat('pt-BR', options).format(dateNow.setDate(dateNow.getDate() - i + 1));
      
      this.conversations.push({
        id: `${i}`,
        title: `Conversation ${i}`,
        createdAt
      })
    }
  }
}
