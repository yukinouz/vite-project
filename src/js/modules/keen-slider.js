import KeenSlider from "keen-slider";

export function keenSlider() {
  const sliderTarget = document.getElementById("js-slider");

  new KeenSlider(sliderTarget, {
    loop: true,
    slides: {
      origin: "center",
      perView: 4,
      spacing: 40,
    },
  });
}
