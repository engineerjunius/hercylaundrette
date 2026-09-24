import { Link } from 'react-router-dom'
import { contactInfo } from '../assets/assets'
import { ArrowRightIcon, ClockIcon, FacebookIcon, MailIcon, PhoneIcon } from '../components/Icons'

const channels = [
  {
    id: 'phone',
    icon: PhoneIcon,
    title: 'Call or text',
    lines: contactInfo.phones.map((phone) => ({ label: phone, href: `tel:${phone}` })),
  },
  {
    id: 'email',
    icon: MailIcon,
    title: 'Email',
    lines: [{ label: contactInfo.email, href: `mailto:${contactInfo.email}` }],
  },
  {
    id: 'facebook',
    icon: FacebookIcon,
    title: 'Facebook',
    lines: [{ label: 'Hercy Laundrette', href: contactInfo.facebook, external: true }],
  },
  {
    id: 'hours',
    icon: ClockIcon,
    title: 'Store hours',
    lines: [{ label: `${contactInfo.days}, ${contactInfo.hours}` }],
  },
]

const Contact = () => {
  return (
    <section className='page-wrap py-16 sm:py-20'>
      <div className='mx-auto max-w-2xl text-center' data-aos='fade-up'>
        <p className='eyebrow'>Contact</p>
        <h1 className='mt-3 text-4xl font-bold text-brand-900 sm:text-5xl'>We’d love to hear from you</h1>
        <p className='mt-4 text-slate-600'>Questions, bookings or business inquiries: reach us however is easiest.</p>
      </div>

      <ul className='mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2'>
        {channels.map(({ id, icon: Icon, title, lines }, i) => (
          <li key={id} data-aos='fade-up' data-aos-delay={i * 80} className='card flex items-start gap-4 p-6'>
            <span className='grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-600 text-white'>
              <Icon className='h-5 w-5' />
            </span>
            <div className='min-w-0'>
              <h2 className='font-semibold text-brand-900'>{title}</h2>
              {lines.map(({ label, href, external }) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                    className='block break-words text-slate-600 transition hover:text-brand-600'
                  >
                    {label}
                  </a>
                ) : (
                  <p key={label} className='text-slate-600'>{label}</p>
                )
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className='mt-12 flex justify-center' data-aos='fade-up'>
        <Link to='/book' className='btn btn-primary px-6 py-3'>
          Send us a message
          <ArrowRightIcon className='h-4 w-4' />
        </Link>
      </div>
    </section>
  )
}

export default Contact
