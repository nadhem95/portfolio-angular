// nadhem-hazem.component.ts

import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-nadhem-hazem',
  templateUrl: './nadhem.hazem.component.html',
  styleUrls: ['./nadhem.hazem.component.css'],
})
export class NadhemHazemComponent implements OnInit {
  infoList: any[] = [];

  constructor(private infoService: InfoService) {}

  ngOnInit(): void {
    this.infoService.InfoList$.subscribe((infoList) => {
      this.infoList = infoList;
    });
  }
}
