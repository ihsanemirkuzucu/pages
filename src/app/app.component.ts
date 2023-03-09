import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
currentPage = 0;
images = 
[
  {
    title : 'Mercedes',
    url : 'https://cdn-2.motorsport.com/images/mgl/2eAv3nb2/s1200/george-russell-mercedes-f1-w14-1.webp'
  },
  {
    title : 'Ferrari',
    url : 'https://cdn-8.motorsport.com/images/mgl/6b7kbre0/s1200/carlos-sainz-ferrari-sf-23-1.webp'
  },
  {
    title : 'Redbull',
    url : 'https://cdn-5.motorsport.com/images/mgl/2wBVDOW0/s1200/max-verstappen-red-bull-racing-1.webp'
  },
  {
    title : 'Aston Martin',
    url : 'https://cdn-3.motorsport.com/images/mgl/YpNZKOJ0/s1200/fernando-alonso-aston-martin-r-1.webp'
  },
  {
    title : 'Haas',
    url : 'https://cdn-2.motorsport.com/images/mgl/0L1DJKJ2/s1200/nico-hulkenberg-haas-vf-23-mak-1.webp'
  }
]

}
