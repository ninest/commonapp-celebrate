import { initialCelebrate } from './celebrate'

const $celebrateButton = document.getElementById('celebrate_button')
const $nextButton = document.getElementById('next_button')

window.onload = () => initialCelebrate()

$celebrateButton.onclick = () => {
  initialCelebrate()
}

$nextButton.onclick = () => {
  alert('Go finish your applications.')
}
