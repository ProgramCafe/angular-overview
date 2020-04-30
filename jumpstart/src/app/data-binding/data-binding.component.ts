import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  title = "Data Binding"
  description = "This is data-binding.component"
  
  name = "Praveen Kumar"

  employee = { name : 'Praveen Kumar', designation : 'Software Engineer'}


}
