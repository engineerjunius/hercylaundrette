// Inline stroke icons (24x24, currentColor) — one consistent set for the whole site.
const Icon = ({ children, className = 'w-5 h-5', strokeWidth = 1.8, ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth={strokeWidth}
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
    aria-hidden='true'
    {...props}
  >
    {children}
  </svg>
)

export const MenuIcon = (p) => (
  <Icon {...p}><path d='M4 6h16M4 12h16M4 18h16' /></Icon>
)

export const CloseIcon = (p) => (
  <Icon {...p}><path d='M18 6 6 18M6 6l12 12' /></Icon>
)

export const PhoneIcon = (p) => (
  <Icon {...p}>
    <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z' />
  </Icon>
)

export const MailIcon = (p) => (
  <Icon {...p}>
    <rect x='2' y='4' width='20' height='16' rx='2' />
    <path d='m22 7-10 6L2 7' />
  </Icon>
)

export const MapPinIcon = (p) => (
  <Icon {...p}>
    <path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' />
    <circle cx='12' cy='10' r='3' />
  </Icon>
)

export const ClockIcon = (p) => (
  <Icon {...p}>
    <circle cx='12' cy='12' r='10' />
    <path d='M12 6v6l4 2' />
  </Icon>
)

export const CalendarIcon = (p) => (
  <Icon {...p}>
    <rect x='3' y='4' width='18' height='18' rx='2' />
    <path d='M16 2v4M8 2v4M3 10h18' />
  </Icon>
)

export const TruckIcon = (p) => (
  <Icon {...p}>
    <path d='M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2' />
    <path d='M15 18H9' />
    <path d='M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14' />
    <circle cx='17' cy='18' r='2' />
    <circle cx='7' cy='18' r='2' />
  </Icon>
)

export const WasherIcon = (p) => (
  <Icon {...p}>
    <rect x='3' y='2' width='18' height='20' rx='2' />
    <path d='M3 6h18M7 4h.01M10 4h.01' />
    <circle cx='12' cy='14' r='5' />
    <path d='M12 19a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5' />
  </Icon>
)

export const WindIcon = (p) => (
  <Icon {...p}>
    <path d='M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2' />
    <path d='M9.6 4.6A2 2 0 1 1 11 8H2' />
    <path d='M12.6 19.4A2 2 0 1 0 14 16H2' />
  </Icon>
)

export const ShirtIcon = (p) => (
  <Icon {...p}>
    <path d='M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z' />
  </Icon>
)

export const WrenchIcon = (p) => (
  <Icon {...p}>
    <path d='M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z' />
  </Icon>
)

export const SparklesIcon = (p) => (
  <Icon {...p}>
    <path d='M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z' />
    <path d='M19 3v4M17 5h4M5 17v4M3 19h4' />
  </Icon>
)

export const StoreIcon = (p) => (
  <Icon {...p}>
    <path d='M3 9l1.5-5h15L21 9' />
    <path d='M4 9v11h16V9M3 9h18' />
    <path d='M9 20v-6h6v6' />
  </Icon>
)

export const FacebookIcon = (p) => (
  <Icon {...p}>
    <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
  </Icon>
)

export const MessengerIcon = (p) => (
  <Icon {...p}>
    <path d='M12 2.5c-5.25 0-9.5 3.95-9.5 8.83 0 2.78 1.38 5.26 3.54 6.88V21.5l3.24-1.78c.86.24 1.77.36 2.72.36 5.25 0 9.5-3.95 9.5-8.83S17.25 2.5 12 2.5Z' />
    <path d='m7 13.5 3-3.2 2.4 2 2.6-2.8' />
  </Icon>
)

export const ArrowRightIcon = (p) => (
  <Icon {...p}><path d='M5 12h14M12 5l7 7-7 7' /></Icon>
)

export const CheckIcon = (p) => (
  <Icon {...p}><path d='M20 6 9 17l-5-5' /></Icon>
)

export const AlertIcon = (p) => (
  <Icon {...p}>
    <circle cx='12' cy='12' r='10' />
    <path d='M12 8v4M12 16h.01' />
  </Icon>
)

export const SpinnerIcon = ({ className = 'w-5 h-5', ...p }) => (
  <Icon className={`${className} animate-spin`} {...p}>
    <path d='M21 12a9 9 0 1 1-6.22-8.56' />
  </Icon>
)

