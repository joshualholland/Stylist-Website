import * as React from 'react';

const About = () => {
    return (
        <>
            <div className="about bg-secondary mt-0 mb-0">
                <div className='about-header text-center' id='About'>
                    <h1 className='text-primary'>About Kelsy</h1>
                    <hr className='bg-info' />
                </div>
                <div className="kelsy-img col-md-7">
                    <img className='about-photo' src='/images/Kelsy.jpg' />
                </div>
                <div className='kelsy-text col-md-4 mt-0'>
                    <h4 className='text-primary top-desc'>Kelsy Holland has established herself as one of Birmingham's most sought out stylists. You can find her at Morgan Ashley Salon, a top tier salon that has proven to be consistent and exceptional.</h4>
                    <p className='text-primary mt-4'>Kelsy is from the Birmingham area and graduated from Aveda Cosmetology school. She has been working at Morgan Ashley Salon for 6 years. In her time there she has become a top tier stylist. Kelsy's services include event hair and makeup, colors, cuts, and balayage.</p>
                    <p className='text-primary mt-4'>Kelsy's passion for creating lends to her beautiful style. Her drive for perfection treats her clients to an excellent outcome. If you sit in Kelsy's chair, you will not leave disappointed. She loves to connect with her clients for a pleasant experience and better understanding of the client's needs.</p>
                </div>
            </div>
        </>
    )
};

export default About;