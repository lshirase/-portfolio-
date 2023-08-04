import Image from 'next/image'
import overview1 from '@/images/overview/overview1.png'
import overview7 from '@/images/overview/overview7.png'
import sg1 from '@/images/sg/sg1.png'
import sg2 from '@/images/sg/sg2.png'
import sg3 from '@/images/sg/sg3.png'

export function InsightsSg({ handleSectionChange }) {
  return (
    <div className="bg-blue">
      <div>
        <div className="pb-2 font-ft-bold text-lg md:text-xl">
          Insights Center: SmartGrowth
        </div>
        <div className="font-ft-reg text-lg md:text-xl">
          SmartGrowth are essentially an agency that works within Co-op to help
          their credit unions make sense of their credit and debit portfolios
          and make suggestions about different campaigns.
        </div>

        <div className="flex flex-1">
          <div className="flex flex-col items-baseline py-4 md:flex-row">
            <div className="baseline sticky top-4 pb-4 font-ft-bold text-xl md:w-1/4">
              The Challenge
            </div>
            <div className="flex flex-1 flex-col">
              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  High Level Review
                </div>

                <div className="py-2 font-ft-bold text-lg md:text-xl">
                  The SmartGrowth team routinely prepares High Level Review
                  reports that summarize and evaluate card program performance.
                </div>
                <div className="font-ikob-reg text-base">
                  This process takes 6 - 10 hours to complete which prevents
                  them from being able to service a large portion of Co-op
                  clients. Additionally, if clients are under 350M in asset size
                  (~70% of CUs) they currently cannot afford to engage with
                  SmartGrowth. Opening the door for those CU’s provides a huge
                  avenue of potential revenue.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full self-center pb-6">
          <Image
            src={sg1}
            alt="data hierarchy"
            loading="lazy"
            className="w-full"
          />
        </div>

        {/* section 2 */}
        <div className="flex flex-1">
          <div className="flex flex-col items-baseline py-4 md:flex-row">
            <div className="baseline sticky top-4 pb-4 font-ft-bold text-xl md:w-1/4">
              The Research
            </div>
            <div className="flex flex-1 flex-col">
              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  Research Approach
                </div>

                <div className="py-2 font-ft-bold text-lg md:text-xl">
                  Understanding the SmartGrowth team
                </div>
                <div className="font-ikob-reg text-base">
                  <ul className="list-inside list-disc space-y-1 pl-6">
                    <li>
                      We worked closely with SmartGrowth across multiple
                      sessions to better understand the functions of their role
                      and the systems they use in their day-to-day.
                    </li>
                    <li>
                      We conducted a workshop with SmartGrowth and other
                      Insights Center stakeholders to identify opportunities.
                    </li>
                    <li>
                      We reviewed key systems that are commonly utilized by the
                      SmartGrowth team.
                    </li>
                    <li>
                      We analyzed the High Level Reviews from 8 different credit
                      unions and broke them down into 107 unique pieces.
                    </li>
                    <li>
                      We ran a card sort to understand of how data is currently
                      grouped within High Level Reviews and how it should be
                      grouped in the eyes of SmartGrowth.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex w-full self-center pb-6">
                <Image
                  src={sg2}
                  alt="research overview"
                  loading="lazy"
                  className="w-full"
                />
              </div>
              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  Key Insights
                </div>

                <div className="py-2 font-ft-bold text-lg md:text-xl">
                  The High Level Review takes a Smart Growth Advisor between 6 -
                  10 hours to complete.
                </div>
                <div className="pb-4 font-ikob-reg text-base">
                  From collecting and cleaning up the data to making it into a
                  presentation, the creation of the High Level Review spans
                  multiple systems and is extremely time consuming.
                </div>

                <div className="py-2 font-ft-bold text-lg md:text-xl">
                  Time and cost prevents SmartGrowth from being able to service
                  a large portion of Co-op clients.
                </div>
                <div className="pb-4 font-ikob-reg text-base">
                  If clients are under 350M in asset size (~70% of CUs) they
                  currently cannot afford to engage with SmartGrowth.
                </div>
                <div className="py-2 font-ft-bold text-lg md:text-xl">
                  Data tables from tools like Alteryx are comprehensive, they
                  also include some less useful and less relevant details and
                  can obfuscate insights because they are not visual.
                </div>
                <div className="font-ikob-reg text-base">
                  The current output of the data table that powers the High
                  Level Review is not conducive to storytelling and relies on
                  the expertise of the SmartGrowth agent to string together a
                  narrative.
                </div>
              </div>
              <div className="flex w-full self-center pb-6">
                <Image
                  src={sg3}
                  alt="new design"
                  loading="lazy"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
        {/* section 3 */}
        <div className="flex flex-1">
          <div className="flex flex-col items-baseline py-4 md:flex-row">
            <div className="baseline sticky top-4 pb-4 font-ft-bold text-xl md:w-1/4">
              The Results
            </div>
            <div className="flex flex-1 flex-col">
              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  What We Made{' '}
                </div>

                <div className="py-2 font-ft-bold text-lg md:text-xl">
                  A streamlined High Level Review
                </div>
                <div className="font-ikob-reg text-base">
                  We created a wizard flow that captures the key inputs required
                  for a SmartGrowth agent to make a High Level Review in minutes
                  instead of hours. <br />
                  <br />
                  We standardized the format of the High Level Review to provide
                  a consistent experience to their clients across all
                  SmartGrowth agents. <br />
                  <br />
                  We decomposed and reorganized the data that powers the High
                  Level Review so it can be more easily digested by both the
                  SmartGrowth agent and the credit union clients.
                </div>
              </div>
              <video
                src="https://res.cloudinary.com/dkso10gnx/video/upload/v1690935317/HLR_wizard_jk7xmi.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="pb-6"
              />
              <div className="baseline font-ft-reg text-base">
                Primary Achievements
              </div>
              <div className="py-2 font-ft-bold text-lg md:text-xl">
                Multiple systems into one flow within Insights Center
              </div>
              <div className="pb-6 font-ikob-reg text-base">
                <ul className="list-inside list-disc space-y-1 pl-6">
                  <li>
                    A standardized High Level Review that takes minutes rather
                    than hours to create
                  </li>
                  <li>
                    A wizard flow that captures the key inputs of the High Level
                    Review quickly and effectively
                  </li>
                  <li>
                    A solution that consolidates a multi-system process into one
                  </li>
                  <li>
                    A restructured data table that helps facilitate the story of
                    the High Level Review
                  </li>
                  <li>
                    A potential pathway for small credit unions to engage with
                    SmartGrowth and vice versa
                  </li>
                </ul>
              </div>
              <div className="pb-6">
                <div className="baseline font-ft-reg text-base">
                  Stakeholder Feedback
                </div>

                <div className="py-2 font-ft-bold text-lg md:text-xl">
                  &quot;This is easily the best demo I’ve seen this month&quot;
                  <ul className="list-inside list-disc space-y-1 pl-6">
                    <li>Bruce Dragt, Chief Product Officer, Co-op Solutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
