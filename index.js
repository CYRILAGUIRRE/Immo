document.body.onload = function () {
  nbr = 5;
  p = 0;
  container = document.getElementById("container");
  g = document.getElementById("left_carousel");
  d = document.getElementById("right_carousel");
  container.style.width = 100 * nbr + "vh";
  for (i = 1; i <= nbr; i++) {
    div = document.createElement("div");
    div.className = "photo";
    div.style.backgroundImage = "url(`#{$path-css}assets/img" + i + ".jpg`)";
    container.appendChild(div);
  }
};
