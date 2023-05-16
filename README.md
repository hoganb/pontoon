# pontoon

Pontoon is a card game often played at casinos. The purpose of the game is to beat the house by having a number of points greater than the house but not above 21.

## Game rules

- The game is played with a standard 52-card deck
- The are 4 suits in the deck: clubs ♣, diamonds ♦, hearts ♥ and spades ♠
- The values of the cards are: Ace, numbers 2 to 10, Jack, Queen, King

## Exercise

Implementation notes:

- Write the functions below so that they can be tested independently
- Write unit tests for each of the functions

## Requirements

1. CREATE THE DECK

   - Write a function which creates a deck of 52 cards by combining suits and values
   - Represent the deck as an array
   - Encode each card as a string like “{value}{suit}”. For example:
     - “AS”: Ace of Spades
     - “2H”: 2 of Hearts
     - “KC”: King of Clubs
     - “TD”: Ten of Diamonds (note the use of “T” for Ten to avoid using a 2-digit number)

2. SHUFFLE THE DECK

   - Write a function which shuffles the deck
   - It accepts the deck as input and returns a shuffled deck with cards in random order

3. DEAL A HAND OF CARDS

   - Write a function which deals N cards
   - It should take as input:
     - The deck
     - A positive integer number N (N <= 52)
   - It should return an array of N number of cards (called a “hand”) from the top of the deck
   - It should mutate the deck by removing those cards from the deck

4. COMPUTE THE POINTS

   - Write a function which computes the points in a hand
   - The points of the cards are:
     - 10 for face cards (Jack, Queen, King)
     - The numeric value for the numeric cards 2 through 10
   - For aces
     - If the current value of the hand is <= 10, then the Ace has value 11
     - Otherwise, the Ace has value 1
   - Examples:
     - [“AC”, “2S”] = 13
     - [“5D”, “TH”] = 15
     - [“AH”, “AS”] = 12

5. 🏆[bonus] PLAY PONTOON
   - Write a function which deals a 2-card hand to “player 1” and another to “player 2” and determines the winner
   - Deal the 2 hands from the same shuffled deck, using the functions created previously
   - Compute the points in each hand
   - The winner is the player with the highest number of points
   - Return a string “p1” in case player 1 wins, “p2” in case player 2 wins
   - In case of a tie, the result is called “push” and the function should return this value
