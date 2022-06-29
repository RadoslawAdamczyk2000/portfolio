import { ThemeProvider } from "styled-components";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero/Hero";
import Projects from "../components/Projects/Projects/Projects";
import Skills from "../components/Skills/Skills/Skills";
import Timeline from "../components/Timeline/Timeline/Timeline";
import { content } from "../data/content";
import { skills } from "../data/skills";
import { socials } from "../data/socials";
import { stack } from "../data/stack";
import { Global } from "../styles/Global";
import { theme } from "../styles/theme";

const Page = () => {
  const {seo,hero,projects} = content;
  return(
    <ThemeProvider theme={theme}>
      <Global/>
      <Hero
        buttons={[...hero.buttons]}
        content={hero.content}
        image={hero.image}
        socials={[...hero.socials]}
        title={hero.title}
      />
      <div className='wrapper'>
        <Timeline/>
        <div className="cell">
          <Skills
            content={projects.content}
            skills={[...skills]}
            title='My skills'
          />
        </div>
      </div>
      <Projects
        button={projects.button}
        cards={[...projects.cards]}
        content={projects.content}
        title={projects.title}
      />
      <Footer/>
    </ThemeProvider>
  )
}
export default Page;

