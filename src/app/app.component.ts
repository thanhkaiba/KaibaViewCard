import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  cards: string[] = [];


  render(value: string): void {
    value = value.replace('[', '').replace(']', '');
    this.cards = value.split(',').map(str => this.getCardDisplayId(+str));
  }

  getCardRank(id: number): number {
    return Math.floor(id / 4);
  }

  getCardSuit(id: number): number {
    return id % 4;
  }

  getCardDisplayId(id): string {

    const SuitName = {
      0: 'S',
      1: 'C',
      2: 'D',
      3: 'H',
    };

    const RankName = {
      0: '9',
      2: 'J',
      3: 'Q',
      4: 'K',
      10: 'T',
      11: 'A'
    };

    const rank = this.getCardRank(id);
    const suit = this.getCardSuit(id);
    return RankName[rank] + SuitName[suit];
  }
}
