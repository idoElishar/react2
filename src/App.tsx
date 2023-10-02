import React, { useState } from 'react';
import Card from './comp/Card';
import './App.css';

function App() {
  const [cardData, setCardData] = useState([
    {
      title: 'טיגריס',
      imageUrl: 'https://www.yo-yoo.co.il/coolpics/images/uploads/70f67c.jpeg',
      text: 'tigris walking on the beach',
    },
    {
      title: 'שמיים',
      imageUrl: 'https://www.mikmak.co.il/media/gallery/585/585447/main/585447_source.jpg',
      text: 'טקסט 2',
    },
    {
      title: 'חוף',
      imageUrl: 'https://www.photo-art.co.il/wp-content/uploads/2015/06/BY1A65881.jpg',
      text: 'טקסט 3',
    },
  ]);

  const [newCardTitle, setNewCardTitle] = useState('');
  const [newCardText, setNewCardText] = useState('');

  const handleAddCard = () => {
    if (newCardTitle && newCardText) {
      const newCard = {
        title: newCardTitle,
        text: newCardText,
        imageUrl: 'תמונה אישית',
      };

      setCardData([...cardData, newCard]);

      setNewCardTitle('');
      setNewCardText('');
    }
  };

  return (
    <div className="App">
      <div className="form">
        <input
          type="text"
          placeholder="כותרת"
          value={newCardTitle}
          onChange={(e) => setNewCardTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="טקסט"
          value={newCardText}
          onChange={(e) => setNewCardText(e.target.value)}
        />
        <button onClick={handleAddCard}>הוסף כרטיס</button>
      </div>
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          imageUrl={card.imageUrl}
          text={card.text}
        />
      ))}
    </div>
  );
}

export default App;
