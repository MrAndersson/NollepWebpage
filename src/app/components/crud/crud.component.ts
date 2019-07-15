import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.less']
})
export class CrudComponent implements OnInit {

  sponsImgs: Array<string> = [];
  images: Array<any> = [];

  constructor() { 
    this.images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
    this.sponsImgs = ['assets/sponsors/abf.png', 'assets/sponsors/campus.png', 'assets/sponsors/LTU.jpg',
                      'assets/sponsors/sammes.png', 'assets/sponsors/skebo.png', 'assets/sponsors/TKL.png'];

    console.log(this);
  }

  ngOnInit() {
  }

}
