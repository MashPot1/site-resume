import React, { useEffect } from "react";
import useScript from "./hooks/useScript";

import ConverterCurrencies from "./components/ConverterCurrencies/index";
import TodoList from "./components/TodoList/index";
import Calculator from "./components/Calculator/index";

import reactPizzaShot from "./assets/img/react-pizza.png";

function App() {
  useScript("./libs/gsap.min.js");
  useScript("./libs/ScrollSmoother.min.js");
  useScript("./libs/ScrollTrigger.min.js");
  useScript("./libs/animation.js");

  useEffect(() => {
    fetch("https://react-pizza-backend.onrender.com");
  });

  return (
    <div className="App">
      <header>
        <ul>
          <li>
            <button id="aboutNavId">Skills</button>
          </li>
          <li>
            <button id="projectsNavId">Projects</button>
          </li>
          <li>
            <button id="contactsNavId">Contacts</button>
          </li>
        </ul>
      </header>

      <div className="content">
        <div className="hero">
          <h1 className="hero__title">
            hi, my name is roman. i'm frontend-developer.
          </h1>
        </div>

        <div className="aboutme">
          <div className="container">
            <h1 className="title">That's my skills</h1>
            <div className="skill-list">
              <ul className="left-skills">
                <li>
                  <img
                    src={require("./assets/svgs/js.svg").default}
                    alt="svg"
                  />
                  JavaScript
                </li>
                <li>
                  <img
                    src={require("./assets/svgs/html5.svg").default}
                    alt="svg"
                  />
                  HTML
                </li>
                <li>
                  <img
                    src={require("./assets/svgs/css3.svg").default}
                    alt="svg"
                  />
                  CSS
                </li>
                <li>
                  <img
                    src={require("./assets/svgs/react.svg").default}
                    alt="svg"
                  />
                  ReactJS
                </li>
                <li>
                  <img
                    src={require("./assets/svgs/redux.svg").default}
                    alt="svg"
                  />
                  Redux
                </li>
              </ul>
              <ul className="right-skills">
                <li>
                  <img
                    src={require("./assets/svgs/scss.svg").default}
                    alt="svg"
                  />
                  SCSS
                </li>
                <li>
                  <img
                    src={require("./assets/svgs/styled-components.svg").default}
                    alt="svg"
                  />
                  Styled Components
                </li>
                <li>
                  <img
                    src={require("./assets/svgs/ant-design.svg").default}
                    alt="svg"
                  />
                  Ant Design
                </li>
                <li>
                  <img
                    src={require("./assets/svgs/gsap.svg").default}
                    alt="svg"
                  />
                  GSAP
                </li>
                <li>
                  <img
                    src={require("./assets/svgs/ts.svg").default}
                    alt="svg"
                  />
                  TypeScript
                </li>
              </ul>
            </div>
            and another...
          </div>
        </div>

        <div className="projects">
          <h1>projects</h1>

          <div className="container">
            <h2 className="title">react pizza</h2>
            <p>
              Приложение по заказу пиццы. В качестве заказчика можно заказывать
              пиццы, а также просматривать свои заказы в профиле. В качестве
              админа можно добавлять/изменять/удалять пиццы. <br />
              (демо-аккаунт: <br /> email: admin@admin.com <br /> password:
              admin123)
            </p>
            <a className="link" href="https://react-pizza-frontend.vercel.app/">
              Перейти
            </a>
            <img src={reactPizzaShot} alt="react-pizza" />
          </div>

          <div className="container">
            <h2 className="title">конвертер валют</h2>
            <div>
              <ConverterCurrencies />
            </div>
          </div>

          <div className="container">
            <h2 className="title">список задач</h2>
            <TodoList />
          </div>

          <div className="container">
            <h2 className="title">калькулятор</h2>
            <Calculator />
          </div>
        </div>

        <div className="contacts">
          <div className="container">
            <h2 className="title">contacts</h2>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <a href="https://github.com/MashPot1">
                <img
                  src={require("./assets/svgs/github.svg").default}
                  alt="svg"
                />
              </a>
              <a href="https://vk.com/MashPot1">
                <img src={require("./assets/svgs/vk.svg").default} alt="svg" />
              </a>

              <a href="https://t.me/mashpot1">
                <img
                  src={require("./assets/svgs/telegram.svg").default}
                  alt="svg"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
