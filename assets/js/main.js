/* ----- NAVIGATION BAR FUNCTION ----- */
    function myMenuFunction(){
      var menuBtn = document.getElementById("myNavMenu");

      if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
      } else {
        menuBtn.className = "nav-menu";
      }
    }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
    window.onscroll = function() {headerShadow()};

    function headerShadow() {
      const navHeader =document.getElementById("header");

      if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

      } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

      }
    }


/* ----- TYPING EFFECT ----- */
   var typingEffect = new Typed(".typedText",{
      strings : ["Ingeniero Informático","Desarrollador Full-Stack"],
      loop : true,
      typeSpeed : 100, 
      backSpeed : 80,
      backDelay : 2000
   })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
   const sr = ScrollReveal({
          origin: 'top',
          distance: '80px',
          duration: 2000,
          reset: true     
   })

  /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})
  

  /* -- PROJECT BOX -- */
  sr.reveal('.project-box',{interval: 200})

  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})

  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  


/* ----- CHANGE ACTIVE LINK ----- */
  
  const sections = document.querySelectorAll('section[id]')
  
  function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

      }  else {

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

      }
    })
  }

  window.addEventListener('scroll', scrollActive)

/** Download CV */

  function downloadCV() {
      var pathCV = 'https://drive.google.com/uc?export=download&id=1SVzLa_j74mxdS2QHvs_gKkqj6IYObVKU';
      var linkTemp = document.createElement('a');

      linkTemp.href = pathCV;
      linkTemp.target = '_blank';
      linkTemp.download = 'curriculum-JoseAngelDorado.pdf';
      document.body.appendChild(linkTemp);
      linkTemp.click();

      document.body.removeChild(linkTemp);
}

/** Google Meet */

  function scheduleMeeting() {
    window.open('https://joseangeldorado.youcanbook.me', '_blank');
  }

  // Add a click event to the button
  document.getElementById('scheduleMeetingBtn').addEventListener('click', scheduleMeeting);

/** Redirect Proyect */
function redirectProject(url) {
  window.location.href = url;
}

/** Translate */

