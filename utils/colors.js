const colorScheme = {
  mercury: "skyblue",
  venus: "gold",
  earth: "purple",
  mars: "redorange",
  jupiter: "crimson",
  saturn: "darkorange",
  uranus: "teal",
  neptune: "blue",
};

const returnColorScheme = (planetName) => {
  return colorScheme[planetName?.toLowerCase()];
};

export { returnColorScheme };
