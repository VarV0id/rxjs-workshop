import { Component, Input } from '@angular/core';

import { Person } from '../../../types';

@Component({
  selector: 'app-person-card',
  template: `
    <div class="mb-5">
      <div class="media">
        <img class="avatar mr-3 rounded" [attr.src]="person.avatar" [attr.alt]="person.avatar" width="45%">
        <div class="media-body">
          <h4 class="my-2">
            {{person.name}}
          </h4>
          <ul *ngIf="person.facts.length" class="list-unstyled">
            <li *ngFor="let fact of person.facts" class="mt-2">
              {{fact}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
})
export class PersonCardComponent {
  @Input() public person: Person;
}
