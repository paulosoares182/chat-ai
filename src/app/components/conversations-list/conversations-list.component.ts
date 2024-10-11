import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../../core/services/sidebar.service';

@Component({
  selector: 'app-conversations-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conversations-list.component.html',
  styleUrl: './conversations-list.component.scss'
})
export class ConversationsListComponent {
  @Input({required: true}) conversations: any[] = [];
  
  sidebarService = inject(SidebarService);
  activeUrl = this.sidebarService.getActiveUrl();
  
  constructor(private router: Router){}

  goToChat(id: number): void {
    this.router.navigate(['/chat', id]);
  }
}
