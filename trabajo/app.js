 /* =========================
     DATOS LOCALES (10 HÉROES)
  ========================== */
  const localHeroes = [
    {
      name: "Batman",
      biography: {
        "full-name": "Bruce Wayne",
        publisher: "DC Comics",
        aliases: ["El Caballero Oscuro"],
        "place-of-birth": "Gotham City",
        occupation: "Empresario"
      },
      powerstats: {
        intelligence: "100",
        strength: "26",
        speed: "27",
        combat: "100"
      },
      appearance: {
        height: ["188 cm"],
        weight: ["95 kg"]
      },
      connections: {
        "group-affiliation": "Liga de la Justicia"
      },
      image: {
        url: "https://th.bing.com/th/id/OIP.X4ANsAl8v06tDqYkRko_IwHaLP?w=118&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1"
      }
    },
    {
      name: "Superman",
      biography: {
        "full-name": "Clark Kent",
        publisher: "DC Comics",
        aliases: ["Hombre de Acero"],
        "place-of-birth": "Krypton",
        occupation: "Periodista"
      },
      powerstats: {
        intelligence: "94",
        strength: "100",
        speed: "100",
        combat: "85"
      },
      appearance: {
        height: ["191 cm"],
        weight: ["107 kg"]
      },
      connections: {
        "group-affiliation": "Liga de la Justicia"
      },
      image: {
        url: "https://th.bing.com/th/id/OIP.Gg2Hcr434Zt1MwK8pSpiFAHaM1?w=111&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1"
      }
    },
    {
      name: "Wonder Woman",
      biography: {
        "full-name": "Diana Prince",
        publisher: "DC Comics",
        aliases: ["Princesa Amazona"],
        "place-of-birth": "Themyscira",
        occupation: "Guerrera"
      },
      powerstats: {
        intelligence: "88",
        strength: "100",
        speed: "79",
        combat: "100"
      },
      appearance: {
        height: ["183 cm"],
        weight: ["74 kg"]
      },
      connections: {
        "group-affiliation": "Liga de la Justicia"
      },
      image: {
        url: "https://th.bing.com/th/id/OIP.HOioMcUGmB2xnFwWfnYR9AHaNK?w=115&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1"
      }
    },
    {
      name: "Spider-Man",
      biography: {
        "full-name": "Peter Parker",
        publisher: "Marvel Comics",
        aliases: ["Spidey"],
        "place-of-birth": "New York",
        occupation: "Fotógrafo"
      },
      powerstats: {
        intelligence: "90",
        strength: "55",
        speed: "67",
        combat: "85"
      },
      appearance: {
        height: ["178 cm"],
        weight: ["76 kg"]
      },
      connections: {
        "group-affiliation": "Avengers"
      },
      image: {
        url: "https://th.bing.com/th/id/OIP.GoV5mJ3v0PIiNetOjhLZPAHaKk?w=126&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1"
      }
    },
    {
      name: "Iron Man",
      biography: {
        "full-name": "Tony Stark",
        publisher: "Marvel Comics",
        aliases: ["Iron Avenger"],
        "place-of-birth": "New York",
        occupation: "Ingeniero"
      },
      powerstats: {
        intelligence: "100",
        strength: "85",
        speed: "58",
        combat: "64"
      },
      appearance: {
        height: ["185 cm"],
        weight: ["102 kg"]
      },
      connections: {
        "group-affiliation": "Avengers"
      },
      image: {
        url: "https://th.bing.com/th/id/OIP.TTvT7hnSH8SrJVd7k8PM8gHaMR?w=115&h=189&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1"
      }
    },
    {
      name: "Hulk",
      biography: {
        "full-name": "Bruce Banner",
        publisher: "Marvel Comics",
        aliases: ["Green Goliath"],
        "place-of-birth": "Ohio",
        occupation: "Científico"
      },
      powerstats: {
        intelligence: "88",
        strength: "100",
        speed: "63",
        combat: "85"
      },
      appearance: {
        height: ["244 cm"],
        weight: ["635 kg"]
      },
      connections: {
        "group-affiliation": "Avengers"
      },
      image: {
        url: "https://i.etsystatic.com/50664297/r/il/2534db/5804630744/il_794xN.5804630744_g0sf.jpg"
      }
    },
    {
      name: "Thor",
      biography: {
        "full-name": "Thor Odinson",
        publisher: "Marvel Comics",
        aliases: ["Dios del Trueno"],
        "place-of-birth": "Asgard",
        occupation: "Guerrero"
      },
      powerstats: {
        intelligence: "69",
        strength: "100",
        speed: "83",
        combat: "100"
      },
      appearance: {
        height: ["198 cm"],
        weight: ["290 kg"]
      },
      connections: {
        "group-affiliation": "Avengers"
      },
      image: {
        url: "https://wallpapercave.com/wp/wp8354923.jpg"
      }
    },
    {
      name: "Flash",
      biography: {
        "full-name": "Barry Allen",
        publisher: "DC Comics",
        aliases: ["Velocista Escarlata"],
        "place-of-birth": "Central City",
        occupation: "Forense"
      },
      powerstats: {
        intelligence: "88",
        strength: "48",
        speed: "100",
        combat: "60"
      },
      appearance: {
        height: ["183 cm"],
        weight: ["81 kg"]
      },
      connections: {
        "group-affiliation": "Liga de la Justicia"
      },
      image: {
        url: "https://vignette.wikia.nocookie.net/dcmovies/images/a/ae/The_Flash_DCEU.jpg/revision/latest?cb=20161104022424"
      }
    },
    {
      name: "Aquaman",
      biography: {
        "full-name": "Arthur Curry",
        publisher: "DC Comics",
        aliases: ["Rey de Atlantis"],
        "place-of-birth": "Atlantis",
        occupation: "Rey"
      },
      powerstats: {
        intelligence: "81",
        strength: "85",
        speed: "79",
        combat: "80"
      },
      appearance: {
        height: ["185 cm"],
        weight: ["146 kg"]
      },
      connections: {
        "group-affiliation": "Liga de la Justicia"
      },
      image: {
        url: "https://www.themoviedb.org/t/p/original/tn2YluZfxgEGma54O3gVMZJPy8z.jpg"
      }
    },
    {
      name: "Black Widow",
      biography: {
        "full-name": "Natasha Romanoff",
        publisher: "Marvel Comics",
        aliases: ["Viuda Negra"],
        "place-of-birth": "Rusia",
        occupation: "Espía"
      },
      powerstats: {
        intelligence: "75",
        strength: "13",
        speed: "33",
        combat: "100"
      },
      appearance: {
        height: ["170 cm"],
        weight: ["59 kg"]
      },
      connections: {
        "group-affiliation": "Avengers"
      },
      image: {
        url: "https://images.wallpapersden.com/image/download/black-widow-movie-poster_a2tqbGWUmZqaraWkpJRobmVtrWppaGs.jpg"
      }
    }
  ];
  /* =========================
     ELEMENTOS DEL DOM
  ========================== */
  const input = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const results = document.getElementById("results");
  /* =========================
     EVENTO DE BÚSQUEDA
  ========================== */
  searchBtn.addEventListener("click", () => {
    const query = input.value.toLowerCase().trim();
    const filtered = localHeroes.filter(hero =>
      hero.name.toLowerCase().includes(query)
    );
    renderCards(filtered);
  });
  /* =========================
     RENDER DE CARDS
  ========================== */
  function renderCards(heroes) {
    const cardsContainer = document.getElementById("cardsContainer");
    results.innerHTML = "";
    if (heroes.length === 0) {
      results.innerHTML = "<p>No se encontraron resultados</p>";
      return;
    }
    heroes.forEach(hero => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <img src="${hero.image.url}" alt="${hero.name}">
        <h3>${hero.name}</h3>
        <p>${hero.biography.publisher}</p>
      `;
      card.addEventListener("click", () => {
        showHeroDetail(hero);
      });
      results.appendChild(card);
    });
  } 
  function renderHeroes(lista) {
  cardsContainer.innerHTML = "";
  lista.forEach(hero => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${hero.image}" alt="${hero.name}">
      <h3>${hero.name}</h3>
      <p>${hero.publisher}</p>
    `;
    card.addEventListener("click", () => mostrarDetalle(hero));
    cardsContainer.appendChild(card);
  });
}
/* =========================
     DETALLE DEL HÉROE
  ========================== */
  function showHeroDetail(hero) {
    alert(
      `Nombre: ${hero.name}
Nombre real: ${hero.biography["full-name"]}
Editorial: ${hero.biography.publisher}
Alias: ${hero.biography.aliases.join(", ")}
Lugar de nacimiento: ${hero.biography["place-of-birth"]}
Ocupación: ${hero.biography.occupation}
Fuerza: ${hero.powerstats.strength}
Velocidad: ${hero.powerstats.speed}
Inteligencia: ${hero.powerstats.intelligence}
Combate: ${hero.powerstats.combat}
Altura: ${hero.appearance.height[0]}
Peso: ${hero.appearance.weight[0]}
Conexiones: ${hero.connections["group-affiliation"]}`
    );
  }
const scrollHero = document.getElementById("scroll-hero");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  scrollHero.style.transform = `translateY(${scrollY * 0.05}px)`;
});
