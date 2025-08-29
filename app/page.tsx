"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import MastiPhoto from "../assets/Masti.png";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  const [data, setData] = useState<any>(null);

  // Fetch JSON data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/copy.json"); // Correct path from public folder
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error loading JSON data:", error);
      }
    };

    fetchData();
  }, []);

  // Display loading state while fetching
  if (!data) return <div>Loading...</div>;

  return (
    <div className="text-foreground">
      {/* Fixed Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-[80px] flex flex-col items-center justify-center">
        {/* About Section */}
        <section
          id="about"
          className="flex flex-col items-center justify-center h-screen bg-[#dededa] p-8 rounded-lg shadow-lg max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-semibold text-primary mb-6">About Me</h2>
          <div className="flex items-center gap-8 mb-6">
            <Image
              src={MastiPhoto}
              alt="My avatar"
              className="w-32 h-32 rounded-full shadow-lg"
            />
            <p className="text-lg text-foreground leading-relaxed max-w-lg">
              I'm a software engineer with a passion for building innovative and
              user-friendly solutions. I love solving problems and exploring new
              technologies. I'm also passionate about clean code, learning new
              tools, and always improving my skills.
            </p>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <a
              href="#contact"
              className="px-6 py-3 bg-primary text-primary rounded-lg shadow-lg hover:bg-primary-dark transition duration-300"
            >
              Let's Connect
            </a>
          </div>
        </section>
        {/* Education */}
        <section
          id="education"
          className="flex flex-col items-center justify-center bg-[#dededa] p-8 rounded-lg shadow-lg my-12 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-semibold text-primary mb-8">
            Education
          </h2>
          <div className="flex flex-col gap-8 px-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary">
                Diploma in Computer Networking
              </h3>
              <p className="text-lg text-foreground">Seneca College</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary">
                Bachelor's in Computer Science
              </h3>
              <p className="text-lg text-foreground">
                Dalhousie University, Halifax
              </p>
            </div>
          </div>
          {/* Work Experience Section */}
          <section
            id="work"
            className="flex flex-col items-center justify-center bg-[#dededa] p-8 rounded-lg shadow-lg my-12 max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-semibold text-primary mb-8">
              Work Experience
            </h2>
            <div className="flex flex-col gap-8 px-8">
              {data?.work?.length > 0 ? (
                data.work.map((job: any, index: number) => (
                  <div
                    key={index}
                    className="p-6 bg-primary text-primary-dark rounded-xl shadow-lg"
                  >
                    <h3 className="text-2xl font-bold">{job.position}</h3>
                    <p className="text-lg">
                      {job.company} | {job.period}
                    </p>
                    <p className="mt-2">{job.description}</p>
                  </div>
                ))
              ) : (
                <p>No work experience available.</p>
              )}
            </div>
          </section>
        </section>
        Projects Section
        <section
          id="projects"
          className="flex flex-col items-center justify-center bg-[#dededa] p-8 rounded-lg shadow-lg my-12 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-semibold text-primary mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
            {data.projects.map((project: any, index: number) => (
              <a
                key={index}
                href={project.link}
                className="p-6 bg-primary text-primary-dark rounded-xl shadow-lg hover:shadow-xl hover:bg-primary-dark transition duration-300 text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p>{project.description}</p>
              </a>
            ))}
          </div>
        </section>
        {/* Contact Section */}
        <section
          id="contact"
          className="flex flex-col items-center justify-center bg-[#dededa] p-8 rounded-lg shadow-lg max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-semibold text-primary mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-foreground mb-6">
            Feel free to reach out to me via email or connect on LinkedIn. I'm
            always open to exciting opportunities and collaborations.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:mastipatel172000@gmail.com"
              className="px-6 py-3 bg-primary text-primary rounded-lg shadow-lg hover:bg-primary-dark transition duration-300"
            >
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/mastipatel"
              className="px-6 py-3 bg-primary text-primary rounded-lg shadow-lg hover:bg-primary-dark transition duration-300"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
