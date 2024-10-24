import React, { useState, useEffect } from 'react';
import logo from '../Assets/Festival/logo.png';
import banner1 from '../Assets/Festival/banner1.jpg';
import banner2 from '../Assets/Festival/banner2.jpg';
import banner3 from '../Assets/Festival/banner3.jpg';
import './Festivals.css';
import astra from '../Assets/Festival/astra.jpg';
import lotus from '../Assets/Festival/lotus.jpg';
import om from '../Assets/Festival/om.jpg';
import peacock from '../Assets/Festival/peacock.jpg';
import chakra from '../Assets/Festival/chakra.jpeg';
import shivling from '../Assets/Festival/shivling.jpg';

import one from '../Assets/Festival/one.jpg';
import two from '../Assets/Festival/two.jpg';
import three from '../Assets/Festival/three.jpg';
import four from '../Assets/Festival/four.jpg';
import five from '../Assets/Festival/five.jpg';
import six from '../Assets/Festival/six.jpg';
import seven from '../Assets/Festival/seven.jpg';
import eight from '../Assets/Festival/eight.jpg';
import nine from '../Assets/Festival/nine.jpg';
import ten from '../Assets/Festival/ten.jpg';
import eleven from '../Assets/Festival/eleven.jpg';
import twelve from '../Assets/Festival/twelve.jpg';
import FancyNav from '../Nav/FancyNav';
import { FaLocationDot } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { FaRegComments } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";

