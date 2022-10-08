const increaseFontSize = document.querySelector(
    '.increase-font-size'
  );
  const decreaseFontSize = document.querySelector(
    '.decrease-font-size'
  );
  const textInput = document.querySelector('#text-input');
  
  const increaseFontSizeBy2px = () => {
    const style = window
      .getComputedStyle(textInput, null)
      .getPropertyValue('font-size');
    const currentSize = parseFloat(style);
    textInput.style.fontSize = `${currentSize + 2}px`;
  };
  
  const decreaseFontSizeBy2px = () => {
    const style = window
      .getComputedStyle(textInput, null)
      .getPropertyValue('font-size');
    const currentSize = parseFloat(style);
    textInput.style.fontSize = `${currentSize - 2}px`;
  };
  
  increaseFontSize.addEventListener('click', increaseFontSizeBy2px);
  decreaseFontSize.addEventListener('click', decreaseFontSizeBy2px);