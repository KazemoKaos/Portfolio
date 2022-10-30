import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>This carousel displays what I have learned over the years through school and self-education. </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                {/*<img src={meter1} alt="Image" />*/}
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                {/*<img src={meter1} alt="Image" />*/}
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                {/*<img src={meter1} alt="Image" />*/}
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                {/*<img src={meter1} alt="Image" />*/}
                                <h5>Unity</h5>
                            </div>
                            <div className="item">
                                {/*<img src={meter1} alt="Image" />*/}
                                <h5>Test</h5>
                            </div>
                            <div className="item">
                                {/*<img src={meter1} alt="Image" />*/}
                                <h5>Test</h5>
                            </div>
                            <div className="item">
                                {/*<img src={meter1} alt="Image" />*/}
                                <h5>Test</h5>
                            </div>
                            <div className="item">
                                {/*<img src={meter1} alt="Image" />*/}
                                <h5>Test</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
