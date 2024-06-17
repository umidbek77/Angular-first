import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  testimonials = [
    {
      image: 'assets/card-1.jpg',
      title: 'Tempor Incididunt',
      subtitle: 'Dipsicing elit',
      text: 'Dipsicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim'
    },
    {
      image: 'assets/card-2.jpg',
      title: 'Tempor Incididunt',
      subtitle: 'Dipsicing elit',
      text: 'Dipsicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim'
    },
    {
      image: 'assets/card-2.jpg',
      title: 'Tempor Incididunt',
      subtitle: 'Dipsicing elit',
      text: 'Dipsicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim'
    }
  ];
}
