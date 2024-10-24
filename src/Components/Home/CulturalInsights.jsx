import React from 'react'
import veerbhadra from '../Assets/veerbhadra.jpg'
import ananthapura from '../Assets/laketemple.jpg'
import stambeshwar from '../Assets/stambeshwar.jpg'
import nidhivan from '../Assets/nidhivan.jpg'
import kailash from '../Assets/Kailash_temple.jpg'


import './CulturalInsights.css'

const CulturalInsights = () => {
  return (
    <div className="cultural_insights">
            <h1>CULTURAL INSIGHTS</h1>

            <div className="insights_left">

                <img className="insights_img" src={kailash} alt="Kailash Temple" />

                <div className="insights_text">
                    <h3>The Mystery of Kailasha Temple</h3>
                    <p>
                        The Kailasha temple is the largest of the rock-cut temples at the Ellora Caves near Chhatrapati Sambhajingar district, Maharashtra, India. The remarkable Kailasa Temple stands nestled within the breathtaking Ellora Cave №16 in Maharashtra's Aurangabad district. Built in the 8th century by the talented King Krishna I of the Rashtrakuta dynasty, this temple is more than just a structure — it's a testament to ancient artistry and devotion.
                    </p>
                </div>
            </div>



            <div className="insights_right">
                <div className="insights_text">
                    <h3>Veerabhadra Temple- The gravity defying Hanging Pillar</h3>
                    <p>
                        Veerabhadra temple is a Hindu temple located in Lepakshi, in the state of Andhra Pradesh, India. The temple is dedicated to the Virabhadra, a fierce form of the god Shiva.
                        Built in the 16th century, the architectural features of the temple are in the Vijayanagara style with a profusion of carvings and paintings at almost every exposed surface of the temple. It is one of the centrally protected monuments of national importance and is considered one of the most spectacular Vijayanagara temples. The fresco paintings are particularly detailed in very bright dresses and colors with scenes of Rama and Krishna from the epic stories of the Ramayana, the Mahabharata, and the Puranas and they are well preserved.
                    </p>
                </div>

                <img className="insights_img" src={veerbhadra} alt="Veerabhadra Temple" />

            </div>

            <div className="insights_left">

                <img className="insights_img" src={ananthapura} alt="Kailash Temple" />

                <div className="insights_text">
                    <h3>The Ananthapura Lake Temple</h3>
                    <p>The only Lake temple of Kerala is situated in a sleepy hamlet 'Ananthapura' in Kasaragod district,
                        Kerala. The 9th-century temple is believed to be the moolasthanam or original abode of Lord Anantha
                        Padmanabha, the deity of the famous Sree Padmanabhaswamy Temple in Kerala's capital,
                        Thiruvananthapuram.
                        Sree Anantha Padmanabha is depicted as seated on the divine serpent Anantha. An exceptional

                        collection of wood carvings that show scenes from Dashavatharam (the 10 incarnations of Lord Vishnu)
                        can be seen on the ceilings of the mandapam (pavilion) here. 
                    </p>
                </div>
            </div>


            <div className="insights_right">
                <div className="insights_text">
                    <h3>Stambheshwar Mahadev-The Shivling installed by Lord Kartikeya</h3>
                    <p>  Skanda Purana, one of 18 Hindu puranas, has references to this temple. After slaying Tarkasur,
                        Kartikeya asked the Gods that how will be absolve himself of the sin of killing a devotee of Lord
                        Shiv. Lord Vishnu consoled him-'Killing a wicked person, who nourishes himself on the blood of
                        innocent people, is not a sinful deed. But, still, if you feel guilty, the best way to atone for
                        your sin is establish Shiva lingas and worship them with deep devotion.'
                    </p>
                </div>

                <img className="insights_img" src={stambeshwar} alt="Stambeshwar Temple" />

            </div>
            <div className="insights_left">

                <img className="insights_img" src={nidhivan} alt="Nidhivan Temple" />

                <div className="insights_text">
                    <h3>The Divine Nidhivan Temple</h3>
                    <p>Vrindavan is witness to the childhood of Lord Krishna and hence has many places where the lord
                        himself has performed many playful acts. Nidhivan in Vrindavan is one such temple which has seen the
                        notorious acts of the Lord himself. This beautiful orchard of Tulsi in Vrindavan is a pious
                        destination that draws attention of many devotees due to the many mysteries associated with it. As
                        the name signifies, Nidihivan implies to a treasured (Nidhi) forest (van). True to its name, this
                        pious place is home to many rare species of plants that keep the premises flocked with devout
                        atmosphere. According to the legends, every plant in the Nidhivan Temple is the disguised Gopi who
                        had participated in the Maha Raas with Lord Krishna.
                    </p>
                </div>
            </div>



        </div>
  )
}

export default CulturalInsights