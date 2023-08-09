import Image from 'next/image'
import overview1 from '@/images/overview/overview1.png'
import overview7 from '@/images/overview/overview7.png'
import data1 from '@/images/data/data1.png'
import data2 from '@/images/data/data2.png'
import data3 from '@/images/data/data3.png'
import data4 from '@/images/data/data4.png'

export function InsightsData({ handleSectionChange }) {
  return (
    <div className="bg-blue">
      <div>
        <div className="pb-2 font-ft-bold text-lg lg:text-xl">
          Insights Center: Filtering and Data
        </div>
        <div className="font-ft-reg text-lg lg:text-xl">
          Redesigning Insights Center posed a significant challenge in
          integrating a multitude of data, reports, and workflows, scattered
          across various platforms, into a cohesive and centralized interface.
          In order for us to design something that empowers users to filter
          through vast datasets and conduct in-depth explorations in the
          reports, we had to deeply understand the data we were working with.
        </div>

        <div className="flex flex-1">
          <div className="flex flex-col items-baseline py-4 lg:flex-row">
            <div className="baseline sticky top-4 pb-4 font-ft-bold text-xl lg:w-1/4">
              Initial Dive
            </div>
            <div className="flex flex-1 flex-col">
              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  Deconstructing the Data
                </div>

                <div className="py-2 font-ft-bold text-lg lg:text-xl">
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

                <div className="py-2 font-ft-bold text-lg lg:text-xl">
                  Seed turns into a (data) tree
                </div>
                <div className="pb-4 font-ikob-reg text-base">
                  As we became more familiar with financial data and the reports
                  we had to support, we started to see the data we should
                  prioritize first and how they are all connected. For an
                  example, we could trace something like PIN back to the other
                  attributes are connected to it (Plastic Card, Authentication,
                  etc.).
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
                  <div className="flex w-full self-center pb-6 lg:w-1/2">
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
          <div className="flex flex-col items-baseline py-4 lg:flex-row">
            <div className="baseline sticky top-4 pb-4 font-ft-bold text-xl lg:w-1/4">
              Data -&gt; Arch
            </div>
            <div className="flex flex-1 flex-col">
              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  Setting the Foundation
                </div>

                <div className="py-2 font-ft-bold text-lg lg:text-xl">
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

                <div className="py-2 font-ft-bold text-lg lg:text-xl">
                  Report filtering (v1) as the first layer
                </div>
                <div className="font-ikob-reg text-base">
                  In order to have a cohesive report, we made the choice of
                  having report wide filters available to the user, giving the
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

              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  Getting Granular
                </div>

                <div className="py-2 font-ft-bold text-lg lg:text-xl">
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
              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  Getting Granular (Even More)
                </div>

                <div className="py-2 font-ft-bold text-lg lg:text-xl">
                  Widget filtering as the drill-down
                </div>
                <div className="font-ikob-reg text-base">
                  We also introduced an operator filtering system for the
                  widgets, akin to the queries that many of the credit union
                  analysts are familiar with, enabling a powerful but intuitive
                  drill-down.
                </div>
              </div>
              <video
                src="https://res.cloudinary.com/dkso10gnx/video/upload/v1690924130/widget_filtering_zphc8h.mp4"
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
        {/* section 3 */}
        <div className="flex flex-1">
          <div className="flex flex-col items-baseline py-4 lg:flex-row">
            <div className="baseline sticky top-4 pb-4 font-ft-bold text-xl lg:w-1/4">
              Filtering v2
            </div>
            <div className="flex flex-1 flex-col">
              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  Data Refinement
                </div>

                <div className="py-2 font-ft-bold text-lg lg:text-xl">
                  As time passed, our understanding grew
                </div>
                <div className="font-ikob-reg text-base">
                  While we were designing, we were still digging into the data,
                  talking to users, and talking to our Co-op stakeholders,
                  through that we refined our data model which ultimately
                  changed the design of our report filters.
                </div>
              </div>
              <video
                src="https://res.cloudinary.com/dkso10gnx/video/upload/v1690924130/data_hierarchy_svxjeb.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="pb-6"
              />
              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  Influence on Design
                </div>

                <div className="py-2 font-ft-bold text-lg lg:text-xl">
                  Stratifying the data
                </div>
                <div className="font-ikob-reg text-base">
                  This exercise of stratifying the data not only helped us find
                  the connections between the attributes but also where they
                  break. This was critically important as it highlighted a flaw
                  in our interface, there was no indication on how filters
                  interacted with each other. While our hierarchy was clear from
                  a zoomed out view (report -&gt; report filters -&gt; widgets
                  -&gt; widget filters), the report filter design did not
                  adequately reflect the hierarchy of the data.
                </div>
              </div>
              <div className="flex w-full pb-6">
                <Image
                  src={data4}
                  alt="updated report filters"
                  loading="lazy"
                  className="w-full"
                />
              </div>

              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  New Filtering
                </div>

                <div className="py-2 font-ft-bold text-lg lg:text-xl">
                  Opinionated and Hierarchical
                </div>
                <div className="font-ikob-reg text-base">
                  Our new filtering system was more opinionated, with “rules”
                  that go from top down (like our overarching system) but also
                  left to right. <br />
                  <br />
                  It is clear how the transaction hierarchy influenced the
                  designs, as seen with the Activity Type as the first option,
                  which will change all the options below it.
                  <br />
                  <br />
                  We chose to remove dropdowns and showcase each filter element
                  so as they are toggled on and off, users can see if it altered
                  any options to the adjacent filters. For an example, if Debit
                  is selected, it will remove some networks and BINs that are to
                  the right of it as Mastercard does not offer debit and the
                  BINs associated with Mastercard will be removed.
                </div>
              </div>
              <video
                src="https://res.cloudinary.com/dkso10gnx/video/upload/v1690924130/report_filtering_v2_ehreia.mp4"
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
          <div className="flex flex-col items-baseline py-4 lg:flex-row">
            <div className="baseline sticky top-4 pb-4 font-ft-bold text-xl lg:w-1/4">
              Reflections
            </div>
            <div className="flex flex-1 flex-col">
              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  Always Learning
                </div>

                <div className="py-2 font-ft-bold text-lg lg:text-xl">
                  Continuous research and refinement is key
                </div>
                <div className="font-ikob-reg text-base">
                  I really appreciated the cycle of research, testing, and
                  refinement that we stuck by, even when it got difficult. We
                  didn’t wait around and we just kept making things, which
                  ultimately helped us get to a great design solution. We kept
                  learning but we didn’t just let the discoveries discourage us
                  because it invalidated a design, we kept it pushing.
                </div>
              </div>
              <div className="w-full flex-col self-center pb-6 font-ft-bold text-lg text-white lg:w-3/4 lg:text-xl">
                Next up, see how we partnered with an internal Co-op team to
                make a tailor made product within Insights Center: <br />
                <span
                  onClick={() => handleSectionChange('sg')}
                  className="cursor-pointer text-green hover:text-white"
                >
                  ”SmartGrowth”
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
