import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service.service';



@Component({
  selector: 'app-heroes', 
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 

//  1.2 导入Hero 类。
// 把组件的 hero 属性的类型改为 Hero（对象）。
  // hero : Hero ={
  //   id:1,
  //   name: 'Windstorm'
  // }
  
  //2.1往类中添加一个 heroes 属性，暴露出HEROES数组，以供绑定。
  // heroes = HEROES;

  //4.2
  heroes: Hero[] = [];
// 4.2 第一步执行getheroes函数
  ngOnInit(): void {
    this.getHeroes();
  }
  //2.2 
  // selectedHero?: Hero;

 /*  onSelect(hero: Hero): void {给值的动作
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }  */
  
//4.2 添加一个私有的 heroService，其类型为 HeroService
constructor(
  private heroService:HeroService, 
  private messageService: MessageService) { }
//4.2 创建一个方法，以从服务中获取英雄数据。
  /* getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
 */
  //4.4 使用heroservice 要订阅
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}

// main()
// let a[5];
// for(i=0,i<5,i++)
// {
//   for(j,j<4,j++)
//   {
//     if(a[j]>a[j+1])
//     {
//       max=a[j+1]
//     }
//   }






