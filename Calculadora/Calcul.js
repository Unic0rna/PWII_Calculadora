function Calcular(op,cor)
{
    var total = 0;
    var n1 = document.getElementById('digito1').value;
    var n2 = document.getElementById('digito2').value;

    if(isNaN(n1) || n1 == "")
    {
        alert('1º digito inválido!');
        document.getElementById('digito1').value = '';
        document.getElementById('digito1').focus();
    }

   else if (isNaN(n2) || n2 == "")
   {
    alert('2º dígito inválido!');
    document.getElementById('digito2').value = '';
    document.getElementById('digito2').focus();
   }

   else
   {
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    if (op == '+')
    {
        total = n1 + n2;
    }

    else if (op == '-')
    {
        total = n1 - n2;
    }

    else if (op == '/')
    {
        total = n1 / n2;
    }

    else
    {
        total = n1 * n2;
    }

    document.getElementById('result').style.backgroundColor = cor;
    document.getElementById('result').value = total.toFixed(3);

   }
}

function Limpar()
{
    document.getElementById('digito1').focus();
    document.getElementById('digito1').value = '';
    document.getElementById('digito2').value = '';
    document.getElementById('result').value = '';
    document.getElementById('result').style.backgroundColor = 'white';
}