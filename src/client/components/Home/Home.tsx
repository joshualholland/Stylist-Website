import * as React from 'react';
import About from './About';
import Footer from '../global/Footer';
import Gallery from './Gallery';


const Home = () => {
    return (
        <>
            <main className='container p-0 mx-auto w-100 mb-0'>
                <section>
                    <div>
                    <div className="jumbotron mb-0 p-0 bg-primary" id='Home'>
                    </div>
                    </div>
                <About />
                <Gallery />
                <Footer />
                </section>
        </main>

        </>
    )

};

export default Home;