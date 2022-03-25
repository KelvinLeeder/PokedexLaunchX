
//Fetch es la forma en la que realiza una consula o solicitud a un API
const fetchPokemon = () =>{
    const pesopokemon = document.getElementById("pesopokemon");
    const alturapokemon = document.getElementById("alturapokemon");
    const tipopokemon = document.getElementById("tipopokemon");
    const movimientopokemon = document.getElementById("movimientopokemon");
    const datospokemon = document.getElementById("datospokemon");
    const numeropokemon = document.getElementById("numeropokemon");
    const pokeName = document.getElementById("pokeName") // getEleMbyId Leer el documento de html algo que tenga el nombre del id
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) =>{
        if (res.status != "200"){
            console.log(res);
            pokeImage("./pokeball.png");
            pesopokemon.innerHTML = "Error de busqueda";
            alturapokemon.innerHTML = "Pokemon no encontrado";
            tipopokemon.innerHTML = "* . *";
            numeropokemon.innerHTML = "";
            movimientopokemon.innerHTML = "";
            datospokemon.innerHTML = "";
        }
        else{
        //console.log(res);
        return res.json();
        }
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        pesopokemon.innerHTML = `Peso: ${data.weight/10} kg`;
        alturapokemon.innerHTML = `Altura: ${data.height*10} cm`;
        tipopokemon.innerHTML = `Tipo: ${data.types[0].type.name}`;
        numeropokemon.innerHTML = `ID: #${data.id}`;
        movimientopokemon.innerHTML = `Mov: ${data.moves[0].move.name}`;
        datospokemon.innerHTML =  `Est: Hp-${data.stats[0].base_stat} Atk-${data.stats[1].base_stat} Def-${data.stats[2].base_stat} Vel-${data.stats[5].base_stat}`;
        console.log(pesopokemon);
        console.log(pokeImg);
        console.log(numeropokemon);
        pokeImage(pokeImg);
    })
}

//fetchPokemon();

const pokeImage = (url) =>{
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src =url;
}


    



/*
const imprimir = () =>{
    const pokeName = document.getElementById("pokeName") // getEleMbyId Leer el documento de html algo que tenga el nombre del id
    let pokeInput = pokeName.value;
    console.log("Hola " + pokeInput );
}*/