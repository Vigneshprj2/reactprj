import "../css/home.css";
function Home() {
  return (
    <>
      <div className="homepage">
        <h1 className="bH2">
          <i className="fa-solid fa-user-tie"></i> Vignesh Manikandan
        </h1>
        <h1 className="bgH1">
          <i className="fa-solid fa-file-lines"></i> About Me
        </h1>
        <p className="intro">
          Hi there, my name is Vignesh and I am 22 years old. I completed my
          Bachelor of Science degree in Mathematics with Computer Application in
          the year 2021.I am a highly skilled and versatile full-stack developer
          with a passion for creating innovative and efficient web applications.
          With a solid foundation in both front-end and back-end technologies,I
          am proficient in a wide range of programming languages such as HTML,
          CSS, JavaScript, and Java, allowing me to seamlessly navigate through
          different layers of a project. I am adept at working with frameworks
          like React enabling me to develop dynamic and interactive
          applications.
        </p>
        <h1 className="bgH1">
          <i className="fa-solid fa-address-book"></i> Contact Me
        </h1>
        <div className="wtp">
          <i className="fa-brands fa-square-whatsapp"></i> 7358653554
          <br></br>
          <i className="fa-solid fa-envelope"></i> V037695@gmail.com
          <br></br>
          {/* <button id="resume-btn">
            <i className="fa-solid fa-download"></i>View CV
          </button> */}
          <a id="resume-btn"
            href="vignesh.pdf"target="_blank">
              <i className="fa-solid fa-download"></i> view cv
          </a>
          <p>&copy; 2023 Vignesh</p>
        </div>
      </div>
    </>
  );
}

export default Home;
