import { useEffect, useState } from 'react'
import './App.css'

const words = ['DESARROLLADOR', 'FRONTEND', 'JAVA', 'PYTHON', 'C++', 'SQLITE', 'HTML', 'CSS', 'JAVASCRIPT', 'TYPESCRIPT']
const skills = ['HTML', 'JavaScript', 'C++', 'CSS', 'TypeScript', 'Java', 'Python', 'SQLite']
const asset = (file) => import.meta.env.BASE_URL + file
const projects = [['Sistema de pedidos', 'Java + SQLite + Frontend'], ['Sistema de Mapas', 'PHP + SQLite + Frontend'], ['Landing Page', 'HTML, CSS, animaciones'], ['CRUD Usuarios', 'Java + Base de datos']]

export default function App() {
  const [entered, setEntered] = useState(false)
  const [word, setWord] = useState(0)
  const [typed, setTyped] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const full = words[word]
    const delay = deleting ? 125 : typed === full ? 1600 : 185
    const timer = setTimeout(() => {
      if (!deleting) {
        const next = full.slice(0, typed.length + 1)
        setTyped(next)
        if (next === full) setDeleting(true)
      } else {
        const next = full.slice(0, typed.length - 1)
        setTyped(next)
        if (!next) { setDeleting(false); setWord(i => (i + 1) % words.length) }
      }
    }, delay)
    return () => clearTimeout(timer)
  }, [typed, deleting, word])
  useEffect(() => { const move = e => setCursor({ x: e.clientX, y: e.clientY }); window.addEventListener('mousemove', move); return () => window.removeEventListener('mousemove', move) }, [])
  return <div className="site">
    {!entered && <div className="intro"><div className="intro-box"><p className="rating">R 18+</p><p className="restricted">RESTRICTED</p><p>FOR CREATIVE CODE,<br/>MODERN DESIGN,<br/>FRONTEND DEVELOPMENT<br/>AND STRONG LOGIC.</p><button onClick={() => setEntered(true)}>ENTER</button></div></div>}
    <div className="cursor" style={{ left: cursor.x, top: cursor.y }} />
    <header><nav><a className="logo" href="#inicio">Bred<span>.</span></a><div><a href="#inicio">Inicio</a><a href="#sobre">Sobre mí</a><a href="#proyectos">Proyectos</a><a href="#contacto">Contacto</a></div></nav></header>
    <main>
      <section id="inicio" className="hero"><div className="profile"><img src={asset('aww.jpg')} alt="Bred Piña" /></div><p className="role">Frontend Developer | Java</p><h1>{typed}<span className="typing-caret">|</span></h1><p className="location">Barranquilla, Colombia</p><a className="scroll" href="#sobre">Explorar ↓</a></section>
      <section id="sobre" className="about panel"><p className="label">01 / SOBRE MÍ</p><h2>Hola, soy Bred.</h2><p>Soy desarrollador junior en formación enfocado en frontend. Tengo conocimientos en HTML, CSS, JavaScript y Java. Me gusta crear interfaces modernas y sistemas funcionales conectados a bases de datos.</p><p>Tengo bases en diseño responsivo, manejo del DOM, consumo de APIs, lógica de programación y programación orientada a objetos. También uso Git y GitHub.</p></section>
      <section className="skills panel"><p className="label">02 / TECNOLOGÍAS</p><h2>Herramientas que uso.</h2><div className="grid">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></section>
      <section id="proyectos" className="projects panel"><p className="label">04 / PROYECTOS</p><h2>Proyectos seleccionados.</h2><div className="cards">{projects.map(([title, stack], i) => <article className="card" key={title}><small>0{i + 1}</small><h3>{title}</h3><p>{stack}</p><span>↗</span></article>)}</div></section>
      <section id="contacto" className="contact"><p className="label">05 / CONTACTO</p><h2>你的夢想是可以程式設計的.</h2><a className="email" href="mailto:mysaindz@gmail.com">mysaindz@gmail.com ↗</a><div className="socials"><a href="https://x.com/inmybrd" target="_blank" rel="noreferrer"><img src={asset('git.jpg')} alt="X" /></a><a href="https://www.instagram.com/kodsiito" target="_blank" rel="noreferrer"><img src={asset('s.gif')} alt="Instagram" /></a><a href="https://github.com/mysaind" target="_blank" rel="noreferrer"><img src={asset('ka.gif')} alt="GitHub" /></a><a href="https://discord.com/users/pwlorbe" target="_blank" rel="noreferrer"><img src={asset('disco.jpg')} alt="Discord" /></a></div></section>
    </main><footer>© 2026 Bred Piña. Built with React.</footer>
  </div>
}








