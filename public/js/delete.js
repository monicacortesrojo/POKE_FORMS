//LLAMAR A LA API Y PINTAR EN EL DOM UN LISTADO DE POKEMONS

const getAll = () => {
    const URI_HEROKU = "https://pokeapi-mcr.herokuapp.com/";
    const urlApi = `${URI_HEROKU}api/pokemons`;

    fetch(urlApi)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            //Lo primero que hacemos es llamar a nuestra api de pokemons mediante fetch, siempre con
            const ulPokemons = document.getElementById("ulPokemons");
            ulPokemons.innerHTML = ""; //esto lo que hace es resetear los li, osea borrarlos
            data.pokemons.forEach((pokemon) => {
                const li = document.createElement("li");
                li.appendChild(document.createTextNode(pokemon.name));
                li.className = "list-group-item list-group-item-action";

                const button = document.createElement("button");
                button.className = "btn btn-danger float-right";
                button.type = "button";
                button.innerText = "borrar";
                button.id = pokemon.id;

                button.addEventListener("click", (event) => {
                    deletePokemon(event.currentTarget.id);
                });

                li.appendChild(button);
                ulPokemons.appendChild(li);
            });

            console.log(data);
            //AQUI ES DONDE PINTAMOS NUESTRA LISTA
        })
        .catch((err) => {
            console.error(err);
        });
};

getAll();

const deletePokemon = (id) => {
    const newAllPokemons = { id: id };

    const URI_HEROKU = "https://pokeapi-mcr.herokuapp.com/";
    const urlApi = `${URI_HEROKU}api/pokemons`;

    const options = {
        method: "DELETE",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newAllPokemons),
    };

    fetch(urlApi, options)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            getAll();
        })
        .catch((err) => {
            console.error(err);
        });
};