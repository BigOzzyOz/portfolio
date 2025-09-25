import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {
  language: string = sessionStorage.getItem('lang') || this.getBrowserLanguage();

  header: { [key: string]: { [key: string]: string } } = {
    'de': {
      'aboutMe': 'Über mich',
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'references': 'Referenzen',
      'contact': 'Kontakt',
    },
    "en": {
      'aboutMe': 'About me',
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'references': 'References',
      'contact': 'Contact',
    }
  }

  landingPage: { [key: string]: { [key: string]: string } } = {
    'de': {
      'contactMe': 'Kontaktiere mich!',
      'scroll': 'Scroll weiter'
    },
    "en": {
      'contactMe': 'Let\'s talk!',
      'scroll': 'Scroll down'
    }
  }

  aboutMe: { [key: string]: { [key: string]: string } } = {
    'de': {
      'aboutMe': 'Über mich',
      'intro': 'Hi, ich bin Jan, Fullstack Developer aus der Rhein-Neckar-Region. Ich liebe es, visuell ansprechende Frontends zu entwickeln und sie mit technisch robusten Systemen zu verbinden. Die grenzenlosen Möglichkeiten in der IT motivieren mich jeden Tag, neue, durchdachte Lösungen zu schaffen.',
      'location': 'Ich bin flexibel in der Arbeitsweise. Ob im Büro in der Region Mannheim/Heidelberg oder remote: Ich arbeite dort, wo das Team am produktivsten ist. Klare Abläufe und Raum für fokussiertes Arbeiten sind mir dabei am wichtigsten.',
      'development': 'Meine solide Basis liegt im modernen Frontend Development. Durch meine Erweiterung auf Fullstack habe ich gelernt, Anwendungen von der Datenbank bis zur Oberfläche zu konzipieren. Ich suche ständig nach Herausforderungen, um mein Wissen und meine Fähigkeiten zu erweitern.',
      'innovation': 'Programmieren ist für mich mehr als Code schreiben: Es ist eine kreative Methode zur Problemlösung. Ich bin stolz darauf, komplexe technische Herausforderungen in einfache, benutzerfreundliche Lösungen zu verwandeln, die Ihre Ideen zum Leben erwecken.'
    },
    'en': {
      'aboutMe': 'About me',
      'intro': 'Hi, I\'m Jan, a Fullstack Developer from the Rhine-Neckar region. I love creating visually appealing frontends and connecting them with technically robust systems. The endless possibilities in IT motivate me every day to build new, well-conceived solutions.',
      'location': 'I\'m flexible in my approach. Whether onsite in the Mannheim/Heidelberg area or remote: I work where the team is most productive. Clear processes and space for focused work are what matters most to me.',
      'development': 'My solid foundation is in modern Frontend Development. By expanding to Fullstack, I have learned to design applications from the database to the interface. I am always looking for challenges to expand my knowledge and further develop my skills.',
      'innovation': 'For me, coding is more than just writing code: it\'s a creative approach to problem-solving. I take pride in transforming complex technical challenges into simple, user-friendly solutions that bring your ideas to life.'
    }
  }


  skills: { [key: string]: { [key: string]: string } } = {
    'de': {
      'skills': 'Meine Skills',
      'experience': 'Ich bringe die Erfahrung mit, Projekte von A bis Z erfolgreich umzusetzen. Meine Stärke liegt in der Entwicklung robuster Fullstack-Architekturen, vom stabilen Backend (Django/Python) bis zum modernen Frontend (Angular/TypeScript). Für mich zählt dabei der technische Erfolg genauso wie das gemeinsame Erreichen der Teamziele.',
      'search': 'Auf der Suche nach',
      'searchHighlight': 'anderen Skills',
      'find': 'Kontaktieren Sie mich gerne. Ich freue mich darauf, mein Wissen weiter auszubauen.',
      'button': 'Jetzt anfragen',
      'continue': 'Wissen erweitern',
      'focus': 'Zukunftsthemen',
    },
    "en": {
      'skills': 'My skills',
      'experience': 'I bring the experience to successfully implement projects from start to finish. My strength lies in developing robust fullstack architectures, from a stable backend (Django/Python) to a modern frontend (Angular/TypeScript). For me, technical success matters just as much as achieving team goals together**.',
      'search': 'Looking for',
      'searchHighlight': 'another skill',
      'find': 'Feel free to reach out. I am looking forward to expanding my knowledge further.',
      'button': 'Get in Touch',
      'continue': 'Continue Learning',
      'focus': 'Future Focus',
    }
  }

  portfolio: { [key: string]: { [key: string]: string } } = {
    'de': {
      'intro': 'Dieser Bereich bietet einen Einblick in eine Auswahl an Projekten, die meine Fähigkeiten über den gesamten Stack zeigen. Ich lege Wert auf die erfolgreiche Umsetzung von Systemen, bei denen die technische Architektur und eine nutzerfreundliche Experience Hand in Hand gehen.',
      'headerDone': 'Abgeschlossene Projekte',
      'headerCurrent': 'Aktuelle Projekte',
      'headerFuture': 'Geplante Projekte',
    },
    "en": {
      'intro': 'This section provides insight into a selection of projects that showcase my capabilities across the entire stack. I focus on the successful implementation of systems where the technical architecture and a user-friendly experience go hand in hand.',
      'headerDone': 'Completed Projects',
      'headerCurrent': 'Current Projects',
      'headerFuture': 'Future Projects',
    }
  }

  references: { [key: string]: { [key: string]: string } } = {
    'de': {
      'references': 'Erfolgreiche Referenzen',
      'view': 'Ansehen',
    },
    "en": {
      'references': 'Successful references',
      'view': 'View',
    }
  }

  contact: { [key: string]: { [key: string]: string } } = {
    'de': {
      'contact': 'Kontakt',
      'introHeadline': 'Eine Herausforderung, die gemeistert werden soll?',
      'introText': 'Sie können mich gerne über dieses Formular kontaktieren. Ich bin offen für neue Ideen und bereit, meine Fähigkeiten in Projekte einzubringen.',
      'introFinal': 'Auf der Suche nach einem Frontend-Entwickler?',
      'introFinalStrong': 'Kontaktieren Sie mich!',
      'placeholderName': 'Ihr Name',
      'placeholderEmail': 'Ihre E-Mail',
      'placeholderMessage': 'Ihre Nachricht',
      'privacy1': 'Ich habe die',
      'privacyLink': 'Datenschutzerklärung',
      'privacy2': 'gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.',
      'button': 'Nachricht senden',
      'errorName': 'Bitte geben Sie Ihren Namen ein.',
      'errorEmail': 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      'errorText': 'Bitte geben Sie eine Nachricht ein.',
      'errorPrivacy': 'Bitte stimmen Sie der Datenschutzerklärung zu.',
      'dialog': 'Ihre Nachricht wurde erfolgreich gesendet.',
    },
    "en": {
      'contact': 'Contact',
      'introHeadline': 'Facing a challenge that needs solving?',
      'introText': 'Feel free to contact me via this form. I\'m open to new ideas and ready to bring my skills to your projects.',
      'introFinal': 'Looking for a Frontend developer?',
      'introFinalStrong': 'Contact me!',
      'placeholderName': 'Your Name',
      'placeholderEmail': 'Your email',
      'placeholderMessage': 'Your message',
      'privacy1': 'I\'ve read the',
      'privacyLink': 'privacy policy',
      'privacy2': 'and agree to the processing of my data as outlined.',
      'button': 'Send message',
      'errorName': 'Please enter your name.',
      'errorEmail': 'Please enter a valid email address.',
      'errorText': 'Please enter a message.',
      'errorPrivacy': 'Please agree to the privacy policy.',
      'dialog': 'Your message has been sent successfully.',
    }
  }

  footer: { [key: string]: { [key: string]: string } } = {
    'de': {
      'imprint': 'Impressum',
    },
    "en": {
      'imprint': 'Legal Notice',
    },
  }


  constructor() { }


  getBrowserLanguage(): string {
    const browserLanguages = navigator.languages ? navigator.languages : [navigator.language];
    const language = browserLanguages[0].split('-')[0] === 'de' ? 'de' : 'en';
    sessionStorage.setItem('lang', language);
    return language;
  }


  setLanguage(language: string) {
    this.language = language;
    sessionStorage.setItem('lang', language);
  }


}
