import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
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
player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
}
// ------------
const massage = JSON.parse(localStorage.getItem('videoplayer-current-time'));
player.setCurrentTime(massage.seconds);
