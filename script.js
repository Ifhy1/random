const orbit = document.getElementById("orbit");
const body = document.body;

const themes = {
  magic: {
    items: [
      { src: "https://cdn-icons-png.flaticon.com/512/616/616408.png", label: "Star" },
      { src: "https://cdn-icons-png.flaticon.com/512/7993/7993907.png", label: "Wand" },
      { src: "https://cdn-icons-png.flaticon.com/512/1055/1055646.png", label: "Moon" },
      { src: "https://cdn-icons-png.flaticon.com/512/5333/5333040.png", label: "Crystal" },
      { src: "https://cdn-icons-png.flaticon.com/512/7641/7641727.png", label: "Spellbook" }
    ],
    background: "linear-gradient(145deg, #2e0066, #120033)"
  },
  love: {
    items: [
      { src: "https://cdn-icons-png.flaticon.com/512/833/833472.png", label: "Heart" },
      { src: "https://cdn-icons-png.flaticon.com/512/2589/2589175.png", label: "Rose" },
      { src: "https://cdn-icons-png.flaticon.com/512/254/254062.png", label: "Cupid" },
      { src: "https://cdn-icons-png.flaticon.com/512/747/747376.png", label: "Gift" },
      { src: "https://cdn-icons-png.flaticon.com/512/929/929564.png", label: "Letter" }
    ],
    background: "linear-gradient(145deg, #ffafbd, #ffc3a0)"
  },
  planet: {
    items: [
      { src: "https://cdn-icons-png.flaticon.com/512/427/427735.png", label: "Mercury" },
      { src: "https://cdn-icons-png.flaticon.com/512/427/427734.png", label: "Venus" },
      { src: "https://cdn-icons-png.flaticon.com/512/427/427733.png", label: "Earth" },
      { src: "https://cdn-icons-png.flaticon.com/512/427/427731.png", label: "Mars" },
      { src: "https://cdn-icons-png.flaticon.com/512/427/427730.png", label: "Jupiter" }
    ],
    background: "radial-gradient(circle, #0a0a2a, #000)"
  },
  feelgood: {
    items: [
      { label: "You’re doing great!" },
      { label: "You are enough 🌈" },
      { label: "Breathe. You got this." },
      { label: "Shine in your own way ✨" },
      { label: "Joy lives in little things 💛" }
    ],
    background: "linear-gradient(135deg, #f9d423, #ff4e50)"
  }
};

function setTheme(themeName) {
  orbit.innerHTML = "";
  const { items, background } = themes[themeName];
  body.style.background = background;

  const radius = 120;
  const cx = 150;
  const cy = 150;

  items.forEach((item, i) => {
    const angle = (2 * Math.PI / items.length) * i;
    const x = cx + radius * Math.cos(angle) - 30;
    const y = cy + radius * Math.sin(angle) - 30;

    const el = document.createElement("div");
    el.className = "item";
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;

    if (item.src) {
      const img = document.createElement("img");
      img.src = item.src;
      const label = document.createElement("div");
      label.className = "label";
      label.textContent = item.label;
      el.appendChild(img);
      el.appendChild(label);
    } else {
      const span = document.createElement("span");
      span.textContent = item.label;
      el.appendChild(span);
    }

    orbit.appendChild(el);
  });
}

setTheme("magic");
