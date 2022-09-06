import './styles.css'
import { buscarHeroe } from './js/promesas'

const heroeId1 = 'iron'
const heroeId2 = 'spider2'
const heroeId3 = 'capi'

//Sobrecerga de callbacks
// buscarHeroe(heroeId1, (err, heroe) => {
//   if (err) {
//     console.warn(err)
//   }
//   buscarHeroe(heroeId2, (err, heroe2) => {
//     if (err) {
//       console.warn(err)
//     }
//     buscarHeroe(heroeId3, (err, heroe3) => {
//       if (err) {
//         console.warn(err)
//       }
//       console.log(Enviando a ${heroe.nombre}, ${heroe2.nombre} y ${heroe3.nombre} a la misión)
//     })
//   })
// })

// buscarHeroe(heroeId1).then((heroe) => {
//   console.log(Enviando a ${heroe.nombre} a la misión)
// })

Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
  .then(([heroe1, heroe2]) => {
    console.log(`Eviando a ${heroe1.nombre} y a ${heroe2.nombre} a la misión`)
  })
  .catch((err) => {
    console.error(err)
  })
  .finally(() => {
    console.log('Se termino el Promise.all')
  })

console.warn('Fin del programa')
