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
      'aboutMe': 'Über mich',
      'intro': 'Hi, ich bin ein Frontend-Entwickler aus der Nähe von Mannheim und Heidelberg. Ich begeistere mich dafür, visuell ansprechende und benutzerfreundliche Websites und Anwendungen zu entwickeln. Die grenzenlosen Möglichkeiten in der IT motivieren mich, stetig dazuzulernen, einschließlich Fullstack- und Backend-Entwicklung, um mein Können zu erweitern.',
      'location': 'Flexibel in der Arbeitsweise, bin ich sowohl vor Ort im Raum Mannheim oder Heidelberg als auch remote effizient einsetzbar.',
      'development': 'Ich habe eine offene Einstellung und bin immer auf der Suche nach neuen Herausforderungen, die mir helfen, mein Wissen zu erweitern und meine Fähigkeiten weiterzuentwickeln.',
      'innovation': 'Bei meiner Arbeit ist Programmieren mehr als nur Code zu schreiben; es ist eine kreative Methode zur Problemlösung. Ich bin stolz darauf, komplexe technische Herausforderungen in einfache, benutzerfreundliche Lösungen zu verwandeln, die Ihnen helfen, Ihre Ziele zu erreichen und Ihre Ideen zum Leben zu erwecken.',
    },
    "en": {
      'aboutMe': 'About me',
      'intro': 'Hi, I\'m a Frontend Developer from the Mannheim and Heidelberg area. I am passionate about creating visually captivating and user-friendly websites and applications. Inspired by the endless possibilities in IT, I continuously strive to expand my knowledge, including Fullstack and Backend development, to enhance my skill set.',
      'location': 'Flexible in my approach, I can be effectively deployed both on-site in the Mannheim or Heidelberg area and remotely.',
      'development': 'I maintain an open-minded attitude and am always looking for new challenges that help me expand my knowledge and further develop my skills.',
      'innovation': 'In my work, programming is more than just writing code; it\'s a creative way to solve problems. I take pride in breaking down complex technical issues into simple, user-friendly       solutions that help you achieve your goals and bring your ideas to life.',
    }
  }


  skills: { [key: string]: { [key: string]: string } } = {
    'de': {
      'skills': 'Meine Skills',
      'experience': 'Ich habe Erfahrung in der Entwicklung von Projekten mit verschiedenen Frontend-Technologien und -Konzepten gesammelt. Außerdem habe ich erfolgreich im Team gearbeitet, um unsere Ziele zu erreichen.',
      'search': 'Auf der Suche nach',
      'searchHighlight': 'anderen Skills',
      'find': 'Gerne Kontakt aufnehmen. Ich freue mich darauf, mein Wissen weiter auszubauen.',
      'button': 'Jetzt anfragen',
      'continue': 'Wissen erweitern',
      'soon': 'In Kürze',
      'interest': 'Besondere Interessen in',

    },
    "en": {
      'skills': 'My skills',
      'experience': 'I have gained experience in developing projects with various frontend technologies and concepts. I have also successfully collaborated with teams to meet our objectives.',
      'search': 'Looking for',
      'searchHighlight': 'another skill',
      'find': 'Feel free to get in touch. I am looking forward to expanding my knowledge further.',
      'button': 'Get in Touch',
      'continue': 'Continue Learning',
      'soon': 'Coming soon',
      'interest': 'Special interests in',
    }
  }

  portfolio: { [key: string]: { [key: string]: string } } = {
    'de': {
      'intro': 'Dieser Bereich bietet einen Einblick in eine Auswahl an Projekten, die meine Fähigkeiten in der Frontend-Entwicklung verdeutlichen. Jedes Projekt ist ein Ausdruck technischer Fertigkeiten und kreativen Denkens, das darauf abzielt, benutzerfreundliche Erlebnisse zu schaffen. Die Portfolio-Seite selbst wurde mit Angular umgesetzt, um die Vorzüge und Möglichkeiten dieser modernen Technologie zu präsentieren.',
      'headerDone': 'Abgeschlossene Projekte',
      'headerCurrent': 'Aktuelle Projekte',
      'headerFuture': 'Geplante Projekte',
    },
    "en": {
      'intro': 'This section provides insight into a selection of projects that showcase my skills in frontend development. Each project reflects technical abilities and creative thinking aimed at creating user-friendly experiences. This portfolio site has been built using Angular to demonstrate the advantages and capabilities of this modern technology.',
      'headerDone': 'Done projects',
      'headerCurrent': 'Current projects',
      'headerFuture': 'Future projects',
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
      'introText': 'Kontakt mit mir kann über dieses Formular aufgenommen werden. Ich bin offen für neue Ideen und bereit, meine Fähigkeiten in Projekte einzubringen.',
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
      'introText': 'Contact with me can be made through this form. I\'m open to new ideas and ready to bring my skills to your projects.',
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


  constructor() {
    // if (window.location.search.includes('lang=')) {
    //   const language = window.location.search.split('lang=')[1];
    //   this.setLanguage(language);
    // } else this.getBrowserLanguage()
  }


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
