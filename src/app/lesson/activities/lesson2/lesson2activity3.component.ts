import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  template: `
    <app-activity [title]="activity.title"
                  [description]="activity.description"
                  [steps]="activity.steps"
                  [solution]="activity.solution"
                  [result]="buttonCounter">

      <button #button class="btn btn-primary">
        Clicked {{buttonCounter}} times
      </button>

    </app-activity>
  `,
})
export class Lesson2activity3Component implements OnInit {
  @Input() public activity;

  // Get a reference to the elements using their #tag
  @ViewChild('button') buttonRef: ElementRef;

  // Store a reference to the actual nativeElement
  private button: HTMLElement;

  // Button Observables
  private button$: Observable<Event>;

  // The counters for each of the buttons
  public buttonCounter = 0;

  // Debounce time in ms
  public debounceDelay = 500;

  ngOnInit() {
    // Assign the nativeElements.
    this.button = this.buttonRef.nativeElement;

    // Set up the fromEvent Observables
    this.button$ = fromEvent(this.button, 'click');

    // Run the activities
    this.solution();
  }

  /**
   * Solution for Activity
   */
  solution() {
    this.button$
      .pipe(debounceTime(this.debounceDelay))
      .subscribe(() => this.buttonCounter++);
  }
}