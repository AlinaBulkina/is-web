document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('playlistForm');
    const moodSelect = document.getElementById('mood');
    const countInput = document.getElementById('count');

    // Загрузка параметров из LocalStorage при загрузке страницы
    if (localStorage.getItem('mood')) {
        moodSelect.value = localStorage.getItem('mood');
    }
    if (localStorage.getItem('count')) {
        countInput.value = localStorage.getItem('count');
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Предотвращаем перезагрузку страницы

        const mood = moodSelect.value;
        const count = parseInt(countInput.value, 10);

        // Сохраняем параметры в LocalStorage
        localStorage.setItem('mood', mood);
        localStorage.setItem('count', count);

        // Массив песен Земфиры
        const songs = {
            веселые: ["Привет, ромашки!", "СПИД", "Главное", "Хочешь", "Прогулка"],
            грустные: ["Река", "П.М.М.Л.", "Самолет", "Бесконечность", "Жить в твоей голове"],
            спокойные: ["жди меня", "Небомореоблака", "Lightbulbs", "Лондон", "Ах"],
            влюбленные: ["Мальчик", "Припевочка", "Мы разбиваемся", "Мачо", "Искала"]
        };

        const selectedSongs = songs[mood].slice(0, count);

        let resultHtml = `<table>
            <tr>
                <th>№</th>
                <th>Песня</th>
            </tr>`;

        selectedSongs.forEach((song, index) => {
            resultHtml += `
            <tr>
                <td>${index + 1}</td>
                <td>${song}</td>
            </tr>`;
        });

        resultHtml += '</table>';

        // Отображаем результат
        document.getElementById('resultContainer').innerHTML = resultHtml;
    });
});