import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import { branches, contactInfo, imageList } from '../assets/assets'
import { ArrowRightIcon, ClockIcon, MapPinIcon, SparklesIcon, TruckIcon } from './Icons'

const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 700,
  fade: true,
  autoplay: true,
  autoplaySpeed: 3500,
  pauseOnHover: true,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const highlights = [
  { icon: SparklesIcon, label: '76-minute turnaround' },
  { icon: ClockIcon, label: `Open daily, ${contactInfo.hours}` },
  { icon: TruckIcon, label: 'Pickup & delivery' },
]

const Hero = () => {
  return (
    <section className='relative overflow-hidden'>
      {/* soft brand backdrop */}
      <div aria-hidden='true' className='pointer-events-none absolute inset-0 -z-10'>
        <div className='absolute -top-32 -left-24 h-96 w-96 rounded-full bg-brand-200/60 blur-3xl' />
        <div className='absolute top-40 -right-24 h-96 w-96 rounded-full bg-sun-300/40 blur-3xl' />
      </div>

      <div className='page-wrap grid grid-cols-1 items-center gap-12 py-12 sm:py-16 lg:grid-cols-2 lg:py-24'>
        {/* copy */}
        <div className='min-w-0 text-center lg:text-left'>
          <span
            data-aos='fade-up'
            className='inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100 shadow-sm'
          >
            <MapPinIcon className='h-3.5 w-3.5' />
            {branches.length} branches across Tuguegarao & Cagayan
          </span>

          <h1
            data-aos='fade-up'
            data-aos-delay='100'
            className='mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-900 sm:text-5xl lg:text-6xl'
          >
            Fresh, clean laundry in{' '}
            <span className='relative whitespace-nowrap text-brand-600'>
              76 minutes
              <svg
                aria-hidden='true'
                viewBox='0 0 220 12'
                preserveAspectRatio='none'
                className='absolute -bottom-2 left-0 h-3 w-full text-sun-400'
              >
                <path d='M2 9c50-6 120-8 216-3' fill='none' stroke='currentColor' strokeWidth='5' strokeLinecap='round' />
              </svg>
            </span>
          </h1>

          <p
            data-aos='fade-up'
            data-aos-delay='200'
            className='mx-auto mt-6 max-w-xl text-lg text-slate-600 lg:mx-0'
          >
            Welcome to <strong className='font-semibold text-brand-800'>Hercy Laundrette</strong>, your
            76-minute laundry shop. Drop it off or book a pickup, and we’ll wash, dry and fold it for you.
          </p>

          <div
            data-aos='fade-up'
            data-aos-delay='300'
            className='mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start'
          >
            <Link to='/book' className='btn btn-primary px-6 py-3 text-base'>
              Book a pickup
              <ArrowRightIcon className='h-4 w-4' />
            </Link>
            <Link to='/services' className='btn btn-ghost px-6 py-3 text-base'>
              View services
            </Link>
          </div>

          <ul
            data-aos='fade-up'
            data-aos-delay='400'
            className='mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-600 lg:justify-start'
          >
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className='flex items-center gap-2'>
                <span className='grid h-8 w-8 place-items-center rounded-full bg-brand-50 text-brand-600'>
                  <Icon className='h-4 w-4' />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* photo carousel */}
        <div data-aos='fade-left' data-aos-delay='200' className='relative mx-auto w-full min-w-0 max-w-md lg:max-w-none'>
          <div aria-hidden='true' className='absolute -inset-3 -z-10 rotate-3 rounded-[2rem] bg-sun-400/70' />
          <div className='hero-slider overflow-hidden rounded-[1.75rem] shadow-2xl shadow-brand-900/20 ring-4 ring-white'>
            <Slider {...sliderSettings}>
              {imageList.map((item) => (
                <div key={item.id}>
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading={item.id === 1 ? 'eager' : 'lazy'}
                    className='aspect-[4/3] w-full object-cover'
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* floating hours badge */}
          <div className='card absolute -bottom-6 left-4 flex items-center gap-3 px-4 py-3 sm:left-6'>
            <span className='grid h-10 w-10 place-items-center rounded-xl bg-sun-400 text-brand-900'>
              <ClockIcon className='h-5 w-5' />
            </span>
            <div className='text-left'>
              <p className='text-xs text-slate-500'>{contactInfo.days}</p>
              <p className='text-sm font-semibold text-brand-900'>{contactInfo.hours}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
