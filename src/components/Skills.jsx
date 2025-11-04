import { motion } from "framer-motion";

const skillGroups = {
  Frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  Backend: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Flask"],
  "UI/UX Design": ["Figma", "Adobe XD","Adobe Photoshop"],
};

export default function Skills() {
  return (
    <section className="min-h-96 text-white px-6 py-20 flex flex-col items-center" id="skills">
      <h2 className="text-5xl font-bold mb-16 text-center text-primary">
         MY SKILLS
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl w-full">
        {Object.entries(skillGroups).map(([category, skills], idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-lg border border-white/10 hover:shadow-blue-500/20 transition-all duration-500 flex flex-col items-center text-center"
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary drop-shadow-sm">
              {category}
            </h3>

            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="text-white/90 hover:text-primary transition-colors text-base font-medium px-4 py-2 rounded-full border border-white/10 bg-white/5 shadow-md cursor-pointer select-none"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* <motion.div
              className="mt-8 w-16 h-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "4rem", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            /> */}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
