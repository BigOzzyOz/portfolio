import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {


  doneProjects: Project[] = [
    {
      name: 'Videoflix',
      technologies: ['Angular', 'Django REST Framework', 'PostgreSQL', 'Redis', 'Docker', 'SCSS'],
      description: {
        'de': 'Vollständige Video-Streaming-Plattform zur Demonstration der End-to-End-Entwicklung. Das Projekt umfasst die gesamte Architektur: eine dedizierte REST API, Datenbankverwaltung und ein modernes, reaktives Frontend. Fokus lag auf robuster Nutzerauthentifizierung und der Verarbeitung von Medien-Assets.',
        'en': 'Complete video streaming platform demonstrating end-to-end development. The project covers the entire architecture: a dedicated REST API, database management, and a modern, reactive frontend. Focus was on robust user authentication and media asset processing.',
      },
      link: 'https://videoflix.jan-holtschke.de/',
      gitLink: 'https://github.com/BigOzzyOz/videoflix',
      img: 'assets/img/videoflix.png'
    },
    {
      name: 'Join',
      technologies: ['Django REST Framework', 'PostgreSQL', 'Linux (Nginx)', 'Vanilla JS'],
      description: {
        'de': 'Vollständiges Fullstack Kanban-Board für effizientes Aufgabenmanagement. Es demonstriert die Entwicklung einer sauberen Frontend-Struktur, die über eine dedizierte REST API mit einer relationalen Datenbank kommuniziert. Schwerpunkt liegt auf der Abbildung komplexer Workflows in einer nutzerfreundlichen Oberfläche.',
        'en': 'Complete fullstack Kanban board for efficient task management. It demonstrates the development of a clean frontend structure communicating with a relational database via a dedicated REST API. Focus is on mapping complex workflows into a user-friendly interface.',
      },
      link: 'https://join.jan-holtschke.de/',
      gitLink: 'https://github.com/BigOzzyOz/join',
      img: 'assets/img/join.png'
    },
    {
      name: 'DA Bubble',
      technologies: ['Angular', 'TypeScript', 'Firebase', 'SCSS'],
      description: {
        de: 'Echtzeit-Messenger (Slack-Klon) zur Demonstration des Umgangs mit asynchronen Datenströmen und Echtzeit-Updates. Das Projekt nutzt Firebase (Firestore) effizient zur Speicherung und Abfrage von Nachrichten, Usern und Kanälen. Schwerpunkt war komplexes Routing und State-Management.',
        en: 'Real-time messenger (Slack clone) demonstrating the handling of asynchronous data streams and real-time updates. The project uses Firebase (Firestore) efficiently for storing and querying messages, users, and channels. Focus was complex routing and state management.',
      },
      link: 'https://da-bubble.jan-holtschke.de/',
      gitLink: 'https://github.com/BigOzzyOz/da-bubble',
      img: 'assets/img/da-bubble.png'
    },
    {
      name: 'Coderr',
      technologies: ['Django REST Framework', 'PostgreSQL', 'Linux (Nginx, Gunicorn)'],
      description: {
        'de': 'Das reine Backend für ein Social-Media-Netzwerk. Dieses Projekt stellt das Verständnis von API-Design und Datenbank-Modellierung unter Beweis. Implementierung einer robusten REST-API mit Custom Views, komplexen Many-to-Many-Beziehungen und korrekter Authentifizierung.',
        'en': 'The pure backend for a social media network. This project demonstrates proficiency in API design and database modeling. It implements a robust REST API with custom views, complex many-to-many relationships, and correct authentication.',
      },
      link: 'https://coderr.jan-holtschke.de/',
      gitLink: 'https://github.com/BigOzzyOz/be-coderr',
      img: 'assets/img/coderr.png'
    },
    {
      name: 'Sharkie',
      technologies: ['JavaScript', 'HTML Canvas', 'CSS'],
      description: {
        'de': 'Ein 2D-Jump-and-Run-Spiel. Das Hauptziel war die Demonstration fortgeschrittener Objektorientierter Programmierung (OOP) in JavaScript. Das Projekt beweist die Fähigkeit zur Strukturierung komplexer Logik durch Klassen, Kapselung und Vererbung essentielle Fähigkeiten für jede große Codebasis.',
        'en': 'A 2D jump-and-run game. The main goal was to demonstrate advanced Object-Oriented Programming (OOP) in JavaScript. The project proves the ability to structure complex logic using classes, encapsulation, and inheritance essential skills for any large codebase.',
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
