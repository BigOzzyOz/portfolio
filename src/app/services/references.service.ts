import { Injectable } from '@angular/core';
import { References } from '../interfaces/references';

@Injectable({
  providedIn: 'root'
})
export class ReferencesService {

  references: References[] = [
    {
      name: 'V. Schuster - Team Partner',
      ref: 'Michael really kept the team together with his great organization and clear communication. We wouldn\'t have got this far without his commitment.',
      img: 'assets/img/schuster.png'
    },
    {
      name: 'E.Eichinger - Team Partner',
      ref: 'Michi was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.',
      img: 'assets/img/eichinger.png'
    },
    {
      name: 'I.Nuber - Frontend Engineer',
      ref: 'It was a great pleasure to work with Michael. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm. Regarding the well-being of group members, he was always present and available to listen and help others, with a great sense of humor as well.',
      img: 'assets/img/nuber.png'
    }
  ]

  constructor() { }
}
