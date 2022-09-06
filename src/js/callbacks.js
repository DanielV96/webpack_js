const heroes = {
  capi: {
    nombre: 'Capitán América',
    poder: 'Aguantar inyeccciones sin morir',
  },
  iron: {
    nombre: 'Ironman',
    poder: 'Absurda cantidad de dinero',
  },
  spider: {
    nombre: 'Spiderman',
    poder: 'La mejor picadura alérgica a la picadura de araña',
  },
}

//callback retorna un heroe
export const buscarHeroe = (heroeId, callback) => {
  const heroe = heroes[heroeId]
  if (heroe) {
    callback(null, heroe)
  } else {
    callback(`No existe Héroe con ID ${heroeId}`)
  }
}
