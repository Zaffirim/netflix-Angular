import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/models/utente.interface';
import { UtentiService } from 'src/app/service/utenti.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

    utente!: Utente;
    id!: number
    datiLocal: any;

    constructor(private utentiSrv: UtentiService) {
        const user: any = localStorage.getItem('user');
        this.datiLocal = JSON.parse(user);
        this.id = this.datiLocal.user.id;
        this.utentiSrv.recuperaUtente(this.id).subscribe((data) => {
            this.utente = data;
        });
    }

    ngOnInit(): void {}
}
