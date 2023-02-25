import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ailos-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  @Input()
  logo!: string;

  constructor() {}

  ngOnInit(): void {}
}
