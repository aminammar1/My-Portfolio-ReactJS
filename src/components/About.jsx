{
  /*<About /> */
}

export default function About() {
  return (
    <section className="py-16 px-5 md:p-20 lg:p-32 snap-start" id="about">
      <h2 className="text-4xl font-extrabold text-center">About Me</h2>
      <div className="grid lg:grid-cols-2 gap-10 py-10">
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl font-bold">Get to know me!</h3>
          <p className="text-lg text-gray-300">
            Hi, my name is Mohamed Amine Ammar, and I&apos;m a highly ambitious,
            self-motivated software engineer based in Monastir, Tunisia.
          </p>
          <p className="text-lg text-gray-300">
            I have a wide range of hobbies and passions, including chess and
            video games, which help me develop my strategic thinking and
            problem-solving skills.
          </p>
          <p className="text-lg text-gray-300">
            My goal is to combine my technical expertise with my interests to
            create innovative solutions.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">My Skills</h3>
          <div className="flex flex-wrap gap-4 mt-5">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Next.js",
              "Node.js",
              "Nest.js",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-green-700 hover:bg-green-900 p-2 px-4 rounded-md text-white text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
