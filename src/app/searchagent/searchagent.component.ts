import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'searchagent',
  templateUrl: './searchagent.component.html',
  styleUrls: ['./searchagent.component.css']
})
export class SearchagentComponent implements OnInit {

  title = "Suchagenten";
  modalNewSearchAgent: false;

  constructor() {  }

  ngOnInit() {}

  createNewSearchAgent() {
    this.modalNewSearchAgent = true;
  }

  closeModal(params: any) {
    if (params != null) {

    }
    this.modalNewSearchAgent = false;
  }

}
