/* eslint-disable functional/immutable-data */
/* eslint-disable functional/no-let */

export const createDeck = (): string[] => {
  const cardDeck: string[] = [];
  const suits: Record<number, string> = { 0: 'S', 1: 'H', 2: 'C', 3: 'D' };
  const specialCards: Record<number, string> = {
    1: 'A',
    10: 'T',
    11: 'J',
    12: 'Q',
    13: 'K',
  };
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 13; j++) {
      const firstPart: string = specialCards[j + 1] ?? j + 1;
      cardDeck.push(`${firstPart}${suits[i]}`);
    }
  }
  return cardDeck;
};

export const shuffleDeck = (cardDeck: string[]): string[] => {
  for (let i = 0; i < 25; i++) {
    const cardIndex = getRandomNumber(1, 51);
    const removedCards = cardDeck.splice(cardIndex, 1);
    cardDeck.push(...removedCards);
  }
  return cardDeck;
};

export const deal = (cardDeck: string[], numCards: number): string[] => {
  return cardDeck.splice(0, numCards);
};

export const points = (hand: string[]): number => {
  // const aceCards = hand.filter((card) => card.indexOf('A') === 0);
  const otherCards = hand.filter((card) => card.indexOf('A') === -1);
  const tenPointCards = ['T', 'J', 'Q', 'K'];
  return otherCards.reduce((acc: number, currentValue: string) => {
    if (tenPointCards.includes(currentValue.charAt(0))) {
      return acc + 10;
    } else {
      return acc + parseInt(currentValue.charAt(0));
    }
  }, 0);
};

const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
