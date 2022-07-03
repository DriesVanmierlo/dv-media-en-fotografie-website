import './styles/about.css';
import ProfilePicture from '../assets/images/profile_transparent.png';

function About(){

    return (
        <div className="about-container">
            <div className='about-titles'>
                    <h1 className='about-main-title'>About me</h1>
                    <div className='about-background-title'>About me</div>
            </div>
            <div className='about-header-container'>
                <figure className='about-figure'>
                        <div className='yellow-image-border'></div>
                        <img className='about-img' src={ProfilePicture} alt="profile-picture-dries" />
                </figure>
                <h2 className='about-content-title'>Hey, ik ben Dries!</h2>
            </div>
            <div className='about-content-container'>
                <p className='about-paragraph'>Ik ben een zelfstandig student-ondernemer die zich toelegt op alle beeld, ontwerp en web opdrachten.</p>
                <p className='about-paragraph'>Steeds probeer ik mijn grenzen te verleggen om een optimaal resultaat te creëren. Ik ben gespecialiseerd op verschillende gebieden, omdat ik het belangrijk vind dat ik steeds alles over "the bigger picture" weet. Hierdoor werken al mijn diensten perfect met mekaar en heeft u maar één man nodig!</p>
                <p className='about-paragraph'>Ik heb al enkele projecten die buiten mijn schoolopdrachten liggen. Van het ontwerpen van totebags, studentenagenda's, affiches,... tot fotoshoots op technofeestjes, paardenjumpings,...</p>
                <p className='about-paragraph'>De passie die ik voor dit vak heb, heb ik gekregen op jonge leeftijd. Toen ik 14 jaar was, had ontdekt dat ik video's maken en dingen ontwerpen iets voor mij was. Tot de dag van vandaag heb ik hier nog steeds meer plezier in!</p>
                <p className='about-paragraph'>Mijn doel is om iedereen die naar mij vraagt, in een vaste en tevreden klant te veranderen!</p>
            </div>

        </div>
    );
}

export default About;