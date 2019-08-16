import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromUser from '../../state';
import { Observable } from 'rxjs';
import * as userActions from '../../state/user.actions'

@Component({
    selector: 'login-container',
    templateUrl: 'login-container.html'
})

export class LoginContainerComponent implements OnInit {
    maskUserName$: Observable<boolean>;

    constructor(private store: Store<fromUser.State>) { }

    ngOnInit() {
        this.maskUserName$ = this.store.pipe(select(fromUser.getMaskUserName))
    }

    maskUserNameCheckChanged(isChecked) {
        this.store.dispatch(new userActions.MaskUserName(isChecked));
    }
}