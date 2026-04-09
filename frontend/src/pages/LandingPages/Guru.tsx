import GuriCircle from "../../components/ui/GuruCircle";
import Button from "../../components/shared/Button";
import Footer from "../../components/ui/Footer";

const Guru = () => {
  return (
    <main className="bg-[#050020] text-white">
      <GuriCircle />

      <section className="min-h-screen bg-linear-to-br from-[#050022] via-[#0a003d] to-[#14005c] px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight my-5 text-center md:text-left">
            The <span className="text-[#5F00FF]">Guru</span> Circle
          </h1>
          {/* ================= TOP SECTION ================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-center">
            {/* LEFT IMAGE CARD */}
            <div className="flex justify-center lg:h-full md:justify-start">
              <div className="w-full rounded-2xl border border-white/10 lg:h-full bg-white/5 p-3 shadow-xl backdrop-blur-md">
                <div className="bg-gray-300 md:h-45 lg:h-full rounded-md w-full" />
              </div>
            </div>

            {/* RIGHT TEXT */}
            <div className="md:col-span-2 text-base sm:text-lg text-white/80 leading-relaxed space-y-4 text-left md:text-justify">
              <p>
                Guru Circle is an exclusive forum section where members who have
                advanced in their AI journey (Gurus) can share their knowledge,
                showcase projects, collaborate on challenges, and discuss
                advanced AI topics.
              </p>

              <ul className="space-y-3">
                <li>
                  ○{" "}
                  <span className="text-white font-semibold">
                    General Discussions:
                  </span>{" "}
                  For deep technical conversations on AI trends, research, and
                  innovations.
                </li>

                <li>
                  ○{" "}
                  <span className="text-white font-semibold">
                    Project Showcase:
                  </span>{" "}
                  A space to present advanced projects for feedback and
                  collaboration.
                </li>

                <li>
                  ○{" "}
                  <span className="text-white font-semibold">
                    Job Opportunities:
                  </span>{" "}
                  A job board where members can post or view career
                  opportunities, freelance gigs, and internships.
                </li>

                <li>
                  ○{" "}
                  <span className="text-white font-semibold">
                    Mentorship Requests:
                  </span>{" "}
                  A thread where Gurus can offer mentorship or request mentoring
                  for specific AI topics.
                </li>
              </ul>
            </div>
          </div>

          {/* ================= ELIGIBILITY CARD ================= */}
          <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 grid md:grid-cols-3 items-center gap-6 shadow-xl backdrop-blur-md w-6xl mx-auto">
            <div className="rounded-lg overflow-hidden md:col-span-1">
              <div className="rounded-md">
                <img
                  src="/actor.png"
                  alt="Eligibility visual"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-2 text-base text-white/75 leading-relaxed space-y-4 text-justify">
              <div className="flex flex-col space-y-3">
                <div>
                  <h3 className="text-white text-lg sm:text-xl font-semibold">
                    Eligibility Criteria
                  </h3>

                  <p className="text-base sm:text-lg text-white/80">
                    Guru Circle is an exclusive community. To gain full access,
                    members must meet the following requirements:
                  </p>
                </div>

                <div className="flex items-center mt-5.75 gap-3 min-h-[12vh]">
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">
                      Complete Learning Cohort
                    </p>
                    <p className="text-white/65 text-sm sm:text-base">
                      Successfully finish the AI learning program and earn your
                      certification
                    </p>
                  </div>

                  <div className="w-0.5 min-h-[inherit] bg-white" />

                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">
                      Join Volunteer Project
                    </p>
                    <p className="text-white/65 text-sm sm:text-base">
                      Participate in at least one community volunteer project
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="text-center mt-20 px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-3">
            Ready to Join the Community?
          </h2>

          <p className="text-white/90 mt-4 sm:mt-6 max-w-xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed my-9">
            Start your verification process and gain access to exclusive
            resources, advanced discussions, and career opportunities.
          </p>

          <Button text="Begin Qualification Process" />
        </div>

        {/* ================= FOOTER ================= */}
        <Footer />
      </section>
    </main>
  );
};

export default Guru;
