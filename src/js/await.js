import { buscarHeroe, buscarHeroeAsincrona } from './promesas'

const heroesIds = ['capi', 'iron', 'spider']
const heroesPromesas = heroesIds.map(buscarHeroe)

export const obtenerHeroesArr = async () =>
  Promise.all(heroesIds.map(buscarHeroeAsincrona)) //Aquí se busco simplificar para buscar una mayor mayor simplisidad al código
//   const heroesArr = []

//   for (const id of heroesIds) {
//     const heroe = await buscarHeroeAsincrona(id)
//     heroesArr.push(heroe)
//   }
//   return heroesArr

//   return await Promise.all(heroesIds.map((id) => buscarHeroe(id)))

export const obtenerheroeAwait = async (id = 'capi') => {
  try {
    return await buscarHeroeAsincrona(id)
  } catch (error) {
    console.error('CATCH!!!')
    return {
      nombre: 'Heroe no encontrado',
      poder: 'Sin poder',
    }
  }
}

export const heroesCiclos = async () => {
  console.time('heroesCiclos')
  //   const heroes = await Promise.all(heroesPromesas)
  //   heroes.forEach(console.log)

  for await (const heroe of heroesPromesas) {
    console.log(heroe)
  }

  console.timeEnd('heroesCiclos')
}

export const heroeIfAwait = async (id) => {
  if ((await buscarHeroeAsincrona(id)).nombre === 'Ironman') {
    console.log('El mejor de todos')
  } else {
    console.log('Nhaa')
  }
}
