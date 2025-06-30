import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/nobar.png";
import projImg2 from "../assets/img/coffeeshop.png";
import projImg3 from "../assets/img/srmproject.png";
import projImg4 from "../assets/img/ecommerce.png";
import projImg5 from "../assets/img/libraryproject.png";
import projImg6 from "../assets/img/mbtiappproject.png";
import projImg7 from "../assets/img/cgaproject.png";
import projImg8 from "../assets/img/aiproject.png";
import projImg9 from "../assets/img/ctfff.png";
import projImg10 from "../assets/img/homelab.png";
import colorSharp2 from "../assets/img/colorsharpblue.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Capture The Flag",
      description: "Engage in CTF and document my solutions in detailed write-ups.",
      imgUrl: projImg9,
      url: "https://drive.google.com/file/d/1fOAWs0H6_U-xof38XSBUsq8qDJ-9bfV4/view?usp=sharing"
    },
    {
      title: "Basic Homelab",
      description: "Safe, controlled environment to practice, experiment with, and develop practical cybersecurity without risking real systems.",
      imgUrl: projImg10,
      url: "https://drive.google.com/file/d/1PYoAjOXjE3MwP_IOxKUK8pR1OZ35bYxk/view?usp=sharing"
    },
    {
      title: "Security Risk Assesment",
      description: "Identify, analyze, and mitigate risks associated with cyber threats.",
      imgUrl: projImg3,
      url: "https://drive.google.com/file/d/1YvkoZrZcC4D8X9rGlbCrUxR9TSezt3vq/view?usp=sharing"
    },
    {
      title: "Cinema Website",
      description: "A comprehensive cinema website offering seamless movie Browse, ticket booking, and user management with features like secure login, password recovery, and premium subscriptions.",
      imgUrl: projImg1,
      url: "https://drive.google.com/file/d/1SY8AvY8oKmDlrpi7mnYbbwtpbwoekxUD/view?usp=drive_link"
    },
    {
      title: "Coffeeshop Website",
      description: "A dynamic coffeeshop website offering an engaging user experience with a responsive menu, convenient table reservations, an informative About Us section, a visual gallery, and secure user login.",
      imgUrl: projImg2,
      url: "https://drive.google.com/file/d/1WFu7wkWfwI1cC0mh1Q2HyYbewTIqJetJ/view?usp=drive_link"
    },
    {
      title: "ECommerce Website",
      description: "An E-Commerce Admin Management System built with PHP and MySQL, providing comprehensive CRUD functionality for efficient product, category, size, and order management, enhanced by an intuitive dashboard and dynamic AJAX updates.",
      imgUrl: projImg4,
      url: "https://drive.google.com/file/d/1cU1zlrm-4mW6hTuf3BpnryO8CK_u7aVH/view?usp=drive_link"
    },
    {
      title: "Library System",
      description: "A Java-based Mini Library System designed with Object-Oriented Programming principles, enabling users to borrow and return books, register as members, and allowing administrators to manage books, members, and borrowing/return records.",
      imgUrl: projImg5,
      url: "https://drive.google.com/file/d/188mKr04KRdU2g2eZYrZSVTz5DdFei6uE/view?usp=drive_link"
    },
    {
      title: "MBTI App",
      description: "An MBTI test application that registers users via Firebase Authentication, administers a personality test, saves results, and features an AR camera displaying .glb models.",
      imgUrl: projImg6,
      url: "https://drive.google.com/file/d/1NUpnfiElalu9b5utkxZL0OAlKwfTkp9H/view?usp=drive_link"
    },
    {
      title: "Police & Thief",
      description: "A 3D Computer Graphic Animation created in Blender depicts a chaotic bank robbery where a swift thief is apprehended by a slower police officer using a firearm, amidst blaring sirens.",
      imgUrl: projImg7,
      url: "https://www.canva.com/design/DAGYzw_Kyvg/2ZK1xK50hQcKjQ9RDxyBTw/edit?continue_in_browser=true"
    },
    {
      title: "AI in HealthCare",
      description: "An AI medical chatbot leveraging NLP and ML (Decision Trees, SVM) with Python libraries and warnings to provide accurate, accessible, and personalized health advice based on user symptoms, aiming to enhance proactive home healthcare.",
      imgUrl: projImg8,
      url: "https://drive.google.com/file/d/1NazYaVrTwzBljuyLzvJLP8un0mVaTgXV/view?usp=drive_link"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Projects I've been involved with since my first year of college. Feel free to click on each project card for an in-depth look.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
      
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.imgUrl}
                                url={project.url}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
