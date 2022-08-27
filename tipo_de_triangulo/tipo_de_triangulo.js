function descobre_tipo_triangulo(a, b, c){
    var arrey = [a, b, c];
    var counts = {};
    arrey.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
    console.log(counts);
    const response = {
        1: 'Equilátero', //três lados iguais
        2: 'Isóceles', //dois lados iguais
        3: 'Escaleno', //todos os lados diferentes
    }
    console.log(response[Object.keys(counts).length])
}

descobre_tipo_triangulo(3, 3, 3)
descobre_tipo_triangulo(1, 3, 3)
descobre_tipo_triangulo(1, 2, 3)