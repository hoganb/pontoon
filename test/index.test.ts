import { createDeck, deal, points, shuffleDeck } from '../src';

describe('createDeck', () => {
  it('creates a deck of 52 cards by combining suits and values', () => {
    expect(createDeck()).toEqual([
      'AS',
      '2S',
      '3S',
      '4S',
      '5S',
      '6S',
      '7S',
      '8S',
      '9S',
      'TS',
      'JS',
      'QS',
      'KS',
      'AH',
      '2H',
      '3H',
      '4H',
      '5H',
      '6H',
      '7H',
      '8H',
      '9H',
      'TH',
      'JH',
      'QH',
      'KH',
      'AC',
      '2C',
      '3C',
      '4C',
      '5C',
      '6C',
      '7C',
      '8C',
      '9C',
      'TC',
      'JC',
      'QC',
      'KC',
      'AD',
      '2D',
      '3D',
      '4D',
      '5D',
      '6D',
      '7D',
      '8D',
      '9D',
      'TD',
      'JD',
      'QD',
      'KD',
    ]);
  });
});

describe('shuffleDeck', () => {
  it('shuffles a deck', () => {
    const cardDeck = createDeck();
    expect(shuffleDeck(cardDeck)).not.toEqual(createDeck());
  });
});

describe('deal', () => {
  it('should deal a hand from the deck', () => {
    const cardDeck = createDeck();
    const cardDeckLength = cardDeck.length;
    expect(deal(cardDeck, 3)).toEqual(['AS', '2S', '3S']);
    expect(cardDeck.length).toEqual(cardDeckLength - 3);
    expect(deal(cardDeck, 3)).toEqual(['4S', '5S', '6S']);
    expect(cardDeck.length).toEqual(cardDeckLength - 6);
  });
});

describe('points', () => {
  it('should compute the points in a hand', () => {
    expect(points(['JD', '7C'])).toEqual(17);
    expect(points(['JD', '7C'])).toEqual(17);
  });
});
