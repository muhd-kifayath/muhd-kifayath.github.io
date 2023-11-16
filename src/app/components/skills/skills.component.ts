import { Component } from '@angular/core';

interface Skill {
  title: string,
  image: string,
  expertise: string
}

interface Field {
  title: string,
  skills: Skill[]
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
    cpath = '../../../assets/icons/';

    mySkills: Field[] = [
      {
        title: 'Languages',
        skills: [
          {
            title: 'Python',
            image: this.cpath+'py.png',
            expertise: "60%"
          },
          {
            title: 'Java',
            image: this.cpath+'java.png',
            expertise: "55%"
          },
          {
            title: 'JavaScript',
            image: this.cpath+'js.png',
            expertise: "40%"
          },
          {
            title: 'C++',
            image: this.cpath+'cpp.png',
            expertise: "45%"
          },
          {
            title: 'TypeScript',
            image: this.cpath+'ts.png',
            expertise: "30%"
          },
          {
            title: 'Ruby',
            image: this.cpath+'rb.png',
            expertise: "30%"
          },
          {
            title: 'Dart',
            image: this.cpath+'dart.png',
            expertise: "10%"
          }
        ]
      },
      {
        title: 'Databases',
        skills: [
          {
            title: 'MongoDB',
            image: this.cpath+'mongo.png',
            expertise: "30%"
          },
          {
            title: 'MySQL',
            image: this.cpath+'mysql.png',
            expertise: "35%"
          },
          {
            title: 'Firebase',
            image: this.cpath+'firebase.png',
            expertise: "50%"
          }
        ]
      },
      {
        title: 'Web Dev',
        skills: [
          {
            title: 'React',
            image: this.cpath+'react.png',
            expertise: "35%"
          },
          {
            title: 'Node',
            image: this.cpath+'node.png',
            expertise: "25%"
          },
          {
            title: 'Express',
            image: this.cpath+'express.png',
            expertise: "20%"
          },
          {
            title: 'Angular',
            image: this.cpath+'angular.png',
            expertise: "25%"
          }
        ]
      },
      {
        title: 'App Dev',
        skills: [
          {
            title: 'Android SDK',
            image: this.cpath+'android.png',
            expertise: "40%"
          },
          {
            title: 'Flutter',
            image: this.cpath+'flutter.png',
            expertise: "10%"
          }
        ]
      },
      {
        title: 'Design',
        skills: [
          {
            title: 'Figma',
            image: this.cpath+'figma.png',
            expertise: "40%"
          },
          {
            title: 'Framer',
            image: this.cpath+'framer.png',
            expertise: "35%"
          }
        ]
      }
    ]
}
