import Image from 'next/image'
import overview1 from '@/images/overview/overview1.png'
import overview2 from '@/images/overview/overview2.png'
import overview3 from '@/images/overview/overview3.png'
import overview4 from '@/images/overview/overview4.png'
import overview5 from '@/images/overview/overview5.png'
import overview6 from '@/images/overview/overview6.png'
import overview7 from '@/images/overview/overview7.png'

export function InsightsOverview({ handleSectionChange }) {
  return (
    <div className="bg-blue">
      <div>
        <div className="font-ft-reg text-lg md:text-xl">
          Redesigned Insights Center, a web-based reporting platform that helps
          credit unions understand their credit, debit, and ATM portfolios, from
          a static reporting to a custom reporting model enabling users to see
          the data they care about, in a way that makes sense for them.
        </div>
        <div className="flex  flex-row flex-wrap py-10">
          <div className="pb-4 text-base">
            <h4 className="pb-2 font-ft-bold">Role(s)</h4>
            <div className="pr-14 font-ikob-reg">
              <p>Product Designer</p>
              <p>UX Researcher</p>
              <p>Front-end Engineer</p>
              <p> Product Manager</p>
            </div>
          </div>
          <div className="pb-4 pr-14 text-base">
            <h4 className="pb-2 font-ft-bold">Team</h4>
            <div className="font-ikob-reg">
              <p>2 Front-end Engineers, Philosophie</p>
              <p>2 Engineering Teams, Co-op</p>
              <p>Technical Product Owner, Co-op</p>
            </div>
          </div>
          <div className="text-base">
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
            <div className="baseline sticky top-4 font-ft-bold text-xl md:w-1/4">
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
            <div className="baseline sticky top-4 font-ft-bold text-xl md:w-1/4">
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
              <div className="flex w-full self-center pb-6 md:w-1/2">
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
              <div className="flex w-full self-center pb-6">
                <Image
                  src={overview3}
                  alt="user testing log"
                  loading="lazy"
                  className="w-full"
                />
              </div>
              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  Key Insights
                </div>

                <div className="py-2 font-ft-bold text-lg md:text-xl">
                  The Current reporting suite does not effectively service the
                  varying needs of credit union employees
                </div>
                <div className="pb-4 font-ikob-reg text-base">
                  The variety of use cases can stem from multiple factors, some
                  being department (fraud, portfolio manager), CU size, employee
                  seniority and more. It becomes increasingly difficult to
                  support the multitude of use cases using a static model.
                </div>

                <div className="py-2 font-ft-bold text-lg md:text-xl">
                  Credit Unions use their own tedious in-house methods because
                  they feel like it will provide them with more accurate data
                </div>
                <div className="font-ikob-reg text-base">
                  While they retain more control over their data, they have to
                  manually check for key information (fraud alerts, transactions
                  breaking a threshold) changes and add new data by hand.
                </div>
              </div>
              <div className="flex w-full self-center pb-6">
                <Image
                  src={overview4}
                  alt="dashboard"
                  loading="lazy"
                  className="w-full"
                />
              </div>
              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  Understanding the Current/Adjacent Platforms
                </div>

                <div className="py-2 font-ft-bold text-lg md:text-xl">
                  Deep exploration of current tools
                </div>
                <div className="pb-4 font-ikob-reg text-base">
                  During our testing, we successfully identified alternative
                  platforms used by credit union employees instead of Insights
                  Center. Exploration the current iteration of Insights Center
                  along with the alternative platforms gave us a good idea of
                  the current landscape of reporting and what we needed to
                  support.
                </div>
              </div>
              <div className="flex w-full self-center pb-6">
                <Image
                  src={overview5}
                  alt="adjacent platforms reports"
                  loading="lazy"
                  className="w-full"
                />
              </div>
              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  Key Insights
                </div>

                <div className="py-2 font-ft-bold text-lg md:text-xl">
                  Reporting is currently being done across a variety of
                  different platforms
                </div>
                <div className="pb-4 font-ikob-reg text-base">
                  A big reason for this is because the processor’s data
                  components, APIs, and feature capabilities for systems used
                  (e.g. Connex and Optis, Debit and Credit) are not identical
                  and needs a platform that supports the variations in data
                  available.
                </div>
                <div className="py-2 font-ft-bold text-lg md:text-xl">
                  There are many similarities between the different platforms
                  used
                </div>
                <div className="pb-4 font-ikob-reg text-base">
                  Sometimes the only key differentiator between the platforms
                  was the type of data supported.
                </div>
                <div className="py-2 font-ft-bold text-lg md:text-xl">
                  We had a lot of reports to support...
                </div>
                <div className="pb-4 font-ikob-reg text-base">
                  From fraud reports to portfolio health to cross credit union
                  comparisons, our new system had to support it all.
                </div>
              </div>
              <div className="flex w-full self-center pb-6 md:w-1/2">
                <Image
                  src={overview6}
                  alt="adjacent platforms reports"
                  loading="lazy"
                  className="w-full"
                />
              </div>
              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  Deconstructing the Data
                </div>

                <div className="py-2 font-ft-bold text-lg md:text-xl">
                  Object (Data) Oriented UX
                </div>
                <div className="pb-4 font-ikob-reg text-base">
                  Inspired by Object Oriented UX we leaned in heavily on the
                  data elements to guide us in our design. That meant
                  identifying, deconstructing, and regrouping the data elements
                  we needed to support.
                </div>
              </div>
              <div className="flex w-full self-center pb-6">
                <Image
                  src={overview7}
                  alt="adjacent platforms reports"
                  loading="lazy"
                  className="w-full"
                />
              </div>
              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  Key Insights
                </div>

                <div className="py-2 font-ft-bold text-lg md:text-xl">
                  &quot;Theming&quot; Data
                </div>
                <div className="pb-2 font-ikob-reg text-base">
                  If we break down and categorize the data into key attributes,
                  we have an opportunity to build complex reports for any
                  situation. Data attributes can be organized from the top-down,
                  meaning we can find similarities at the high level and
                  differentiate on drill down.
                </div>
              </div>
              <div className="w-full flex-col self-center pb-6 font-ft-bold text-lg text-white md:w-2/3 md:text-xl">
                See a deeper dive of how understanding the data influenced our
                designs here: <br />
                <span
                  onClick={() => handleSectionChange('data')}
                  className="cursor-pointer text-green hover:text-white"
                >
                  ”Filtering and Data”
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="flex flex-col items-baseline py-4 md:flex-row">
            <div className="baseline sticky top-4 font-ft-bold text-xl md:w-1/4">
              The Results
            </div>
            <div className="flex flex-1 flex-col">
              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  Development
                </div>

                <div className="py-2 font-ft-bold text-lg md:text-xl">
                  A coded prototype is worth a thousand words
                </div>
                <div className="font-ikob-reg text-base">
                  We had two tracks, an in progress design Figma and a coded
                  prototype. Rough ideas were tested and refined in the Figma
                  and it would be slowly transitioned into the coded prototype
                  where we would test further.
                </div>
              </div>
              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  Code Hand Off
                </div>

                <div className="py-2 font-ft-bold text-lg md:text-xl">
                  Our code is being utilized for the production build of the new
                  Insights Center
                </div>
                <div className="font-ikob-reg text-base">
                  Through a strong partnership between our team and Co-op, we
                  were able to contribute our code as the basis for the modern
                  experience Insights Center.
                </div>
              </div>
              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  Stakeholder Feedback
                </div>

                <div className="py-2 font-ft-bold text-lg md:text-xl">
                  &quot;I&apos;ve been working in this field a long time and I
                  can say that if we can get this off the ground, there will be
                  nothing like it&quot;
                  <ul className="list-inside list-disc space-y-1 pl-6">
                    <li>Brenda Moulton, Product Owner</li>
                  </ul>
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
            </div>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="flex flex-col items-baseline py-4 md:flex-row">
            <div className="baseline sticky top-4 font-ft-bold text-xl md:w-1/4">
              Reflections
            </div>
            <div className="flex flex-1 flex-col">
              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  Data Quality
                </div>

                <div className="py-2 font-ft-bold text-lg md:text-xl">
                  Without data, there is nothing
                </div>
                <div className="font-ikob-reg text-base">
                  No matter how intuitive, snappy, and user friend we make the
                  user facing experience, without a proper data pipeline, it
                  means nothing. As consultants we couldn’t influence the
                  direction of the back-end team to a great degree but I wish we
                  had conversations sooner on the importance integrating a wider
                  range of data then they currently have as it caused some
                  bottle-necks later down the line. Good news is that the first
                  slice of Insights Center modern experience is currently in
                  development, starting with restructuring the back-end.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
