
  const menuButtonSelector = ".btn-toggle-menu";
  const menuPanelSelector = ".main-nav";
  const classToToggle = "main-nav-hidden";
  
  const toggleHandler = () => {
    document.querySelector(menuPanelSelector).classList.toggle(classToToggle);
  };
  document
    .querySelector(menuButtonSelector)
    .addEventListener("click", toggleHandler);
  const hideMenu = () => {
    document.querySelector(menuPanelSelector).classList.add(classToToggle);
  };