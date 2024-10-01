// Creation de la liste des jeux à mettre dans le site web

const games = [
    { title: "League of Legends", developer: "Riot Games", image: "public/images/lol.jpg" },
    { title: "Minecraft", developer: "Mojang Studios", image: "public/images/minecraft.png" },
    { title: "Mario Bros", developer: "Nintendo", image: "public/images/supermariobros.jpg" },
    { title: "GTA 5", developer: "Rockstar Games", image: "public/images/gta.jpg" },
    { title: "FIFA 23", developer: "Electronic Arts", image: "public/images/fifa.jpg" },
    { title: "Tetris", developer: "Aleksei Pajitnov", image: "public/images/tetris.jpeg" },
    { title: "Pokemon Lune", developer: "Nintendo", image: "public/images/pokemon.jpg" }
];

// Fonction principale pour créer les jeux sur l'interface
// J'utilise w3.org pour prendre les images en svg des likes, vues

function createGameCard(game) {
    return `
        <div class="game-card"> 
            <img src="${game.image}" alt="${game.title}">
            <div class="game-info">
                <h3 class="game-title">${game.title}</h3>
                <p class="game-developer">${game.developer}</p>
                <div class="game-stats">
                    <span class="stat">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                        647
                    </span>
                    <span class="stat">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        4.2k
                    </span>
                </div>
            </div>
        </div>
    `;
}

// La fonction sera éxecuté directement aprés le chargement du site (DOMContentLoaded) et rajoutera dans la div gameGrid les jeux un à un

function createSite() {
    const gameGrid = document.getElementById('gameGrid');
    gameGrid.innerHTML = games.map(createGameCard).join('');
}

document.addEventListener('DOMContentLoaded', createSite);