import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userName:string;
  @Output() searchEmitter = new EventEmitter<any>();

 
  constructor() { }
  
  ngOnInit(): void {
    
  }
  search(){
    this.searchEmitter.emit(this.userName);
    this.userName='';
  }

}
