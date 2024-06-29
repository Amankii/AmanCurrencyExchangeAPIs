document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('form');
    form.onsubmit = () => {

        fetch('https://v6.exchangerate-api.com/v6/3a9c1eefe3723769d367bbf0/latest/USD')
        .then(Response => Response.json())
        .then(data => {
            const currency = document.querySelector('#currency').value.toUpperCase();
            const result = document.querySelector('#result');
            const audioX = new Audio('./images/error.mp3');
            const rate = data.conversion_rates[currency];
            const aU = new Audio('./images/yet(1).mp3');
            const invalid = new Audio('./images/invalid.mp3');

            if(rate !== undefined){
                result.innerHTML = `1 USD is equal to ${rate.toFixed(2)} ${currency}.`;
                result.style.display = 'block';
                result.style.padding = '20px';
                result.style.marginTop = '20px';
                result.style.textAlign = 'center';
                result.style.cursor = 'pointer';
            } else {
                result.innerHTML = 'Invalid code';
                invalid.play();
                result.style.display = 'block';
                result.style.padding = '20px';
                result.style.marginTop = '20px';
                result.style.textAlign = 'center';
                result.style.cursor = 'pointer';
                /*audioX.play();*/
            };
        })
        .catch(error => {
            console.log('Error', error)
        });


        return false;
    };

    const reset =document.querySelector('.reset');
    const result = document.querySelector('#result');
    const currency = document.querySelector('#currency');
    const r1 = new Audio('./images/resetAudio1.mp3');
    const cleared = new Audio('./images/cleared.mp3');

    reset.onclick = () => {

        if(currency.value.length > 0){
            currency.value = '';
            result.innerHTML = 'you have Cleared';
            cleared.play();
        } else {
            result.innerHTML = 'Nothing to reset dude';
            r1.play();
            result.style.padding = '20px';
            result.style.marginTop = '20px';
            result.style.textAlign = 'center';
            result.style.cursor = 'pointer';
        }

        return false;
    };

    //-------- Country Code

    const formZ = document.querySelector('#formZ');
    formZ.onsubmit = () => {

        fetch('code.json')
        .then(response => response.json())
        .then(data => {
            const countryText = document.querySelector('#countryText').value.toUpperCase();
            const countries = data.countries[countryText];
            const resultZ = document.querySelector('#resultZ');

            if(countries !== undefined){
                resultZ.innerHTML = countries;
                resultZ.style.display = 'block';
                resultZ.style.padding = '20px';
                resultZ.style.marginTop = '20px';
                resultZ.style.textAlign = 'center';
                resultZ.style.cursor = 'pointer';
            } else {
                resultZ.innerHTML = 'INVALID';
                resultZ.style.display = 'block';
                resultZ.style.padding = '20px';
                resultZ.style.marginTop = '20px';
                resultZ.style.textAlign = 'center';
                resultZ.style.cursor = 'pointer';
            }
            
        })
        .catch(error => {
            console.log('Error', error)
        });
        return false;
    };

    

});