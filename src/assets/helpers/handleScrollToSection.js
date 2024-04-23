const handleScrollToSection = (id) => {
  const element = document.querySelector(`[data-vehicle='${id}']`);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
};

export default handleScrollToSection
