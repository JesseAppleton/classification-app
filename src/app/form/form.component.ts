import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

interface Classifications {
  abbrev: string;
  fullName: string;
}

interface Disseminations {
  abbrev: string;
  fullName: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  selectedClass = '';
  selectedDissem = '';

  classifications: Classifications[] = [
    { abbrev: 'U', fullName: 'UNCLASSIFIED'},
    { abbrev: 'C', fullName: 'CONFIDENTIAL'},
    { abbrev: 'S', fullName: 'SECRET'},
    { abbrev: 'TS', fullName: 'TOP SECRET'},
  ];
  
  disseminations = new FormControl();
  disseminationList: Disseminations[] = [
    { abbrev: 'FOUO', fullName: 'FOR OFFICIAL USE ONLY'},
    { abbrev: 'REL TO USA', fullName: 'REL TO USA'},
    { abbrev: 'FVEY', fullName: 'FVEY'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
