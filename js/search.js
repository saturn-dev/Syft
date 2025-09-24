fetch('/json/games.json')
  .then(response => response.json())
  .then(data => {
    const games = [
      ...data.games,
      ...data.fnfGames,
      ...data.gbaGames,
      ...data.flashGames,
      ...data.papasGames
    ];

    const searchBox = document.getElementById('search-box');
    const searchResults = document.getElementById('search-results');
    let randomGameBtn = document.getElementById("randomGameBtn");

    randomGameBtn.addEventListener("click", function () {
        if (games.length === 0) return;

        const randomIndex = Math.floor(Math.random() * games.length);
        const selectedGame = games[randomIndex];
        const gameSlug = selectedGame.name.toLowerCase().replace(/\s+/g, "-").replace(/'/g, "");

        showNotification('Launching...', `Taking you to ${selectedGame.name}`, 2000, '#4ADE80');

        setTimeout(() => {
            window.location.href = `/play.html?game=${gameSlug}`;
        }, 3000);
    });

    searchBox.addEventListener('input', () => {
      const query = searchBox.value.toLowerCase();
      searchResults.innerHTML = '';

      if (query) {
        const filteredGames = games.filter(game => game.name.toLowerCase().includes(query));
        if (filteredGames.length > 0) {
          searchResults.style.display = 'block';
          filteredGames.forEach(game => {
            let slug = game.name.toLowerCase().replace(/\s+/g, "-").replace(/'/g, "");

            const link = document.createElement("a");
            link.href = `/play.html?game=${slug}`;
            link.classList.add('search-item');

            const img = document.createElement("img");
            img.src = `/images/game-images/thumbnails/${slug}.png`;
            img.alt = game.name;
            link.appendChild(img);

            const itemDetails = document.createElement("div");
            itemDetails.classList.add("item-details");

            const itemTitle = document.createElement("span");
            itemTitle.classList.add("item-title");
            itemTitle.textContent = game.name;
            itemDetails.appendChild(itemTitle);

            link.appendChild(itemDetails);
            searchResults.appendChild(link);
          });
        } else {
          searchResults.style.display = 'none';
        }
      } else {
        searchResults.style.display = 'none';
      }
    });
  })
  .catch(err => console.error('Error loading games data:', err));