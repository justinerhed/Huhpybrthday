const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const message = document.querySelector('.message');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'love din kita:)';
    question.style.fontSize = '40px';
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    message.style.display = 'block';
} )

noBtn.addEventListener('mouseover', () => {
    // Generate random horizontal (X) and vertical (Y) positions within the container
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    
    // Move the 'noBtn' element to the new random position
    noBtn.style.left = i + 'px'; // Set the left CSS property of 'noBtn'
    noBtn.style.top = j + 'px';  // Set the top CSS property of 'noBtn'

    
});