import { Link } from 'react-router-dom'
import { assets, branches, contactInfo, mapsUrl } from '../assets/assets'
import { ArrowRightIcon, ClockIcon, MapPinIcon, StoreIcon, TruckIcon } from './Icons'

const Branches = () => {
  return (
    <section className='bg-white py-20'>
      <div className='page-wrap'>
        {/* hours banner */}
        <div
          data-aos='fade-up'
          className='relative overflow-hidden rounded-3xl bg-brand-700 px-6 py-10 text-white sm:px-10 lg:px-14'
        >
          <div aria-hidden='true' className='absolute -top-20 -right-20 h-64 w-64 rounded-full bg-sun-400/25 blur-2xl' />
          <div className='relative grid items-center gap-8 md:grid-cols-[1fr_auto]'>
            <div>
              <h2 className='text-3xl font-bold sm:text-4xl'>
                Open <span className='text-sun-400'>everyday</span>
              </h2>
              <div className='mt-5 flex flex-col gap-3 text-brand-100 sm:flex-row sm:gap-8'>
                <p className='flex items-center gap-2'>
                  <ClockIcon className='h-5 w-5 text-sun-400' />
                  {contactInfo.hours}
                </p>
                <p className='flex items-center gap-2'>
                  <TruckIcon className='h-5 w-5 text-sun-400' />
                  Pickup & delivery available
                </p>
              </div>
              <div className='mt-8 flex flex-wrap gap-3'>
                <Link to='/book' className='btn btn-accent'>
                  Book now
                  <ArrowRightIcon className='h-4 w-4' />
                </Link>
                <Link to='/contact' className='btn bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20'>
                  Contact us
                </Link>
              </div>
            </div>
            <video
              src={assets.washing_nbg}
              autoPlay
              loop
              muted
              playsInline
              aria-hidden='true'
              className='mx-auto hidden w-48 drop-shadow-2xl md:block lg:w-56'
            />
          </div>
        </div>

        {/* branch list */}
        <div className='mt-20 text-center' data-aos='fade-up'>
          <p className='eyebrow'>Find us</p>
          <h2 className='mt-3 text-3xl font-bold text-brand-900 sm:text-4xl'>Our branches</h2>
          <p className='mt-4 text-slate-600'>There’s a Hercy near you. Tap a branch to get directions.</p>
        </div>

        <ul className='mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {branches.map((branch, i) => (
            <li key={branch.id} data-aos='fade-up' data-aos-delay={(i % 3) * 100}>
              <a
                href={mapsUrl(branch.address)}
                target='_blank'
                rel='noopener noreferrer'
                className='card group flex h-full flex-col p-6 transition hover:-translate-y-1 hover:shadow-lg hover:ring-brand-200'
              >
                <div className='flex items-center gap-3'>
                  <span className='grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white'>
                    <StoreIcon className='h-5 w-5' />
                  </span>
                  <h3 className='text-lg font-semibold text-brand-900'>{branch.name}</h3>
                </div>
                <p className='mt-4 flex gap-2 text-sm text-slate-600'>
                  <MapPinIcon className='mt-0.5 h-4 w-4 shrink-0 text-brand-500' />
                  <span>
                    {branch.address}
                    {branch.landmark && <span className='block text-slate-400'>{branch.landmark}</span>}
                  </span>
                </p>
                <span className='mt-auto flex items-center gap-1 pt-5 text-sm font-semibold text-brand-600'>
                  Get directions
                  <ArrowRightIcon className='h-4 w-4 transition group-hover:translate-x-1' />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Branches
