import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import cpp from "../assets/img/cpp.svg";
import python from "../assets/img/python.svg";
import javascript from "../assets/img/javascript.svg";
import unity from "../assets/img/unity.svg";
import Java from "../assets/img/Java.svg";
import PowerShell from "../assets/img/PowerShell.svg";
import Bash from "../assets/img/Bash.svg";
import HTML from "../assets/img/HTML.svg";
import CSS from "../assets/img/CSS.svg";
import Git from "../assets/img/Git.svg";
import Linux from "../assets/img/Linux.svg";
import mySQL from "../assets/img/mySQL.svg";
import NodeJS from "../assets/img/NodeJS.svg";
import React from "../assets/img/React.svg";
import TensorFlow from "../assets/img/TensorFlow.svg";

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
                        <p>Skills I have learned over the years through school and self-education. </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <h5>C++</h5>
                                {<img src={cpp} alt="Image" />}
                            </div>
                            <div className="item">
                                <h5>Python</h5>
                                {<img src={python} alt="Image" />}
                            </div>
                            <div className="item">
                                <h5>JavaScript</h5> 
                                {<img src={javascript} alt="Image" />}
                            </div>
                            <div className="item">
                                <h5>Unity</h5>
                                {<img src={unity} alt="Image" />}
                            </div>
                            <div className="item">
                                <h5>HTML</h5>
                                {<img src={HTML} alt="Image" />}
                            </div>
                            <div className="item">
                                <h5>CSS</h5>
                                {<img src={CSS} alt="Image" />}
                            </div>
                            <div className="item">
                                <h5>Bash</h5>
                                {<img src={Bash} alt="Image" />}
                            </div>
                            <div className="item">
                                <h5>PowerShell</h5>
                                {<img src={PowerShell} alt="Image" />}
                            </div>
                            <div className="item">
                                <h5>Java</h5>
                                {<img src={Java} alt="Image" />}
                            </div>
                            <div className="item">
                                <h5>Git</h5>
                                {<img src={Git} alt="Image" />}
                            </div>
                            <div className="item">
                                <h5>Linux</h5>
                                {<img src={Linux} alt="Image" />}
                            </div>
                            <div className="item">
                                <h5>mySQL</h5>
                                {<img src={mySQL} alt="Image" />}
                            </div>
                            <div className="item">
                                <h5>Node.js</h5>
                                {<img src={NodeJS} alt="Image" />}
                            </div>
                            <div className="item">
                                <h5>TensorFlow</h5>
                                {<img src={TensorFlow} alt="Image" />}
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
