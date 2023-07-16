import { Paragraph } from "components";

const AboutParagraph =
  "I'm a Neuropsychology master's graduate turned passionate developer.\n\n" +
  "My journey led me to School 19 (42 network), renowned for its unique teaching program that emphasizes engaging projects and a self-directed learning model.\n\n" +
  "I've since developped my web programing skills through different projects and I am actively looking for opportunities as a web developer.";

const About = () => {
  return (
    <>
      <Paragraph>{AboutParagraph}</Paragraph>
      {/* <Paragraph>
        What I like: Music (violin), Sports (outdoor running, yoga), Learning
        (coding, 3D modeling, finances, ...)
      </Paragraph> */}
    </>
  );
};

export default About;
