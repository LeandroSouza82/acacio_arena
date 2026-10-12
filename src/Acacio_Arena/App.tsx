import { Suspense, lazy } from 'react';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import WeatherAlert from './components/sections/WeatherAlert';

const SportsSection = lazy(() => import('./components/sections/SportsSection'));
const HistoryChampionships = lazy(() => import('./components/sections/HistoryChampionships'));
const EventsParties = lazy(() => import('./components/sections/EventsParties'));
const ScheduleStatus = lazy(() => import('./components/sections/ScheduleStatus'));
const LocationContact = lazy(() => import('./components/sections/LocationContact'));

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WeatherAlert />
        <Suspense fallback={null}>
          <SportsSection />
          <HistoryChampionships />
          <EventsParties />
          <ScheduleStatus />
          <LocationContact />
        </Suspense>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
