export const createPersonIdentifier = ({ name = "", height = "", eye_color = "" }) =>
  `${name.toLowerCase().split(" ").join("_")}_${height}_${eye_color}`;
