const data = async () => (await (await fetch('https://api.minehut.com/server/5a43d1ee1988867f8467f413')).json()).server;

(loop = async () => {
  let currentData = await data();

  document.getElementById('playerCount').innerText = currentData.playerCount;

  document.getElementById('players').innerHTML = '';
  for (const player of currentData.players) {
    document.getElementById('players').insertAdjacentHTML(
      'beforeend',
      `<img src="https://minotar.net/helm/${player.trim()}" alt="${player.trim()}" width="32" height="32">`
    );
  }

  setTimeout(loop, 10000);
})();
