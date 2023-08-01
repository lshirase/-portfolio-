import Image from 'next/image'
import overview1 from '@/images/overview/overview1.png'
import overview7 from '@/images/overview/overview7.png'
import data1 from '@/images/data/data1.png'
import data2 from '@/images/data/data2.png'
import data3 from '@/images/data/data3.png'

export function InsightsData({ handleSectionChange }) {
  return (
    <div className="bg-blue">
      <div>
        <div className="pb-2 font-ft-bold text-lg md:text-xl">
          Insights Center: Filtering and Data
        </div>
        <div className="font-ft-reg text-lg md:text-xl">
          Redesigning Insights Center posed a significant challenge in
          integrating a multitude of data, reports, and workflows, scattered
          across various platforms, into a cohesive and centralized interface.
          In order for us to design something that empowers users to filter
          through vast datasets and conduct in-depth explorations in the
          reports, we had to deeply understand the data we were working with.
        </div>

        <div className="flex flex-1">
          <div className="flex flex-col items-baseline py-4 md:flex-row">
            <div className="baseline font-ft-bold text-xl md:w-1/4">
              Initial Dive
            </div>
            <div className="flex flex-1 flex-col">
              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  Deconstructing the Data
                </div>

                <div className="py-2 font-ft-bold text-lg md:text-xl">
                  Object (Data) Oriented UX
                </div>
                <div className="font-ikob-reg text-base">
                  Inspired by Object Oriented UX we leaned in heavily on the
                  data elements to guide us in our design. That meant
                  identifying, deconstructing, and regrouping the data elements
                  we needed to support.
                </div>
              </div>
              <div className="flex w-full self-center pb-6">
                <Image
                  src={overview7}
                  alt="data hierarchy"
                  loading="lazy"
                  className="w-full"
                />
              </div>
              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  Finding Connections
                </div>

                <div className="py-2 font-ft-bold text-lg md:text-xl">
                  Seed turns into a (data) tree
                </div>
                <div className="pb-4 font-ikob-reg text-base">
                  As we became more familiar with financial data and the reports
                  we had to support, we started to see the data we should
                  prioritize first and how they are all connected. For an
                  example, we could trace something like PIN back to the other
                  attributes are connected to it (Plastic Card, Authentication,
                  and etc.).
                </div>
                <div className="flex flex-col">
                  <div className="flex w-full self-center pb-6">
                    <Image
                      src={data1}
                      alt="transaction analysis report"
                      loading="lazy"
                      className="w-full"
                    />
                  </div>
                  <div className="flex w-full self-center pb-6 md:w-1/2">
                    <Image
                      src={data2}
                      alt="transaction analysis report"
                      loading="lazy"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 2 */}
        <div className="flex flex-1">
          <div className="flex flex-col items-baseline py-4 md:flex-row">
            <div className="baseline font-ft-bold text-xl md:w-1/4">
              Data -&gt; Arch
            </div>
            <div className="flex flex-1 flex-col">
              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  Setting the Foundation
                </div>

                <div className="py-2 font-ft-bold text-lg md:text-xl">
                  Translating the tree into IA
                </div>
                <div className="font-ikob-reg text-base">
                  Early on, this was still a rudimentary understanding but it
                  allowed us to think about how our reporting interface would
                  function in relation to the data.
                </div>
              </div>
              <div className="flex w-full self-center pb-6">
                <Image
                  src={data3}
                  alt="ia overview"
                  loading="lazy"
                  className="w-full"
                />
              </div>
              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  Setting the Stage
                </div>

                <div className="py-2 font-ft-bold text-lg md:text-xl">
                  Report filtering (v1) as the first layer
                </div>
                <div className="font-ikob-reg text-base">
                  In order to have a cohesive report, we made the choice of
                  having report wide filters available to user, giving the
                  ability to create sweeping changes instantly. As we began to
                  learn more about how the data worked and through extensive
                  user testing, we later revised this design (more on that
                  later).
                </div>
              </div>
              <video
                src="https://res.cloudinary.com/dkso10gnx/video/upload/v1690924130/report-filtering-1_g5qevn.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="pb-6"
              />

              {/* <div className="flex w-full">
                <Image
                  src={overview1}
                  alt="updated design"
                  loading="lazy"
                  className="w-full"
                />
              </div> */}

              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  Getting Granular{' '}
                </div>

                <div className="py-2 font-ft-bold text-lg md:text-xl">
                  Widgets as the primary driver
                </div>
                <div className="font-ikob-reg text-base">
                  If the report sets the stage, we can use widgets as the
                  primary method of showcasing data. Knowing that data will
                  funnel down from the report level filters, we can start
                  thinking about how data will flow into the widgets and how
                  users can start creating them.
                </div>
              </div>
              <video
                src="https://res.cloudinary.com/dkso10gnx/video/upload/v1690924130/Widget_Editing_py4fvt.mp4"
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
        {/* <div className="flex w-full pb-6">
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
              <div className="flex w-full self-center pb-6 md:w-1/2">
                <Image src={overview1} alt="design cycle" loading="lazy" />
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
                  src={overview1}
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
                  src={overview1}
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
                  src={overview1}
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
                  src={overview1}
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
                  src={overview1}
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
                  onClick={() => handleSectionChange('coop')}
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
            <div className="baseline font-ft-bold text-xl md:w-1/4">
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
            <div className="baseline font-ft-bold text-xl md:w-1/4">
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
        </div> */}
      </div>
    </div>
  )
}
