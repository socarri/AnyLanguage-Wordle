import { CONFIG } from './config'

export const VALIDGUESSES = [‘laazh’,‘avaan’,‘klosh’,‘ahpoo’,‘tapii’,‘kilot’,‘fleur’,‘batoo’,‘paray’,‘taant’,‘grenn’,‘roozh’,‘salay’,‘balay’,‘playn’,‘plenn’,‘frayr’,‘pchit’,‘machi’,‘miina’,‘swayr']

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
