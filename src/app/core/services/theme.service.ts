import { Injectable } from '@angular/core';

const LS_THEME = "theme";
type Theme = "dark" | "light";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme: Theme = 'dark';

  constructor() {
    const savedTheme = localStorage.getItem(LS_THEME);
    if (savedTheme) {
      this.setTheme(savedTheme as Theme);
    } else {
      this.setTheme(this.currentTheme);
    }
  }

  getCurrentTheme(): Theme {
    return this.currentTheme;
  }

  setTheme(theme: Theme) {
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(LS_THEME, theme);
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }
}
