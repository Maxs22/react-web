import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const Slider = () => {
    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h2>my Proyects </h2>
            </div>

            <Carousel 
                arrows
                slidesPerPages={3}
                infinite
                animationSpeed={200}
                centered
                offset={50}
                itemWidth={400}
                slides
             />
        </div>
    )
};

export default Slider;


