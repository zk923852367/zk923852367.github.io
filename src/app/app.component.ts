import { Component } from '@angular/core';
import * as $ from 'jquery';

declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '我的博客';
  sites = [1,2,3];
  indexs = 0;
  greeting(): void {  
    console.log('aaaa')
  }

  ngOnInit(){
  	$('.carousel').carousel();
  }
  prev(){
  	$("#myCarousel").carousel('prev');
  }
  next(){
  	$("#myCarousel").carousel('next');
  }
  select(n){
  	$("#myCarousel").carousel(n);
  }
  slide(n){
  	this.indexs = n;
  	$("#myCarousel").carousel(n);
  }
}