var translations = {
  es: {
    language: "English",
    home: "Inicio",
    about: "Sobre mí",
    trajectory: "Trayectoria",
    projects: "Proyectos",
    contact: "Contacto",
    scheduleMeeting: "Programar Reunión",
    downloadCV: "Descargar CV",
    discoverMore: "Descubre Más",
    name: "José Ángel Dorado",
    developerDescription:
      "Soy un desarrollador web experimentado en la parte del backend, especializado en tecnologías como Python y Java. Siempre estoy actualizado con las últimas tendencias tecnológicas para garantizar que mis soluciones estén a la vanguardia.",
    aboutMe:
      "Hola, soy José Ángel, un apasionado desarrollador web con un historial comprobado de éxitos en proyectos personales y contribuciones notables en el desarrollo web de una importante cadena de hoteles. Mi dedicación y habilidades técnicas me han permitido destacarme en el campo, y siempre estoy listo para asumir nuevos desafíos.",
    footerText:
      "Todos los derechos reservados",
    paragraph1: 
      "Hola, soy José Ángel, un apasionado desarrollador web con un historial comprobado de éxitos en proyectos personales y contribuciones notables en el desarrollo web de una importante cadena de hoteles. Mi dedicación y habilidades técnicas me han permitido destacarme en el campo, y siempre estoy listo para asumir nuevos desafíos.",
    paragraph2: 
      "En mi carrera, he demostrado un enfoque proactivo y un razonamiento sólido, lo que me ha permitido enfrentar diversos problemas y encontrar soluciones efectivas. Soy conocido por mi capacidad para trabajar de manera independiente, asumir la responsabilidad y liderar iniciativas que generen un impacto positivo.",
    paragraph3: 
      "Además de mi experiencia técnica, me considero una persona creativa y versátil. Estoy constantemente explorando nuevas tecnologías y tendencias en el mundo del desarrollo web para asegurarme de estar al tanto de las últimas innovaciones. Mi enfoque flexible y mente abierta me permite adaptarme rápidamente a los cambios y encontrar soluciones innovadoras para los problemas que enfrento.",
    paragraph4: 
      "En mi trabajo anterior en el desarrollo web para una cadena de hoteles, contribuí significativamente al diseño y la implementación de soluciones web efectivas que mejoraron la experiencia del usuario y aumentaron la visibilidad en línea de la marca. Este logro me impulsó a embarcarme en mi propio proyecto personal, donde estoy aplicando mi experiencia para crear algo único y emocionante.",
    paragraph5: 
      "Mis habilidades no solo se limitan a la programación; también valoro y fomento un ambiente de trabajo colaborativo. Creo en la importancia de trabajar en equipo y compartir conocimientos para lograr resultados excepcionales. Mi actitud positiva y mi capacidad para comunicarme efectivamente hacen que sea fácil colaborar conmigo en proyectos complejos y desafiantes.",
    paragraph6: 
      "En resumen, soy un desarrollador web apasionado, orientado a resultados y listo para enfrentar cualquier desafío que se presente. Siempre estoy en busca de oportunidades emocionantes para seguir aprendiendo y creciendo en el mundo del desarrollo web.",
    databasesTitle: "Bases de datos",
    taxCapitalAsesoresTitle: "TAX Capital Asesores",
    taxCapitalAsesoresLocation: "Remoto",
    taxCapitalAsesoresJobTitle: "Full-Stack",
    taxCapitalAsesoresDescription: "Lideré un proyecto utilizando tecnologías como Django, Python, AWS, y MySQL, diseñando y desarrollando una aplicación web desde cero, destacando mi experiencia en la implementación de Leaflet para la generación de mapas interactivos. Además, inicié la creación de una aplicación móvil nativa de Android utilizando Kotlin.",
    sohoBoutiqueHotelsTitle: "Soho Boutique Hotels",
    sohoBoutiqueHotelsLocation: "Málaga",
    sohoBoutiqueHotelsJobTitle: "Webmaster",
    sohoBoutiqueHotelsDescription: "Me desempeñé como profesional especializado en la administración, mantenimiento y optimización de sitios web. Estuve colaborando en diversos proyectos, resolviendo problemas de manera eficiente y atendiendo incidencias con enfoque proactivo. Mi experiencia incluye el desarrollo de aplicaciones mediante Power Automate y Power Apps, así como el mantenimiento y normalización de bases de datos SQL Server.",
    universidadDeCordobaTitle: "Universidad de Córdoba",
    universidadDeCordobaLocation: "Córdoba",
    universidadDeCordobaJobTitle: "Ingeniería Informática",
    universidadDeCordobaDescription: "Durante mi etapa universitaria, me enfoqué en la ingeniería de software, colaborando en entornos ágiles con Scrum y Trello. Desarrollé habilidades en backend como Java, PHP o Python, y frontend con CSS, HTML y JavaScript. También gané experiencia en la gestión de bases de datos como MySQL o MongoDB. Esta formación sólida me preparó para abordar desafíos complejos con creatividad y eficacia.",
    universidadComplutenseDeMadridTitle: "Universidad Complutense de Madrid",
    universidadComplutenseDeMadridLocation: "Remoto",
    universidadComplutenseDeMadridJobTitle: "Desarrollo de Apps Móviles",
    universidadComplutenseDeMadridYear: "2022",
    universidadComplutenseDeMadridDescription: "En el curso, absorbiendo conocimientos y herramientas clave, exploré a fondo el desarrollo de aplicaciones móviles. Desde la creación de interfaces llamativas hasta la implementación de funciones dinámicas, adquirí habilidades esenciales que ahora me permiten dar vida a ideas innovadoras en el mundo de las apps móviles.",
    universidadDeAlicanteTitle: "Universidad de Alicante",
    universidadDeAlicanteLocation: "Remoto",
    universidadDeAlicanteJobTitle: "Introducción al Desarrollo Web",
    universidadDeAlicanteDescription: "En el curso de Introducción al Desarrollo Web, adquirí los fundamentos esenciales para construir experiencias web. Exploré conceptos clave y me sumergí en herramientas indispensables como HTML, CSS y JavaScript.",
    institutoNacionalDeCiberseguridadTitle: "Instituto Nacional de Ciberseguridad",
    institutoNacionalDeCiberseguridadLocation: "Remoto",
    institutoNacionalDeCiberseguridadJobTitle: "Ciberseguridad Teletrabajando",
    institutoNacionalDeCiberseguridadDescription: "En el curso de Ciberseguridad en el Teletrabajo, me sumergí en las estrategias esenciales para proteger la información en entornos remotos. Desde técnicas de prevención de amenazas hasta prácticas de seguridad digital, adquirí conocimientos sólidos para salvaguardar la integridad de los datos en el mundo del teletrabajo.",
    hogumaTitle: "Hoguma",
    hogumaDescription: "Aplicación web para la gestión de huéspedes de hotel",
    wordleTitle: "Wordle",
    wordleDescription: "Aplicación web del famoso juego de adivinar palabras",
    ucoDexTitle: "UcoDex",
    ucoDexDescription: "Aplicación móvil de una enciclopedia Pokémon",
    gestorDeCriticasTitle: "Gestor de críticas",
    gestorDeCriticasDescription: "Aplicación web de gestión de críticas",
    calculadoraTitle: "Calculadora",
    calculadoraDescription: "Aplicación de escritorio de una calculadora",
    editorTitle: "Editor",
    editorDescription: "Aplicación de escritorio de un editor de texto",
    adivinarRefranesTitle: "Adivinar refranes",
    adivinarRefranesDescription: "Juego de refranes mediante socket",
    tresEnRayaTitle: "Tres en Raya",
    tresEnRayaDescription: "Famoso juego del tres en raya mediante HTML, CSS y JavaScript",    
    contactSubtitle: "¿Tienes un proyecto en mente? ¡Contáctame desde aquí!",
    contactInfoTitle: "Mis datos",
    contactPhone: "Teléfono: 635 720 308",
    contactEmail: "Correo electrónico: doradojoseangel@gmail.com",
    contactFormTitle: "Envíame un mensaje",
    nombrePlaceholder: "Nombre",
    correoPlaceholder: "Correo electrónico",
    mensajePlaceholder: "Mensaje",
    contactSubmitButton: "Enviar",
    qualityTitle: "Calidad",
    qualityDescription: "Trabajos de alta calidad",
    innovationTitle: "Innovación",
    innovationDescription: "Ideas frescas",
    collaborationTitle: "Colaboración",
    collabotarionDescription: "Colaboramos para el éxito",
  },
  en: {
    language: "Español",
    home: "Home",
    about: "About Me",
    trajectory: "Trajectory",
    projects: "Projects",
    contact: "Contact",
    scheduleMeeting: "Schedule Meeting",
    downloadCV: "Download CV",
    discoverMore: "Discover More",
    name: "José Ángel Dorado",
    developerDescription:
      "I am an experienced backend web developer, specialized in technologies like Python and Java. I stay updated with the latest technological trends to ensure my solutions are at the forefront.",
    aboutMe:
      "Hello, I'm José Ángel, a passionate web developer with a proven track record of success in personal projects and significant contributions to web development for a major hotel chain. My dedication and technical skills have allowed me to stand out in the field, and I'm always ready for new challenges.",
    footerText:
      "All rights reserved",
    paragraph1: 
      "Hello, I'm José Ángel, a passionate web developer with a proven track record of success in personal projects and significant contributions to web development for a major hotel chain. My dedication and technical skills have allowed me to stand out in the field, and I'm always ready for new challenges.",
    paragraph2: 
      "In my career, I have demonstrated a proactive approach and solid reasoning, enabling me to tackle diverse problems and find effective solutions. I am known for my ability to work independently, take responsibility, and lead initiatives that have a positive impact.",
    paragraph3: 
      "In addition to my technical experience, I consider myself a creative and versatile person. I am constantly exploring new technologies and trends in the world of web development to ensure I stay informed about the latest innovations. My flexible approach and open mind allow me to adapt quickly to changes and find innovative solutions to the challenges I face.",
    paragraph4: 
      "In my previous work in web development for a hotel chain, I significantly contributed to the design and implementation of effective web solutions that improved the user experience and increased the brand's online visibility. This achievement inspired me to embark on my own personal project, where I am applying my experience to create something unique and exciting.",
    paragraph5: 
      "My skills are not limited to programming alone; I also value and promote a collaborative work environment. I believe in the importance of teamwork and knowledge-sharing to achieve exceptional results. My positive attitude and effective communication skills make it easy to collaborate with me on complex and challenging projects.",
    paragraph6: 
      "In summary, I am a passionate web developer, results-oriented, and ready to face any challenges that come my way. I am always on the lookout for exciting opportunities to continue learning and growing in the world of web development.",
    databasesTitle: "Databases",
    taxCapitalAsesoresTitle: "TAX Capital Asesores",
    taxCapitalAsesoresLocation: "Remote",
    taxCapitalAsesoresJobTitle: "Full-Stack",
    taxCapitalAsesoresDescription: 
      "I led a project using technologies such as Django, Python, AWS, and MySQL, designing and developing a web application from scratch. I highlighted my experience in implementing Leaflet for interactive map generation. Additionally, I initiated the creation of a native Android mobile application using Kotlin.",
    sohoBoutiqueHotelsTitle: "Soho Boutique Hotels",
    sohoBoutiqueHotelsLocation: "Málaga",
    sohoBoutiqueHotelsJobTitle: "Webmaster",
    sohoBoutiqueHotelsDescription: 
      "I worked as a specialized professional in the administration, maintenance, and optimization of websites. I collaborated on various projects, efficiently solving problems and addressing incidents with a proactive approach. My experience includes developing applications using Power Automate and Power Apps, as well as maintaining and normalizing SQL Server databases.",
    universidadDeCordobaTitle: "University of Córdoba",
    universidadDeCordobaLocation: "Córdoba",
    universidadDeCordobaJobTitle: "Computer Engineering",
    universidadDeCordobaYear: "2023",
    universidadDeCordobaDescription: 
      "During my university years, I focused on software engineering, collaborating in agile environments with Scrum and Trello. I developed skills in backend technologies such as Java, PHP, or Python, and frontend technologies with CSS, HTML, and JavaScript. I also gained experience in managing databases like MySQL or MongoDB. This solid education prepared me to tackle complex challenges with creativity and efficiency.",
    universidadComplutenseDeMadridTitle: "Complutense University of Madrid",
    universidadComplutenseDeMadridLocation: "Remote",
    universidadComplutenseDeMadridJobTitle: "Mobile App Development",
    universidadComplutenseDeMadridYear: "2022",
    universidadComplutenseDeMadridDescription: 
      "In the course, absorbing key knowledge and tools, I delved into mobile app development. From creating attractive interfaces to implementing dynamic features, I acquired essential skills that now enable me to bring innovative ideas to life in the world of mobile apps.",
    universidadDeAlicanteTitle: "University of Alicante",
    universidadDeAlicanteLocation: "Remote",
    universidadDeAlicanteJobTitle: "Introduction to Web Development",
    universidadDeAlicanteDescription: 
      "In the Introduction to Web Development course, I acquired essential foundations for building web experiences. I explored key concepts and immersed myself in indispensable tools like HTML, CSS, and JavaScript.",
    institutoNacionalDeCiberseguridadTitle: "National Institute of Cybersecurity",
    institutoNacionalDeCiberseguridadLocation: "Remote",
    institutoNacionalDeCiberseguridadJobTitle: "Teleworking Cybersecurity",
    institutoNacionalDeCiberseguridadDescription: 
      "In the Teleworking Cybersecurity course, I delved into essential strategies to protect information in remote environments. From threat prevention techniques to digital security practices, I acquired solid knowledge to safeguard data integrity in the teleworking world.",
    hogumaTitle: "Hoguma",
    hogumaDescription: "Web application for hotel guest management",
    wordleTitle: "Wordle",
    wordleDescription: "Web application of the famous word guessing game",
    ucoDexTitle: "UcoDex",
    ucoDexDescription: "Mobile application of a Pokémon encyclopedia",
    gestorDeCriticasTitle: "Review Manager",
    gestorDeCriticasDescription: "Web application for managing reviews",
    calculadoraTitle: "Calculator",
    calculadoraDescription: "Desktop application of a calculator",
    editorTitle: "Editor",
    editorDescription: "Desktop application of a text editor",
    adivinarRefranesTitle: "Guess the Proverbs",
    adivinarRefranesDescription: "Proverbs guessing game through socket",
    tresEnRayaTitle: "Tic-Tac-Toe",
    tresEnRayaDescription: "Famous game of tic-tac-toe implemented using HTML, CSS, and JavaScript",
    contactSubtitle: "Do you have a project in mind? Contact me from here!",
    contactInfoTitle: "My data",
    contactPhone: "Phone: 635 720 308",
    contactEmail: "Email: doradojoseangel@gmail.com",
    contactFormTitle: "Send me a message",
    nombrePlaceholder: "Name",
    correoPlaceholder: "Email",
    mensajePlaceholder: "Message",
    contactSubmitButton: "Send",
    qualityTitle: "Quality",
    qualityDescription: "High-quality work",
    innovationTitle: "Innovation",
    innovationDescription: "Fresh ideas",
    collaborationTitle: "Collaboration",
    collaborationDescription: "We collaborate for success",
  },
};

function updateTypedText(language) {
  if (typingEffect) {
    typingEffect.destroy();
  }

  var typedStrings = (language === 'es') ? ["Ingeniero Informático", "Desarrollador Full-Stack"] : ["Computer Engineer", "Full-Stack Developer"];

  typingEffect = new Typed(".typedText", {
    strings: typedStrings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
  });
}

// Change language
function toggleLanguage() {
  var currentLanguage = document.documentElement.lang || "es";
  var newLanguage = currentLanguage === "es" ? "en" : "es";

  document.documentElement.lang = newLanguage;
  updateContent(newLanguage);
  updateTypedText(newLanguage);
}

function updateContent(language) {
  var elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(function (element) {
    var key = element.getAttribute("data-i18n");
    if (translations[language] && translations[language][key]) {
      var translation = translations[language][key];

      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.setAttribute("placeholder", translation);
      } else {
        element.innerHTML = translation;
      }
    }
  });
}
