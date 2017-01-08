import Sandpit from 'sandpit'
import './index.css'

const sandpit = new Sandpit('#root', Sandpit.CANVAS)
sandpit.loop = () => {
  let r = Math.ceil(Math.sin(sandpit.time / 100) * 255)
  let g = Math.ceil(Math.sin(sandpit.time / 200) * 255)
  let b = Math.ceil(Math.sin(sandpit.time / 300) * 255)
  sandpit.fill(`rgb(${r}, ${g}, ${b})`)
}
sandpit.start()
