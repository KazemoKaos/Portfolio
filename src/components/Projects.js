import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.js";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import SudokuHelper from "../assets/img/SudokuHelper.png";
import CommandLanguage from "../assets/img/CommandLanguage.png";
import CarReservation from "../assets/img/CarReservation.png";
import WorkInProgress from "../assets/img/WorkInProgress.png";


export const Projects = () => {

  const projects = [
    {
      title: "3D Platformer",
      description: "Unity Game",
      imgUrl: projImg1,
    },
    {
      title: "Personal Portfolio",
      description: "This Website!",
      imgUrl: projImg2,
    },
    {
      title: "Sudoku Helper",
      description: "Sudoku Helper in C++ using OOP!",
      imgUrl: SudokuHelper,
    },
    {
      title: "Slot Machine",
      description: "Slot Machine in C++ using Circular Linked List!",
      imgUrl: projImg2,
    },
    {
      title: "VR Game",
      description: "Carnvial Themed VR Game in Unity!",
      imgUrl: projImg2,
    },
    {
      title: "Basic Command Language",
      description: "Basic Command Language in Linux using C/C++!",
      imgUrl: CommandLanguage,
    },    
    {
      title: "Car Reservaion",
      description: "Car Reservation System in C++ using Linked Lists!",
      imgUrl: CarReservation,
    },
    {
      title: "1v1 Battler",
      description: "1v1 Battler in C++ using Polymorphism!",
      imgUrl: projImg2,
    },
    {
      title: "AI Simulation using Machine Learning",
      description: "AI Simulation in Unity using Machine Learning (ML-Agents)!",
      imgUrl: WorkInProgress,
    },   
    {
      title: "3D Roguelite",
      description: "Capstone Project W.I.P.!",
      imgUrl: WorkInProgress,
    },
    {
      title: "Ongoing...",
      description: "More projects to come!",
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