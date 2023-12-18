// Create a new SpeechSynthesisUtterance instance
let speech = new SpeechSynthesisUtterance();

// Array to store available voices
let voices = [];

// Select element to choose the voice
let voiceSelect = document.querySelector("select");

// Event listener for when the list of voices changes
window.speechSynthesis.onvoiceschanged = () => {
    // Update the array of voices
    voices = window.speechSynthesis.getVoices();

    // Set the voice of the speech synthesis to the first available voice
    speech.voice = voices[0];

    // Populate the voiceSelect dropdown with available voices
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

// Event listener for the button click
document.querySelector("button").addEventListener("click", () => {
    // Set the text to be spoken from the content of the textarea
    speech.text = document.querySelector("textarea").value;

    // Trigger the speech synthesis to speak the provided text
    window.speechSynthesis.speak(speech);
});
