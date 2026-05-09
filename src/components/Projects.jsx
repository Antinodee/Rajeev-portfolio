import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ui/ScrollReveal';
import SectionHeading from './ui/SectionHeading';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects } from '../data/projects';

const cardVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 md:px-10 max-w-6xl mx-auto scroll-mt-20">
      <ScrollReveal>
        <SectionHeading
          number="03"
          title="Featured Work"
          subtitle="End-to-end projects spanning ML, data engineering, and software development"
        />
      </ScrollReveal>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
        style={{ alignItems: 'stretch' }}
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            variants={cardItem}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <ProjectCard project={project} index={i} onOpen={setActiveProject} />
          </motion.div>
        ))}
      </motion.div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;
