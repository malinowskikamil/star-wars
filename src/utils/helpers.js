const time_to_refresh_in_minutes = 5;

export const createPersonIdentifier = ({ name = "", height = "", eye_color = "" }) =>
  `${name.toLowerCase().split(" ").join("_")}_${height}_${eye_color}`;

export const checkTimestamp = timestamp => (new Date().getTime() - timestamp) / 1000 > time_to_refresh_in_minutes * 60;
