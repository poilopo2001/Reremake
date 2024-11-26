import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { NavigationBar } from './components/NavigationBar'
import { FooterContainer } from './components/FooterContainer'

// Pages
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { ServicesPage } from './pages/ServicesPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { BlogPage } from './pages/BlogPage'
import { LegalPage } from './pages/LegalPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { SitemapPage } from './pages/SitemapPage'

// Service Category Pages
import { HabitatRenovationPage } from './pages/services/HabitatRenovationPage'
import { BathroomRenovationPage } from './pages/services/habitat/BathroomRenovationPage'
import { ApartmentRenovationPage } from './pages/services/habitat/ApartmentRenovationPage'
import ItalianShowerPage from './pages/services/habitat/bathroom/ItalianShowerPage'
import BathtubPage from './pages/services/habitat/bathroom/BathtubPage'
import DoubleSinkPage from './pages/services/habitat/bathroom/DoubleSinkPage'
import SuspendedToiletPage from './pages/services/habitat/bathroom/SuspendedToiletPage'
import AccessibilityPage from './pages/services/habitat/bathroom/AccessibilityPage'
import TileGuidePage from './pages/services/habitat/bathroom/TileGuidePage'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          {/* Global Meta Tags */}
          <Helmet>
            <meta name="robots" content="noindex,nofollow" />
            <meta name="googlebot" content="noindex,nofollow" />
          </Helmet>
          
          <NavigationBar />
          
          <main className="flex-grow">
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/a-propos" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/realisations" element={<ProjectsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              
              {/* Legal Pages */}
              <Route path="/mentions-legales" element={<LegalPage />} />
              <Route path="/politique-confidentialite" element={<PrivacyPage />} />
              <Route path="/plan-du-site" element={<SitemapPage />} />
              
              {/* Service Categories */}
              <Route path="/renovation-habitat" element={<HabitatRenovationPage />} />
              <Route path="/renovation-habitat/salle-de-bain" element={<BathroomRenovationPage />} />
              <Route path="/renovation-habitat/appartements" element={<ApartmentRenovationPage />} />
              
              {/* Bathroom Sub-pages */}
              <Route path="/renovation-habitat/salle-de-bain/douche-italienne" element={<ItalianShowerPage />} />
              <Route path="/renovation-habitat/salle-de-bain/baignoire" element={<BathtubPage />} />
              <Route path="/renovation-habitat/salle-de-bain/double-vasque" element={<DoubleSinkPage />} />
              <Route path="/renovation-habitat/salle-de-bain/wc-suspendus" element={<SuspendedToiletPage />} />
              <Route path="/renovation-habitat/salle-de-bain/pmr-accessibilite" element={<AccessibilityPage />} />
              <Route path="/renovation-habitat/salle-de-bain/guide-carrelage" element={<TileGuidePage />} />
            </Routes>
          </main>
          
          <FooterContainer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
