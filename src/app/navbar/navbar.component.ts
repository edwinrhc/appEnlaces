import { Component } from '@angular/core';
import { SearchService } from '../services/search.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  searchTerm: string = '';

  constructor(private searchService: SearchService) {}

  onSearchSubmit() {
    this.searchService.updateSearchTerm(this.searchTerm);
  }
}
