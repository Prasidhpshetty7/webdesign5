import screenshot1 from '~/assets/Screenshot 2026-01-11 002421.png';
import screenshot2 from '~/assets/Screenshot 2026-01-11 002610.png';
import screenshot3 from '~/assets/Screenshot 2026-01-11 002737.png';
import screenshot4 from '~/assets/Screenshot 2026-01-11 002838.png';
import screenshot5 from '~/assets/Screenshot 2026-01-11 002937.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './slice.module.css';

const title = 'Personal Developer Portfolio';
const description =
  'A modern, visually engaging portfolio website built from scratch using HTML5, CSS3, and vanilla JavaScript to showcase my skills as a Full-Stack Developer.';
const roles = ['Frontend Development', 'UI/UX Design', 'Responsive Design', 'Animation'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Slice = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={screenshot3}
          width={1280}
          height={800}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://2.prasidhshetty.in"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              src={screenshot1}
              width={800}
              height={500}
              alt="Personal portfolio website homepage showing Full-Stack Developer introduction"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>The Vision</ProjectSectionHeading>
              <ProjectSectionText>
                I wanted to create a portfolio that truly represents my skills and personality
                as a developer. The goal was to build something modern, clean, and visually
                engaging that would stand out while maintaining excellent performance and
                user experience.
              </ProjectSectionText>
              <ProjectSectionText>
                The design focuses on bold typography, smooth animations, and a dark theme
                that creates a professional yet creative atmosphere. Every element was
                carefully crafted to showcase my attention to detail.
              </ProjectSectionText>
            </div>
            <div>
              <Image
                src={screenshot2}
                width={700}
                height={400}
                alt="Portfolio technical skills section"
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Tech Stack & Implementation</ProjectSectionHeading>
              <ProjectSectionText>
                The portfolio is built using pure HTML5, CSS3, and vanilla JavaScript without
                any frameworks. This approach ensures lightning-fast load times and demonstrates
                strong fundamentals in web development. CSS Grid and Flexbox handle the responsive
                layouts, while CSS custom properties enable easy theming and maintainability.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={screenshot4}
              width={800}
              height={500}
              alt="Portfolio technical expertise section showcasing skills"
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  src={screenshot3}
                  width={440}
                  height={790}
                  alt="Portfolio full page view"
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Animations & Interactions</ProjectSectionHeading>
              <ProjectSectionText>
                Smooth scroll-triggered animations bring the content to life as users navigate
                through the page. Custom CSS animations handle the text reveals, hover effects,
                and transitions. The vertical text elements and staggered animations create
                a dynamic, engaging experience without sacrificing performance.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Key Features</ProjectSectionHeading>
              <ProjectSectionText>
                The portfolio includes a fully responsive design that works seamlessly across
                all devices, from mobile phones to large desktop screens. It features a contact
                form for easy communication, social media integration, and optimized performance
                with fast loading times. The clean code structure follows best practices and
                is easy to maintain and update.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={screenshot5}
              width={940}
              height={500}
              alt="Portfolio contact section and footer"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
