import { NavLink } from 'react-router-dom'

const navigation = [
  { label: 'Profile', to: '/' },
  { label: 'Semester 1', to: '/semester-1' },
  { label: 'Semester 2', to: '/semester-2' },
  { label: 'Semester 3', to: '/semester-3' },
  { label: 'Overall', to: '/overall' },
]

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink className="brand" to="/" aria-label="Student report card home">
          <span className="brand-mark">PR</span>
          <span className="brand-copy">
            <strong>ACADEMIC RECORD</strong>
            <small>STUDENT PORTAL</small>
          </span>
        </NavLink>
        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header