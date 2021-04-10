const postPokemon = () => {
    const newPokemon = {
        name: document.getElementById("name").value,
        type: document.getElementById("type").value,
    };
    const URI_HEROKU = "https://pokeapi-mcr.herokuapp.com/";
    const urlApi = `${URI_HEROKU}api/pokemons`;

    const options = {
        //super importante para hacer nuestra llamada fetch
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newPokemon), //aqui tenemos que hacer que la info nos llegue legible, por eso lo parseamos
    };

    fetch(urlApi, options)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            alert(`Pokemon añadido correctamente ${data.newPokemon.id}`);
            //añadir modal bootstrap
            document.getElementById("name").value = "";
            document.getElementById("type").value = "";
        })
        .catch((err) => {
            console.error(err);
        });
};