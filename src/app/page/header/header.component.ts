import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ailos-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  pageTitle = 'NOVA ADMISSÃO COOPERADO';

  @Input()
  navigationPath = [
    { linkId: 1, linkName: 'Cadastro', linkURL: '/signup' },
    {
      linkId: 2,
      linkName: 'Admissão do Cooperado',
      linkURL: '/add-cooperative'
    },
    {
      linkId: 3,
      linkName: 'Nova Admissão de Cooperado',
      linkURL: '/update-cooperative-member'
    }
  ];

  @Input()
  title!: string;

  @Input()
  notificationCounter!: number;

  @Input()
  userLogo!: string;

  @Input()
  productLabel!: string;

  @Input()
  shouldNavigate!: boolean;

  constructor() {}

  ngOnInit(): void {}
}
