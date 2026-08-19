document.addEventListener('DOMContentLoaded', async () => {
    await getMatches();
});

// Si visualizzano tutti i Match
async function getMatches() {
    const container = document.querySelector('.matches .row');
    container.innerHTML = ''; 

    try {
        const response = await fetch('/api/matches');
        const matches = await response.json();

        matches.forEach((match) => {
            container.innerHTML += createMatch(match);
        });

        // Aggiungi event listener ai pulsanti "Elimina Match"
        container.addEventListener('click', deleteMatch);
    } catch (error) {
        console.error('Errore durante il caricamento dei match:', error);
        alert('Errore durante il caricamento dei match.');
    }
}

// Si crea un Match
function createMatch(match) {
    return `
        <div class="col-md-4">
            <div class="card mb-3">
                <img src="/asset/default.png" class="card-img-top" alt="${match.sport}">
                <div class="card-body">
                    <h5 class="card-title text-dark">${match.title}</h5>
                    <p class="card-text text-dark">${match.sport}</p>
                    <p class="text-muted">${match.date} Ore ${match.time} @ ${match.location}</p>
                    <div class="button-group mt-3">
                        <a href="/match.html?id=${match.id}" class="btn btn-primary w-100 mb-2">Visualizza Dettagli</a>
                        <button class="btn btn-danger w-100 delete-match" data-id="${match.id}">Elimina Match</button>
                    </div>
                </div>
            </div>
        </div>`;
}

// Si elimina un Match
async function deleteMatch(e) {
    if (!e.target.classList.contains('delete-match')) return;

    const matchId = e.target.getAttribute('data-id');

    if (confirm('Sei sicuro di voler eliminare questo match?')) {
        try {
            const deleteResponse = await fetch(`/api/matches/${matchId}`, {
                method: 'DELETE',
            });

            if (deleteResponse.ok) {
                alert('Match eliminato con successo!');
                await getMatches(); 
            } else {
                alert('Errore durante l\'eliminazione del match.');
            }
        } catch (error) {
            console.error('Errore durante l\'eliminazione del match:', error);
            alert('Errore durante l\'eliminazione del match.');
        }
    }
}
