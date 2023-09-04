import React from "react";

const about = () => {
  return (
    <>
      <div className="Firstabout">
        <div className="aboutcontent">
          <img
            src="/ji.jpg"
            alt="this is about content"
            width={950}
            height={700}
          />

          <div className="youknow">
            <h4>About Coding hunters</h4>
            <div className="aboutpara">
              <p>
                "There is no industry-wide standard terminology, so "programmer"
                <br />
                "software engineer" might refer to the same role at different
                <br />
                companies. Most typically, someone with a job title of
                "programmer"
                <br />
                "software developer" might focus on implementing a detailed
                <br />
                specification into computer code, fixing bugs, and performing
                code
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="secondabout">
        <div className="aboutcontenttwo">
          <div className="youknowtwo">
            <h4>About Coding hunters</h4>
            <div className="aboutparatwo">
              <p>
                "Most websites require both front-end and back-end development.
                Despite being two completely different disciplines, constant
                collaboration between front-end and back-end developers is
                implementing the back-end logic of a website by using back-end
                programming languages. They also create the APIs (or other
                communication system) that allow front-end developers to access
                the server-side data and display it on the front end for the
                user."
              </p>
            </div>
          </div>
        </div>
        <div className="secondaboutcontent">
          <img src="new.jpg" alt="this second" width={950} height={700} />
        </div>
      </div>
    </>
  );
};

export default about;
