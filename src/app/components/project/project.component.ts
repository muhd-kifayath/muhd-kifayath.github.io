import { Component } from '@angular/core';

interface Project {
  title: string,
  description: string,
  image: string,
  field: string,
  timeline: string
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
      timeline: 'October 2023'
    },
    {
      title: 'Trakit',
      description: 'A Collaborative To Do List',
      image: this.cpath+'Trakit.png',
      field: 'Android App',
      timeline: 'July 2023'
    },
    {
      title: 'Xpense',
      description: 'An Expense Tracker',
      image: this.cpath+'Xpense.png',
      field: 'App Design',
      timeline: 'March 2023'
    }
  ]
}