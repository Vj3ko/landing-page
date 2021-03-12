
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
      threshold: 0.2, // from 0 - 1 meaning from 0%-100% . it can either be just 1 number or an array of numbers
      rootMargin: "0px 0px 0px 0px", // margins like in css when we pass observed section +100px
};

const appearOnScroll = new IntersectionObserver(function (
      entries,
      appearOnScroll
) {
      entries.forEach(entry => {
            if (!entry.isIntersecting) {
                  return;
            } else {
                  entry.target.classList.add("appear");
                  appearOnScroll.unobserve(entry.target);
            }
      })
},
      appearOptions);

faders.forEach(fader => {
      appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
      appearOnScroll.observe(slider);
});
