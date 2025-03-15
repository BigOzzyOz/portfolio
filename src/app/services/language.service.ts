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
      'intro': 'Ich bin Jan, Frontend Entwickler aus der Rhein-Neckar-Region. Meine Stärke: digitale Lösungen, die technisch präzise sind und Menschen mühelos abholen. Für mich entsteht gelungene Software dort, wo Ästhetik und Funktionalität zusammenfinden.',
      'location': 'Ob im Büro vor Ort, im Homeoffice oder einer sinnvollen Kombination: Ich arbeite dort, wo das Team am produktivsten ist. Wichtiger als der Ort sind mir klare Abläufe und Raum für fokussiertes Arbeiten.',
      'development': 'Mein Fokus liegt auf modernem Frontend Development. Aktuell beginne ich, mich mit Backend Themen zu beschäftigen, um Systeme besser zu verstehen. Mein Ziel: Nicht alles können, aber Zusammenhänge erkennen.',
      'innovation': 'Ich schreibe Code, der heute funktioniert und morgen anpassbar bleibt. Mit klaren Strukturen für einfache Wartung und genug Flexibilität, um auf neue Anforderungen zu reagieren.'
    },
    'en': {
      'aboutMe': 'About me',
      'intro': 'I\'m Jan, a frontend developer from the Rhine-Neckar region. My strength: building digital solutions that are technically precise yet intuitively accessible. To me, great software emerges where aesthetics meet functionality.',
      'location': 'Whether onsite, remote, or a smart combination: I work where the team is most productive. More important than location to me are clear processes and space for focused work.',
      'development': 'My expertise lies in modern frontend development. I\'m currently starting to explore backend topics to better understand system architectures. My aim: Not to know everything, but to see how pieces connect.',
      'innovation': 'I write code that works today and adapts tomorrow. With clean structures for easy maintenance and enough flexibility to evolve with new requirements.'
    }
  }


  skills: { [key: string]: { [key: string]: string } } = {
    'de': {
      'skills': 'Meine Skills',
      'experience': 'Ich habe Erfahrung in der Entwicklung von Projekten mit verschiedenen Frontend-Technologien und -Konzepten gesammelt. Außerdem habe ich erfolgreich im Team gearbeitet, um unsere Ziele zu erreichen.',
      'search': 'Auf der Suche nach',
      'searchHighlight': 'anderen Skills',
      'find': 'Kontaktieren Sie mich gerne. Ich freue mich darauf, mein Wissen weiter auszubauen.',
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
      'find': 'Feel free to reach out. I am looking forward to expanding my knowledge further.',
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
