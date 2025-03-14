import Link from 'next/link'
import { CheckIcon } from '@heroicons/react/20/solid'
import { 
  HandThumbUpIcon, 
  ShieldCheckIcon, 
  ClockIcon, 
  UserGroupIcon, 
  AcademicCapIcon,
  ArrowRightIcon,
  StarIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'One-Handed Operation',
    description: 'Designed for easy, single-handed application when you need it most.',
    icon: HandThumbUpIcon,
  },
  {
    name: 'Sterile Protection',
    description: 'Maintains sterility with sealed cartridges and protective exit port.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Quick Application',
    description: 'Self-cutting mechanism allows for fast and precise dressing application.',
    icon: ClockIcon,
  },
]

const benefits = [
  {
    title: 'For Healthcare Professionals',
    description: 'Improve efficiency in fast-paced medical environments with quick, precise application.',
    icon: UserGroupIcon,
    points: [
      'Reduces dressing application time by up to 60%',
      'Maintains sterility in challenging environments',
      'Compatible with standard medical protocols',
      'Reduces risk of cross-contamination'
    ],
    cta: {
      text: 'View Professional Solutions',
      href: '/healthcare'
    }
  },
  {
    title: 'For Patients & Caregivers',
    description: 'Simplify wound care with intuitive design that anyone can use, even with limited mobility.',
    icon: AcademicCapIcon,
    points: [
      'Simple enough for self-care at home',
      'Ideal for patients with limited dexterity',
      'Clear instructions for proper application',
      'Reduces dependency on caregivers'
    ],
    cta: {
      text: 'Explore Patient Solutions',
      href: '/products'
    }
  }
]

const testimonialData = [
  {
    quote: "SoloWrap has revolutionized our emergency department's wound care protocol. The one-handed application saves critical time when it matters most.",
    authorName: 'Dr. Sarah Johnson',
    authorTitle: 'Emergency Medicine Director',
    authorImage: '/images/testimonial-1.jpg',
    rating: 5,
  },
  {
    quote: "As a nurse caring for post-surgical patients, SoloWrap has made dressing changes more efficient and less painful for my patients.",
    authorName: 'Michael Chen, RN',
    authorTitle: 'Surgical Care Unit',
    authorImage: '/images/testimonial-2.jpg',
    rating: 5,
  },
  {
    quote: "After my hand surgery, I was able to change my own dressings using SoloWrap. The independence it provided was invaluable to my recovery.",
    authorName: 'Patricia Miller',
    authorTitle: 'Patient',
    authorImage: '/images/testimonial-3.jpg',
    rating: 5,
  },
]

const stats = [
  { value: '60%', label: 'Faster Application' },
  { value: '93%', label: 'User Satisfaction' },
  { value: '1000+', label: 'Healthcare Facilities' },
  { value: '25+', label: 'Countries Worldwide' },
]

export default function Home() {
  return (
    <>
      {/* Hero section with gradient background and wave shape */}
      <div className="relative isolate overflow-hidden bg-white">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-200 to-teal-200 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto animate-slide-in-left">
            <div className="flex">
              <div className="relative flex items-center gap-x-2 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 transition-all duration-300 hover:shadow-md">
                <span className="font-semibold text-blue-600">FDA Registered</span>
                <span className="h-0.5 w-0.5 rounded-full bg-gray-300" />
                <Link href="/fda-info" className="flex items-center gap-x-1 font-semibold text-blue-600 hover:text-blue-500 transition-colors">
                  <span>View certification</span>
                  <svg className="h-4 w-4 stroke-blue-600 group-hover:stroke-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </Link>
              </div>
            </div>
            <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              One-Handed Medical Dressing
              <span className="bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent block"> Made Simple</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Revolutionary self-cutting bandage dispenser that allows quick, sterile wound coverage with only one free hand. Designed for healthcare professionals and patients alike.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/products"
                className="btn-primary group shine-effect"
              >
                View Products
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/about" className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500 transition-colors group">
                Learn more <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow animate-slide-in-right">
            <div className="relative mx-auto w-80 h-80 lg:w-[450px] lg:h-[450px] animate-float">
              <div className="absolute w-full h-full rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <div className="relative w-2/3 h-2/3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center text-white font-bold text-xl shadow-md">
                    <span>SoloWrap</span>
                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-xs font-bold px-2 py-1 rounded-full transform rotate-12 shadow-sm animate-pulse">
                      New
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-200 to-teal-200 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      {/* Stats section */}
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-6 text-center lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="mx-auto flex max-w-xs flex-col gap-y-2 card-3d"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-blue-600 sm:text-4xl bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Features section */}
      <div className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center animate-fade-in">
            <h2 className="section-subtitle">Advanced Design</h2>
            <p className="mt-2 section-title">
              Everything you need for wound care
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              SoloWrap combines innovative design with medical-grade materials to provide a superior wound dressing solution.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={feature.name} className={`flex flex-col card-hover animate-fade-in animate-delay-${index * 100}`}>
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <div className="feature-icon-container">
                      <feature.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <Link
                        href="#"
                        className="text-sm font-semibold leading-6 text-blue-600 group flex items-center"
                      >
                        Learn more
                        <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Benefits section */}
      <div className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center animate-fade-in">
            <h2 className="section-subtitle">Versatile Solutions</h2>
            <p className="mt-2 section-title">
              Designed for Everyone
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether you&apos;re a healthcare professional or a patient, SoloWrap provides the perfect solution for your wound care needs.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div key={index} className="gradient-border p-8 shadow-sm bg-white animate-fade-in animate-delay-100 card-3d">
                <div className="flex items-center gap-x-4">
                  <div className="feature-icon-container">
                    <benefit.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold leading-7 text-gray-900">{benefit.title}</h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">{benefit.description}</p>
                <ul role="list" className="mt-8 space-y-3">
                  {benefit.points.map((point, i) => (
                    <li key={i} className="flex gap-x-3 items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <CheckIcon className="h-4 w-4 text-blue-600" aria-hidden="true" />
                      </div>
                      <span className="text-sm leading-6 text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link 
                    href={benefit.cta.href} 
                    className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500 group flex items-center shine-effect"
                  >
                    {benefit.cta.text} <span className="inline-block ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials section - reverted to original */}
      <div className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center animate-fade-in">
            <h2 className="section-subtitle">Testimonials</h2>
            <p className="mt-2 section-title">
              Trusted by Medical Professionals
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Hear what healthcare providers and patients have to say about their experience with SoloWrap.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-3">
            {testimonialData.map((testimonial, index) => (
              <div key={index} className="flex flex-col justify-between rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow animate-fade-in animate-delay-100">
                <div>
                  <div className="flex items-center gap-x-4">
                    <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24">
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold leading-6 text-gray-900">{testimonial.authorName}</h3>
                      <p className="text-sm text-gray-500">{testimonial.authorTitle}</p>
                    </div>
                  </div>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon 
                        key={i} 
                        className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <p className="mt-6 text-base italic leading-7 text-gray-600">{testimonial.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to action section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 dot-pattern"></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your wound care?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Join healthcare professionals worldwide who trust SoloWrap for efficient, sterile dressing application.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/products"
                className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-blue-600 shadow-md hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 shine-effect"
              >
                Get Started
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors group flex items-center"
              >
                Contact Sales <span className="inline-block ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

