function Calcular()
{
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    let sexo = document.getElementById('sexof');
    let pesoIdeal = 0, emagrecer = 0, imc = 0;

    if(isNaN(peso))
    {
        alert('Por favor, digite valores numéricos no peso');
        document.getElementById('peso').value = '';
        document.getElementById('peso').focus();
    }

    else if (isNaN(altura))
    {
        alert('Por favor, digite valores numéricos na altura');
        document.getElementById('altura').value = '';
        document.getElementById('altura').focus();
    }

    else
    {
        peso = parseFloat(peso);
        altura = parseFloat(altura);
        imc = peso.toFixed(1)/Math.pow(altura,2);

        if (sexo.checked == true)
        {
            pesoIdeal = 54.695 + ((altura - 1.524) * 53.54333)
        }

        else
        {
            pesoIdeal = 62.2328 + ((altura - 1.6002) * 53.54333)
        }

        pesoIdeal = pesoIdeal.toFixed(1);

        document.getElementById('imc').value = imc.toFixed(1);
        document.getElementById('pesoIdeal').value = pesoIdeal;

        emagrecer = peso - pesoIdeal;
        emagrecer = emagrecer.toFixed(1);

        if (emagrecer > 0)
        {
            document.getElementById('resposta').value = 'Você precisa emagrecer' + emagrecer + 'kg';
        }

        else if (emagrecer < 0)
        {
            document.getElementById('resposta').value = 'Você precisa engordar' + (emagrecer*-1) + 'kg';
        }

        else
        {
            document.getElementById('resposta'),value = 'Parabéns, peso ideal!';
        }
    }
}   