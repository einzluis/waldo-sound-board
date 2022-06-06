const sounds = [
    'aww',
    'ba-dum-tss',
    'bruh',
    'fart',
    'kobe',
    'laugh',
    'omen-ult',
    'raze-ult',
    'sheesh-harmony',
    'yay',
];

// loop over sounds array
sounds.forEach((sound) => {

    // create buttons with'btn' class
    const btn = document.createElement('button');
    btn.classList.add('btn');

    // sets button text to the current sound element
    btn.innerText = sound;

    // click event listener
    btn.addEventListener('click', ()=>{
        // restarts audio when clicked again
        document.getElementById(sound).currentTime = 0;
        // play audio
        document.getElementById(sound).play();
    });

    // append buttons to the container
    document.getElementById('sound-container').appendChild(btn);
})