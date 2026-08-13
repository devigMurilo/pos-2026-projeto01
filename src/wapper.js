import { getPessoas, getNave, getPlaneta } from './api.js'

async function TraduzirUrl(urls) {
    const resposta = await Promise.all(
        urls.map(url => fetch(url).then(res => res.json()))
    )
    return resposta.map(item => item.title || item.name)
    }

async function renderizarPessoas(container, pessoas,) {
    const pessoasComFilmes = await Promise.all(
        cost filmes = await buscarNomes(pessoa.films)

        return{
            ...pessoa,
            filmes
        }
    )
    container.innerHTML = pessoas.map((pessoa) => 
    `<p> nome: ${pessoa.name}
    <p> filmes: ${pessoa.films.join(',')}</p>
    <p> nave: ${pessoa.starships} </p>
    ---------
    </p>`).join('')
}
function renderizarNaves(container, naves) {
    container.innerHTML = naves.map((nave) => `
    <p>${nave.name}</p>
    <p>modelo: ${nave.model}</p>
    <p> velocidade máxima na atmosfera: ${nave.max_atmosphering_speed}</p>
    ---------
    `).join('')
}
function renderizarPlanetas(container ,planetas) {
    container.innerHTML = planetas.map((planeta) => `
    <p>${planeta.name}</p>
    <p>clima: ${planeta.climate}</p>
    <p>terreno: ${planeta.terrain}</p>
    <p>população: ${planeta.population}</p>
    ---------
    `).join('')
}


export function buscarPessoas(botao) {
    botao.addEventListener('click', async () => {
        const container = document.getElementById('resultado')
        container.innerHTML = ' <p>carregando...</p>'
        try {
            const data = await getPessoas()
            renderizarPessoas(container, data)
        } catch (error) {
            container.innerHTML = '<p>Erro ao buscar personagens. Por favor, tente novamente.</p>'
        }
        }
        
    )
}

export function buscarNave(botao) {
    botao.addEventListener('click', async () => {
        const container = document.getElementById('resultado')
        container.innerHTML = ' <p>carregando...</p>'
        try {
            const data = await getNave()
            renderizarNaves(container, data)
        } catch (error) {
            container.innerHTML = '<p>Erro ao buscar naves. Por favor, tente novamente.</p>'
        }
    })
}

export function buscarPlaneta(botao) {
    botao.addEventListener('click', async () => {
        const container = document.getElementById('resultado')
        container.innerHTML = ' <p>carregando...</p>' 
        try {
            const data = await getPlaneta()
            renderizarPlanetas(container, data)
        } catch (error) {
            container.innerHTML = '<p>Erro ao buscar planetas. Por favor, tente novamente.</p>'
        }
    })
}