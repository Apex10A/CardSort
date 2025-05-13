function cardSorts(cards) {
    const rankOrder = {
      2: 0,
      3: 1,
      4: 2,
      5: 3,
      6: 4,
      7: 5,
      8: 6,
      9: 7,
      10: 8,
      'Jack': 9,
      'Queen': 10,
      'King': 11
    };
  
    return [...cards].sort((a, b) => rankOrder[a] - rankOrder[b]);
  }
  
  let cards = [5, 2, 3, 2, 5, 6, 8, 'Jack', 'King', 'Queen'];
  
  const sortedCards = cardSorts(cards);
  
  console.log(sortedCards);
  