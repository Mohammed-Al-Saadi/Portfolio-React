import About from './About'
import './Pages.css'
import Picture from './Picture'
import Card from '../Components/Card';
import SkillsButton from '../Components/SkillsButton';
import Footer from './Footer';
import Slider from './Slider';
import Navbar from './Navbar';




export default function Pages() {




    return (



        <div className="main-html-div">
            
  
            <div className="html-div">


                <Picture />
                <About />
                <Footer />


            </div>

            <div className="html2-div">

            <div className="html2-2component">
          
                <Card />
                <SkillsButton />
                </div>

                <Slider />
                <Footer />
                

            </div>




        </div>

    )


}