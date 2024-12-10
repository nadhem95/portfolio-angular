// info.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  private infoList = new BehaviorSubject<any[]>([]);
  InfoList$ = this.infoList.asObservable();

  addInfo(info: any) {
    const currentList = this.infoList.getValue();
    this.infoList.next([...currentList, info]);
  }

  removeInfo(index: number) {
    const currentList = this.infoList.getValue();
    const updatedList = currentList.filter((_, i) => i !== index);
    this.infoList.next(updatedList);
  }
}
