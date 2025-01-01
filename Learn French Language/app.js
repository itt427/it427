// Get UI elements
const textArea = document.getElementById('text');
const speakBtn = document.getElementById('speakBtn');

// Initialize speech synthesis
const synth = window.speechSynthesis;
let utterance;

// Speak text
speakBtn.addEventListener('click', () => {
  const text = textArea.value;
  if (synth.speaking) {
    console.error('SpeechSynthesis is already speaking.');
    return;
  }
  if (text) {
    utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);

    utterance.onend = () => {
      console.log('Speech finished.');
    };
    utterance.onerror = (e) => {
      console.error('SpeechSynthesis error:', e);
    };
  }
});
