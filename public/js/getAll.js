//LLAMAR A LA API Y PINTAR EN EL DOM UN LISTADO DE POKEMONS

const getAll = () => {
    const URI_HEROKU = "https://pokeapi-mcr.herokuapp.com/";
    const urlApi = `${URI_HEROKU}api/pokemons`;

    fetch(urlApi)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            /*Lo primero que hacemos es llamar a nuestra api de pokemons mediante fetch, siempre con */
            const ulPokemons = document.getElementById("ulPokemons");
            ulPokemons.innerHTML = ""; //esto lo que hace es resetear los li, osea borrarlos
            data.pokemons.forEach((pokemon) => {
                const li = document.createElement("li");
                li.appendChild(document.createTextNode(pokemon.name));
                li.className = "list-group-item list-group-item-action";

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