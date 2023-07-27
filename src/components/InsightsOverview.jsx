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
        <div className="text-base">
          <h4 className="pb-2 font-ft-bold">About</h4>
          <div className="font-ikob-reg">
            For two-ish years, I was the primary design consultant (and
            secondary development consultant) for the redesign of
            <span className="font-ft-serif"> Insights Center</span>, a web-based
            reporting platform that helps credit unions understand their credit,
            debit, and ATM portfolios. I initially started the project as a
            designer but as the project grew, so did I! My domain expanded and
            my responsibilities started to look like a hybrid of a designer,
            developer, and a product manager. Thankful for my team and the
            client for giving me the space to go head first into this new world.
            I also worked on a couple other fun projects along the way like the
            <span className="font-ft-serif"> THINK 2023 </span>site and aiding
            in the development of
            <span className="font-ft-serif"> storybook components </span>
            for Springboard.
          </div>
        </div>
        <div className="flex flex-1">
          <div className="flex flex-col items-baseline md:flex-row">
            <div className="baseline font-ft-bold text-xl md:w-1/4">
              Problem Space
            </div>
            <div className="flex flex-1 flex-col">
              <div className="baseline font-ft-reg text-base">
                User Problems
              </div>

              <div className="font-ft-bold text-lg md:text-xl">
                The static reporting model rarely provides relevant information
                to the credit unions.
              </div>
              <div className="font-ikob-reg text-base">
                Each credit union is unique, and this is reflected in their
                individual perspectives on data. Our current reporting system
                falls short when it comes to catering to individual requirements
                and granular data exploration. The lack of customization fails
                to serve the needs of the diverse landscape of credit unions and
                their employees.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
