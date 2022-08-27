function luidy_moura(n) {
    const result = []
    let x = 1

    while (x <= n) {
        let string = ''
        if (x % 5 == 0)
            string = 'Luidy'
        if (x % 9 == 0)
            string = string + 'Moura'
        result.push(string || x)
        x++
    }    
    return console.log(result)
}

luidy_moura(45)