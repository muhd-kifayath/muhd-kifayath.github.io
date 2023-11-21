import { Component } from '@angular/core';

interface Project {
  title: string,
  description: string,
  image: string,
  field: string,
  timeline: string,
  link: string,
  media: string
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent{
  cpath = '../../../assets/images/';

  myProjects: Project[] = [
    {
      title: 'Tasteit',
      description: 'A Recipe Finder',
      image: this.cpath+'Tasteit.png',
      field: 'Web Design',
      timeline: 'October 2023',
      link: 'https://www.behance.net/gallery/182832315/Tasteit-Recipe-Website-Design',
      media: 'Behance'
    },
    {
      title: 'Trakit',
      description: 'A Collaborative To Do List',
      image: this.cpath+'Trakit.png',
      field: 'Android App',
      timeline: 'July 2023',
      link: 'https://www.github.com/muhd-kifayath/trakit',
      media: 'GitHub'
    }
  ]
}