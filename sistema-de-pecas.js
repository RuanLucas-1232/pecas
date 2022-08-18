// Lista de Peças
let pecas = ["Motor","radiador","Para-brisas"]

// Verificação se a lista está completa
if (pecas.length < 10) {
    console.log("Ólá! Cadastre sua peça. Cadastre uma peça superio a 100 g e que tenha, no minimo, 4 letras");
    
    let pecasDoUsuario = "Pneus"
    let pesoDaPeca = "120 g"
    
    // Verificação se a peça pesa 100 g
    if (pesoDaPeca > "100 g") {
        
        // Verificação se a peça tem, no minimo, quatro letras
        if (pecasDoUsuario.length >= 3) {
            console.log("A peça foi cadastrada");
        } else {
            console.log("A peça não pode ser cadastrada, pois tem menos de quatro letras");
        }
    } else {
        console.log("A peça não pode ser cadastrada, pois seu peso não é superior a 100 g");
    }
} else {
    console.log("Desculpa! Atingiu o limite de peças");
}
