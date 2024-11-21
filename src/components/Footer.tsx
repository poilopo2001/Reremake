'use client';

import Link from 'next/link';

const navigation = {
  main: [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'À Propos', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    'Débouchage',
    'Détection de fuite',
    'Réparation chauffe-eau',
    'Installation sanitaire',
    'Dépannage urgent',
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="text-2xl font-bold text-white">
              PlombierPro
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              Service de plomberie professionnel 24/7 à Luxembourg.
              Intervention rapide et efficace pour tous vos besoins en plomberie.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-500 hover:text-gray-400">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Navigation</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li className="flex">
                  <div className="text-sm leading-6 text-gray-300">
                    <strong className="text-white">Téléphone:</strong>
                    <br />
                    <a href="tel:+352123456" className="hover:text-white">
                      +352 123 456
                    </a>
                  </div>
                </li>
                <li className="flex">
                  <div className="text-sm leading-6 text-gray-300">
                    <strong className="text-white">Email:</strong>
                    <br />
                    <a href="mailto:contact@plombierpro.lu" className="hover:text-white">
                      contact@plombierpro.lu
                    </a>
                  </div>
                </li>
                <li className="flex">
                  <div className="text-sm leading-6 text-gray-300">
                    <strong className="text-white">Adresse:</strong>
                    <br />
                    Luxembourg-Ville
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} PlombierPro Luxembourg. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}