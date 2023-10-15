
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable,of } from 'rxjs';//
import { MessageService } from './message.service.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
//4.4
  constructor(private messageService: MessageService) { }
  //4.2 添加一个 getHeroes 方法，返回模拟的英雄列表。
  // getHeroes(): Hero[] {
  //   return HEROES;

//4.3 异步函数签名 使用 RxJS 的 of() 函数来模拟从服务器返回数据。
//从 RxJS 中导入 Observable 和 of 符号。
//observable 可观察对象
    getHeroes(): Observable<Hero[]> {
      // const heroes = of(HEROES);
      this.messageService.add('HeroService: fetched heroes');
      return of(HEROES);
    }

//5
    getHero(id: number): Observable<Hero> {
      const hero = HEROES.find(h => h.id === id)!;
      this.messageService.add(`HeroService: fetched hero id=${id}`);
      return of(hero);
  
}
}
