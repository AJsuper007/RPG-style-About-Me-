function goTo(place) {
  const content = document.getElementById("content");
  switch (place) {
    case "castle":
      content.innerHTML = `
        <h2>🏰 The Castle</h2>
        <p>Here lies the origin of Andreas, a young code knight!</p>
        <p>He began his journey with HTML scrolls and CSS potions.</p>
      `;
      break;
    case "forest":
      content.innerHTML = `
        <h2>🌲 The Forest of Hobbies</h2>
        <p>In this forest, Andreas relaxes with games, music, and drawing.</p>
        <p>Sometimes, he builds tiny games in secret glades.</p>
      `;
      break;
    case "tower":
      content.innerHTML = `
        <h2>🧙 Wizard's Tower of Knowledge</h2>
        <p>Andreas has studied the ancient arts of JavaScript, Python, and Unity.</p>
        <p>The higher you climb, the harder the spells!</p>
      `;
      break;
    case "cave":
      content.innerHTML = `
        <h2>🕳️ Code Cave</h2>
        <p>Deep in this cave, you’ll find Andreas’ hidden GitHub repositories.</p>
        <p><a href="https://github.com/AJsuper007" target="_blank">Explore the treasure hoard!</a></p>
      `;
      break;
    default:
      content.innerHTML = "<p>It’s quiet here… too quiet.</p>";
  }
}
