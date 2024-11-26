import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

interface SubLink {
  name: string;
  path: string;
}

interface SiteLink {
  name: string;
  path: string;
  subLinks?: SubLink[];
}

interface SiteSection {
  title: string;
  links: SiteLink[];
}

const siteStructure: SiteSection[] = [
  {
    title: "Pages principales",
    links: [
      { name: "Accueil", path: "/" },
      { name: "À propos", path: "/a-propos" },
      { name: "Services", path: "/services" },
      { name: "Projets", path: "/projets" },
      { name: "Blog", path: "/blog" },
      { name: "Contact", path: "/contact" }
    ]
  },
  {
    title: "Services de rénovation",
    links: [
      {
        name: "Rénovation de l'habitat",
        path: "/renovation-habitat",
        subLinks: [
          { name: "Rénovation de salles de bain", path: "/renovation-habitat/salle-de-bain" },
          { name: "Rénovation d'appartements", path: "/renovation-habitat/appartement" },
          { name: "Cuisine", path: "/renovation-habitat/cuisine" },
          { name: "Aménagement combles", path: "/renovation-habitat/combles" },
          { name: "Rénovation maison", path: "/renovation-habitat/maison" },
          { name: "Isolation intérieure", path: "/renovation-habitat/isolation-interieure" }
        ]
      },
      {
        name: "Rénovation énergétique",
        path: "/renovation-energetique",
        subLinks: [
          { name: "Chauffage", path: "/renovation-energetique/chauffage" },
          { name: "Isolation extérieure", path: "/renovation-energetique/isolation-exterieure" },
          { name: "Ventilation", path: "/renovation-energetique/ventilation" },
          { name: "Menuiseries", path: "/renovation-energetique/menuiseries" }
        ]
      },
      {
        name: "Extensions bois",
        path: "/extension-bois",
        subLinks: [
          { name: "Types d'extensions", path: "/extension-bois/types" },
          { name: "Matériaux et techniques", path: "/extension-bois/materiaux" },
          { name: "Réglementations", path: "/extension-bois/reglementations" }
        ]
      }
    ]
  },
  {
    title: "Blog",
    links: [
      { name: "Articles récents", path: "/blog" },
      { name: "Conseils rénovation", path: "/blog/category/conseils" },
      { name: "Guides pratiques", path: "/blog/category/guides" },
      { name: "Tendances", path: "/blog/category/tendances" },
      { name: "Actualités", path: "/blog/category/actualites" }
    ]
  },
  {
    title: "Informations légales",
    links: [
      { name: "Mentions légales", path: "/mentions-legales" },
      { name: "Politique de confidentialité", path: "/politique-de-confidentialite" },
      { name: "Plan du site", path: "/plan-du-site" }
    ]
  }
]

export const SitemapPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Plan du Site | REMAKE - Navigation Complète</title>
        <meta name="description" content="Plan du site REMAKE : accédez facilement à toutes les pages de notre site sur la rénovation d'habitat, rénovation énergétique et extensions bois en Île-de-France." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://remake.fr/plan-du-site" />
      </Helmet>

      <div className="bg-white px-6 py-32 lg:px-8">
        <motion.div 
          className="mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Plan du Site
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Une vue d'ensemble de toutes les pages disponibles sur notre site
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {siteStructure.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                className="relative bg-gray-50 p-8 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              >
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
                  {section.title}
                </h2>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.path}>
                      <Link 
                        to={link.path}
                        className="text-lg font-semibold text-gray-900 hover:text-orange-500 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                      {link.subLinks && (
                        <ul className="mt-2 ml-6 space-y-2">
                          {link.subLinks.map((subLink) => (
                            <li key={subLink.path}>
                              <Link 
                                to={subLink.path}
                                className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
                              >
                                {subLink.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  )
}
