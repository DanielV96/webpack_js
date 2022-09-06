const heroes = {
  capi: {
    nombre: 'Capitán América',
    poder: 'Aguantar inyecciones sin morir',
  },

  iron: {
    nombre: 'Ironman',
    poder: 'Absurda cantidad de dinero',
  },

  spider: {
    nombre: 'Spiderman',
    poder: 'La mejor reacción alérgica a la picadura de una araña',
  },
}

export const buscarHeroe = (heroeId) => {
  const heroe = heroes[heroeId]

  return new Promise((resolve) => {
    if (heroe) {
      setTimeout(() => {
        resolve(heroe)
      }, 1000)
    } else {
      throw `No existe heroe con el id ${heroeId}`
    }
  })
}

export const buscarHeroeAsincrona = async (heroeId) => {
  const heroe = heroes[heroeId]

  if (heroe) {
    return heroe
  } else {
    throw `No existe un héroe con el id ${heroeId.nombre}`
  }
}

const promesaLenta = new Promise((resolve) => {
  setTimeout(() => resolve('Promesa lenta'), 5000)
})

const promesaMedia = new Promise((resolve) => {
  setTimeout(() => resolve('Promesa media'), 3000)
})

const promesaRapida = new Promise((resolve) => {
  setTimeout(() => resolve('Promesa rápida'), 2000)
})

export { promesaLenta, promesaMedia, promesaRapida }
