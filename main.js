const musicFests = ['Electric Daisy Carnival Orlando', 'Sunset Music Festival', 'Moonrise Festival', 'Suwannee Hulaween', 'BUKU Music + Art Project', 'Okeechobee Music & Arts Festival', 'Ultra Music Festival', 'Home Bass Orlando', 'HiJinx Festival', 'Imagine Music Festival'];

const randomFest = (festivals) => {
    let currentIndex = festivals.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -=1;

        temporaryValue = festivals[currentIndex];
        festivals[currentIndex] = festivals[randomIndex];
        festivals[randomIndex] = temporaryValue;
    }

    return festivals;
};

const pickFest = () => {
    document.getElementById('fest').innerHTML = randomFest(musicFests)[0];
};