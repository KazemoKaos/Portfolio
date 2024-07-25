import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState, useEffect } from "react";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(0);
    const toRotate = ["Software Engineer", "Systems Engineer", "IT Technician", "Tech Enthusiast"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 1000);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);

            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(100);
        } 

    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility once>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{`I'm a `}</h1>
                                    <h1>{`< `}<span className="wrap">{text} {` >`}</span></h1>
                                    <p>Computer Science Graduate at the University of New Haven. 
                                    I'm passionate about all computer related topics, especially Software, Systems, IT, and Game Development! Feel free to explore the site!</p>
                                    <a href="#connect" className="text-decoration-none"><button>Let's connect!<ArrowRightCircle size={25} /></button></a>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <TrackVisibility once>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__zoomIn" : "animate__animated animate__zoomOut"}>
                                                {/*<img src={headerImg} alt="Header Img"/>*/}
                            </div>}
                    </TrackVisibility>
                </Row>
            </Container>
        </section>
    )
}