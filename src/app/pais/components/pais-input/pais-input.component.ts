import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  termino: string;

  @Input()
  placeholder?: string;

  constructor() {
    this.termino = '';
  }

  ngOnInit(): void {
    this.debouncer.pipe(
                    debounceTime(300)
                  ).subscribe( valor => {
                    this.onDebounce.emit(valor);
                  });
  }

  search(): void{
    this.onEnter.emit(this.termino);
  }

  keyPressed(): void{
    this.debouncer.next(this.termino);
  }

}
