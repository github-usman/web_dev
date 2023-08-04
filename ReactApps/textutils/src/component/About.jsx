import React from "react";
import Footer from "./Footer";
import './Footer';


export default function About(props) {
  
  
  return (
    <>
      <div className={"container" } >
        <h1 className="my-3">About {props.logo}</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header " id="headingOne">
              <button
                className={`accordion-button ${props.mode==='Enable Dark Mode'?'bg-light text-dark':'bg-dark text-light'} `}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                
              >
                <strong className="text-success">Theme Feature</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
              
            >
              <div className={`accordion-body ${props.mode==='Enable Dark Mode'?'bg-light text-dark':'bg-dark text-light'} `}>
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                 though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className={`accordion-button ${props.mode==='Enable Dark Mode'?'bg-light text-dark':'bg-dark text-light'} collapsed`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                
              >
                <strong className="text-success">Responsive</strong>
                
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
              
            >
              <div className={`accordion-body ${props.mode==='Enable Dark Mode'?'bg-light text-dark':'bg-dark text-light'} `}>
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
               , though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className={`accordion-button ${props.mode==='Enable Dark Mode'?'bg-light text-dark':'bg-dark text-light'}  collapsed`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                
              >
                <strong className="text-success">Multiple Feature</strong>
            
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
              
            >
              <div className={`accordion-body ${props.mode==='Enable Dark Mode'?'bg-light text-dark':'bg-dark text-light'} `}>
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about_footer">
      <Footer mode={props.mode}/>
      </div>
    </>
  );
}
