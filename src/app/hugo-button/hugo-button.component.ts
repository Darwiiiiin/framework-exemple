import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hugo-button',
  templateUrl: './hugo-button.component.html',
  styleUrls: ['./hugo-button.component.css']
})
export class HugoButtonComponent implements OnInit {

  @Input() text!: string;

  constructor() { }

  ngOnInit(): void {
    if(this.text === undefined)
      this.text = "Button"
  }
}
