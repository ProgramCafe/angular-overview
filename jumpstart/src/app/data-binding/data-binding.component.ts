import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  public title = "Data Binding";
  public description = "This is data-binding.component";  
  public name = "Praveen Kumar";
  public firstDiv = "div1";
  public textPrimary = "text-primary";
  public employee = { name : 'Praveen Kumar', designation : 'Software Engineer'}

  public isDisabled = false;
  public textOrange = "orange";
  public hasError = true;

  public textStyles = {
    color: 'red',
    textDecoration:'underline'
  }

//#region Event Binding

  public counter = 0;

  updateCounter() {
    this.counter += 1;
  }

  logEventName(event){
    console.log('Event Type is:  ' + event.type);
  }

//#endregion

// constructor(){}
// ngOnInit(){
  
// }


}
