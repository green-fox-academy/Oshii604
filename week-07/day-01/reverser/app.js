const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
const PORT = 3000;

app.post('/sith', (req, res) => {
  const { text } = req.body;
  const reversedTextArr = [];
  if (!text || text === '') {
    res.json({ error: 'Feed me some text you have to, padawan young you are. Hmmm.' });
  } else {
    const sentencesArr = text.split('. ');
    sentencesArr.forEach((sentence) => {
      sentence = sentence.replace('.', '');
      const wordsArr = sentence.split(' ');
      for (let i = 0; i < wordsArr.length; i += 2) {
        [wordsArr[i], wordsArr[i + 1]] = [wordsArr[i + 1], wordsArr[i]];
      }
      let reverseSentence = `${wordsArr.join(' ').toLowerCase()}.`;
      const letters = reverseSentence.split('');
      letters[0] = letters[0].toUpperCase();
      reverseSentence = letters.join('');
      reversedTextArr.push(reverseSentence);

      const randomWords = ['Arrgh.', 'Uhmm.', 'Err, err, err.', 'Hmmm.'];
      const oneOrTwo = Math.floor(Math.random() * 2) + 1;

      for (let i = 0; i < oneOrTwo; i++) {
        reversedTextArr.push(randomWords[Math.floor(Math.random() * randomWords.length)]);
      }
    });
    let reversedText = reversedTextArr.join(' ');
    reversedText = reversedText.replace(/ {2}/g, ' ');
    console.log(reversedText);
    res.json({ sith_text: reversedText });
  }
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
