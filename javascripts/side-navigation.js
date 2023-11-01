document.getElementById('nav-menu-button').addEventListener('click', function () {
    openNav();
  });

  document.getElementById('nav-close-button').addEventListener('click', function () {
    closeNav();
  });

  // Add an event listener for clicks on the document
  document.addEventListener('click', function (event) {
    const sideNav = document.getElementById('side-nav');
    const menuButton = document.getElementById('nav-menu-button');

    // Check if the click is not inside the navigation bar or the menu button
    if (event.target !== sideNav && event.target !== menuButton) {
      closeNav();
    }
  });

  function openNav() {
    var sideNav = document.getElementById('side-nav');
    sideNav.style.left = '0';
  }

  function closeNav() {
    var sideNav = document.getElementById('side-nav');
    sideNav.style.left = '-250px';
  }