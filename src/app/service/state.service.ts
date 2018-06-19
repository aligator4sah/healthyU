import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class StateService {

  curSession$:BehaviorSubject<number> = new BehaviorSubject<number>(-1);

  constructor() { }

}
