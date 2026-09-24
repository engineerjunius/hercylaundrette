import { Link } from 'react-router-dom'
import { assets, contactInfo, navLinks } from '../assets/assets'
import { FacebookIcon, MailIcon, PhoneIcon } from './Icons'

const Footer = () => {
  return (
    <footer className='bg-brand-900 text-brand-100'>
      <div className='page-wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4'>
        {/* brand */}
        <div className='lg:col-span-2'>
          <Link to='/' className='inline-flex items-center gap-3'>
            <img src={assets.hercy_blue} alt='' className='h-12 w-12 rounded-full bg-white object-cover' />
            <span className='text-xl font-bold text-white'>Hercy Laundrette</span>
          </Link>
          <p className='mt-4 max-w-sm text-sm text-brand-200'>
            Your 76-minute laundry shop in Tuguegarao City, Cagayan. {contactInfo.days}, {contactInfo.hours}.
          </p>
          <div className='mt-5 flex gap-3'>
            <a href={contactInfo.facebook} target='_blank' rel='noopener noreferrer' aria-label='Facebook'
              className='grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-sun-400 hover:text-brand-900'>
              <FacebookIcon className='h-5 w-5' />
            </a>
            <a href={`mailto:${contactInfo.email}`} aria-label='Email'
              className='grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-sun-400 hover:text-brand-900'>
              <MailIcon className='h-5 w-5' />
            </a>
            <a href={`tel:${contactInfo.phones[0]}`} aria-label='Call'
              className='grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-sun-400 hover:text-brand-900'>
              <PhoneIcon className='h-5 w-5' />
            </a>
          </div>
        </div>

        {/* links */}
        <nav aria-label='Footer'>
          <h3 className='text-sm font-semibold uppercase tracking-wider text-white'>Explore</h3>
          <ul className='mt-4 space-y-2 text-sm'>
            {[...navLinks, { id: 'book', name: 'Book Now', link: '/book' }].map(({ id, name, link }) => (
              <li key={id}>
                <Link to={link} className='transition hover:text-sun-400'>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* sister businesses */}
        <div>
          <h3 className='text-sm font-semibold uppercase tracking-wider text-white'>Also by Hercy</h3>
          <div className='mt-4 flex items-center gap-3'>
            <img src={assets.variety} alt='Hercy Variety Store' className='h-14 w-auto rounded-lg' />
            <img src={assets.kitchenette} alt="Hercy's Kitchenette" className='h-14 w-auto rounded-lg bg-white p-1' />
          </div>
        </div>
      </div>

      <div className='border-t border-white/10'>
        <p className='page-wrap py-5 text-center text-xs text-brand-300 sm:text-left'>
          © {new Date().getFullYear()} Hercy Laundrette. All rights reserved. · Built by engineerjunius.dev
        </p>
      </div>
    </footer>
  )
}

export default Footer
