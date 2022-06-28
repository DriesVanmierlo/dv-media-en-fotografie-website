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
                        <img className='about-img' src={ProfilePicture} alt="" />
                </figure>
                <h2 className='about-content-title'>Hey, ik ben Dries!</h2>
            </div>
            <div className='about-content-container'>
                <p className='about-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam magnam nisi tempore ratione reiciendis neque rerum, consequuntur corrupti esse sit molestias. Distinctio modi dignissimos dolore neque dicta ad, quod qui.</p>
                <p className='about-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iusto quos nostrum, repellendus consectetur rerum mollitia exercitationem. Similique, a. Quas, corrupti porro expedita ex praesentium nulla magni eius perferendis veniam.</p>
            </div>

        </div>
    );
}

export default About;