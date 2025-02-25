const peso = document.querySelector('.pesuzo');
const alto = document.querySelector('.alto');
const sexoF = document.querySelector('.sexoF');
const sexoM = document.querySelector('.sexoM');
const rp = document.querySelector('.resultPeso')
const ori = document.querySelector('.orientacao')


const calc = () => {
    const p = parseFloat(peso.value)
    const a = parseFloat(alto.value)

    if (!p || !a) return alert("Preencha todos os campos.")

    rp.value = (p / (a * a)).toFixed(2) ;

    if (sexoF.checked) {
        return ori.value = (54.6454 + ((a - 1.524) * 53.5433)).toFixed(2)
    }

    return ori.value = (62.2328 + ((a - 1.6002) * 53.5433)).toFixed(2);
}

const clear = () => {
    rp.value = ''
    ori.value = ''
    peso.value = ''
    alto.value = ''
}