import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { branches, contactInfo, servicesData } from '../assets/assets'
import {
  AlertIcon,
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  MessengerIcon,
  PhoneIcon,
  SpinnerIcon,
} from '../components/Icons'

const EMAILJS = {
  serviceId: 'service_d01s24o',
  templateId: 'template_5llvaoq',
  publicKey: 'ekC1ZexRUZJ0LqwMm',
}

const initialForm = {
  user_name: '',
  user_email: '',
  user_contact: '',
  service: servicesData[0].name,
  branch: branches[0].name,
  address: '',
  message: '',
}

const Field = ({ label, htmlFor, hint, children }) => (
  <div>
    <label htmlFor={htmlFor} className='mb-1.5 block text-sm font-medium text-slate-700'>
      {label}
      {hint && <span className='ml-1 font-normal text-slate-400'>{hint}</span>}
    </label>
    {children}
  </div>
)

const BookNow = () => {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const isPickup = form.service === 'Pickup & Delivery'

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const sendEmail = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // the EmailJS template renders {{message}}, so fold the booking details into it
    const details = [
      `Service: ${form.service}`,
      `Branch: ${form.branch}`,
      isPickup && form.address && `Pickup address: ${form.address}`,
      form.message && `\n${form.message}`,
    ]
      .filter(Boolean)
      .join('\n')

    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          user_name: form.user_name,
          user_email: form.user_email,
          user_contact: form.user_contact,
          service: form.service,
          branch: form.branch,
          address: form.address,
          message: details,
        },
        { publicKey: EMAILJS.publicKey }
      )
      setStatus('success')
      setForm(initialForm)
    } catch (error) {
      console.error('EmailJS failed:', error)
      setStatus('error')
    }
  }

  return (
    <section className='page-wrap py-16 sm:py-20'>
      <div className='grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16'>
        {/* intro */}
        <div data-aos='fade-right'>
          <p className='eyebrow'>Book now</p>
          <h1 className='mt-3 text-4xl font-bold text-brand-900 sm:text-5xl'>Schedule your laundry</h1>
          <p className='mt-4 text-slate-600'>
            Tell us what you need and which branch is closest. We’ll confirm your booking by phone or email.
          </p>

          <div className='mt-8 space-y-4'>
            <div className='flex items-center gap-3'>
              <span className='grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600'>
                <ClockIcon className='h-5 w-5' />
              </span>
              <p className='text-sm text-slate-600'>
                {contactInfo.days}, <span className='font-semibold text-brand-900'>{contactInfo.hours}</span>
              </p>
            </div>
            <div className='flex items-center gap-3'>
              <span className='grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600'>
                <PhoneIcon className='h-5 w-5' />
              </span>
              <p className='text-sm text-slate-600'>
                Prefer to call?{' '}
                <a href={`tel:${contactInfo.phones[0]}`} className='font-semibold text-brand-700 hover:underline'>
                  {contactInfo.phones[0]}
                </a>
              </p>
            </div>
          </div>

          {/* messenger alternative */}
          <a
            href={contactInfo.messenger}
            target='_blank'
            rel='noopener noreferrer'
            className='group mt-8 flex items-center gap-4 rounded-2xl bg-gradient-to-r from-[#0a7cff] to-[#a334fa] p-5 text-white shadow-lg shadow-[#0a7cff]/25 transition hover:-translate-y-0.5 hover:shadow-xl'
          >
            <span className='grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-[#0a7cff]'>
              <MessengerIcon className='h-6 w-6' />
            </span>
            <div className='flex-1'>
              <p className='font-semibold'>Book via Messenger</p>
              <p className='text-sm text-white/85'>Chat with us directly on Facebook Messenger.</p>
            </div>
            <ArrowRightIcon className='h-5 w-5 transition group-hover:translate-x-1' />
          </a>
        </div>

        {/* form */}
        <div data-aos='fade-left' className='card p-6 sm:p-8'>
          {status === 'success' ? (
            <div className='flex flex-col items-center py-10 text-center' role='status'>
              <span className='grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-600'>
                <CheckIcon className='h-7 w-7' strokeWidth={2.5} />
              </span>
              <h2 className='mt-5 text-2xl font-semibold text-brand-900'>Booking sent!</h2>
              <p className='mt-2 max-w-sm text-slate-600'>
                Thanks! We received your request and will get back to you shortly.
              </p>
              <button type='button' onClick={() => setStatus('idle')} className='btn btn-ghost mt-6'>
                Make another booking
              </button>
            </div>
          ) : (
            <form onSubmit={sendEmail} className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
              <div className='sm:col-span-2'>
                <Field label='Full name' htmlFor='user_name'>
                  <input id='user_name' name='user_name' type='text' required autoComplete='name'
                    value={form.user_name} onChange={update} placeholder='Juan Dela Cruz' className='field' />
                </Field>
              </div>

              <Field label='Email' htmlFor='user_email'>
                <input id='user_email' name='user_email' type='email' required autoComplete='email'
                  value={form.user_email} onChange={update} placeholder='you@example.com' className='field' />
              </Field>

              <Field label='Contact number' htmlFor='user_contact'>
                <input id='user_contact' name='user_contact' type='tel' required autoComplete='tel'
                  pattern='[0-9+\s\-]{7,}' title='Enter a valid phone number'
                  value={form.user_contact} onChange={update} placeholder='09XX XXX XXXX' className='field' />
              </Field>

              <Field label='Service' htmlFor='service'>
                <select id='service' name='service' value={form.service} onChange={update} className='field'>
                  {servicesData.map((s) => (
                    <option key={s.id}>{s.name}</option>
                  ))}
                </select>
              </Field>

              <Field label='Branch' htmlFor='branch'>
                <select id='branch' name='branch' value={form.branch} onChange={update} className='field'>
                  {branches.map((b) => (
                    <option key={b.id}>{b.name}</option>
                  ))}
                </select>
              </Field>

              {isPickup && (
                <div className='sm:col-span-2'>
                  <Field label='Pickup address' htmlFor='address'>
                    <input id='address' name='address' type='text' required autoComplete='street-address'
                      value={form.address} onChange={update} placeholder='House no., street, barangay'
                      className='field' />
                  </Field>
                </div>
              )}

              <div className='sm:col-span-2'>
                <Field label='Message' htmlFor='message' hint='(optional)'>
                  <textarea id='message' name='message' rows={4} value={form.message} onChange={update}
                    placeholder='Preferred pickup time, number of loads, special instructions…'
                    className='field resize-y' />
                </Field>
              </div>

              {status === 'error' && (
                <p role='alert' className='flex items-start gap-2 rounded-xl bg-red-50 p-3 text-sm text-red-700 sm:col-span-2'>
                  <AlertIcon className='mt-0.5 h-4 w-4 shrink-0' />
                  <span>
                    Something went wrong sending your booking. Please try again, call us at {contactInfo.phones[0]}, or{' '}
                    <a href={contactInfo.messenger} target='_blank' rel='noopener noreferrer' className='font-semibold underline'>
                      message us on Messenger
                    </a>.
                  </span>
                </p>
              )}

              <div className='sm:col-span-2'>
                <button type='submit' disabled={status === 'sending'} className='btn btn-primary w-full py-3 text-base'>
                  {status === 'sending' ? (
                    <>
                      <SpinnerIcon className='h-5 w-5' />
                      Sending…
                    </>
                  ) : (
                    'Send booking'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default BookNow
