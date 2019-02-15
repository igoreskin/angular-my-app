import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'child-component',
  templateUrl: './child.component.html',
  // template: `<h2>Child Component</h2>
  //             current count is {{ count }}`,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // @Input('MyCount') count: number;

  constructor() { }

  ngOnInit() {
  }

}
