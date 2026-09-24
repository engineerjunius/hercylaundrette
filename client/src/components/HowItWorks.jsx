import { Link } from 'react-router-dom'
import { workflowSteps } from '../assets/assets'
import { ArrowRightIcon } from './Icons'
import { iconMap } from './iconMap'

const HowItWorks = () => {
  return (
    <section className='page-wrap py-20'>
      <div className='mx-auto max-w-2xl text-center' data-aos='fade-up'>
        <p className='eyebrow'>How it works</p>
        <h2 className='mt-3 text-3xl font-bold text-brand-900 sm:text-4xl'>Laundry done in four easy steps</h2>
        <p className='mt-4 text-slate-600'>No waiting around. Book ahead and we’ll have it ready when you are.</p>
      </div>

      <ol className='relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {/* connecting line on desktop */}
        <div
          aria-hidden='true'
          className='absolute top-8 left-[12.5%] right-[12.5%] hidden border-t-2 border-dashed border-brand-200 lg:block'
        />

        {workflowSteps.map((step, i) => {
          const Icon = iconMap[step.icon]
          return (
            <li
              key={step.id}
              data-aos='fade-up'
              data-aos-delay={i * 100}
              className='relative flex flex-col items-center text-center'
            >
              <span className='relative grid h-16 w-16 place-items-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/30'>
                <Icon className='h-7 w-7' />
                <span className='absolute -top-2 -right-2 grid h-6 w-6 place-items-center rounded-full bg-sun-400 text-xs font-bold text-brand-900 ring-2 ring-slate-50'>
                  {step.id}
                </span>
              </span>
              <h3 className='mt-5 text-lg font-semibold text-brand-900'>{step.title}</h3>
              <p className='mt-2 max-w-[16rem] text-sm text-slate-600'>{step.description}</p>
            </li>
          )
        })}
      </ol>

      <div className='mt-12 flex justify-center' data-aos='fade-up'>
        <Link to='/book' className='btn btn-primary px-6 py-3'>
          Start with step 1
          <ArrowRightIcon className='h-4 w-4' />
        </Link>
      </div>
    </section>
  )
}

export default HowItWorks
