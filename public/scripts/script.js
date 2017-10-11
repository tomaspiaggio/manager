(function(window){
    const start = document.querySelector('.selection--start');
    const end = document.querySelector('.selection--end');
    const play = document.querySelector('.status--play');
    const stop = document.querySelector('.status--stop');
    const origin = document.querySelector('.status--set-origin');
    const PATH = 'http://localhost:3000';

    start.addEventListener('click', () => {
        get('/selection/init')
        .then(() => {
            console.log('ok');
            start.classList.remove('active');
            end.classList.add('active');
        }).catch(err => console.log(err));
    });

    end.addEventListener('click', () => {
        get('/selection/stop')
        .then(() => {
            console.log('ok');
            end.classList.remove('active');
            start.classList.add('active');
        }).catch(err => console.log(err));
    });

    play.addEventListener('click', () => {
        get('/status/play')
        .then((response) => {
            console.log('ok');
            play.classList.remove('active');
            stop.classList.add('active');
        }).catch(err => console.log(err));
    });

    stop.addEventListener('click', () => {
        get('/status/stop')
        .then(() => {
            console.log('ok');
            stop.classList.remove('active');
            play.classList.add('active');
        }).catch(err => console.log(err));
    });

    origin.addEventListener('click', () => {
        get('/status/origin')
        .then(() => console.log('ok'))
        .catch(err => console.log(err));
    });

    function get(path) {
        return new Promise((resolve, reject) => {
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) resolve(this);
                else if(this.readyState == 4 && this.status != 200) reject(this);
            };
            xhttp.withCredentials = true;
            xhttp.open("GET", PATH + path, true);
            xhttp.send();
        });
    }
})(window);
