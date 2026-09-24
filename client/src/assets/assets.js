import ugac_1 from './ugac_1.jpeg'
import ugac_2 from './ugac_2.jpeg'
import ugac_3 from './ugac_3.jpeg'
import ugac_4 from './ugac_4.jpeg'
import ugac_5 from './ugac_5.jpeg'
import commercial from './commercial.avif'
import hercy_blue from './hercy_blue.png'
import washing_nbg from './washing_nbg.webm'
import variety from './variety.jpg'
import kitchenette from './kitchenette.png'
import delivery1 from './delivery1.jpeg'
import delivery2 from './delivery2.jpeg'
import hercy1 from './hercy1.jpeg'
import hercy2 from './hercy2.jpeg'
import hercy3 from './hercy3.jpeg'
import hercy4 from './hercy4.jpeg'
import pwesto1 from './pwesto1.jpeg'
import pwesto2 from './pwesto2.jpeg'
import install1 from './install1.jpg'

export const assets = {
  hercy_blue,
  washing_nbg,
  variety,
  kitchenette,
  install1,
}

export const contactInfo = {
  phones: ['+639983556546', '+639773304605'],
  email: 'hercylaundrette@gmail.com',
  facebook: 'https://www.facebook.com/hercylaundrette',
  hours: '7:00 AM – 7:00 PM',
  days: 'Open everyday',
}

export const imageList = [
  { id: 1, image: hercy1, alt: 'Hercy Laundrette storefront' },
  { id: 2, image: ugac_1, alt: 'Ugac branch interior' },
  { id: 3, image: commercial, alt: 'Commercial washing machines' },
  { id: 4, image: ugac_2, alt: 'Ugac branch washers' },
  { id: 5, image: delivery1, alt: 'Laundry delivery' },
  { id: 6, image: hercy2, alt: 'Hercy Laundrette branch' },
  { id: 7, image: ugac_3, alt: 'Ugac branch dryers' },
  { id: 8, image: pwesto1, alt: 'Branch location' },
  { id: 9, image: ugac_4, alt: 'Ugac branch' },
  { id: 10, image: delivery2, alt: 'Laundry delivery van' },
  { id: 11, image: hercy3, alt: 'Hercy Laundrette branch' },
  { id: 12, image: pwesto2, alt: 'Branch location' },
  { id: 13, image: ugac_5, alt: 'Ugac branch' },
  { id: 14, image: hercy4, alt: 'Hercy Laundrette branch' },
]

// icon keys map to components in components/Icons.jsx
export const servicesData = [
  {
    id: 'wash',
    icon: 'washer',
    name: 'Wash Service',
    description: 'Premium detergents and fabric care. Your laundry, our priority.',
  },
  {
    id: 'dry',
    icon: 'wind',
    name: 'Dry Service',
    description: 'Cleaned, dried, folded and ready to wear.',
  },
  {
    id: 'pickup',
    icon: 'truck',
    name: 'Pickup & Delivery',
    description: 'Skip the trip and the traffic. Schedule a pickup — we come to you.',
  },
  {
    id: 'install',
    icon: 'wrench',
    name: 'Machine Delivery & Installation',
    description: 'We deliver and install high-quality commercial laundry machines.',
  },
]

export const workflowSteps = [
  {
    id: 1,
    icon: 'calendar',
    title: 'Book',
    description: 'Send a booking online, call, or message us on Facebook.',
  },
  {
    id: 2,
    icon: 'truck',
    title: 'We pick up',
    description: 'Drop off at any branch, or we collect it from your door.',
  },
  {
    id: 3,
    icon: 'washer',
    title: 'Wash, dry & fold',
    description: 'Done in about 76 minutes with quality detergents.',
  },
  {
    id: 4,
    icon: 'shirt',
    title: 'Ready to wear',
    description: 'Pick it up fresh, or we deliver it back to you.',
  },
]

export const branches = [
  {
    id: 'juliana',
    name: 'Juliana Main',
    address: 'Juliana Square Building, Rizal St., Centro 4, Tuguegarao City',
  },
  {
    id: 'ugac',
    name: 'Ugac Branch',
    address: 'Ugac Norte, Tuguegarao City',
    landmark: 'Beside Fuel Hub, near St. Paul Hospital',
  },
  {
    id: 'tanza',
    name: 'Tanza Branch',
    address: '42 Pan Philippine Highway, Tanza, Tuguegarao City',
    landmark: 'In front of Nissan Tanza',
  },
  {
    id: 'carig',
    name: 'Carig Branch',
    address: 'Maharlika Highway, Carig, Tuguegarao City',
    landmark: 'In front of CVMC',
  },
  {
    id: 'caggay',
    name: 'Caggay Branch',
    address: 'Josh Building, Caggay Highway, Tuguegarao City',
  },
  {
    id: 'gonzaga',
    name: 'Gonzaga Branch',
    address: 'Mabini St., Smart Poblacion, Gonzaga, Cagayan',
  },
]

export const mapsUrl = (address) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

export const navLinks = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'Services', link: '/services' },
  { id: 3, name: 'Contact', link: '/contact' },
]
