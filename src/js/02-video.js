import Player from '@vimeo/player';
// ------------- инициализация
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
// ------------
const onPlay = function (data) {
  console.log(data);
  player.on('timeupdate', function (data) {
    console.log(data);
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));

    // data is an object containing properties specific to that event
  });
};

player.on('play', onPlay);
