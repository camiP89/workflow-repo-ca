export const testFunction = () => {
  console.log("messy commit test");
};

export const isActivePath = (href, currentPath) => {
  if (href === "/") {
    return currentPath === "/" || currentPath === "/index.html";
  } else {
    return currentPath.includes(href);
  }
};
