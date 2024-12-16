import About from '@/components/About'; 
import Navbar from '@/components/Navbar'; 
import MissionVision from '@/components/MissionVision'; 
import Awards from '@/components/Awards';
import History from '@/components/History';
import TeamMembers from '@/components/TeamMembers';
import Footer from '@/components/Footer';
import Home from '../page';
import Academics from '@/components/Academics';

const AboutPage: React.FC = () => {  
    return (  
        <>  
        <Navbar />
            <About />  
            <MissionVision />
            <Awards />
            <History /> 
            <TeamMembers />
            <Footer />
        </>  
    );  
};  

export default AboutPage;