import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
  cards = [
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-thsyY7pcpafX5U5CN_fkREa_Bmrvak0sRg&s',
      title: 'Card Title 1',
      description: 'This is a short description for card 1. Lorem ipsum dolor sit amet'
    },
    {
      imageUrl: 'https://trikky.ru/wp-content/blogs.dir/1/files/2023/03/23/zyro-image-11.jpg',
      title: 'Card Title 1',
      description: 'This is a short description for card 1. Lorem ipsum dolor sit amet'
    },
    {
      imageUrl: 'https://trikky.ru/wp-content/blogs.dir/1/files/2023/03/23/zyro-image-11.jpg',
      title: 'Card Title 1',
      description: 'This is a short description for card 1. Lorem ipsum dolor sit amet'
    }, 
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-thsyY7pcpafX5U5CN_fkREa_Bmrvak0sRg&s',
      title: 'Card Title 1',
      description: 'This is a short description for card 1. Lorem ipsum dolor sit amet'
    },
    {
      imageUrl: 'https://trikky.ru/wp-content/blogs.dir/1/files/2023/03/23/zyro-image-11.jpg',
      title: 'Card Title 1',
      description: 'This is a short description for card 1. Lorem ipsum dolor sit amet'
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-thsyY7pcpafX5U5CN_fkREa_Bmrvak0sRg&s',
      title: 'Card Title 1',
      description: 'This is a short description for card 1. Lorem ipsum dolor sit amet'
    },
    {
      imageUrl: 'https://trikky.ru/wp-content/blogs.dir/1/files/2023/03/23/zyro-image-11.jpg',
      title: 'Card Title 1',
      description: 'This is a short description for card 1. Lorem ipsum dolor sit amet'
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-thsyY7pcpafX5U5CN_fkREa_Bmrvak0sRg&s',
      title: 'Card Title 1',
      description: 'This is a short description for card 1. Lorem ipsum dolor sit amet'
    },
    {
      imageUrl: 'https://trikky.ru/wp-content/blogs.dir/1/files/2023/03/23/zyro-image-11.jpg',
      title: 'Card Title 1',
      description: 'This is a short description for card 1. Lorem ipsum dolor sit amet'
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-thsyY7pcpafX5U5CN_fkREa_Bmrvak0sRg&s',
      title: 'Card Title 1',
      description: 'This is a short description for card 1. Lorem ipsum dolor sit amet'
    }
    
  ]

 constructor() {}

 ngOnInit(): void {}
}
