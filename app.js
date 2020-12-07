M.AutoInit();

anime({
  targets: ".starIMG",
  rotate: 360,
  duration: 3000,
  opacity: [0, 1],
  scale: [0, 1],
  easing: "easeInOutExpo",
});

anime({
  targets: ".morning",
  translateX: -450,
  opacity: [1, 0],
  direction: "reverse",
  easing: "easeInOutSine",
});

anime({
  targets: ".star",
  translateX: 450,
  opacity: [1, 0],
  direction: "reverse",
  easing: "easeInOutSine",
});

anime({
  targets: ".slogan",
  translateX: -450,
  opacity: [1, 0],
  direction: "reverse",
  delay: 3000,
  duration: 7000,
  easing: "easeInOutExpo",
});
