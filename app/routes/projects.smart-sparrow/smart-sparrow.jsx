import backgroundSpr from '~/assets/dark-tech-glowing-background-picjumbo-com.jpg';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { ThemeProvider, useTheme } from '~/components/theme-provider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { Suspense, lazy, useMemo } from 'react';
import styles from './smart-sparrow.module.css';

const Earth = lazy(() => import('./earth').then(module => ({ default: module.Earth })));
const EarthSection = lazy(() =>
  import('./earth').then(module => ({ default: module.EarthSection }))
);

const title = 'Animated Portfolio Experience';
const description =
  'A visually stunning personal portfolio website featuring smooth scroll-based animations, modern dark theme design, and responsive layouts. Built with React, Remix, and modern web technologies.';
const roles = [
  'React & Remix',
  'CSS Modules',
  'Responsive Design',
  'UI/UX Design',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const SmartSparrow = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr} 1080w, ${backgroundSpr} 2160w`}
          placeholder={backgroundSpr}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://4.prasidhshetty.in"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project Overview</ProjectSectionHeading>
              <ProjectSectionText>
                This portfolio website at 4.prasidhshetty.in is built using React with the
                Remix framework for server-side rendering and optimal performance. The site
                features a sleek dark theme, smooth page transitions, and an immersive user
                experience that showcases my work as a web designer and full-stack developer.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Tech Stack</ProjectSectionHeading>
              <ProjectSectionText>
                The frontend is built with React and Remix, utilizing CSS Modules for scoped
                styling and PostCSS for advanced CSS features. Three.js powers the 3D graphics
                and WebGL rendering for the interactive Earth model. The site uses Vite as the
                build tool for fast development and optimized production builds. Vercel
                handles hosting with edge-side rendering for lightning-fast load times.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Design & UI/UX</ProjectSectionHeading>
              <ProjectSectionText>
                The design follows a minimalist dark theme aesthetic with carefully chosen
                typography and spacing. Smooth scroll-based animations and transitions create
                an engaging experience as users navigate through the content. The responsive
                layout ensures the site looks great on all devices, from mobile phones to
                large desktop monitors.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Key Features</ProjectSectionHeading>
              <ProjectSectionText>
                The portfolio includes project showcases with detailed case studies, an about
                section with my background and skills, a contact form for inquiries, and this
                interactive 3D Earth demonstration. The site also features theme switching,
                smooth page transitions, lazy loading for optimal performance, and accessibility
                features to ensure everyone can navigate the content.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ThemeProvider theme="dark" data-invert>
          <Suspense>
            <Earth
              className={styles.earth}
              hideMeshes={useMemo(
                () => ['Atmosphere', 'EarthPartial', 'Chunk', 'EarthFull'],
                []
              )}
              position={useMemo(() => [0, 0, 0], [])}
              labels={useMemo(
                () => [
                  {
                    position: [0.54, 0.19, 0.18],
                    text: 'Pacific ring of fire',
                    hidden: true,
                  },
                  {
                    position: [0.47, -0.38, 0.04],
                    text: 'Ruapehu',
                    hidden: true,
                  },
                  {
                    position: [0.22, 0.44, -0.35],
                    text: 'St. Helens',
                    hidden: true,
                  },
                  {
                    position: [0.16, -0.06, 0.58],
                    text: 'Krakatoa',
                    hidden: true,
                  },
                  {
                    position: [0.11, 0.2, -0.56],
                    text: 'Paricutin',
                    hidden: true,
                  },
                  {
                    position: [0.52, 0.2, -0.23],
                    text: 'Kilauea',
                    hidden: true,
                  },
                  {
                    position: [-0.24, 0.75, 0.24],
                    text: 'Mantle',
                    delay: 800,
                    hidden: true,
                  },
                  {
                    position: [-0.24, 0.55, 0.24],
                    text: 'Outer core',
                    delay: 800,
                    hidden: true,
                  },
                  {
                    position: [-0.24, 0.35, 0.24],
                    text: 'Inner core',
                    delay: 800,
                    hidden: true,
                  },
                ],
                []
              )}
              scale={0.6}
            >
              <EarthSection
                scrim
                animations={['0:loop']}
                camera={[0, 0, 1.5]}
                meshes={['Atmosphere', 'EarthFull']}
              >
                <ProjectSection>
                  <ProjectSectionContent>
                    <ProjectTextRow center>
                      <ProjectSectionHeading>
                        Interactive 3D Experience
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                        Scroll down to explore the interactive 3D Earth model. This demonstrates
                        how 3D graphics can be integrated into web experiences to create engaging,
                        immersive content that captivates users.
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>
              <EarthSection
                animations={['0:loop']}
                camera={[0, 0, 2.4]}
                meshes={['Atmosphere', 'EarthFull']}
              />
              <EarthSection
                animations={['0:loop']}
                camera={[1.14, -1.39, 0.94]}
                meshes={['Atmosphere', 'EarthFull']}
              >
                <ProjectSection>
                  <ProjectSectionContent width="xl">
                    <ProjectTextRow justify="end" width="s">
                      <ProjectSectionHeading level={4} as="h3">
                        WebGL & Three.js
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                        The 3D rendering is powered by Three.js, a powerful JavaScript library
                        that makes WebGL accessible. This allows for real-time 3D graphics
                        directly in the browser without any plugins.
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>
              <EarthSection
                animations={['0:loop']}
                camera={[1.17, 0.69, -1.47]}
                meshes={['Atmosphere', 'EarthFull']}
                labels={[
                  'Pacific ring of fire',
                  'Ruapehu',
                  'St. Helens',
                  'Krakatoa',
                  'Paricutin',
                  'Kilauea',
                ]}
              >
                <ProjectSection>
                  <ProjectSectionContent width="xl">
                    <ProjectTextRow justify="start" width="s">
                      <ProjectSectionHeading level={4} as="h3">
                        Interactive Labels
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                        Users can interact with the model, viewing labels and exploring
                        different regions. Click and drag to orbit around and freely
                        explore the 3D scene.
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>
              <EarthSection
                animations={['0:loop']}
                camera={[1.81, 0.51, 0.43]}
                meshes={['Atmosphere', 'EarthFull']}
                labels={[
                  'Pacific ring of fire',
                  'Ruapehu',
                  'St. Helens',
                  'Krakatoa',
                  'Paricutin',
                  'Kilauea',
                ]}
              />
              <EarthSection
                animations={['0:loop']}
                camera={[0.37, 1.02, 1.84]}
                meshes={['EarthPartial', 'Chunk']}
                labels={['Mantle', 'Outer core', 'Inner core']}
              >
                <ProjectSection>
                  <ProjectSectionContent width="xl">
                    <ProjectTextRow justify="end" width="s">
                      <ProjectSectionHeading level={4} as="h3">
                        Smooth Animations
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                        The model features smooth camera transitions and animations that
                        respond to scroll position, creating a cinematic experience as
                        users navigate through the content.
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>
              <EarthSection
                scrimReverse
                animations={['0:loop']}
                camera={[0.37, 1.02, 1.84]}
                meshes={['Atmosphere', 'EarthFull']}
              />
            </Earth>
          </Suspense>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>Visit the Project</ProjectSectionHeading>
              <ProjectSectionText>
                Experience the full portfolio at{' '}
                <Link href="https://4.prasidhshetty.in">4.prasidhshetty.in</Link>.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
