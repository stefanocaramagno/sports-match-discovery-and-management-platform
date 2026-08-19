document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const matchData = {
        title: document.querySelector('#title').value,
        sport: document.querySelector('#sport').value,
        date: document.querySelector('#date').value,
        time: document.querySelector('#time').value,
        difficulty: document.querySelector('#difficulty').value,
        location: document.querySelector('#address').value,
    };

    const response = await fetch('/api/matches', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(matchData),
    });

    if (response.ok) {
        alert('Match creato con successo!');
        window.location.href = '/home.html';
    } else {
        alert('Errore durante la creazione del match.');
    }
});
