const toggleButton = document.getElementById('toggleTranslation');
const translationDiv = document.getElementById('translation');

toggleButton.addEventListener('click', () => {
    if (translationDiv.classList.contains('show')) {
        translationDiv.classList.remove('show');
        translationDiv.classList.add('hide');
        toggleButton.textContent = 'Show Translation';
    } else {
        translationDiv.classList.remove('hide');
        translationDiv.classList.add('show');
        toggleButton.textContent = 'Hide Translation';
    }
});
