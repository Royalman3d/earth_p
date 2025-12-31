import { location as LcS } from "../data/locations.js";

const slider = document.getElementById("locationSlide");
const sliderGuide = document.getElementById("slideGuide");
let currentIndex = 0;

LcS.forEach((local) => {
  const card = document.createElement("div");
  const guide = document.createElement("button");
  let stylings = ["w-3", "h-3", "bg-slate-400", "rounded-full"].forEach((tag) =>
    guide.classList.add(tag)
  );
  stylings = null;
  stylings = [
    "flex",
    "items-center",
    "h-96",
    "min-w-[20rem]",
    "md:min-w-[40rem]",
    "bg-white/20",
    "backdrop-blur-md",
    "border",
    "border-white/30",
    "p-4",
    "rounded-3xl",
    "shadow-xl",
  ].forEach((tag) => card.classList.add(tag));
  card.innerHTML = `
    <div class="h-full w-1/3 overflow-hidden rounded-2xl group">
            <img
              src=${local.img}
              alt=${local.name}
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                local.img ? "" : "hidden"
              }"
            />
          </div>
          <div
            class="flex-1 flex flex-col items-center justify-center p-6 space-y-4"
          >
            <h3 class="text-3xl font-black tracking-widest text-center">
              ${local.name}
            </h3>
            <p class="text-center text-sm font-light leading-relaxed">
              ${local.desc}
            </p>
            <a
              href="#"
              class="text-sm font-bold border-b-2 border-slate-900 pb-1 hover:text-teal-600 hover:border-teal-600 transition-all"
            >
              Start Expedition
              <i class="fas fa-external-link-alt ml-1 text-xs"></i>
            </a>
          </div>`;
  slider.append(card);
  sliderGuide.append(guide);
});

let slides = slider.children;
const guides = sliderGuide.children; // Get the dots

function updateDots() {
  Array.from(guides).forEach((dot, index) => {
    dot.classList.toggle("bg-slate-900", index === currentIndex);
    dot.classList.toggle("bg-slate-400", index !== currentIndex);
  });
}

function autoSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) currentIndex = 0;

  const slideWidth = slides[0].offsetWidth;
  slider.style.transform = `translateX(-${(currentIndex * slideWidth)+22}px)`;

  updateDots();
}

let slideInterval = setInterval(autoSlide, 3000);

// Fix the Event Listeners
const container = slider.parentElement;
container.addEventListener("mouseenter", () => clearInterval(slideInterval));
container.addEventListener("mouseleave", () => {
  clearInterval(slideInterval); // Clear to prevent double intervals
  slideInterval = setInterval(autoSlide, 3000);
});

// Initialize first dot
updateDots();


// fetch("https://www.dnd5eapi.co/api/monsters")
//   .then((response) => response.json())
//   .then((data) => console.log(data));