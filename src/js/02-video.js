import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// -------------
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000)
);

// ------------
const message = localStorage.getItem('videoplayer-current-time');
function getCurrenTime() {
  if (message) {
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
  } else {
    player.setCurrentTime(0);
  }
}
getCurrenTime();
