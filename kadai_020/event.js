const eventBtn = document.getElementById('btn');
const eventText = document.getElementById('text');

eventBtn.addEventListener('click', () => {
    eventText.textContent = 'ボタンをクリックしました'
});