import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'new-searchagent',
  templateUrl: 'new-searchagent.component.html',
})
export class NewSearchAgentComponent implements OnInit {

  // TODO: Helperklasse für Suchagenten
  @Output()
  private performClose: EventEmitter<any> = new EventEmitter<any>();

  constructor() {  }

  ngOnInit() {}

  close() {
    this.performClose.emit(null);
  }
}
