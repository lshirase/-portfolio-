import Image from 'next/image'
import overview1 from '@/images/overview/overview1.png'
import overview2 from '@/images/overview/overview2.png'

export function InsightsOverview() {
  return (
    <div className="bg-blue">
      <div>
        <div className="font-ft-reg text-lg md:text-xl">
          Redesigned Insights Center, a web-based reporting platform that helps
          credit unions understand their credit, debit, and ATM portfolios, from
          a static reporting to a custom reporting model enabling users to see
          the data they care about, in a way that makes sense for them.
        </div>
        <div className="flex flex-row py-10">
          <div className="text-base">
            <h4 className="pb-2 font-ft-bold">Role(s)</h4>
            <div className="font-ikob-reg">
              <p>Product Designer</p>
              <p>UX Researcher</p>
              <p>Front-end Engineer</p>
              <p> Product Manager</p>
            </div>
          </div>
          <div className="pl-14 text-base">
            <h4 className="pb-2 font-ft-bold">Team</h4>
            <div className="font-ikob-reg">
              <p>2 Front-end Engineers, Philosophie</p>
              <p>2 Engineering Teams, Co-op</p>
              <p>Technical Product Owner, Co-op</p>
            </div>
          </div>
          <div className="pl-14 text-base">
            <h4 className="pb-2 font-ft-bold">Technology</h4>
            <div className="font-ikob-reg">
              <p>Figma, Figjam, Mural</p>
              <p>Airtable</p>
              <p>React, Typescript</p>
              <p>Agile/Experiment-Driven Design</p>
            </div>
          </div>
        </div>
        <video
          src="https://res.cloudinary.com/dkso10gnx/video/upload/v1690832426/Coded_Co-op_prototype_copy_ptjbh8.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="pb-6"
        />
        <div className="flex flex-1">
          <div className="flex flex-col items-baseline py-4 md:flex-row">
            <div className="baseline font-ft-bold text-xl md:w-1/4">
              Problem Space
            </div>
            <div className="flex flex-1 flex-col">
              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  User Problems
                </div>

                <div className="py-2 font-ft-bold text-lg md:text-xl">
                  The static reporting model rarely provides relevant
                  information to the credit unions.
                </div>
                <div className="font-ikob-reg text-base">
                  Each credit union is unique, and this is reflected in their
                  individual perspectives on data. Our current reporting system
                  falls short when it comes to catering to individual
                  requirements and granular data exploration. The lack of
                  customization fails to serve the needs of the diverse
                  landscape of credit unions and their employees.
                </div>
              </div>
              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  Measuring Success
                </div>

                <div className="py-2 font-ft-bold text-lg md:text-xl">
                  Building a reporting system capable of encompassing the
                  intricacy of the data within a versatile framework.
                </div>
                <div className="font-ikob-reg text-base">
                  The existing reporting options within Insights Center fail to
                  align with credit unions’ preferred data visualization
                  approaches, leading them to resort to laborious combinations
                  of various platforms and manual procedures instead of
                  utilizing Insights Center. The primary objective of the
                  initial redesign was to create a new Insights Center that
                  could accommodate the intricate data needs of credit unions
                  within a unified and adaptable environment.
                </div>
              </div>
              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  The Challenge
                </div>

                <div className="py-2 font-ft-bold text-lg md:text-xl">
                  How might we scale our reporting system to facilitate a
                  high-level understanding while enabling deep customization of
                  complex data elements?
                </div>
                <div className="font-ikob-reg text-base">
                  Developing a reporting system that balances high-level
                  overviews for quick understanding with flexible deep
                  customization, addressing the limitations of the static model
                  and catering to credit unions’ unique perspectives and data
                  exploration needs for more effective decision-making and
                  strategic growth.
                </div>
              </div>
              {/* <div className="flex w-full">
                <Image
                  src={overview1}
                  alt="updated design"
                  loading="lazy"
                  className="w-full"
                />
              </div> */}
            </div>
          </div>
        </div>
        <div className="flex w-full pb-6">
          <Image
            src={overview1}
            alt="updated design"
            loading="lazy"
            className="w-full"
          />
        </div>
        <div className="flex flex-1">
          <div className="flex flex-col items-baseline py-4 md:flex-row">
            <div className="baseline font-ft-bold text-xl md:w-1/4">
              The Approach
            </div>
            <div className="flex flex-1 flex-col">
              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  Research Principles
                </div>

                <div className="py-2 font-ft-bold text-lg md:text-xl">
                  Meet early and often
                </div>
                <div className="font-ikob-reg text-base">
                  We introduced cross-functional product discovery (e.g. face
                  time with users in diverse roles and organizations,
                  experimentation, research synthesizing) as a continuous
                  activity within the core product team. We continued to use
                  this process as we rebuild Insights Center into a cohesive
                  platform focusing on the credit union experience.
                </div>
              </div>
              <div className="flex w-1/2 self-center pb-6">
                <Image src={overview2} alt="design cycle" loading="lazy" />
              </div>
              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  Design Principles
                </div>

                <div className="py-2 font-ft-bold text-lg md:text-xl">
                  Fail fast and prototype faster
                </div>
                <div className="font-ikob-reg text-base">
                  Instead of waiting every step of the way for feedback or
                  direction, we tried to explore as many options as possible.
                  Instead of analysis paralysis we were on go mode, changing or
                  throwing things out as we learned more.
                </div>
              </div>
              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  Understanding the User
                </div>

                <div className="py-2 font-ft-bold text-lg md:text-xl">
                  Validating through extensive usability testing
                </div>
                <div className="font-ikob-reg text-base">
                  <ul className="list-inside list-disc space-y-1 pl-6">
                    <li>
                      Conducted research cycles every 2-3 weeks to identify
                      opportunities and test design hypotheses
                    </li>
                    <li>
                      We spoke over 30 participants made up of COOP employees
                      and Credit Union members
                    </li>
                    <li>
                      We spoke with 7 Insights Center stakeholders and subject
                      matter experts across the organization to understand the
                      state of the organization, employees’ pain points and
                      their thoughts on the clients’ experience
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex w-full">
                <Image
                  src={overview1}
                  alt="updated design"
                  loading="lazy"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
