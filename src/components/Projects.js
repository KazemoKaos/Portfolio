import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.js";
import CommandLanguage from "../assets/img/CommandLanguage.png";
import CarReservation from "../assets/img/carreservation.png";
import WorkInProgress from "../assets/img/workin.png";
import Sudoku from "../assets/img/sudok.png";
import AISim from "../assets/img/AISim.png";
import Battle from "../assets/img/battlegame.png";
import Roguelite from "../assets/img/Roguelite.png";
import Platformer from "../assets/img/platformer.png";
import VR from "../assets/img/vr.png";
import Website from "../assets/img/website.png";
import sms from "../assets/img/sms2 - Copy.png";
import zephyr from "../assets/img/zephyr.png";
import sm from "../assets/img/slotmachine.png";
import ie from "../assets/img/interactiveenv.png";
import rbtree from "../assets/img/rbtree.png";
import { WindowPlus } from "react-bootstrap-icons";

export const Projects = () => {

  const projects = [
    {
      title: "Zephyr | MERN Stack",
      description: "Social Media Web App!",
      projUrl: 'https://github.com/KazemoKaos/Zephyr',
      imgUrl: zephyr,
    },
    {
      title: "Personal Portfolio",
      description: "This Website!",
      projUrl: 'https://github.com/KazemoKaos/Portfolio',
      imgUrl: Website,
    },
    {
      title: "Arclight: 3D Roguelite",
      description: "Capstone Project!",
      projUrl: 'https://github.com/KazemoKaos/Arclight',
      imgUrl: Roguelite,
    },
    {
      title: "Stock-Management-System",
      description: "Python with SQL!",
      projUrl: 'https://github.com/KazemoKaos/Stock-Management-System',
      imgUrl: sms,
    },
    {
      title: "Sudoku Helper",
      description: "C++ / Console App / OOP!",
      projUrl: 'https://github.com/KazemoKaos/Sudoku-Helper',
      imgUrl: Sudoku,
    },
    {
      title: "Work in Progress!",
      description: "Work in Progress!",
      projUrl: 'https://github.com/KazemoKaos',
      imgUrl: WorkInProgress,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
          <Row>
            <Col size={12}>
                  <div>
                  <h2>Projects</h2>
                  <p>These are some projects that I have either ongoing or finished.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                    </Tab.Content>
                  </Tab.Container>
                </div>
            </Col>
          </Row>
      </Container>
    </section>
  )
}