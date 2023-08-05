import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-light text-center text-lg-start">
        <div
          className="text-center p-3"
          style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
        >
          © {new Date().getFullYear()} Copyright &nbsp;
          <a className="text-dark" style={{ textDecoration: "none"}} target="_blank" rel="noreferrer" href="https://github.com/github-usman">
           <strong>DiceGame</strong>
          </a>
          <p>Developed by Usman Ali Ansari</p>
        </div>
      </footer>
    </div>
  );
}
