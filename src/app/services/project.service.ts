import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {


  doneProjects: Project[] = [
    {
      name: 'Join',
      technologies: ['JavaScript', 'Django', 'Django REST Framework', 'HTML', 'CSS'],
      description: {
        'de': 'Join ist ein objektorientiertes Kanban-Board mit eigenem Backend, das effizientes Aufgabenmanagement ermöglicht. Es bietet eine intuitive Benutzeroberfläche zur Organisation von Aufgaben, zur Fortschrittsverfolgung und zur kollaborativen Teamarbeit.',
        'en': 'Join is an object-oriented Kanban board with a custom backend, designed for efficient task management. It offers an intuitive interface to organize tasks, track progress, and support collaborative teamwork.',
      },
      link: 'https://join.jan-holtschke.de/',
      gitLink: 'https://github.com/BigOzzyOz/join',
      img: 'assets/img/join.png'
    },
    {
      name: 'DA Bubble',
      technologies: ['Angular', 'TypeScript', 'Firebase'],
      description: {
        de: 'DA Bubble ist ein Slack-Klon, der eine Plattform für die Kommunikation und Zusammenarbeit in Teams bietet. Mit Funktionen wie Nachrichten, Kanälen und Dateifreigabe ermöglicht DA Bubble eine effiziente und benutzerfreundliche Interaktion zwischen den Teammitgliedern.',
        en: 'DA Bubble is a Slack clone that provides a platform for communication and collaboration within teams. With features such as messaging, channels, and file sharing, DA Bubble enables efficient and user-friendly interaction among team members.',
      },
      link: 'https://da-bubble.jan-holtschke.de/',
      gitLink: 'https://github.com/BigOzzyOz/da-bubble',
      img: 'assets/img/da-bubble.png'
    },
    {
      name: 'Coderr',
      technologies: ['Phython', 'Django', 'Django REST Framework'],
      description: {
        'de': 'Coderr ist eine Freelancer-Plattform im Stil von Fiverr. Das Backend wurde mit Django und der Django REST Framework entwickelt und ermöglicht Funktionen wie das Erstellen von Angeboten, das Annehmen von Aufträgen und das Abgeben von Bewertungen.',
        'en': 'Coderr is a freelancer platform inspired by Fiverr. The backend was developed using Django and Django REST Framework and supports features such as creating offers, handling orders, and submitting reviews.',
      },
      link: 'https://coderr.jan-holtschke.de/',
      gitLink: 'https://github.com/BigOzzyOz/be-coderr',
      img: 'assets/img/coderr.png'
    },
    {
      name: 'Sharkie',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      description: {
        'de': 'Sharkie ist ein 2D-Sidescroller-Spiel, in dem der Spieler Münzen und Gift sammeln muss, um den Orca zu besiegen. Dabei gilt es, Quallen und Kugelfischen auszuweichen, um das Ziel zu erreichen.',
        'en': 'Sharkie is a 2D side-scroller game where players must collect coins and poison to defeat the Orca. Along the way, they must avoid jellyfish and pufferfish to reach their goal.',
      },
      link: 'https://sharkie.jan-holtschke.de/',
      gitLink: 'https://github.com/BigOzzyOz/sharkie_game',
      img: 'assets/img/sharkie.png'
    },
  ]

  currentProjects: Project[] = []

  futureProjects: Project[] = []

  outdatedProjects: Project[] = [
    {
      name: 'Pokédex',
      technologies: ['JavaScript', 'Api', 'HTML', 'CSS'],
      description: {
        'de': 'Der Pokédex ist eine Anwendung, die auf der PokéAPI basiert und es ermöglicht, Informationen über verschiedene Pokémon abzurufen. Mit einer benutzerfreundlichen Oberfläche können Nutzer Pokémon nachschlagen und deren Entwicklungen, Typen und weitere Details entdecken.',
        'en': 'The Pokédex is an application based on the PokéAPI, allowing users to retrieve information about various Pokémon. With a user-friendly interface, users can look up Pokémon and discover their evolutions, types, and other details.',
      },
      link: 'https://pokedex.jan-holtschke.de/',
      gitLink: 'https://github.com/BigOzzyOz/pokedex',
      img: 'assets/img/pokedex.png'
    },
  ]

  constructor() { }


  openLink(link: string) {
    window.open(link, '_blank');
  }
}
