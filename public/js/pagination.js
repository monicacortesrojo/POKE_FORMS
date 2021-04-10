const getPokemonPage = (page = "1") => {
    //valor predefinido, si de primeras no tiene valor sería 1
    const URI_HEROKU = "https://pokeapi-mcr.herokuapp.com/";
    const urlApi = `${URI_HEROKU}api/pokemons/page/${page}`;

    fetch(urlApi)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            //Rellenamos el ul del listado del pokemon
            const ulPokemons = document.getElementById("ulPokemons");
            ulPokemons.innerHTML = "";

            data.pokemons.forEach((pokemon) => {
                const li = document.createElement("li");
                li.innerText = pokemon.name;
                li.className = "list-group-item list-group-item-action";
                ulPokemons.appendChild(li);
            });

            //rellenar el navegador de paginado
            const ulPaginado = document.getElementById("ulPaginado");
            ulPaginado.innerHTML = "";

            for (i = 1; i <= data.numPages; i++) {
                //creamos li del nav
                const li = document.createElement("li");
                li.className = "page-item";
                if (parseInt(page) === i) li.classList.add("active"); //con esto hacemos que este señalado el numero
                //creamos a del li
                const a = document.createElement("a");
                a.id = i;
                a.innerText = i;
                a.className = "page-link";

                a.addEventListener("click", (event) => {
                    getPokemonPage(event.target.id);
                });

                //añadimos elementos a sus padres
                li.appendChild(a);
                ulPaginado.appendChild(li);
            }
        })
        .catch((err) => {
            console.error(err);
        });
};

getPokemonPage();