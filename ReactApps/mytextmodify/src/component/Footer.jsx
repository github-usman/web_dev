import React from "react";
import './Footer.css';

export default function Footer(props) {
  return (
    <>
      <div className="body_footer ">
        <footer className="box_footer">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3 ">
            <li className="nav-item">
              <a href="https://github.com/github-usman" target="_blank" rel="noreferrer"className={`nav-link px-2 ${ props.mode==='Enable Dark Mode'?'body_footer_li_black':'body_footer_li_white'} `}>
                GitHub
              </a>
            </li>
            <li className="nav-item">
              <a href="https://www.linkedin.com/in/u-s-m-a-n/" target="_blank" rel="noreferrer" className={`nav-link px-2 ${ props.mode==='Enable Dark Mode'?'body_footer_li_black':'body_footer_li_white'} `}>
                LinkedIn
              </a>
            </li>
  
            <li className="nav-item">
              <a href="https://www.linkedin.com/in/u-s-m-a-n/" target="_blank" rel="noreferrer" className={`nav-link px-2 ${ props.mode==='Enable Dark Mode'?'body_footer_li_black':'body_footer_li_white'} `}>
                About Me
              </a>
            </li>
          </ul>
          <p className="text-center">
            © {new Date().getFullYear()} MyTextModify, Inc - Dev by Usman Ali
            Ansari
          </p>
        </footer>
      </div>
    </>
  );
}
