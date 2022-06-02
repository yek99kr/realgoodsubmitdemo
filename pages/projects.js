import ProjectList from "../components/ProjectList";
import { motion } from "framer-motion";

const Projects = (router) => {
  return (
    <>
      <motion.div
        layout
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ProjectList />
      </motion.div>
    </>
  );
};

export default Projects;
