function bhaskara(ax2, bx, c){
    const delta = (bx * bx) - 4 * ax2 * c
    const x1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
    const x2 = (-bx - Math.sqrt(delta)) / (2 * ax2);    
    console.log(delta)    
    if(Math.sign(delta) == -1)
        return console.log(`Delta é negativo`)
    return console.log([`x1: ${x1}`,`x2: ${x2}`])
}

bhaskara(2, 5, 1)

//delta é igual a b ao quadrado menos 4 vezes a vezes c