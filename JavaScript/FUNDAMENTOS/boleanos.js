let isAtivo = false
console.log (isAtivo)

isAtivo = true  
console.log (isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log ('os verdadeiros .. ')
console.log (!!3)
console.log (!!-1)
console.log (!!!'  ')  //string com caractere
console.log (!!!'texto')
console.log (!![])
console.log (!!{})
console.log (!! Infinity)
console.log (!!(isAtivo = true)) 

console.log ('os falsos .. ')
console.log (!!0)
console.log (!!'') // string vazia 
console.log (!! null)
console.log (!! NaN)
console.log (!! undefined)
console.log (!! (isAtivo= false))

console.log ( 'pra finalizar ')
console.log (!!('' || null || 0 ||' ')) // nesse casso todos são falsos menos a Dtring com caractere por isso a sentença é true   




    