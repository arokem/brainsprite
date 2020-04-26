// bransprise viewer template for tempita
var brain = brainsprite(
  canvas: "{{canvas}}",
  sprite: "{{sprite}}",
  nbSlice: {
    X: {{X}},
    Y: {{Y}},
    Z: {{Y}}
  },
  overlay: {
    sprite: "{{sprite_overlay}}",
    nbSlice: {
      X: {{X_overlay}},
      Y: {{Y_overlay}},
      Z: {{Z_overlay}}
    },
    opacity: {{opacity}}
  },
  colorBackground: {{colorBackground}},
  colorFont: {{colorFont}},
  crosshair: {{crosshair}},
  affine: {{affine}},
  flagCoordinates: {{flagCoordinates}},
  title: {{title}},
  flagValue: {{flagValue}},
  numSlice: {
    X: {{X_num}},
    Y: {{Y_num}},
    Z':{{Z_num}}
  },
  colorMap: {
    img: {{img_colorMap}},
    min: {{min_colorMap}},
    max: {{max_colorMap}}
  }
);
