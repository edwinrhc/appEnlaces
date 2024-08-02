import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-card-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.css']
})
export class CardSectionComponent implements OnInit {

  cards = [
    { title: '1. Regístrese en el Sifonavi', image: '/assets/img/web.png', url: 'https://apps4.mineco.gob.pe/registro0/registro.htm' },
    { title: '2. Registro de Historial Laboral F1', image: '/assets/img/web.png', url: 'https://apps4.mineco.gob.pe/registro1/pages/index.jsp' },
    { title: '3. Estado de Registro', image: '/assets/img/web.png', url: 'https://www.fonavi-st.gob.pe/sifonavic1/' },
    { title: '4. Consulte Aquí si es parte del Primer Grupo, Reintegro -Abril 2024', image: '/assets/img/web.png', url: 'https://www.fonavi-st.gob.pe/sifonavic2/' },
    { title: '5. Consulte su CERAD 2023 - 2024', image: '/assets/img/web.png', url: 'https://www.fonavi-st.gob.pe/sifonavic5/' },
    { title: '6. Pendientes de Cobro Grupos de Pago N° 1 al 20', image: '/assets/img/web.png', url: 'https://www.fonavi-st.gob.pe/sifonavic3/' },
    { title: '7. DECRETO SUPREMO N° 280-2023-EF Publicación de Herederos Beneficiarios', image: '/assets/img/web.png', url: 'https://www.fonavi-st.gob.pe/sifonavic4/' },
    { title: 'Buscar Empleadores', image: '/assets/img/web.png', url: 'https://apps4.mineco.gob.pe/busqe/busca_empleador.htm' },
    { title: 'Portal Web', image: '/assets/img/web.png', url: 'https://fonavi-st.pe/' }
  ];

  filteredCards = this.cards;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService.currentSearchTerm.subscribe(term => {
      this.filteredCards = this.cards.filter(card =>
        card.title.toLowerCase().includes(term.toLowerCase())
      );
    });
  }
}
