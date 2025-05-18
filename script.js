const mapContainer = document.getElementById('map-container');
const travelMap = document.getElementById('travel-map');
const markers = document.querySelectorAll('.marker');
const slideoutPanel = document.getElementById('slideout-panel');
const closePanelBtn = document.getElementById('close-panel');
const questTitle = document.getElementById('quest-title');
const questDescription = document.getElementById('quest-description');
const questAnimation = document.getElementById('quest-animation');
const compassNeedle = document.getElementById('compass-needle');

const quests = {
  "Mystic Forest": {
    title: "The Enchanted Grove",
    description: "Explore the ancient trees and uncover the secrets of the forest spirits. Beware of magical traps and hidden paths."
  },
  "Crystal Lake": {
    title: "The Shimmering Depths",
    description: "Dive into the crystal-clear waters to find lost treasures and encounter mysterious aquatic creatures."
  },
  "Dragon's Peak": {
    title: "The Fiery Summit",
    description: "Climb the perilous mountain to confront the legendary dragon and claim its hoard."
  },
  "Sunken Ruins": {
    title: "The Forgotten City",
    description: "Navigate the submerged ruins to discover forgotten lore and ancient artifacts."
  }
};

// Open slide-out panel with quest details
function openPanel(locationName) {
  const quest = quests[locationName];
  if (!quest) return;

  questTitle.textContent = quest.title;
  questDescription.textContent = quest.description;

  slideoutPanel.classList.add('open');
  slideoutPanel.setAttribute('aria-hidden', 'false');
}

// Close slide-out panel
function closePanel() {
  slideoutPanel.classList.remove('open');
  slideoutPanel.setAttribute('aria-hidden', 'true');
}

// Marker click event
markers.forEach(marker => {
  marker.addEventListener('click', () => {
    const locationName = marker.getAttribute('aria-label').replace('Location: ', '');
    openPanel(locationName);
  });
  marker.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const locationName = marker.getAttribute('aria-label').replace('Location: ', '');
      openPanel(locationName);
    }
  });
});

// Close panel button event
closePanelBtn.addEventListener('click', closePanel);

// Close panel on outside click
slideoutPanel.addEventListener('click', (e) => {
  if (e.target === slideoutPanel) {
    closePanel();
  }
});

// Parallax scrolling effect on mouse move
mapContainer.addEventListener('mousemove', (e) => {
  const rect = mapContainer.getBoundingClientRect();
  const offsetX = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
  const offsetY = ((e.clientY - rect.top) / rect.height - 0.5) * 20;

  travelMap.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
});

// Compass needle animation handled by CSS keyframes

// Initialize
function init() {
  // No additional initialization needed currently
}

init();
