import { Component, ElementRef, ViewChild } from '@angular/core';

import { GifsService } from '../services/gifs.service';

@Component({
    selector: 'app-busqueda',
    templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {
    // El operador Non-null assertion operator ! se usa cuando estamos seguros que la variable no es nulo ni indefinido

    @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
    // el viewchild se usa para hacer referencia a un elemento que solo existe en el html, el ElementRef es el tipo (tipado0) del input

    constructor (private gifsService: GifsService) { }


    buscar () {

        const valor = this.txtBuscar.nativeElement.value;

        if (valor.trim().length === 0) {
            return;
        }

        this.gifsService.buscarGifs(valor);

        this.txtBuscar.nativeElement.value = '';

    }

}
