import background_image from '../../assets/images/home_background_placeholder.jpg';
import "./home-background.css";

function HomeBackground(props) {
    return (
        <div>
            <figure className='home-background-figure'>
                <img className='home-background-image' src={props.data[changeBackground(props.data)]} alt="" />
            </figure>
        </div>
    );
}

function changeBackground(data){
        let i = 0;

        console.log(data.length);

        setInterval(e => {
            if(i == (data.length - 1)){
                i = 0;
                return i;
            } else {
              i++ 
              console.log(data[i]);
              return i;
            }
            
        }, 3000);

}

export default HomeBackground;