import './styles.css'
import {
  obtenerHeroesArr,
  obtenerheroeAwait,
  heroesCiclos,
  heroeIfAwait,
} from './js/await'
// obtenerHeroesArr().then(console.table)
// obtenerheroeAwait('Dante').then(console.log)
heroesCiclos().then(console.log)
heroeIfAwait('iron')
