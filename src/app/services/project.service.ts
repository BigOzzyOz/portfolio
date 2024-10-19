import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {


  doneProjects: Project[] = [
    {
      name: 'Pokédex',
      technologies: ['JavaScript', 'Api', 'HTML', 'CSS'],
      description: 'Pokédex is a web application that allows users to search for and view information about Pokémon based on the PokéAPI.',
      link: 'https://pokedex-jan-holtschke.de/',
      gitLink: 'https://github.com/BigOzzyOz/pokedex',
      img: 'assets/img/pokedex.png'
    },
    {
      name: 'Join',
      technologies: ['JavaScript', 'Firebase', 'HTML', 'CSS'],
      description: 'Join is a Kanban board application that allows users to create and manage their kanbans.',
      link: 'https://join-jan-holtschke.de/',
      gitLink: 'https://github.com/BigOzzyOz/join',
      img: 'assets/img/join.png'
    },
    {
      name: 'Sharkie',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      description: 'Sharkie is 2d platform game where you can play as the shark trying to defeat jellyfish, puffer fish and killer whales.',
      link: 'https://shakie-jan-holtschke.de/',
      gitLink: 'https://github.com/BigOzzyOz/sharkie_game',
      img: 'assets/img/sharkie.png'
    },
    {
      name: 'Ring of Fire',
      technologies: ['Angular', 'TypeScript', 'Firebase', 'SCSS'],
      description: 'Ring of Fire is card game where you can play against friends online or on your computer.',
      link: 'https://ring-of-fire-jan-holtschke.de/',
      gitLink: 'https://github.com/BigOzzyOz/ring-of-fire',
      img: 'assets/img/ring-of-fire.png'
    }
  ]

  futureProjects: Project[] = [
    {
      name: 'DA Bubble',
      technologies: ['Angular', 'TypeScript', 'Firebase'],
      description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      link: '',
      gitLink: '',
      img: 'assets/img/da-bubble.png'
    },
  ]


  constructor() { }


  openLink(link: string) {
    window.open(link, '_blank');
  }
}
