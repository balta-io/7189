import { Action } from '@ngrx/store';

export class ActionModel implements Action {
    type: string;
    payload: any;
}