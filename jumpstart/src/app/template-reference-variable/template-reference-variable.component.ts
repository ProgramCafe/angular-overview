import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable',
  template: `
             <hr>
              <h3>Template Reference Variable </h3>
              <input type="text" #txtName  placeholder="Enter Name"/>
              {{name}}
              <button (click)="getValue(txtName)">Show TextBox Value</button>

              <app-line></app-line>
              <input type="text" #txtEmail  placeholder="Enter Email">
              {{email}}
              <button (click)="email = txtEmail.value">Update Email </button>
            `,
  styles: ['./template-reference-variable.component.css']
})
export class TemplateReferenceVariableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Template Variable Example
  public name = "";
  public email = "default@example.com";
  getValue(txtName){
    this.name = txtName.value;

  }

}
