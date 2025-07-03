import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";
import meter4 from "../assets/img/meter4.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/PngItem_2030958.png"

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
                        <p>I specialize in app/website development, penetration testing, and 3D computer graphics animation (Blender). My core strength is building and securing digital solutions, leveraging my CTF experience to identify and mitigate vulnerabilities. I'm also familiar with HTML, CSS, Java, PHP, Laravel, React, JavaScript, Python, and Android Studio. I combine technical development, cybersecurity, and creating immersive 3D visuals.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Penetration Testing</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Application Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>3D Animation</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
