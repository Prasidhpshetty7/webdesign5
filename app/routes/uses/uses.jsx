import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
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
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to design and develop things."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Design</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://www.figma.com">Figma</Link> is my primary tool for
                    UI design. It's great for creating wireframes, prototypes, and
                    high-fidelity designs collaboratively.
                  </ListItem>
                  <ListItem>
                    For any image editing and graphic design work, I use Adobe Photoshop
                    and Illustrator. They're industry standards for a reason.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I use <Link href="https://code.visualstudio.com/">VS Code</Link> as my
                    primary code editor. It's fast, extensible, and has great support for
                    all the languages I work with.
                  </ListItem>
                  <ListItem>
                    <Link href="https://reactjs.org/">React</Link> is my frontend
                    JavaScript library of choice. The component-based architecture makes
                    building complex UIs manageable and maintainable.
                  </ListItem>
                  <ListItem>
                    For backend development, I work with{' '}
                    <Link href="https://nodejs.org/">Node.js</Link> and various frameworks
                    like Express. I also have experience with databases like MongoDB and
                    PostgreSQL.
                  </ListItem>
                  <ListItem>
                    <Link href="https://git-scm.com/">Git</Link> for version control is
                    essential. I use GitHub for hosting repositories and collaboration.
                  </ListItem>
                  <ListItem>
                    For CSS, I work with modern approaches including CSS Modules, Tailwind
                    CSS, and vanilla CSS with custom properties.
                  </ListItem>
                  <ListItem>
                    For animation I use{' '}
                    <Link href="https://www.framer.com/motion/">Framer Motion</Link> and
                    CSS animations to bring interfaces to life.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>System</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Code Editor</TableHeadCell>
                    <TableCell>VS Code</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Browser</TableHeadCell>
                    <TableCell>Chrome / Firefox</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Terminal</TableHeadCell>
                    <TableCell>Windows Terminal / Git Bash</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
