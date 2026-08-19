document.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const matchId = params.get('id');
    console.log('ID del match dalla query string:', matchId);

    if (!matchId) {
        alert('Nessun match selezionato.');
        window.location.href = '/home.html';
        return;
    }

    try {
        const response = await fetch(`/api/matches/${matchId}`);
        console.log('Risultato della fetch:', response);

        if (!response.ok) {
            console.error(`Errore nella fetch: ${response.status} - ${response.statusText}`);
            throw new Error('Errore durante il recupero del match.');
        }

        const match = await response.json();
        console.log('Dati del match:', match);

        document.getElementById('breadcrumb-title').innerText = match.title;
        const detailsContainer = document.getElementById('match-details');
        detailsContainer.innerHTML = `
            <div class="col-md-6">
                <div class="p-3 border rounded">
                    <p class="text-muted mb-1">Titolo match</p>
                    <h5 class="fw-bold">${match.title}</h5>
                </div>
            </div>
            <div class="col-md-6">
                <div class="p-3 border rounded">
                    <p class="text-muted mb-1">Sport</p>
                    <h5 class="fw-bold">${match.sport}</h5>
                </div>
            </div>
            <div class="col-md-3">
                <div class="p-3 border rounded">
                    <p class="text-muted mb-1">Data</p>
                    <h5 class="fw-bold">${match.date}</h5>
                </div>
            </div>
            <div class="col-md-3">
                <div class="p-3 border rounded">
                    <p class="text-muted mb-1">Ora</p>
                    <h5 class="fw-bold">${match.time}</h5>
                </div>
            </div>
            <div class="col-md-3">
                <div class="p-3 border rounded">
                    <p class="text-muted mb-1">Difficoltà</p>
                    <h5 class="fw-bold">${match.difficulty}</h5>
                </div>
            </div>
            <div class="col-md-3">
                <div class="p-3 border rounded">
                    <p class="text-muted mb-1">Indirizzo</p>
                    <h5 class="fw-bold">${match.location}</h5>
                </div>
            </div>`;
    } catch (error) {
        console.error('Errore nel recuperare i dettagli del match:', error);
        alert('Errore nel recuperare i dettagli del match.');
    }
});
