const aboutBlock = document.querySelector('[data-about]');
const aboutButton = document.querySelector('[data-about-button]');

function showDescription() {
  aboutBlock.classList.toggle('about__description-wrapper--max');
}

export {aboutBlock, aboutButton, showDescription};
