import { Link } from 'react-router-dom'
import { WasherIcon } from '../components/Icons'

const NotFound = () => (
  <section className='page-wrap flex flex-col items-center py-28 text-center'>
    <span className='grid h-16 w-16 place-items-center rounded-2xl bg-brand-50 text-brand-600'>
      <WasherIcon className='h-8 w-8' />
    </span>
    <h1 className='mt-6 text-3xl font-bold text-brand-900'>Page not found</h1>
    <p className='mt-2 text-slate-500'>This page went through the wash and never came back.</p>
    <Link to='/' className='btn btn-primary mt-8'>Back to home</Link>
  </section>
)

export default NotFound
