import { Injectable } from '@angular/core';
import { References } from '../interfaces/references';

@Injectable({
  providedIn: 'root'
})
export class ReferencesService {

  references: References[] = [
    {
      name: {
        'de': 'D. Hofer - Team Mitglied',
        'en': 'D. Hofer - Team Member'
      },
      ref: {
        'de': 'In unserem gemeinsamen Softwareprojekt konnte ich die Fähigkeiten von Jan hautnah erleben. Er hat stets kreative Lösungen für Herausforderungen gefunden, was maßgeblich zur Effizienz unseres Projekts beigetragen hat. Besonders beeindruckt hat mich sein Engagement, auch über die eigenen Aufgaben hinaus zu denken und das Team aktiv zu unterstützen. Seine positive Einstellung und Teamfähigkeit haben eine motivierende Atmosphäre geschaffen, die uns allen geholfen hat, unsere Ziele zu erreichen.',
        'en': 'In our collaborative software project, I was able to experience Jan\'s skills firsthand. He consistently found creative solutions to challenges, which significantly contributed to the efficiency of our project. I was particularly impressed by his dedication to thinking beyond his own tasks and actively supporting the team. His positive attitude and teamwork created a motivating atmosphere that helped all of us achieve our goals.'
      },
      img: 'assets/icons/male-avatar.svg'
    },
    {
      name: {
        'de': 'S. Grossniklaus - ehemalige Vorgesetzte',
        'en': 'S. Grossniklaus - Former Manager'
      },
      ref: {
        'de': 'Jan zeichnete sich durch seine strukturierte und lösungsorientierte Arbeitsweise aus. Auch in herausfordernden Situationen bewahrte er stets den Überblick und entwickelte effiziente Lösungen. Sein Engagement und sein vorausschauendes Denken trugen maßgeblich dazu bei, dass unsere Abläufe reibungslos und effektiv gestaltet wurden. Jan überzeugte durch Zuverlässigkeit und Eigeninitiative.',
        'en': 'Jan was distinguished by his structured and solution-oriented approach to work. Even in challenging situations, he always maintained an overview and developed efficient solutions. His commitment and proactive thinking significantly contributed to ensuring that our processes were smooth and effective. Jan impressed with his reliability and initiative.'
      },
      img: 'assets/icons/female-avatar.svg'
    },
    {
      name: {
        'de': 'M. Schmitt - Ehemaliger Arbeitskollege',
        'en': 'M. Schmitt - Former colleague'
      },
      ref: {
        'de': 'Jan hat mir bei mehreren technischen Herausforderungen geholfen, die in meinem Arbeitsalltag aufgetreten sind. Er hat dabei immer schnell und effizient Lösungen gefunden, die weit über meine Erwartungen hinausgingen. Besonders beeindruckt hat mich sein analytisches Denken und die Fähigkeit, komplexe Probleme einfach und verständlich zu erklären. Dank seiner Unterstützung konnte ich meine Arbeitsabläufe erheblich verbessern.',
        'en': 'Jan helped me with several technical challenges that arose in my daily work. He always found quick and efficient solutions that exceeded my expectations. I was particularly impressed by his analytical thinking and his ability to explain complex problems in a simple and understandable way. Thanks to his support, I was able to significantly improve my workflows.'
      },
      img: 'assets/icons/male-avatar.svg'
    }
  ]

  constructor() { }
}
