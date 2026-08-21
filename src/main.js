import './style.css'
import { popularSelect, handleSelectChange } from './dragonBallZ.js'

document.querySelector('#app').innerHTML = `
<section id="center">
  <div class="hero">
    <h1>Dragon Ball Z</h1>
    <p>DBZ about personagens</p>
  </div>
  <label for="people">Escolha um personagem:</label>
  <select class="select" id="people" name="people">
    <option value="">--Selecione um personagem--</option>
  </select>

  <div id="resultado">
    <p>Selecione um personagem para ver os detalhes.</p>
  </div>
</section>
`

const selectElement = document.getElementById('people')
selectElement.addEventListener('change', handleSelectChange)

popularSelect(selectElement)
