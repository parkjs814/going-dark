export const [
  DIVIDER,
  ROCK0,
  ROCK1,
  ROCK2,
  TREE,
  TOWER,
  JAIL,
  KEY,
  BORDER_TOP,
  BORDER_BOTTOM,
  BORDER_LEFT,
  BORDER_RIGHT,
  BORDER_TOP_LEFT,
  BORDER_TOP_RIGHT,
  BORDER_BOTTOM_LEFT,
  BORDER_BOTTOM_RIGHT,
] = new Array(31).fill(0).map((_, i) => 1 << i);