const Festivals = () => {
    const images = [banner1, banner2, banner3];
    const texts = [
        { title: "Holi Festival", description: "Join us for the colorful celebration of Holi."},
        { title: "Festival of Lights", description: "Celebrate the joy and brightness of Diwali." },
        { title: "Navratri Celebration", description: "Experience the vibrant dance and devotion." },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 3 seconds

        return () => clearInterval(interval); 
    }, [images.length]);



    return (
        <div>
            <FancyNav/>

            <div className="festivals_container">
                <div className="festivals_logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="festivals_carousel">
                    <div className="carousel_image_container">
                        <img src={images[currentIndex]} alt={`banner${currentIndex + 1}`} />
                        <div className="carousel_text">
                            <h2>{texts[currentIndex].title}</h2>
                            <p>{texts[currentIndex].description}</p>
                        </div>  {/* carousel_text */}

                    </div> {/* carousel_image_container close */}
                </div> {/* festivals_carousel close */}


                <div className="timeline">
                    <div className="timeline_text">Upcoming Festivals</div>

                    <div className="timeline_counter">
                        <div className="clock">
                            <div className="clock_text">Days</div>
                        </div>
                        <div className="clock">
                            <div className="clock_text">Hours</div>
                        </div>
                        <div className="clock">
                            <div className="clock_text">Minutes</div>
                        </div>
                        <div className="clock">
                            <div className="clock_text">Seconds</div>
                        </div>
                    </div> {/* timeline_counter close */}
                </div> {/* timeline close */}


                <div className="festivals_circular">
                    <div className="festivals_title">
                        <div className="festivals_title_text">Festivals</div>
                    </div>  {/* festivals_title close */}





                    <div className="small_circle1_content">
                        <div className="circle1_heading">Pooja</div>
                        <div className="circle1_text">Assertively redefine end to end potentialities for principle-centered synergy. Quickly promote granular.</div>
                    </div>
                    <div className="small_circle1_images"><img src={shivling} alt="shivling" /></div>



                    <div className="small_circle2_content">
                        <div className="circle2_heading">Bhoomi Pooja</div>
                        <div className="circle2_text">Assertively redefine end to end potentialities for principle-centered synergy. Quickly promote granular.</div>
                    </div>
                    <div className="small_circle2_images"><img src={om} alt="om" /></div>



                    <div className="small_circle3_content">
                        <div className="circle3_heading">Pooja</div>
                        <div className="circle3_text">Assertively redefine end to end potentialities for principle-centered synergy. Quickly promote granular.</div>
                    </div>
                    <div className="small_circle3_images"><img src={lotus} alt="lotus" /></div>




                    <div className="small_circle4_content">
                        <div className="circle4_heading">Pooja</div>
                        <div className="circle4_text">Assertively redefine end to end potentialities for principle-centered synergy. Quickly promote granular.</div>
                    </div>
                    <div className="small_circle4_images"><img src={peacock} alt="peacock" /></div>



                    <div className="small_circle5_content">
                        <div className="circle5_heading">Bhoomi Pooja</div>
                        <div className="circle5_text">Assertively redefine end to end potentialities for principle-centered synergy. Quickly promote granular.</div>
                    </div>
                    <div className="small_circle5_images"><img src={astra} alt="astra" /></div>


                    <div className="small_circle6_content">
                        <div className="circle6_heading">Pooja</div>
                        <div className="circle6_text">Assertively redefine end to end potentialities for principle-centered synergy. Quickly promote granular.</div>
                    </div>
                    <div className="small_circle6_images"><img src={chakra} alt="chakra" /></div>

                </div>  {/* festivals_circular close */}


                <div className="festivals_gallery_title">Hindu Festivals</div>

                <div className="festivals_gallery">
                    <div className="gallery_box"><img src={one} alt="one" /></div>
                    <div className="gallery_box"><img src={two} alt="two" /></div>
                    <div className="gallery_box"><img src={three} alt="three" /></div>
                    <div className="gallery_box"><img src={four} alt="four" /></div>
                    <div className="gallery_box"><img src={five} alt="five" /></div>
                    <div className="gallery_box"><img src={six} alt="six" /></div>
                    <div className="gallery_box"><img src={seven} alt="seven" /></div>
                    <div className="gallery_box"><img src={eight} alt="eight" /></div>
                    <div className="gallery_box"><img src={nine} alt="nine" /></div>
                    <div className="gallery_box"><img src={ten} alt="ten" /></div>
                    <div className="gallery_box"><img src={eleven} alt="eleven" /></div>
                    <div className="gallery_box"><img src={twelve} alt="twelve" /></div>

                    <div className="gallery_box"><img src={one} alt="one" /></div>
                    <div className="gallery_box"><img src={two} alt="two" /></div>
                    <div className="gallery_box"><img src={three} alt="three" /></div>
                    <div className="gallery_box"><img src={four} alt="four" /></div>
                    <div className="gallery_box"><img src={five} alt="five" /></div>
                    <div className="gallery_box"><img src={six} alt="six" /></div>

                </div>  {/* festivals_gallery */}


                <div className="recent_events_title">Recent Festival Events</div>

                <div className="recent_festival_events">

                    <div className="rec_fes_event_box">
                        <div className="fes_box_image"><img src={two} alt="two" /></div>

                        <div className="fes_box_content">

                            <span className='fes_box_title'>Open Rededication</span>

                            <div className="fes_box_detail">
                                <div className="fes_box_detail_left">
                                    <div className='detail_left1'>
                                        <span className="detail_left1_icon"><GoClock /></span>
                                        <span>10am - 12pm </span>
                                    </div>


                                    <div className='detail_left2'>
                                        <span className="detail_left2_icon"><FaLocationDot /></span>
                                        <span>PO Box 16122,Collins Street</span>
                                    </div>

                                </div> {/* fes_box_detail_leftclose */}

                                <div className="fes_box_detail_right">
                                    <FaRegComments />
                                    <IoShareSocialSharp />
                                </div>
                            </div> {/* fes_box_detail close */}

                            <div className="fes_box_bottom">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad error impedit repellendus </div>

                        </div> {/* fes_box_content close */}
                    </div>  {/* rec_fes_event_box close */}





                    <div className="rec_fes_event_box">
                        <div className="fes_box_image"><img src={two} alt="two" /></div>

                        <div className="fes_box_content">

                            <span className='fes_box_title'>Open Rededication</span>

                            <div className="fes_box_detail">
                                <div className="fes_box_detail_left">
                                    <div className='detail_left1'>
                                        <span className="detail_left1_icon"><GoClock /></span>
                                        <span>10am - 12pm </span>
                                    </div>


                                    <div className='detail_left2'>
                                        <span className="detail_left2_icon"><FaLocationDot /></span>
                                        <span>PO Box 16122,Collins Street</span>
                                    </div>

                                </div> {/* fes_box_detail_leftclose */}

                                <div className="fes_box_detail_right">
                                    <FaRegComments />
                                    <IoShareSocialSharp />
                                </div>
                            </div> {/* fes_box_detail close */}

                            <div className="fes_box_bottom">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad error impedit repellendus </div>

                        </div> {/* fes_box_content close */}
                    </div>  {/* rec_fes_event_box close */}





                    <div className="rec_fes_event_box">
                        <div className="fes_box_image"><img src={two} alt="two" /></div>

                        <div className="fes_box_content">

                            <span className='fes_box_title'>Open Rededication</span>

                            <div className="fes_box_detail">
                                <div className="fes_box_detail_left">
                                    <div className='detail_left1'>
                                        <span className="detail_left1_icon"><GoClock /></span>
                                        <span>10am - 12pm </span>
                                    </div>


                                    <div className='detail_left2'>
                                        <span className="detail_left2_icon"><FaLocationDot /></span>
                                        <span>PO Box 16122,Collins Street</span>
                                    </div>

                                </div> {/* fes_box_detail_leftclose */}

                                <div className="fes_box_detail_right">
                                    <FaRegComments />
                                    <IoShareSocialSharp />
                                </div>
                            </div> {/* fes_box_detail close */}

                            <div className="fes_box_bottom">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad error impedit repellendus </div>

                        </div> {/* fes_box_content close */}
                    </div>  {/* rec_fes_event_box close */}


                </div> {/* recent_festivals_events close */}

            </div>  {/* festivals_container close */}
        </div>
    );
}

export default Festivals;
