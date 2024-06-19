// helpers/VoiceRecognition.js

export function setupVoiceRecognition() {
    // Escuchar el evento de hover sobre los iconos
    document.querySelectorAll('.icon-container').forEach(iconContainer => {
      iconContainer.addEventListener('mouseenter', () => {
        const iconName = iconContainer.getAttribute('title'); // Obtener el nombre del icono desde el atributo title
  
        // Lógica para interactuar con la API de reconocimiento de voz y síntesis de voz
        if (iconName) {
          // Llamar a la función que envía el comando de voz para reproducir el nombre del icono
          speak(iconName);
        }
      });
    });
  }
  
  // Función para hablar utilizando la API de síntesis de voz
  function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  }
  