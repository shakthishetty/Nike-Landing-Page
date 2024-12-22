import React, { useEffect, useState } from 'react';
 
import Nav from './components/Nav';
import { CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffers, Subscribe, SuperQuality } from "./sections/index";
import Loader from './sections/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1800);
    // Clean up
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <main className='relative'>
            <Nav />
            <section className='xl:padding-1 wide:padding-r padding-b'>
              <Hero />
            </section>

            <section className='padding'>
              <PopularProducts />
            </section>

            <section className='padding'>
              <SuperQuality />
            </section>

            <section className='padding-x py-10'>
              <Services />
            </section>

            <section className='padding'>
              <SpecialOffers />
            </section>

            <section className='padding bg-pale-blue'>
              <CustomerReviews />
            </section>

            <section className='padding border-2 border-red-600 padding-x sm:py-32 py-16 w-full'>
              <Subscribe />
            </section>

            <section className='padding border-2 border-red-600 bg-black padding-x padding-t pb-8'>
              <Footer />
            </section>
          </main>
        </>
      )}
    </>
  );
};

export default App;
