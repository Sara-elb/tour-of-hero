import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
// rxjs = librairie pour observable

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  getHeroes(): Observable<Hero[]> {
    this.messageService.add(' Récupération de tous les héros - HeroService: fetched heroes');
    // const heroes = of(HEROES);
    return of(HEROES);
  }
}
