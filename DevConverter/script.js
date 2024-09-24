const form = document.getElementById('form');
form.addEventListener('submit', handleSbmit)

const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');
let valueConverted = 0; 


function handleSbmit(e) {
    e.preventDefault();

    if (!inputValue.value || inputValue.value < 0) { 
        alert('Informe o Valor correto!');
        return;
    } 
    else if(!selectedCurrency.value){
        alert('Escolha uma Moeda!');
        return; 
    }

converter();

};


function converter() { 
    if(selectedCurrency.value === 'EUR') {
    valueConverted = inputValue.value / 6.10;
    result.innerHTML = valueFormatter('pt-BR', 'EUR');
    
    animateResult();     
    }    
    
    else if(selectedCurrency.value === 'DOL') {
    valueConverted = inputValue.value / 5.46;
    result.innerHTML = valueFormatter ('en-US', 'USD');
    
    animateResult();
    } 

    inputValue.value = '';
    selectedCurrency.value = ''; 

};

function valueFormatter (Locale, currency) {
    const value = valueConverted. toLocaleString(`${Locale}`, { style: `currency`, currency: `${currency}` })
    return `<span>🤑</span> ${value} <span>🤑</span>`

};

function animateResult () {
    return result.animate(
        [
        {transform: 'translateY(-150px)'},
        {transform: 'translateY(0px)'},
        ], 
        { duration: 500}
    );

};