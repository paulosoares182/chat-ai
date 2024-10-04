import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conversations-list',
  standalone: true,
  imports: [],
  templateUrl: './conversations-list.component.html',
  styleUrl: './conversations-list.component.scss'
})
export class ConversationsListComponent {
  @Input({required: true}) conversations: any[] = [];

  constructor(private router: Router){}

  goToChat(id: number): void {
    this.router.navigate(['/chat', id]);
  }
}
