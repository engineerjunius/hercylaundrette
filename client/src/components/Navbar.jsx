import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { assets, navLinks } from '../assets/assets'
import { CloseIcon, MenuIcon } from './Icons'

const linkClass = ({ isActive }) =>
  `relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
    isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:text-brand-700'
  }`

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  // close the mobile menu whenever the route changes
  useEffect(() => setIsOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || isOpen
          ? 'border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-md'
          : 'border-transparent bg-white/60 backdrop-blur-sm'
      }`}
    >
      <div className='page-wrap flex h-16 items-center justify-between sm:h-20'>
        <Link to='/' className='flex items-center gap-2' aria-label='Hercy Laundrette home'>
          <img src={assets.hercy_blue} alt='' className='h-10 w-auto sm:h-12' />
          <span className='hidden text-lg font-bold leading-tight text-brand-900 sm:block'>
            Hercy <span className='font-medium text-brand-600'>Laundrette</span>
          </span>
        </Link>

        <nav className='hidden items-center gap-1 sm:flex' aria-label='Main'>
          {navLinks.map(({ id, link, name }) => (
            <NavLink key={id} to={link} end={link === '/'} className={linkClass}>
              {name}
            </NavLink>
          ))}
          <Link to='/book' className='btn btn-accent ml-3'>Book Now</Link>
        </nav>

        <button
          type='button'
          onClick={() => setIsOpen((open) => !open)}
          className='grid h-10 w-10 place-items-center rounded-full text-brand-900 hover:bg-brand-50 sm:hidden cursor-pointer'
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls='mobile-menu'
        >
          {isOpen ? <CloseIcon className='h-6 w-6' /> : <MenuIcon className='h-6 w-6' />}
        </button>
      </div>

      {/* mobile menu */}
      <div
        id='mobile-menu'
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out sm:hidden ${
          isOpen ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <nav className='page-wrap flex flex-col gap-1 pb-5' aria-label='Mobile'>
          {navLinks.map(({ id, link, name }) => (
            <NavLink key={id} to={link} end={link === '/'} className={linkClass}>
              {name}
            </NavLink>
          ))}
          <Link to='/book' className='btn btn-accent mt-2'>Book Now</Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
