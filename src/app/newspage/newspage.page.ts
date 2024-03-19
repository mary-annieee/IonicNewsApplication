import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { register } from 'swiper/element/bundle';

register()

@Component({
  selector: 'app-newspage',
  templateUrl: './newspage.page.html',
  styleUrls: ['./newspage.page.scss'],
})
export class NewspagePage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  imageUrls: string[] = [
    'assets/images/boozy.jpg',
    'assets/images/beverages.png',
    'assets/images/boozy.jpg',
    'assets/images/beverages.png'
  ];
 
  navigate(){
    this.router.navigateByUrl('content');
  }

}
