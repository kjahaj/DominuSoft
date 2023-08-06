function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'none') {
      menu.style.display = 'flex';
    } else {
      menu.style.display = 'none';
    }
  }
  
  function scrollToServices(event) {
    event.preventDefault();
    const servicesSection = document.getElementById("services");
    servicesSection.scrollIntoView({ behavior: "smooth" });
  }