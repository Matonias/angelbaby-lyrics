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

const searchInput = document.getElementById('searchLyrics');
const verses = document.querySelectorAll('.lyrics .verse p, .lyrics .chorus p');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    verses.forEach(verse => {
        if (verse.textContent.toLowerCase().includes(query)) {
            verse.style.backgroundColor = '#ffff99'; // Highlight matching lines
        } else {
            verse.style.backgroundColor = 'transparent';
        }
    });
});

const darkModeButton = document.getElementById('toggleDarkMode');

darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.container').classList.toggle('dark-mode');
    document.querySelector('.translation').classList.toggle('dark-mode');
    darkModeButton.textContent = document.body.classList.contains('dark-mode') ? 'Disable Dark Mode' : 'Enable Dark Mode';
});
