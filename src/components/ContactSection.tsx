import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { MainButton, MainTitle } from "./Contents";
import "./contact-section.css";

export default function ContactSection() {
  return (
    <section className="contact" id="contact">
      <MainTitle title="my contact" />
      <Content />
    </section>
  );
}

function Content() {
  return (
    <div className="container">
      <div className="content">
        <ContactTop />
        <Form />
      </div>
    </div>
  );
}

function ContactTop() {
  return (
    <div className="contactTop">
      <Contacts />
      <MobileIcons />
    </div>
  );
}

function Contacts() {
  return (
    <div className="contacts">
      <Contact title="Call Me" content="01145471405" icon={faPhone} />
      <Contact
        title="Email"
        content="heshameldib27@gmail.com"
        icon={faEnvelope}
      />
      <Contact title="Location" content="Egypt Fayoum" icon={faLocationDot} />
    </div>
  );
}

interface ContactProps {
  title: string;
  content: string;
  icon: any;
}
function Contact({ title, content, icon }: ContactProps) {
  return (
    <div>
      <FontAwesomeIcon icon={icon} />
      <span>
        <h5>{title}</h5>
        <span>{content}</span>
      </span>
    </div>
  );
}

function MobileIcons() {
  return (
    <div className="mobileIcons">
      <Icon
        name="linkedin"
        link="https://linkedin.com/in/hesham-eldib"
        icon={faLinkedinIn}
      />
      <Icon
        name="github"
        link="https://github.com/HeshamEldib"
        icon={faGithub}
      />
    </div>
  );
}

interface IconProps {
  name: string;
  link: string;
  icon: any;
}
function Icon({ name, link, icon }: IconProps) {
  return (
    <div className={name}>
      <a href={link} target="_blank">
        <FontAwesomeIcon icon={icon} />
      </a>
    </div>
  );
}

function Form() {
  return (
    <form
      action="https://formspree.io/f/xbjerbkp"
      method="POST"
      id="contactForm"
    >
      <Input type="text" id="name" name="Full Name" />
      <Input type="email" id="email" name="Email" />
      <Message name="Message" id="message" placeholder="Your Message" />

      <MainButton title="Send">
        <FontAwesomeIcon icon={faPaperPlane} />
      </MainButton>
    </form>
  );
}

interface InputProps {
  type: string;
  id: string;
  name: string;
}
function Input({ type, id, name }: InputProps) {
  return <input type={type} id={id} name={name} placeholder={name} required />;
}

interface MessageProps {
  name: string;
  id: string;
  placeholder: string;
}
function Message({ name, id, placeholder }: MessageProps) {
  return (
    <textarea name={name} id={id} placeholder={placeholder} required></textarea>
  );
}
