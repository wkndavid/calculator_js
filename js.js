function somar(num1, num2) {
    if(typeof num1 === 'number' && typeof num2 === 'number') {
        resultado = num1 + num2;
        document.write(`O resultado da soma é : ${resultado} <br>`);
    }
    else
    
        document.write(`Os números fornecidos não são numéricos`);
    }
}
somar (200, 300); 
somar (200, '200');