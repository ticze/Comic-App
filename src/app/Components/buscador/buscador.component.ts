import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../Servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = [];
  termino:string;

  constructor( private activedRoute:ActivatedRoute, private _heroeService:HeroesService ) {
   }

  ngOnInit() {

    this.activedRoute.params.subscribe( params =>{
      this.termino = params['termino'];
      this.heroes = this._heroeService.buscarHeroes( params['termino'] )
      console.log(this.heroes);      
    });
  }

  verHeroe(){

  }
}

