document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('ticketForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const ticketCount = document.getElementById('ticketCount').value;
        const city = document.getElementById('city').value;

        // Используем alert() для отображения сообщения
        alert(`Спасибо, ${name}! Вы успешно купили ${ticketCount} билет(а/ов) на концерт в городе: ${city}. Подробности отправлены на ${email}.`);

        form.reset();
    });
});
   