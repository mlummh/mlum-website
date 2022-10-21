const data = async () => (await (await fetch('https://api.minehut.com/server/5a43d1ee1988867f8467f413')).json()).server;

(loop = async () => {
  let currentData = await data();
  document.getElementById('playerCount').innerText = currentData.playerCount;
  setTimeout(loop, 10000);
})();
