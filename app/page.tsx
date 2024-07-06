import Header from './components/header';
import Hero   from './components/hero';
import NewsList from './components/news';
import Socials from './components/socials';
import Contact from './components/contact';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <Header />
      <Hero />
      <NewsList />
      <Socials />
      <Contact />
      <Footer />
    </main>
  );
}
