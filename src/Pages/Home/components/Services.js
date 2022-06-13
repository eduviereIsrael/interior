import React from 'react';
import { IoIosArrowForward } from 'react-icons/io'

const Services = () =>{
    return (
        <div className='section services-sect'>
            <div className='services flex-row jc-sb ai-c'>
                <div className='services-intro flex-col ai-fs'>
                    <h2>OUR <br /> SERVICES</h2>
                    <p>With the best in design, quality and service, WSI B2B is here to help. Discover an unmatchable fleet of brands, styles and solutions tailorable to your project needs.Enjoy Member Only Trade pricing, seasonal previews, exclusive events and more.</p>
                </div>
                <div className='services-list flex-col jc-str ai-fe'>
                    <div className='service flex-row jc-sb ai-c'>
                        <div className='img-div'>
                            <img src='assets/images/intDec.png' alt='int' />
                        </div>
                        <div className='service-details flex-row jc-sb ai-c'>
                            <h6>Interior <br/> Decoration</h6>
                            <p>Turning your house into a home</p>
                        </div>
                        <IoIosArrowForward />
                    </div>
                    <div className='service flex-row jc-sb ai-c'>
                        <div className='img-div'>
                            <img src='assets/images/shop.png' alt='int' />
                        </div>
                        <div className='service-details flex-row jc-sb ai-c'>
                            <h6>Product <br/> Supplies</h6>
                            <p>Shop our exclusive furniture  peices</p>
                        </div>
                        <IoIosArrowForward />
                    </div>
                    <div className='service flex-row jc-sb ai-c'>
                        <div className='img-div'>
                            <img src='assets/images/oneOnOne.png' alt='int' />
                        </div>
                        <div className='service-details flex-row jc-sb ai-c'>
                            <h6>Expert <br/> Consultation</h6>
                            <p>Make the right choices with one of our experts</p>
                        </div>
                        <IoIosArrowForward />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Services;