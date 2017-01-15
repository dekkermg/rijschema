import { Component } from '@angular/core';
import { Rit } from 'app/model/rit';

@Component({
    templateUrl: 'app/view/ritdetail.component.html'
})
export class RitDetailComponent {
    pageTitle: string = 'Rit details';
    model = new Rit(1, 'testrit', 'rijder', 0);
}
