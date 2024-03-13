'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
/*
///////////////////////////////////////
const getPosition = function(){
    return new Promise(function(resolve, reject) {
        // navigator.geolocation.getCurrentPosition(
        //     position => resolve(position),
        //     err => reject(err)
        // );
        navigator.geolocation.getCurrentPosition(resolve, reject)
    });
}

const whereAmI = function(){
    getPosition()
    .then(pos => {
        // console.log(pos.coords);
        const { latitude: lat, longitude: lng } = pos.coords;

        const url = `https://geocode.xyz/${lat},${lng}?geoit=json&auth=314830403060111290966x37478 `
        return  fetch(url)
    })
    .then(res => {
            if(!res.ok) throw new Error(`Problem with geo coding ${res.status}`)
            return res.json();
        })
        .then(data => {console.log(`You are in ${data.city}, ${data.country}`, data)
        
        return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
        })
        .then(res => {
            if(!res.ok) throw new Error(`Country not found ${res.status}`)
            return res.json();
        })
        .then(data => {
            console.log(data);
            getCountryData(data[0])})
        .catch(err => console.log(`You got ${err}`))
}
*/
const getCountryData = function(data) {
    // const req = new XMLHttpRequest();
    // req.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    // req.send();

    btn.addEventListener('click', function(){
        // let [,data] = JSON.parse(this.responseText);

        // if(!data)
        // {
        //     [data] = JSON.parse(this.responseText);
        // }
        // console.log(data);
        // console.log(data.currencies);
        const html = `
        <article class="country">
            <img class="country__img" src="${data.flags.png}" />
            <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
            <p class="country__row"><span>💰</span>${data.currencies.INR.name}</p>
            </div>
        </article>
        `
        countriesContainer.insertAdjacentHTML('beforeend',html);
        countriesContainer.style.opacity = 1;
    })
}

// getCountryData('india');
// console.log("sending usa");
// getCountryData('usa');
// whereAmI();


// getPosition().then(pos => console.log(pos))

const wait = function(seconds){
    return new Promise(function(resolve, reject){
        setTimeout(resolve, seconds*1000);
    })
}
const imgContainer = document.querySelector('.images');

const createImage = function(imgPath){
    return new Promise(function(resolve, reject) {
        const img = document.createElement("img");
        img.src= imgPath;

        img.addEventListener('load', function(){
            imgContainer.append(img);
            resolve(img);
        })

        img.addEventListener('error', function(){
            reject(new Error('Image not found'));
        })
    });
};

const loadNPause = async function(){
    const data1 = await createImage(`img/img-1.jpg`);
    await wait(1);
    data1.style.display = 'none';
    const data2 = await createImage(`img/img-2.jpg`);
    await wait(1);
    data2.style.display = 'none';
    const data3 = await createImage(`img/img-3.jpg`);
    await wait(1);
    data3.style.display = 'none';
    const data4 = await createImage(`img/img-4.jpg`);
    await wait(1);
    data4.style.display = 'none';
}
// loadNPause();

const loadAll = async function(imgArr){
    const imgs = imgArr.map(async img => await createImage(img));
    const imgEl = await Promise.all(imgs);
    console.log(imgEl);
    imgEl.forEach(img => img.classList.add('parallel'))
}
loadAll([`img/img-1.jpg`,`img/img-2.jpg`,`img/img-3.jpg`])
/*
let currentImg;
createImage(`img/img-1.jpg`)
.then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2)
})
.then(() =>{
    currentImg.style.display = 'none';
    return createImage(`img/img-2.jpg`)
})
.then((img) =>{
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2)
})
.then(() =>{
    currentImg.style.display = 'none';
    return createImage(`img/img-3.jpg`)
})
.then((img) =>{
    currentImg = img;
    console.log('Image 3 loaded');
    return wait(2)
})
.then(()=> {
    currentImg.style.display = 'none';
    return createImage(`img/img-4.jpg`)
})
.catch(err => console.error(err))
*/


const getPosition = function(){
    return new Promise(function(resolve, reject) {
        // navigator.geolocation.getCurrentPosition(
        //     position => resolve(position),
        //     err => reject(err)
        // );
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}
const whereAmI = async function() {
    try{
        const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    const url = `https://geocode.xyz/${lat},${lng}?geoit=json&auth=314830403060111290966x37478`

    const resGeo = await fetch(url);
    const dataGeo = await resGeo.json();
    // console.log(dataGeo);

    const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
    const data = await res.json();
    // console.log(data[1]);
    getCountryData(data[1])
    }
    catch(err){
        console.error(err);
        throw err;
    }
}

// console.log('1: Will get location');
// whereAmI()
//     .then(city => console.log(`2: ${city}`))
//     .catch(err => console.error(`2: ${err.message}`))
//     .finally(() => console.log(`3: Finished getting location`));
// (async function() {
//     try {
//         const city = await whereAmI(); 
//         console.log(`2: ${city}`);
//     }
//     catch(err){
//         console.error(`2: ${err.message}`);
//     }
//     finally{
//         console.log(`3: Finished getting location`);
//     }
// })();