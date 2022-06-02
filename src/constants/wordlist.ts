import { CONFIG } from './config'

export const WORDS = [‘laazh’,‘avaan’,‘klosh’,‘ahpoo’,‘tapii’,‘kilot’,‘fleur’,‘batoo’,‘paray’,‘taant’,‘grenn’,‘roozh’,‘salay’,‘balay’,‘playn’,‘plenn’,‘frayr’,‘pchit’,‘machi’,‘miina’,‘swayr']

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
