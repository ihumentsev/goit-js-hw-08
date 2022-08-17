import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// -------------
const CURRENT_TIMER = 'videoplayer - current - time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem(CURRENT_TIMER, seconds);
  }, 1000)
);

// ------------
const message = localStorage.getItem(CURRENT_TIMER);
function getCurrenTime() {
  if (message) {
    player.setCurrentTime(localStorage.getItem(CURRENT_TIMER) || 0);
  }
}
getCurrenTime();
