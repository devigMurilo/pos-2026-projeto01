import { getCharacters, getCharacterById } from './api.js'

function getResultado() {
  return document.getElementById('resultado')
}

export async function popularSelect(select) {
  try {
    const personagens = await getCharacters()

    personagens.forEach((character) => {
      const option = document.createElement('option')
      option.value = character.id
      option.textContent = character.name
      select.appendChild(option)
    })
  } catch (error) {
    getResultado().innerHTML = '<p>Erro ao carregar a lista de personagens.</p>'
  }
}

export async function handleSelectChange(event) {
  const id = event.target.value
  const resultado = getResultado()

  if (!id) {
    resultado.innerHTML = '<p>Selecione um personagem para ver os detalhes.</p>'
    return
  }

  resultado.innerHTML = '<p>Carregando detalhes do personagem...</p>'

  try {
    const character = await getCharacterById(id)
    resultado.innerHTML = renderCharacter(character)
  } catch (error) {
    resultado.innerHTML = '<p>Erro ao carregar detalhes do personagem.</p>'
  }
}

function renderCharacter(character) {
  return `
    <article class="character">
      <img src="${character.image}" alt="${character.name}" width="160" />
      <h2>${character.name}</h2>
      <p>Raça: ${character.race}</p>
      <p>Gênero: ${character.gender}</p>
      <p>Ki: ${character.ki}</p>
      <p>Ki máximo: ${character.maxKi}</p>
      <p>Afiliação: ${character.affiliation}</p>
      <p>${character.description}</p>
      ${renderPlaneta(character.originPlanet)}
      ${renderTransformacoes(character.transformations)}
    </article>
  `
}

function renderPlaneta(planeta) {
  if (!planeta) {
    return '<h2>Planeta de origem</h2><p>Planeta de origem desconhecido.</p>'
  }

  return `
    <h2>Planeta de origem</h2>
    <img src="${planeta.image}" alt="${planeta.name}" width="160" />
    <p>${planeta.name} ${planeta.isDestroyed ? '(destruído)' : '(ativo)'}</p>
    <p>${planeta.description}</p>
  `
}

function renderTransformacoes(transformacoes) {
  if (!transformacoes || transformacoes.length === 0) {
    return '<h2>Transformações</h2><p>Este personagem não possui transformações.</p>'
  }

  const itens = transformacoes
    .map(
      (transformacao) => `
        <li>
          <img src="${transformacao.image}" alt="${transformacao.name}" width="120" />
          <p>${transformacao.name}</p>
          <p>Ki: ${transformacao.ki}</p>
        </li>
      `
    )
    .join('')

  return `
    <h2>Transformações (${transformacoes.length})</h2>
    <ul class="transformacoes">${itens}</ul>
  `
}
