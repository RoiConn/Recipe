document.addEventListener('DOMContentLoaded', function () {
  const textToType = '@CookingCode';
  const typingSpeed = 100; // in milliseconds
  const targetElement = document.getElementById('typing-effect');
  let charIndex = 0;

  function typeCharacter() {
    if (charIndex < textToType.length) {
      targetElement.innerHTML += textToType.charAt(charIndex);
      charIndex++;
      setTimeout(typeCharacter, typingSpeed);
    }
  }

  // Start the typing effect
  typeCharacter();
});
