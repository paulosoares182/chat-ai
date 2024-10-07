import { Component, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import Message from '../../core/models/message.model';
import { CommonModule } from '@angular/common';
import { SearchService } from '../../core/services/search.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit {
  isLoading: boolean = false;
  messages: Message[] = [];
  highlightedMessages: Message[] = [];

  constructor(private searchService: SearchService) {
    this.searchService.search$
      .pipe(takeUntilDestroyed())
      .subscribe(searchText => this.highlightText(searchText ?? ''));
  }

  ngOnInit(): void {
    this.messages = [{
      role: "user",
      content: "Not a Lorem Ipsum whatsoever, but your Lorem Ipsum!"
    },
    {
      role: "ai",
      content: `With the online text generator you can process your personal Lorem Ipsum enriching it with html elements 
        that define its structure, with the possibility to insert external links, but not only.`
    }];

    this.highlightText("");
  }

  sendMessage(): void {
    this.isLoading = true;
  }

  adjustHeight(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;

    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  handleKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
    }
  }

  highlightText(text: string): void {
    if (text.trim() === '') {
      this.highlightedMessages = this.messages.map((message) => ({
        ...message,
        content: message.content,
      }));

      return;
    }
    const regex = new RegExp(text, 'gi');

    this.highlightedMessages = this.messages.map(message => {
      return {
        ...message,
        content: message.content.replace(
          regex,
          (match) => `<mark>${match}</mark>`
        )
      }
    });
  }
}
