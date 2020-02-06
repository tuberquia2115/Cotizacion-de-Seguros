const obtenerDiferenciaYear = (year) => {
    return new Date().getFullYear() - year;
}

const calcularMarca = (marca) => {
    let incremento;
    switch (marca) {
        case 'europeo':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break
        default:
            break;
    }

    return incremento;
}

const calcularPlan = (plan) => {
    return (plan === 'basico' ? 1.20 : 1.50)

}

const primeraMayuscula = (text) =>{
    return text.charAt(0).toUpperCase() + text.slice(1)
}
export {
    obtenerDiferenciaYear,
    calcularMarca,
    calcularPlan,
    primeraMayuscula
}