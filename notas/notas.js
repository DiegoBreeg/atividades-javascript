function resultado(nota) {
        const p_multiplo = Math.ceil(nota / 5) * 5 //pega o próximo número múltiplo de 5
        console.log('nota', nota)
        console.log('proximo multiplo de 5', p_multiplo)
        console.log('diferença entre a nota e o p_multiplo', p_multiplo - nota)
        if(p_multiplo - nota < 3) 
            return p_multiplo < 40? `nota: ${p_multiplo} reprovado`: `nota: ${p_multiplo} aprovado`
         else
            return nota < 40? `nota: ${nota} reprovado`: `nota: ${nota} aprovado`        
    }

console.log(resultado(33))