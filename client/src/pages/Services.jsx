import { Link } from 'react-router-dom'
import { assets, contactInfo, servicesData } from '../assets/assets'
import { ArrowRightIcon, CheckIcon, PhoneIcon } from '../components/Icons'
import { iconMap } from '../components/iconMap'

const laundryServices = servicesData.filter((s) => s.id !== 'install')
const install = servicesData.find((s) => s.id === 'install')

const installPerks = [
  'High-quality commercial washers & dryers',
  'Delivery and professional installation',
  'Guidance on starting your own laundry shop',
]

const Services = () => {
  return (
    <>
      {/* laundry services */}
      <section className='page-wrap py-16 sm:py-20'>
        <div className='mx-auto max-w-2xl text-center' data-aos='fade-up'>
          <p className='eyebrow'>Our services</p>
          <h1 className='mt-3 text-4xl font-bold text-brand-900 sm:text-5xl'>Everything your laundry needs</h1>
          <p className='mt-4 text-slate-600'>
            Wash, dry, fold, and we’ll even come get it. Every load is ready in about 76 minutes.
          </p>
        </div>

        <ul className='mt-14 grid gap-6 md:grid-cols-3'>
          {laundryServices.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <li
                key={service.id}
                data-aos='fade-up'
                data-aos-delay={i * 100}
                className='card flex flex-col p-7 transition hover:-translate-y-1 hover:shadow-lg'
              >
                <span className='grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600'>
                  <Icon className='h-7 w-7' />
                </span>
                <h2 className='mt-6 text-xl font-semibold text-brand-900'>{service.name}</h2>
                <p className='mt-2 text-slate-600'>{service.description}</p>
              </li>
            )
          })}
        </ul>

        <div className='mt-10 flex justify-center' data-aos='fade-up'>
          <Link to='/book' className='btn btn-primary px-6 py-3'>
            Book a service
            <ArrowRightIcon className='h-4 w-4' />
          </Link>
        </div>
      </section>

      {/* machine delivery & installation */}
      <section className='bg-white py-16 sm:py-20'>
        <div className='page-wrap grid items-center gap-12 lg:grid-cols-2'>
          <div data-aos='fade-right' className='relative'>
            <div aria-hidden='true' className='absolute -inset-3 -z-10 -rotate-2 rounded-[2rem] bg-brand-100' />
            <img
              src={assets.install1}
              alt='Hercy technicians installing commercial washers and dryers'
              loading='lazy'
              className='aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-xl'
            />
          </div>

          <div data-aos='fade-left'>
            <p className='eyebrow'>For business owners</p>
            <h2 className='mt-3 text-3xl font-bold text-brand-900 sm:text-4xl'>{install.name}</h2>
            <p className='mt-4 text-slate-600'>
              Thinking of running a laundry business? {install.description}
            </p>
            <p className='mt-3 font-medium text-brand-700'>
              Tara! Usap tayo! Matutulungan ka namin sa pangarap mong negosyo!
            </p>

            <ul className='mt-6 space-y-3'>
              {installPerks.map((perk) => (
                <li key={perk} className='flex items-start gap-3 text-slate-700'>
                  <span className='mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sun-400 text-brand-900'>
                    <CheckIcon className='h-3 w-3' strokeWidth={3} />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>

            <div className='mt-8 flex flex-wrap gap-3'>
              <a href={`tel:${contactInfo.phones[0]}`} className='btn btn-primary'>
                <PhoneIcon className='h-4 w-4' />
                Call us
              </a>
              <Link to='/book' className='btn btn-ghost'>Send an inquiry</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
