import React from "react";
import "./AboutMeCardStyles.css";

const AboutMeCard = () => {
  return (
    <div className="card">
      <div className="card-front">
        <div className="line-numbers">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div>
        <code>
          <span className="variable">const </span>
          <span className="function">aboutMe </span>
          <span className="operator">= </span>
          <span>{"{"}</span>
          <div className="indent">
            {" "}
            <span className="property">name</span>
            <span className="operator">: </span>
            <span className="string">'Trevor Mackin'</span>
            <span>,</span>
          </div>
          <div className="indent">
            {" "}
            <span className="property">title</span>
            <span className="operator">: </span>
            <span className="string">'Software Engineer'</span>
            <span>,</span>
          </div>
          <div className="indent">
            {" "}
            <span className="property">contact</span>
            <span className="operator">: </span>
            <span>{"{"}</span>
            <div className="indent">
              {" "}
              <span className="property">email</span>
              <span className="operator">: </span>
              <span className="string">
                <a href="mailto:tismetrm@gmail.com?subject=Mail from trevormackin.com">
                  tismeTRM@gmail.com
                </a>
              </span>
              <span>,</span>
            </div>
            <div className="indent">
              <span className="property">gitHub</span>
              <span className="operator">: </span>
              <span className="string">
                <a href="https://github.com/ratta2ii'">github.com/ratta2ii</a>
              </span>
              <span>,</span>
            </div>
            <div className="indent">
              <span className="property">website</span>
              <span className="operator">: </span>
              <span className="string">
                <a href="https://trevormackin.com">trevormackin.com</a>
              </span>
              <span>,</span>
            </div>
            <div className="indent">
              <span className="property">linkedIn</span>
              <span className="operator">: </span>
              <span className="string">
                <a href="https://linkedin.com/in/trevor-mackin">
                  linkedin.com/in/trevor-mackin
                </a>
              </span>
            </div>
            <span>{"}"}</span>
          </div>
          <span>{"{"}</span>
        </code>
      </div>
      <div className="card-back">
        <div className="line-numbers">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div>
        <code>
          <span className="variable">this</span>
          <span>.</span>
          <span className="method">addEventListener</span>
          <span>{"("}</span>
          <span className="string">'mouseover'</span>
          <span>,</span>
          <span className="function">{"() => "}</span>
          <span>{"{"}</span>
          <div className="indent">
            <span className="variable">this</span>
            <span>.</span>
            <span className="property">flipCard </span>
            <span>= </span>
            <span className="boolean">true</span>
            <span>;</span>
          </div>
          <span>{"});"}</span>
        </code>
      </div>
    </div>
  );
};

export default AboutMeCard;
