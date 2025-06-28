const orbit = document.getElementById("orbit");
const body = document.body;
const centerIcon = document.getElementById("center-icon");

const themes = {
  magic: {
    icon: "🔮",
    items: [
      { src: "https://cdn-icons-png.flaticon.com/512/616/616408.png", label: "Puppy" },
      { src: "https://cdn-icons-png.flaticon.com/512/1055/1055646.png", label: "Space" },
      { src: "https://cdn-icons-png.flaticon.com/512/5323/5323944.png", label: "Potion" },
      { src: "https://cdn-icons-png.flaticon.com/512/5333/5333040.png", label: "Crystal" },
      { src: "https://cdn-icons-png.flaticon.com/512/11899/11899007.png", label: "Spellbook" }
    ],
    background: "radial-gradient(circle at 30% 30%, #1a0142, #050018)"
  },
  love: {
    icon: "💖",
    items: [
      { src: "https://cdn-icons-png.flaticon.com/512/833/833472.png", label: "Heart" },
      { src: "https://cdn-icons-png.flaticon.com/512/2589/2589175.png", label: "Rose" },
      { src: "https://cdn-icons-png.flaticon.com/512/3601/3601573.png", label: "Love Letter" },
      { src: "https://cdn-icons-png.flaticon.com/512/7641/7641726.png", label: "Kiss" },
      { src: "https://cdn-icons-png.flaticon.com/512/929/929564.png", label: "Hug" }
    ],
    background: "linear-gradient(145deg, #ff9a9e, #fad0c4)"
  },
  planet: {
    icon: "🪐",
    items: [
      { src: "https://cdn-icons-png.flaticon.com/512/427/427735.png", label: "Mercury" },
      { src: "https://cdn-icons-png.flaticon.com/512/427/427734.png", label: "Venus" },
      { src: "https://cdn-icons-png.flaticon.com/512/427/427733.png", label: "Earth" },
      { src: "https://cdn-icons-png.flaticon.com/512/427/427731.png", label: "Mars" },
      { src: "https://cdn-icons-png.flaticon.com/512/427/427730.png", label: "Jupiter" }
    ],
    background: "radial-gradient(circle at center, #0d1b2a, #000000)"
  },
  feelgood: {
    icon: "💫", 
    items: [
      { label: "Joy lives in little things sometimes🌟" },
      { label: "Keep glowing ✨" },
      { label: "You got this 💪" },
      { label: "Shine today 💖" },
      { label: "Smile more 😊" }
    ],
    background: "linear-gradient(135deg, #1f4037, #99f2c8)"
  }
};

function setTheme(themeName) {
  orbit.innerHTML = "";
  const { items, background, icon } = themes[themeName];
  body.style.background = background;
  centerIcon.textContent = icon;

  const radius = 140;
  const cx = 160;
  const cy = 160;

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
      span.className = "label";
      span.textContent = item.label;
      el.appendChild(span);
    }

    orbit.appendChild(el);
  });
}

// Default load
setTheme("magic");
