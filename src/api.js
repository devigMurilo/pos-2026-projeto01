const api = 'https://dragonball-api.com/api/'

export async function getCharacters(limit = 100) {
  try {
    const response = await fetch(`${api}characters?limit=${limit}`)

    if (!response.ok) {
      throw new Error(`Erro ao buscar personagens: ${response.status}`)
    }

    const data = await response.json()
    return data.items
  } catch (error) {
    console.error('Erro ao buscar personagens:', error)
    throw error
  }
}

export async function getCharacterById(id) {
  try {
    const response = await fetch(`${api}characters/${id}`)

    if (!response.ok) {
      throw new Error(`Erro ao buscar personagem: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Erro ao buscar personagem:', error)
    throw error
  }
}
