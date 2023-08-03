import React from "react";
import './Footer.css';

export default function Footer(props) {
  return (
    <>
      <div className="body ">
        <footer className="py-3 my-4 ">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3 ">
            <li className="nav-item">
              <a href="/" className={`nav-link px-2 ${ props.mode==='Enable Dark Mode'?'body_footer_li_black':'body_footer_li_white'} `}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className={`nav-link px-2 ${ props.mode==='Enable Dark Mode'?'body_footer_li_black':'body_footer_li_white'} `}>
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className={`nav-link px-2 ${ props.mode==='Enable Dark Mode'?'body_footer_li_black':'body_footer_li_white'} `}>
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className={`nav-link px-2 ${ props.mode==='Enable Dark Mode'?'body_footer_li_black':'body_footer_li_white'} `}>
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className={`nav-link px-2 ${ props.mode==='Enable Dark Mode'?'body_footer_li_black':'body_footer_li_white'} `}>
                About
              </a>
            </li>
          </ul>
          <p className="text-center">
            © {new Date().getFullYear()} TextUtils, Inc - Dev by Usman Ali
            Ansari
          </p>
        </footer>
      </div>
    </>
  );
}
