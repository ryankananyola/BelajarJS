const container = document.querySelector('.container');
const cari = document.querySelector('.cari-box button');
const cuacaBox = document.querySelector('.cuaca-box');
const cuacaDetails = document.querySelector('.cuaca-details');
const error404 = document.querySelector('.tidak-ditemukan');

cari.addEventListener('click', () => {

    const APIKey = '366bdda8398d03e5cd1166b692d09c03';
    const city = document.querySelector('.cari-box input').value;

    if (city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {

            if (json.cod === '404') {
                container.style.height = '400px';
                cuacaBox.style.display = 'none';
                cuacaDetails.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.cuaca-box img');
            const temperature = document.querySelector('.cuaca-box .temperatur');
            const description = document.querySelector('.cuaca-box .deskripsi');
            const humidity = document.querySelector('.cuaca-details .kelembapan span');
            const wind = document.querySelector('.cuaca-details .angin span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'image/cerah.png';
                    deskripsiCuaca = 'Cerah';
                    break;

                case 'Rain':
                    image.src = 'image/gerimis.png';
                    deskripsiCuaca = 'Hujan Ringan';
                    break;

                case 'Snow':
                    image.src = 'image/hujanPetir.png';
                    deskripsiCuaca = 'Hujan Petir';
                    break;

                case 'Clouds':
                    image.src = 'image/berawan.png';
                    deskripsiCuaca = 'Cerah Berawan';
                    break;

                case 'Haze':
                    image.src = 'image/berangin.png';
                    deskripsiCuaca = 'Berangin';
                    break;

                default:
                    image.src = '';
                    deskripsiCuaca = json.weather[0].description;
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = deskripsiCuaca;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            cuacaBox.style.display = 'block';
            cuacaDetails.style.display = 'block';
            cuacaBox.classList.add('fadeIn');
            cuacaDetails.classList.add('fadeIn');
            container.style.height = '590px';

        });
})