function resultado(nota) {
        const p_multiplo = Math.ceil(nota / 5) * 5 //pega o próximo número múltiplo de 5
        console.log('nota', nota)
        console.log('proximo multiplo de 5', p_multiplo)
        console.log('diferença entre a nota e o p_multiplo', p_multiplo - nota)
        if(nota > 37) {
            return p_multiplo - nota < 3
                ?`nota: ${p_multiplo}, aprovado\n${'-'.repeat(40)}`
                :`nota: ${nota}, aprovado\n${'-'.repeat(40)}`
            } else
                return `nota: ${nota}, reprovado\n${'-'.repeat(40)}`
    }

console.log(resultado(84))
console.log(resultado(29))
console.log(resultado(37))
console.log(resultado(38))

