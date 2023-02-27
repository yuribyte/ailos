import { Component } from '@angular/core';

@Component({
  selector: 'ailos-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  pageTitle = 'NOVA ADMISSÃO COOPERADO';
  productLabel = 'VIACREDI';

  navigationPath = [
    { linkName: 'Cadastro', linkURL: '/signup' },
    {
      linkName: 'Admissão do Cooperado',
      linkURL: '/add-cooperative'
    },
    {
      linkName: 'Nova Admissão de Cooperado',
      linkURL: '/update-cooperative-member'
    }
  ];
}
