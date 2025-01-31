// CSS
import { Link } from "react-router-dom";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.about}>
      <div>
        Sobre o MINI <span>Blog</span>
      </div>
      <p>
        Este projeto consiste em um blog feito com React no front-end e Firebase
      </p>
      <Link to={"/posts/create"} className="btn">
        Criar post
      </Link>
    </div>
  );
};

export default About;
