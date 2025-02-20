import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Partners from '../components/Partners'
import Contacts from '../components/Contacts'
import parser from 'html-react-parser'

import '..//styles/Home.css'
import { homeSection } from '../data/HomeSection'
import { coffeSection } from '../data/CoffeSection'
import { partnerList, partnerSection } from '../data/PartnerSection'
import { contactSection } from '../data/ContacSection'

function Home() {
  return (
    <>
    <Navbar />
        <div className='wrapper'>
            <section id="home">
                <img src={homeSection.image}/>
                <div className="kolom">
                    {parser(homeSection.content)}
                </div>
            </section>

            <section id="courses">
                <div className="kolom">
                    {parser(coffeSection.content)}
                </div>
                <img src={coffeSection.image}/>
            </section>

            <section id="partners">
                <div className="tengah">
                    <div className="kolom">
                        {parser(partnerSection.content)}
                    </div>
                    <Partners partnerList={partnerList}/>
                </div>
            </section>
        </div>

    <Contacts contactSection={contactSection}/>
    <Footer/>
    </>
  )
}

export default Home
