'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
        >
          About Me
        </motion.h1>

        {/* Bio Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Professional Bio</h2>
          <p className="text-gray-600 leading-relaxed">
            I am a Computer Science student at Rochester Institute of Technology (RIT) with a passion for backend development, 
            AI, and automation. My journey in technology has been driven by a desire to create efficient, scalable solutions 
            that solve real-world problems. Through my internships and projects, I've gained hands-on experience in developing 
            robust backend systems, implementing AI solutions, and automating complex workflows.
          </p>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'C++', 'C#', 'HTML/CSS'].map((skill, index) => (
                  <span key={index} className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {['FastAPI', 'Flask', 'Spring Boot', 'React', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS'].map((skill, index) => (
                  <span key={index} className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'Kubernetes', 'OpenShift', 'Git', 'GitHub', 'GitLab', 'Jenkins', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Google Cloud'].map((skill, index) => (
                  <span key={index} className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Experience</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900">Software Engineer Intern</h3>
              <p className="text-gray-600 mb-2">IBM | May 2024 - Present</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Developing and maintaining backend services using Python and FastAPI</li>
                <li>Implementing AI solutions for data analysis and automation</li>
                <li>Working with cloud technologies and containerization</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900">Software Engineering Co-Op</h3>
              <p className="text-gray-600 mb-2">Codonics | January 2024 - May 2024</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Developed and maintained backend services using Java and Spring Boot</li>
                <li>Implemented automated testing and CI/CD pipelines</li>
                <li>Worked with Docker and Kubernetes for containerization</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900">Web & Email Technologist</h3>
              <p className="text-gray-600 mb-2">RIT University Advancement | May 2023 - December 2023</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Developed and maintained web applications using React and Node.js</li>
                <li>Implemented email marketing campaigns and automation</li>
                <li>Worked with various APIs and databases</li>
              </ul>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
} 