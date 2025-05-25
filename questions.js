// questions.js
const ALL_QUESTIONS = [
    {
        id: 1,
        text: "Who is accountable for the Product Backlog?",
        type: "mcq-single",
        options: [
            { text: "The Scrum Master", correct: false },
            { text: "The Product Owner", correct: true },
            { text: "The Developers", correct: false },
            { text: "The Stakeholders", correct: false }
        ],
        explanation: "The Product Owner is accountable for effective Product Backlog management, which includes developing and explicitly communicating the Product Goal; creating and clearly communicating Product Backlog items; ordering Product Backlog items; and ensuring that the Product Backlog is transparent, visible and understood. (Scrum Guide 2020)"
    },
    {
        id: 2,
        text: "What are the three pillars of empiricism in Scrum? (Select all that apply)",
        type: "mcq-multiple",
        options: [
            { text: "Planning", correct: false },
            { text: "Transparency", correct: true },
            { text: "Inspection", correct: true },
            { text: "Adaptation", correct: true },
            { text: "Execution", correct: false }
        ],
        explanation: "Scrum is founded on empiricism and lean thinking. Empiricism asserts that knowledge comes from experience and making decisions based on what is observed. The three pillars are Transparency, Inspection, and Adaptation. (Scrum Guide 2020)"
    },
    {
        id: 3,
        text: "The Sprint Goal is a commitment for the Increment.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "The Sprint Goal is the single objective for the Sprint and is a commitment by the Developers. The Definition of Done is the commitment for the Increment. The Product Goal is the commitment for the Product Backlog. (Scrum Guide 2020)"
    },
    {
        id: 4,
        text: "What is the maximum duration for a Sprint Review for a one-month Sprint?",
        type: "mcq-single",
        options: [
            { text: "2 hours", correct: false },
            { text: "3 hours", correct: false },
            { text: "4 hours", correct: true },
            { text: "8 hours", correct: false }
        ],
        explanation: "The Sprint Review is timeboxed to a maximum of four hours for a one-month Sprint. For shorter Sprints, the event is usually shorter. (Scrum Guide 2020)"
    },
    {
        id: 5,
        text: "Which of the following are Scrum Values? (Select all that apply)",
        type: "mcq-multiple",
        options: [
            { text: "Commitment", correct: true },
            { text: "Focus", correct: true },
            { text: "Openness", correct: true },
            { text: "Predictability", correct: false },
            { text: "Respect", correct: true },
            { text: "Courage", correct: true }
        ],
        explanation: "Successful use of Scrum depends on people becoming more proficient in living five values: Commitment, Focus, Openness, Respect, and Courage. (Scrum Guide 2020)"
    },
    {
        id: 6,
        text: "The Product Owner has the final say on the Sprint Backlog content.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "The Sprint Backlog is a plan by and for the Developers. While the Product Owner collaborates with the Developers on the Sprint Goal and helps clarify Product Backlog Items, the Developers select the work from the Product Backlog for the Sprint and create the plan to deliver it. (Scrum Guide 2020)"
    },
    {
        id: 7,
        text: "Who is responsible for managing the progress of work during a Sprint?",
        type: "mcq-single",
        options: [
            { text: "The Product Owner", correct: false },
            { text: "The Scrum Master", correct: false },
            { text: "The Developers", correct: true },
            { text: "The Project Manager", correct: false }
        ],
        explanation: "The Developers are always accountable for: Creating a plan for the Sprint, the Sprint Backlog; Instilling quality by adhering to a Definition of Done; Adapting their plan each day toward the Sprint Goal; and, Holding each other accountable as professionals. The Daily Scrum is for the Developers to inspect progress toward the Sprint Goal. (Scrum Guide 2020)"
    },
    {
        id: 8,
        text: "Which Scrum event is dedicated to process improvement?",
        type: "mcq-single",
        options: [
            { text: "Daily Scrum", correct: false },
            { text: "Sprint Review", correct: false },
            { text: "Sprint Retrospective", correct: true },
            { text: "Sprint Planning", correct: false }
        ],
        explanation: "The purpose of the Sprint Retrospective is to plan ways to increase quality and effectiveness. The Scrum Team inspects how the last Sprint went with regards to individuals, interactions, processes, tools, and their Definition of Done. (Scrum Guide 2020)"
    },
    {
        id: 9,
        text: "The Definition of Done is created by the Product Owner.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "If the Definition of Done for an increment is part of the standards of the organization, all Scrum Teams must follow it as a minimum. If it is not an organizational standard, the Scrum Team must create a Definition of Done appropriate for the product. The Developers are required to conform to the Definition of Done. (Scrum Guide 2020)"
    },
    {
        id: 10,
        text: "What does the Product Owner do during a Sprint? (Select all that apply)",
        type: "mcq-multiple",
        options: [
            { text: "Collaborates with stakeholders", correct: true },
            { text: "Clarifies Product Backlog items for the Developers", correct: true },
            { text: "Manages the Developers' tasks", correct: false },
            { text: "Works on the Product Backlog refinement", correct: true },
            { text: "Cancels the Sprint if the Sprint Goal becomes obsolete", correct: true }
        ],
        explanation: "During the Sprint, the Product Owner is available to answer questions from the Developers, collaborate with stakeholders, and refine the Product Backlog. They also have the authority to cancel a Sprint if the Sprint Goal becomes obsolete. Managing Developers' tasks is not a PO accountability. (Scrum Guide 2020)"
    },
    {
        id: 11,
        text: "The Scrum Team must consist of 1 Product Owner, 1 Scrum Master and 3 to 9 Developers.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "The Scrum Team consists of one Scrum Master, one Product Owner, and Developers. The Scrum Team is small enough to remain nimble and large enough to complete significant work within a Sprint, typically 10 or fewer people. The guide no longer prescribes a specific number of Developers. (Scrum Guide 2020)"
    },
    {
        id: 12,
        text: "What is the main purpose of the Sprint Goal?",
        type: "mcq-single",
        options: [
            { text: "To provide a detailed plan for the Sprint.", correct: false },
            { text: "To provide guidance to the Developers on why they are building the Increment.", correct: true },
            { text: "To list all Product Backlog Items selected for the Sprint.", correct: false },
            { text: "To be a contractual agreement with stakeholders.", correct: false }
        ],
        explanation: "The Sprint Goal is the single objective for the Sprint. It provides flexibility regarding the exact work needed to achieve it and creates coherence and focus, encouraging the Scrum Team to work together. It communicates why the Sprint is valuable to stakeholders. (Scrum Guide 2020)"
    },
    {
        id: 13,
        text: "Who can participate in the Daily Scrum?",
        type: "mcq-single",
        options: [
            { text: "Only Developers.", correct: false },
            { text: "Developers and the Scrum Master.", correct: false },
            { text: "Developers, Scrum Master, and Product Owner.", correct: false },
            { text: "The Daily Scrum is an event for the Developers of the Scrum Team. If the Product Owner or Scrum Master are actively working on items in the Sprint Backlog, they participate as Developers.", correct: true }
        ],
        explanation: "The Daily Scrum is a 15-minute event for the Developers of the Scrum Team. If the Product Owner or Scrum Master are actively working on items in the Sprint Backlog, they participate as Developers. Others can attend only if invited by the Scrum Team, and they do not participate. (Scrum Guide 2020)"
    },
    {
        id: 14,
        text: "A Product Backlog is never complete.",
        type: "true-false",
        options: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ],
        explanation: "The Product Backlog is an emergent, ordered list of what is needed to improve the product. It is dynamic and constantly evolves as the product and the understanding of it evolve. (Scrum Guide 2020)"
    },
    {
        id: 15,
        text: "Which activities are part of Product Backlog management? (Select all that apply)",
        type: "mcq-multiple",
        options: [
            { text: "Developing and explicitly communicating the Product Goal.", correct: true },
            { text: "Creating and clearly communicating Product Backlog items.", correct: true },
            { text: "Assigning tasks to Developers.", correct: false },
            { text: "Ordering Product Backlog items.", correct: true },
            { text: "Facilitating Scrum events.", correct: false }
        ],
        explanation: "The Product Owner is accountable for effective Product Backlog management, which includes: Developing and explicitly communicating the Product Goal; Creating and clearly communicating Product Backlog items; Ordering Product Backlog items; and, Ensuring that the Product Backlog is transparent, visible and understood. Assigning tasks is for Developers, facilitating events is a Scrum Master service. (Scrum Guide 2020)"
    },
    {
        id: 16,
        text: "The Product Owner is the only person who can add items to the Product Backlog.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "While the Product Owner is accountable for the Product Backlog, they may delegate the responsibility to others. However, the Product Owner remains accountable. Others can suggest items, and the Product Owner decides what makes it to the backlog and its order. (Scrum Guide 2020)"
    },
    {
        id: 17,
        text: "What is the timebox for the Sprint Planning event for a one-month Sprint?",
        type: "mcq-single",
        options: [
            { text: "4 hours", correct: false },
            { text: "6 hours", correct: false },
            { text: "8 hours", correct: true },
            { text: "No timebox", correct: false }
        ],
        explanation: "Sprint Planning is timeboxed to a maximum of eight hours for a one-month Sprint. For shorter Sprints, the event is usually shorter. (Scrum Guide 2020)"
    },
    {
        id: 18,
        text: "If the work turns out to be different than the Developers expected during Sprint Planning, they must work with the Product Owner to negotiate the scope of the Sprint Backlog within the Sprint without affecting the Sprint Goal.",
        type: "true-false",
        options: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ],
        explanation: "As the Developers work during the Sprint, they keep the Sprint Goal in mind. If the work turns out to be different than they expected, they collaborate with the Product Owner to negotiate the scope of the Sprint Backlog within the Sprint without affecting the Sprint Goal. (Scrum Guide 2020)"
    },
    {
        id: 19,
        text: "The Scrum Master serves the Product Owner in which of these ways? (Select all that apply)",
        type: "mcq-multiple",
        options: [
            { text: "Helping find techniques for effective Product Goal definition and Product Backlog management.", correct: true },
            { text: "Deciding which items to include in the Product Backlog.", correct: false },
            { text: "Helping the Scrum Team understand the need for clear and concise Product Backlog items.", correct: true },
            { text: "Facilitating stakeholder collaboration as requested or needed.", correct: true }
        ],
        explanation: "The Scrum Master serves the Product Owner by: Helping find techniques for effective Product Goal definition and Product Backlog management; Helping the Scrum Team understand the need for clear and concise Product Backlog items; Helping establish empirical product planning for a complex environment; and, Facilitating stakeholder collaboration as requested or needed. Deciding on PBIs is the PO's accountability. (Scrum Guide 2020)"
    },
    {
        id: 20,
        text: "An Increment must be released to end-users at the end of every Sprint.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "An Increment is a concrete stepping stone toward the Product Goal. Each Increment is additive to all prior Increments and thoroughly verified, ensuring that all Increments work together. In order to provide value, the Increment must be usable. An Increment may be delivered to stakeholders prior to the end of the Sprint. The Sprint Review should never be considered a gate to releasing value. The decision to release is up to the Product Owner. (Scrum Guide 2020)"
    },
    {
        id: 21,
        text: "What is the Product Goal?",
        type: "mcq-single",
        options: [
            { text: "A list of all features to be implemented in the next Sprint.", correct: false },
            { text: "The long-term objective for the Scrum Team, describing a future state of the product.", correct: true },
            { text: "A commitment by the Developers to deliver a usable Increment.", correct: false },
            { text: "The sum of all Product Backlog items.", correct: false }
        ],
        explanation: "The Product Goal describes a future state of the product which can serve as a target for the Scrum Team to plan against. The Product Goal is in the Product Backlog. The rest of the Product Backlog emerges to define “what” will fulfill the Product Goal. It is the long-term objective for the Scrum Team. (Scrum Guide 2020)"
    },
    {
        id: 22,
        text: "Who creates the Definition of Done if it's not an organizational standard?",
        type: "mcq-single",
        options: [
            { text: "The Product Owner", correct: false },
            { text: "The Scrum Master", correct: false },
            { text: "The Scrum Team", correct: true },
            { text: "The Stakeholders", correct: false }
        ],
        explanation: "If the Definition of Done for an increment is part of the standards of the organization, all Scrum Teams must follow it as a minimum. If it is not an organizational standard, the Scrum Team must create a Definition of Done appropriate for the product. (Scrum Guide 2020)"
    },
    {
        id: 23,
        text: "The Sprint Backlog is created during the Sprint Review.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "The Sprint Backlog is created during Sprint Planning. It is composed of the Sprint Goal (why), the set of Product Backlog items selected for the Sprint (what), as well as an actionable plan for delivering the Increment (how). (Scrum Guide 2020)"
    },
    {
        id: 24,
        text: "Multiple Increments can be created within a single Sprint.",
        type: "true-false",
        options: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ],
        explanation: "Multiple Increments may be created within a Sprint. The sum of the Increments is presented at the Sprint Review thus supporting empiricism. (Scrum Guide 2020)"
    },
    {
        id: 25,
        text: "What happens if the Developers determine they have too much work for the Sprint?",
        type: "mcq-single",
        options: [
            { text: "The Sprint is cancelled by the Scrum Master.", correct: false },
            { text: "The Developers work overtime to complete everything.", correct: false },
            { text: "The Developers collaborate with the Product Owner to re-negotiate the scope of the Sprint Backlog.", correct: true },
            { text: "The Product Owner adds more Developers to the team.", correct: false }
        ],
        explanation: "If the work turns out to be different than they expected, the Developers collaborate with the Product Owner to negotiate the scope of the Sprint Backlog within the Sprint without affecting the Sprint Goal. (Scrum Guide 2020)"
    },
    {
        id: 26,
        text: "The purpose of the Sprint Review is to: (Select all that apply)",
        type: "mcq-multiple",
        options: [
            { text: "Inspect the outcome of the Sprint.", correct: true },
            { text: "Determine future adaptations to the product.", correct: true },
            { text: "Formally approve the Increment for release.", correct: false },
            { text: "Provide a status report to stakeholders.", correct: false },
            { text: "Collaborate on what to do next.", correct: true}
        ],
        explanation: "The purpose of the Sprint Review is to inspect the outcome of the Sprint and determine future adaptations. The Scrum Team presents the results of their work to key stakeholders and progress toward the Product Goal is discussed. Attendees collaborate on what to do next. It's a working session, not just a demo or approval gate. (Scrum Guide 2020)"
    },
    {
        id: 27,
        text: "The Product Owner can be represented by a committee.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "The Product Owner is one person, not a committee. The Product Owner may represent the needs of many stakeholders in the Product Backlog. (Scrum Guide 2020)"
    },
    {
        id: 28,
        text: "What are the typical topics addressed in Sprint Planning? (Select all that apply)",
        type: "mcq-multiple",
        options: [
            { text: "Why is this Sprint valuable?", correct: true },
            { text: "What can be Done this Sprint?", correct: true },
            { text: "How will the chosen work get done?", correct: true },
            { text: "What went wrong in the last Sprint?", correct: false }
        ],
        explanation: "Sprint Planning addresses three topics: Topic One: Why is this Sprint valuable? Topic Two: What can be Done this Sprint? Topic Three: How will the chosen work get done? What went wrong is discussed in the Sprint Retrospective. (Scrum Guide 2020)"
    },
    {
        id: 29,
        text: "During the Daily Scrum, each Developer must answer three questions: What did I do yesterday? What will I do today? What impediments are in my way?",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "The Scrum Guide 2020 removed the prescription of these three questions. The Developers can select whatever structure and techniques they want, as long as their Daily Scrum focuses on progress toward the Sprint Goal and produces an actionable plan for the next day of work. (Scrum Guide 2020)"
    },
    {
        id: 30,
        text: "Who is accountable for the Scrum Team's effectiveness?",
        type: "mcq-single",
        options: [
            { text: "The Product Owner", correct: false },
            { text: "The Scrum Master", correct: true },
            { text: "The Developers", correct: false },
            { text: "The entire Scrum Team", correct: false } // Tricky, but SM is accountable for *enabling* effectiveness
        ],
        explanation: "The Scrum Master is accountable for the Scrum Team's effectiveness. They do this by enabling the Scrum Team to improve its practices, within the Scrum framework. (Scrum Guide 2020)"
    },
    {
        id: 31,
        text: "The Scrum framework is intentionally incomplete.",
        type: "true-false",
        options: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ],
        explanation: "The Scrum framework is purposefully incomplete, only defining the parts required to implement Scrum theory. Scrum is built upon by the collective intelligence of the people using it. (Scrum Guide 2020)"
    },
    {
        id: 32,
        text: "Which artifact contains a commitment to the Definition of Done?",
        type: "mcq-single",
        options: [
            { text: "Product Backlog", correct: false },
            { text: "Sprint Backlog", correct: false },
            { text: "Increment", correct: true },
            { text: "Product Goal", correct: false }
        ],
        explanation: "Each artifact contains a commitment: For the Product Backlog it is the Product Goal. For the Sprint Backlog it is the Sprint Goal. For the Increment it is the Definition of Done. (Scrum Guide 2020)"
    },
    {
        id: 33,
        text: "The Product Owner must attend the Daily Scrum.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "The Daily Scrum is an event for the Developers of the Scrum Team. If the Product Owner or Scrum Master are actively working on items in the Sprint Backlog, they participate as Developers. Otherwise, their attendance is optional and they would not participate unless invited to observe. (Scrum Guide 2020)"
    },
    {
        id: 34,
        text: "Product Backlog refinement should take no more than 10% of the Developers' capacity.",
        type: "true-false",
        options: [
            { text: "True", correct: false }, // This was a guideline in older guides, now removed
            { text: "False", correct: true }
        ],
        explanation: "The Scrum Guide 2020 does not prescribe a specific time-box for Product Backlog refinement. It is an ongoing activity to add details, such as a description, order, and size. Attributes often vary with the domain of work. The Scrum Team decides how and when refinement is done. (Scrum Guide 2020)"
    },
    {
        id: 35,
        text: "Who is responsible for creating a valuable, useful Increment every Sprint?",
        type: "mcq-single",
        options: [
            { text: "The Product Owner", correct: false },
            { text: "The Developers", correct: false },
            { text: "The Scrum Master", correct: false },
            { text: "The entire Scrum Team", correct: true }
        ],
        explanation: "The entire Scrum Team is accountable for creating a valuable, useful Increment every Sprint. (Scrum Guide 2020)"
    },
    {
        id: 36,
        text: "The Scrum Team should be 10 or fewer people.",
        type: "true-false",
        options: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ],
        explanation: "The Scrum Team is small enough to remain nimble and large enough to complete significant work within a Sprint, typically 10 or fewer people. (Scrum Guide 2020)"
    },
    {
        id: 37,
        text: "Which of these are Developers accountable for? (Select all that apply)",
        type: "mcq-multiple",
        options: [
            { text: "Creating a plan for the Sprint, the Sprint Backlog.", correct: true },
            { text: "Instilling quality by adhering to a Definition of Done.", correct: true },
            { text: "Maximizing the value of the product.", correct: false },
            { text: "Adapting their plan each day toward the Sprint Goal.", correct: true },
            { text: "Coaching the organization in Scrum adoption.", correct: false }
        ],
        explanation: "Developers are always accountable for: Creating a plan for the Sprint, the Sprint Backlog; Instilling quality by adhering to a Definition of Done; Adapting their plan each day toward the Sprint Goal; and, Holding each other accountable as professionals. Maximizing value is PO's accountability, coaching the org is SM's. (Scrum Guide 2020)"
    },
    {
        id: 38,
        text: "The Sprint Retrospective is the event where the Scrum Team and stakeholders inspect the Increment.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "The Sprint Review is the event where the Scrum Team and stakeholders inspect the Increment and adapt the Product Backlog. The Sprint Retrospective is for the Scrum Team to inspect itself and create a plan for improvements to be enacted during the next Sprint. (Scrum Guide 2020)"
    },
    {
        id: 39,
        text: "If multiple Scrum Teams work on the same product, how many Product Backlogs and Product Owners should there be?",
        type: "mcq-single",
        options: [
            { text: "One Product Backlog and multiple Product Owners.", correct: false },
            { text: "Multiple Product Backlogs and one Product Owner.", correct: false },
            { text: "One Product Backlog and one Product Owner.", correct: true },
            { text: "Multiple Product Backlogs and multiple Product Owners.", correct: false }
        ],
        explanation: "When multiple Scrum Teams work together on the same product, they should share the same Product Goal, Product Backlog, and Product Owner. (Scrum Guide 2020)"
    },
    {
        id: 40,
        text: "Changing the core design or ideas of Scrum, or leaving out elements, is acceptable if it improves productivity.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "Changing the core design or ideas of Scrum, leaving out elements, or not following the rules of Scrum, covers up problems and limits the benefits of Scrum, potentially even rendering it useless. (Scrum Guide 2020 - Purpose of the Scrum Guide section)"
    },
    {
        id: 41,
        text: "The Product Owner is responsible for ensuring that all Scrum events take place and are positive, productive, and kept within the timebox.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "This is one of the ways the Scrum Master serves the Scrum Team. (Scrum Guide 2020)"
    },
    {
        id: 42,
        text: "The Product Backlog must contain detailed specifications for all items before they can be selected for a Sprint.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "Product Backlog items that can be Done by the Scrum Team within one Sprint are deemed ready for selection in a Sprint Planning event. They usually acquire this degree of transparency after refining activities. Refinement is an ongoing activity; items gain more detail as they get closer to being implemented. (Scrum Guide 2020)"
    },
    {
        id: 43,
        text: "Scrum is a methodology for building products.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "Scrum is a lightweight framework that helps people, teams and organizations generate value through adaptive solutions for complex problems. It is not a process, technique, or definitive method. (Scrum Guide 2020)"
    },
    {
        id: 44,
        text: "The Sprint Goal can be changed by the Product Owner during the Sprint if market conditions change.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "During the Sprint: No changes are made that would endanger the Sprint Goal. If the Sprint Goal becomes obsolete, the Sprint would be cancelled. (Scrum Guide 2020)"
    },
    {
        id: 45,
        text: "Who is accountable for ordering the items in the Product Backlog?",
        type: "mcq-single",
        options: [
            { text: "The Developers, because they know the technical dependencies.", correct: false },
            { text: "The Scrum Master, to ensure adherence to Scrum.", correct: false },
            { text: "The Product Owner.", correct: true },
            { text: "The stakeholders, based on their priorities.", correct: false }
        ],
        explanation: "The Product Owner is accountable for effective Product Backlog management, which includes ordering Product Backlog items. They may be influenced by others, but the accountability rests with the PO. (Scrum Guide 2020)"
    },
    {
        id: 46,
        text: "The Scrum Master must be present at all Scrum events.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "The Scrum Master ensures that all Scrum events take place and are positive, productive, and kept within the timebox. This doesn't mean they must physically attend every single one (e.g., Daily Scrum is for Developers), but they are accountable for them occurring as prescribed. (Scrum Guide 2020)"
    },
    {
        id: 47,
        text: "The Sprint Backlog is a subset of the Product Backlog items selected for the Sprint, plus a plan for delivering the Increment and realizing the Sprint Goal.",
        type: "true-false",
        options: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ],
        explanation: "The Sprint Backlog is composed of the Sprint Goal (why), the set of Product Backlog items selected for the Sprint (what), as well as an actionable plan for delivering the Increment (how). (Scrum Guide 2020)"
    },
    {
        id: 48,
        text: "How does the Product Owner contribute to the Daily Scrum?",
        type: "mcq-single",
        options: [
            { text: "By leading the meeting and asking Developers for status updates.", correct: false },
            { text: "By providing new requirements to the Developers.", correct: false },
            { text: "If participating as a Developer (working on Sprint Backlog items), they share their progress and plans.", correct: true },
            { text: "By answering questions the Developers have about the Product Backlog items during the event.", correct: false } // This is fine outside, but Daily Scrum is for Developers to plan their day
        ],
        explanation: "The Daily Scrum is for the Developers. If the Product Owner is actively working on items in the Sprint Backlog, they participate as a Developer. Otherwise, they should not intervene unless invited to observe. Clarifying PBIs can happen throughout the Sprint, not specifically *during* the Daily Scrum by the PO unless they are participating as a Developer. (Scrum Guide 2020)"
    },
    {
        id: 49,
        text: "What is the primary focus of the Scrum Values?",
        type: "mcq-single",
        options: [
            { text: "To ensure the Product Owner has maximum authority.", correct: false },
            { text: "To guide the Scrum Team's work, actions, and behavior to build trust.", correct: true },
            { text: "To provide a strict set of rules for process execution.", correct: false },
            { text: "To help stakeholders track the team's performance.", correct: false }
        ],
        explanation: "These values give direction to the Scrum Team with regard to their work, actions, and behavior. When these values are embodied by the Scrum Team and the people they work with, the empirical Scrum pillars of transparency, inspection, and adaptation come to life building trust. (Scrum Guide 2020)"
    },
    {
        id: 50,
        text: "If an item in the Sprint Backlog cannot be finished by the end of the Sprint, it is moved to the next Sprint's Sprint Backlog automatically.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "If a Product Backlog item does not meet the Definition of Done, it cannot be released or even presented at the Sprint Review. Instead, it returns to the Product Backlog for future consideration and re-prioritization by the Product Owner. It is not automatically moved to the next Sprint. (Scrum Guide 2020)"
    },
    {
        id: 51,
        text: "What is the primary responsibility of the Scrum Master in relation to the Daily Scrum?",
        type: "mcq-single",
        options: [
            { text: "To lead the Daily Scrum and assign tasks to Developers.", correct: false },
            { text: "To ensure the Developers have the Daily Scrum.", correct: true },
            { text: "To collect status updates for stakeholders.", correct: false },
            { text: "To update the Sprint Burndown chart during the Daily Scrum.", correct: false }
        ],
        explanation: "The Scrum Master ensures that the Developers have the event, but the Developers are responsible for conducting the Daily Scrum. The Scrum Master teaches them to keep the Daily Scrum within the 15-minute timebox and does not lead it. (Scrum Guide 2020)"
    },
    {
        id: 52,
        text: "Which of the following best describes the Sprint Goal's relationship to the Sprint Backlog?",
        type: "mcq-single",
        options: [
            { text: "The Sprint Goal is a summary of all items in the Sprint Backlog.", correct: false },
            { text: "The Sprint Backlog is a plan to achieve the Sprint Goal.", correct: true },
            { text: "The Sprint Goal and Sprint Backlog are independent artifacts.", correct: false },
            { text: "The Sprint Goal is created after the Sprint Backlog is finalized.", correct: false }
        ],
        explanation: "The Sprint Backlog is composed of the Sprint Goal (why), the set of Product Backlog items selected for the Sprint (what), as well as an actionable plan for delivering the Increment (how). The Sprint Goal provides the objective that the Sprint Backlog aims to achieve. (Scrum Guide 2020)"
    },
    {
        id: 53,
        text: "Product Backlog refinement is an official Scrum Event.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "Product Backlog refinement is an ongoing activity, not a formal Scrum Event. The Scrum Guide describes five formal events: The Sprint, Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective. (Scrum Guide 2020)"
    },
    {
        id: 54,
        text: "Who is responsible for the Definition of Done if multiple Scrum Teams are working on the same product?",
        type: "mcq-single",
        options: [
            { text: "Each Scrum Team creates its own independent Definition of Done.", correct: false },
            { text: "The Product Owner defines it for all teams.", correct: false },
            { text: "The Scrum Teams must mutually define and comply with the same Definition of Done.", correct: true },
            { text: "The organization's management provides the Definition of Done.", correct: false }
        ],
        explanation: "If there are multiple Scrum Teams working together on a product, they must mutually define and comply with the same Definition of Done. (Scrum Guide 2020)"
    },
    {
        id: 55,
        text: "What are some key characteristics of a good Product Backlog Item (PBI)? (Select all that apply)",
        type: "mcq-multiple",
        options: [
            { text: "It must be completable within one day.", correct: false },
            { text: "It should have a description, order, and size.", correct: true },
            { text: "It represents a commitment to implement a specific solution.", correct: false },
            { text: "It provides enough detail for the Scrum Team to select it for a Sprint.", correct: true },
            { text: "It is solely defined by the Product Owner without input from others.", correct: false }
        ],
        explanation: "Product Backlog items have attributes like description, order, and size. Refinement adds these details. Items ready for a Sprint are transparent enough. A PBI is about 'what' is needed, not a commitment to a specific 'how'. The PO is accountable, but refinement is a collaborative activity. (Scrum Guide 2020)"
    },
    {
        id: 56,
        text: "The Product Owner must use specific tools or techniques (e.g., User Stories, MoSCoW) for Product Backlog management.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "Scrum is a framework and does not prescribe specific tools or techniques. While User Stories or MoSCoW can be helpful, their use is not mandatory. The Product Owner is accountable for effective Product Backlog management, and how this is done may vary. (Scrum Guide 2020)"
    },
    {
        id: 57,
        text: "What happens to the Sprint Goal if the Sprint is cancelled?",
        type: "mcq-single",
        options: [
            { text: "The Sprint Goal is carried over to the next Sprint.", correct: false },
            { text: "The Sprint Goal becomes obsolete along with the Sprint.", correct: true },
            { text: "The Developers try to achieve a partial Sprint Goal.", correct: false },
            { text: "The Scrum Master decides the fate of the Sprint Goal.", correct: false }
        ],
        explanation: "A Sprint could be cancelled if the Sprint Goal becomes obsolete. When a Sprint is cancelled, any completed and 'Done' Product Backlog items are reviewed. All incomplete Product Backlog Items are re-estimated and put back on the Product Backlog. The Sprint Goal is tied to the Sprint itself. (Scrum Guide 2020)"
    },
    {
        id: 58,
        text: "The Scrum Guide 2020 uses the term 'Developers' to be inclusive of anyone doing the work of creating an Increment, regardless of their specific job title.",
        type: "true-false",
        options: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ],
        explanation: "The Scrum Guide 2020 states: 'We use the word “developers” in Scrum not to exclude, but to simplify. If you get value from Scrum, consider yourself included.' This includes researchers, analysts, scientists, and other specialists. (Scrum Guide 2020 - Purpose of the Scrum Guide section)"
    },
    {
        id: 59,
        text: "Which statement about the Product Goal is correct?",
        type: "mcq-single",
        options: [
            { text: "The Product Goal is set by the stakeholders.", correct: false },
            { text: "The Product Goal is the Scrum Team's current Sprint objective.", correct: false },
            { text: "The Product Goal is a long-term objective for the Scrum Team, found in the Product Backlog.", correct: true },
            { text: "There can be multiple active Product Goals for a single Product Backlog.", correct: false }
        ],
        explanation: "The Product Goal is the long-term objective for the Scrum Team. They must fulfill (or abandon) one objective before taking on the next. It is in the Product Backlog. The Sprint Goal is the objective for the Sprint. (Scrum Guide 2020)"
    },
    {
        id: 60,
        text: "The Product Owner is solely responsible for estimating the effort of Product Backlog Items.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "The Developers who will be doing the work are responsible for the sizing (estimation). The Product Owner may influence the Developers by helping them understand and select trade-offs. (Scrum Guide 2020)"
    },
    {
        id: 61,
        text: "During a Sprint, if the Developers realize they cannot complete all selected Product Backlog Items, what is the most appropriate first action?",
        type: "mcq-single",
        options: [
            { text: "Extend the Sprint duration.", correct: false },
            { text: "Work overtime to finish everything.", correct: false },
            { text: "Collaborate with the Product Owner to re-negotiate the scope of the Sprint Backlog.", correct: true },
            { text: "Ask the Scrum Master to remove items.", correct: false }
        ],
        explanation: "Scope may be clarified and renegotiated with the Product Owner as more is learned. If the work turns out to be different than expected, the Developers collaborate with the Product Owner to negotiate the scope of the Sprint Backlog within the Sprint without affecting the Sprint Goal. (Scrum Guide 2020)"
    },
    {
        id: 62,
        text: "What is the purpose of the 'Definition of Done'? (Select all that apply)",
        type: "mcq-multiple",
        options: [
            { text: "To ensure everyone on the Scrum Team understands what it means for work to be complete.", correct: true },
            { text: "To list all acceptance criteria for every Product Backlog Item.", correct: false },
            { text: "To create transparency regarding the state of the Increment.", correct: true },
            { text: "To define the end date of the Sprint.", correct: false },
            { text: "To ensure the Increment is usable.", correct: true }
        ],
        explanation: "The Definition of Done is a formal description of the state of the Increment when it meets the quality measures required for the product. It creates transparency by providing a shared understanding of what work was completed. The Increment must be usable. Acceptance criteria are specific to PBIs. (Scrum Guide 2020)"
    },
    {
        id: 63,
        text: "The Sprint Review is primarily a demonstration of the Increment to stakeholders.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "The Sprint Review is a working session, not just a demonstration. The Scrum Team presents the results of their work to key stakeholders and progress toward the Product Goal is discussed. Attendees collaborate on what to do next and the Product Backlog may be adjusted. (Scrum Guide 2020)"
    },
    {
        id: 64,
        text: "How does Scrum deal with complexity?",
        type: "mcq-single",
        options: [
            { text: "By having a detailed upfront plan for the entire project.", correct: false },
            { text: "By using an iterative, incremental approach to optimize predictability and control risk.", correct: true },
            { text: "By assigning a project manager to control all variables.", correct: false },
            { text: "By eliminating all changes once a Sprint begins.", correct: false }
        ],
        explanation: "Scrum employs an iterative, incremental approach to optimize predictability and to control risk. This allows for adaptation based on learning in complex environments. (Scrum Guide 2020)"
    },
    {
        id: 65,
        text: "Who facilitates the Sprint Retrospective?",
        type: "mcq-single",
        options: [
            { text: "The Product Owner", correct: false },
            { text: "The Scrum Master, as requested or needed.", correct: true }, // Scrum Master ensures it happens and is effective. Facilitation is a service.
            { text: "A designated Developer.", correct: false },
            { text: "An external Agile Coach.", correct: false }
        ],
        explanation: "The Scrum Master is accountable for the Scrum Team's effectiveness, which includes ensuring that the Sprint Retrospective occurs and is positive and productive. They may facilitate it if it helps the team. (Scrum Guide 2020)"
    },
    {
        id: 66,
        text: "It is mandatory for the Product Owner to approve the Increment at the Sprint Review before it can be released.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "The Sprint Review is not a gate for releasing value. An Increment may be delivered to stakeholders prior to the end of the Sprint. The decision to release any Increment is made by the Product Owner. (Scrum Guide 2020)"
    },
    {
        id: 67,
        text: "What is the maximum length of a Sprint?",
        type: "mcq-single",
        options: [
            { text: "Two weeks.", correct: false },
            { text: "One calendar month.", correct: true },
            { text: "Six weeks.", correct: false },
            { text: "It depends on the size of the Scrum Team.", correct: false }
        ],
        explanation: "Sprints are fixed length events of one month or less to create consistency. (Scrum Guide 2020)"
    },
    {
        id: 68,
        text: "If the Product Owner is unavailable during a Sprint, the Scrum Master can make decisions about the Product Backlog on their behalf.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "The Product Owner is solely accountable for Product Backlog management. While they can delegate work, accountability remains. If the PO is unavailable, this is an impediment the Scrum Master should help address, but not by taking over PO accountabilities. (Scrum Guide 2020)"
    },
    {
        id: 69,
        text: "What does 'transparency' mean in the context of Scrum artifacts? (Select all that apply)",
        type: "mcq-multiple",
        options: [
            { text: "All stakeholders have direct access to modify the artifacts.", correct: false },
            { text: "The artifacts and their state are visible to those performing the work and those receiving the work.", correct: true },
            { text: "The artifacts have a common, shared understanding by all involved.", correct: true },
            { text: "The artifacts are kept in a secure, access-controlled system.", correct: false }
        ],
        explanation: "Transparency means the emergent process and work must be visible. Important decisions are based on the perceived state of its three formal artifacts. Artifacts that have low transparency can lead to decisions that diminish value and increase risk. (Scrum Guide 2020)"
    },
    {
        id: 70,
        text: "The Scrum Team should strive to have all the skills necessary to create a valuable, usable Increment each Sprint.",
        type: "true-false",
        options: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ],
        explanation: "Scrum Teams are cross-functional, meaning the members have all the skills necessary to create value each Sprint. (Scrum Guide 2020)"
    },
    {
        id: 71,
        text: "Which commitment is tied to the Sprint Backlog?",
        type: "mcq-single",
        options: [
            { text: "The Product Goal", correct: false },
            { text: "The Definition of Done", correct: false },
            { text: "The Sprint Goal", correct: true },
            { text: "The Release Plan", correct: false }
        ],
        explanation: "Each artifact contains a commitment: For the Product Backlog it is the Product Goal. For the Sprint Backlog it is the Sprint Goal. For the Increment it is the Definition of Done. (Scrum Guide 2020)"
    },
    {
        id: 72,
        text: "The Developers can change the Sprint Backlog during the Sprint if they discover more work is needed to achieve the Sprint Goal.",
        type: "true-false",
        options: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ],
        explanation: "The Sprint Backlog is a plan by and for the Developers. It is a highly visible, real-time picture of the work that the Developers plan to accomplish during the Sprint in order to achieve the Sprint Goal. Consequently, the Sprint Backlog is updated throughout the Sprint as more is learned. (Scrum Guide 2020)"
    },
    {
        id: 73,
        text: "What is the Scrum Master's role regarding impediments?",
        type: "mcq-single",
        options: [
            { text: "To personally remove all impediments for the Scrum Team.", correct: false },
            { text: "To assign impediments to specific team members to resolve.", correct: false },
            { text: "To cause the removal of impediments to the Scrum Team's progress.", correct: true },
            { text: "To escalate all impediments to management immediately.", correct: false }
        ],
        explanation: "The Scrum Master serves the Scrum Team by... causing the removal of impediments to the Scrum Team's progress. This may involve coaching the team to remove them, or removing them personally if appropriate, or enlisting help. (Scrum Guide 2020)"
    },
    {
        id: 74,
        text: "The primary measure of progress in Scrum is:",
        type: "mcq-single",
        options: [
            { text: "Percentage of tasks completed from the Sprint Backlog.", correct: false },
            { text: "Adherence to the initial Sprint plan.", correct: false },
            { text: "The delivery of a valuable, usable Increment.", correct: true },
            { text: "Velocity of the Scrum Team.", correct: false }
        ],
        explanation: "Scrum’s empirical nature focuses on delivering value. The Increment is a concrete stepping stone toward the Product Goal. The focus is on the value delivered, not just tasks completed or velocity. (Implicit in Scrum Guide)"
    },
    {
        id: 75,
        text: "Who can make changes to the Product Backlog?",
        type: "mcq-single",
        options: [
            { text: "Only the Product Owner.", correct: false },
            { text: "The Product Owner, or others to whom the Product Owner has delegated the work.", correct: true },
            { text: "Any member of the Scrum Team.", correct: false },
            { text: "Key stakeholders after approval from the Product Owner.", correct: false }
        ],
        explanation: "The Product Owner is accountable for the Product Backlog. The Product Owner may do the work of Product Backlog management or may delegate the responsibility to others. Regardless, the Product Owner remains accountable. (Scrum Guide 2020)"
    },
    {
        id: 76,
        text: "According to the Scrum Guide, what is the typical size of a Scrum Team?",
        type: "mcq-single",
        options: [
            { text: "3 to 9 members, excluding Scrum Master and Product Owner.", correct: false },
            { text: "Typically 10 or fewer people.", correct: true },
            { text: "5 to 11 members, including the Product Owner.", correct: false },
            { text: "At least 7 members to ensure cross-functionality.", correct: false }
        ],
        explanation: "The Scrum Team is small enough to remain nimble and large enough to complete significant work within a Sprint, typically 10 or fewer people. (Scrum Guide 2020, Scrum Team section)"
    },
    {
        id: 77,
        text: "Who is accountable for creating and clearly communicating Product Backlog items?",
        type: "mcq-single",
        options: [
            { text: "The Developers", correct: false },
            { text: "The Scrum Master", correct: false },
            { text: "The Product Owner", correct: true },
            { text: "The Stakeholders", correct: false }
        ],
        explanation: "The Product Owner is also accountable for effective Product Backlog management, which includes: Creating and clearly communicating Product Backlog items. (Scrum Guide 2020, Product Owner section)"
    },
    {
        id: 78,
        text: "The Scrum framework is immutable. This means:",
        type: "mcq-single",
        options: [
            { text: "No new practices can be added to how a team uses Scrum.", correct: false },
            { text: "The core definition of Scrum, its roles, events, and artifacts, cannot be changed while still calling it Scrum.", correct: true },
            { text: "The Scrum Guide will never be updated again.", correct: false },
            { text: "Only Ken Schwaber and Jeff Sutherland can authorize changes to a team's Scrum implementation.", correct: false }
        ],
        explanation: "While implementing only parts of Scrum is possible, the result is not Scrum. Scrum exists only in its entirety and functions well as a container for other techniques, methodologies, and practices. The Scrum framework, as outlined herein, is immutable. (Scrum Guide 2020, End Note section)"
    },
    {
        id: 79,
        text: "The purpose of the Daily Scrum is to: (Select all that apply)",
        type: "mcq-multiple",
        options: [
            { text: "Inspect progress toward the Sprint Goal.", correct: true },
            { text: "Provide a status update to the Product Owner and Scrum Master.", correct: false },
            { text: "Adapt the Sprint Backlog as necessary.", correct: true },
            { text: "Solve all identified impediments during the 15-minute event.", correct: false },
            { text: "Adjust the upcoming planned work.", correct: true }
        ],
        explanation: "The purpose of the Daily Scrum is to inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary, adjusting the upcoming planned work. It is an event for the Developers. (Scrum Guide 2020, Daily Scrum section)"
    },
    {
        id: 80,
        text: "An Increment is a concrete stepping stone toward the Product Goal.",
        type: "true-false",
        options: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ],
        explanation: "An Increment is a concrete stepping stone toward the Product Goal. Each Increment is additive to all prior Increments and thoroughly verified, ensuring that all Increments work together. (Scrum Guide 2020, Increment section)"
    },
    {
        id: 81,
        text: "What is the Scrum Master's accountability regarding the Product Backlog?",
        type: "mcq-single",
        options: [
            { text: "To write all Product Backlog Items.", correct: false },
            { text: "To prioritize the Product Backlog Items.", correct: false },
            { text: "Helping find techniques for effective Product Backlog management.", correct: true },
            { text: "To approve Product Backlog Items before they are added.", correct: false }
        ],
        explanation: "The Scrum Master serves the Product Owner in several ways, including: Helping find techniques for effective Product Goal definition and Product Backlog management. (Scrum Guide 2020, Scrum Master section)"
    },
    {
        id: 82,
        text: "If a Product Backlog item does not meet the Definition of Done at the end of a Sprint, what happens to it?",
        type: "mcq-single",
        options: [
            { text: "It is automatically carried over to the next Sprint.", correct: false },
            { text: "It is discarded and removed permanently.", correct: false },
            { text: "It returns to the Product Backlog for future consideration.", correct: true },
            { text: "It is presented at the Sprint Review, and stakeholders decide its fate.", correct: false }
        ],
        explanation: "If a Product Backlog item does not meet the Definition of Done, it cannot be released or even presented at the Sprint Review. Instead, it returns to the Product Backlog for future consideration. (Scrum Guide 2020, Commitment: Definition of Done section)"
    },
    {
        id: 83,
        text: "The Scrum Team must use user stories to represent Product Backlog Items.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "The Scrum Guide does not mandate the use of user stories. Product Backlog items represent what is needed to improve the product; their format can vary. User stories are a common practice but not a rule of Scrum. (Scrum Guide 2020, Product Backlog section)"
    },
    {
        id: 84,
        text: "Which Scrum Value encourages team members to be truthful about their progress and any challenges they face?",
        type: "mcq-single",
        options: [
            { text: "Commitment", correct: false },
            { text: "Focus", correct: false },
            { text: "Openness", correct: true },
            { text: "Respect", correct: false },
            { text: "Courage", correct: false }
        ],
        explanation: "The Scrum Team and its stakeholders are open about the work and the challenges. (Scrum Guide 2020, Scrum Values section)"
    },
    {
        id: 85,
        text: "Who is responsible for adapting the plan each day toward the Sprint Goal?",
        type: "mcq-single",
        options: [
            { text: "The Product Owner", correct: false },
            { text: "The Scrum Master", correct: false },
            { text: "The Developers", correct: true },
            { text: "The entire Scrum Team", correct: false }
        ],
        explanation: "The Developers are always accountable for: Adapting their plan each day toward the Sprint Goal. This is typically done during the Daily Scrum. (Scrum Guide 2020, Developers section)"
    },
    {
        id: 86,
        text: "The Product Goal is a commitment associated with which Scrum Artifact?",
        type: "mcq-single",
        options: [
            { text: "The Increment", correct: false },
            { text: "The Sprint Backlog", correct: false },
            { text: "The Product Backlog", correct: true },
            { text: "The Definition of Done", correct: false }
        ],
        explanation: "Each artifact contains a commitment... For the Product Backlog it is the Product Goal. (Scrum Guide 2020, Scrum Artifacts section)"
    },
    {
        id: 87,
        text: "During Sprint Planning, the Product Owner must come with all Product Backlog Items fully refined and estimated.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "The Product Owner ensures that attendees are prepared to discuss the most important Product Backlog items and how they map to the Product Goal. Product Backlog items that can be Done by the Scrum Team within one Sprint are deemed ready for selection. Refinement is an ongoing activity. (Scrum Guide 2020, Sprint Planning section)"
    },
    {
        id: 88,
        text: "What is the main focus for the Scrum Team during the Sprint?",
        type: "mcq-single",
        options: [
            { text: "Completing all tasks listed by the Product Owner.", correct: false },
            { text: "Achieving the Sprint Goal.", correct: true },
            { text: "Following the plan made during Sprint Planning without deviation.", correct: false },
            { text: "Keeping the Scrum Master informed of daily progress.", correct: false }
        ],
        explanation: "The Sprint Goal is the single objective for the Sprint. As the Developers work during the Sprint, they keep the Sprint Goal in mind. (Scrum Guide 2020, Commitment: Sprint Goal section)"
    },
    {
        id: 89,
        text: "Which of the following are true about the Scrum Master? (Select all that apply)",
        type: "mcq-multiple",
        options: [
            { text: "They are accountable for the Scrum Team's effectiveness.", correct: true },
            { text: "They manage the Developers' daily work.", correct: false },
            { text: "They help remove impediments to the Scrum Team's progress.", correct: true },
            { text: "They are accountable for maximizing the value of the product.", correct: false },
            { text: "They help everyone understand Scrum theory and practice.", correct: true }
        ],
        explanation: "The Scrum Master is accountable for establishing Scrum as defined in the Scrum Guide. They are accountable for the Scrum Team's effectiveness by enabling the Scrum Team to improve its practices. They cause the removal of impediments. (Scrum Guide 2020, Scrum Master section)"
    },
    {
        id: 90,
        text: "The Definition of Done can be updated or revised during a Sprint Retrospective.",
        type: "true-false",
        options: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ],
        explanation: "The Scrum Team inspects how the last Sprint went with regards to individuals, interactions, processes, tools, and their Definition of Done. The most impactful improvements are addressed as soon as possible. This can include adapting the Definition of Done. (Scrum Guide 2020, Sprint Retrospective section)"
    },
    {
        id: 91,
        text: "What does it mean for a Scrum Team to be self-managing?",
        type: "mcq-single",
        options: [
            { text: "The team does not need a Scrum Master.", correct: false },
            { text: "The team members decide who does what, when, and how.", correct: true },
            { text: "The Product Owner manages the team's tasks and priorities.", correct: false },
            { text: "The team can change the core rules of Scrum.", correct: false }
        ],
        explanation: "Scrum Teams are also self-managing, meaning they internally decide who does what, when, and how. (Scrum Guide 2020, Scrum Team section)"
    },
    {
        id: 92,
        text: "If a Scrum Team becomes too large, what does the Scrum Guide suggest?",
        type: "mcq-single",
        options: [
            { text: "Split the Sprint into two shorter Sprints.", correct: false },
            { text: "Assign a lead Developer to manage sub-teams.", correct: false },
            { text: "Consider reorganizing into multiple cohesive Scrum Teams, each focused on the same product.", correct: true },
            { text: "The Product Owner should reduce the scope of work.", correct: false }
        ],
        explanation: "If Scrum Teams become too large, they should consider reorganizing into multiple cohesive Scrum Teams, each focused on the same product. Therefore, they should share the same Product Goal, Product Backlog, and Product Owner. (Scrum Guide 2020, Scrum Team section)"
    },
    {
        id: 93,
        text: "The Scrum events are designed to minimize the need for meetings not defined in Scrum.",
        type: "true-false",
        options: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ],
        explanation: "Events are used in Scrum to create regularity and to minimize the need for meetings not defined in Scrum. (Scrum Guide 2020, Scrum Events section)"
    },
    {
        id: 94,
        text: "What is the Product Owner's role in the Sprint Review? (Select all that apply)",
        type: "mcq-multiple",
        options: [
            { text: "To demonstrate the Increment to stakeholders.", correct: false }, // The Scrum Team presents
            { text: "To discuss the Product Backlog and project likely target and delivery dates.", correct: true },
            { text: "To formally accept or reject the Increment.", correct: false }, // Review is not an acceptance gate
            { text: "To collaborate with stakeholders on what to do next.", correct: true }
        ],
        explanation: "During the Sprint Review, the Scrum Team and stakeholders review what was accomplished. Progress toward the Product Goal is discussed. The Product Backlog may also be adjusted. It's a working session. The Scrum Team presents the results. (Scrum Guide 2020, Sprint Review section)"
    },
    {
        id: 95,
        text: "The Sprint Backlog must include all tasks required to create the Increment, defined at the start of Sprint Planning.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "The Sprint Backlog is a plan by and for the Developers. It emerges throughout the Sprint as more is learned. It should have enough detail that they can inspect their progress in the Daily Scrum. It's not fully defined upfront. (Scrum Guide 2020, Sprint Backlog section)"
    },
    {
        id: 96,
        text: "Who ensures that the Product Backlog is transparent, visible, and understood?",
        type: "mcq-single",
        options: [
            { text: "The Scrum Master", correct: false },
            { text: "The Product Owner", correct: true },
            { text: "The Developers", correct: false },
            { text: "The entire Scrum Team", correct: false }
        ],
        explanation: "The Product Owner is also accountable for effective Product Backlog management, which includes... Ensuring that the Product Backlog is transparent, visible and understood. (Scrum Guide 2020, Product Owner section)"
    },
    {
        id: 97,
        text: "Scrum is founded on:",
        type: "mcq-single",
        options: [
            { text: "Prescriptive processes and detailed documentation.", correct: false },
            { text: "Empiricism and lean thinking.", correct: true },
            { text: "Hierarchical management and control.", correct: false },
            { text: "Predictive planning and strict adherence to scope.", correct: false }
        ],
        explanation: "Scrum is founded on empiricism and lean thinking. (Scrum Guide 2020, Scrum Theory section)"
    },
    {
        id: 98,
        text: "Which of these is NOT a formal event in Scrum?",
        type: "mcq-single",
        options: [
            { text: "Sprint Planning", correct: false },
            { text: "Product Backlog Refinement", correct: true },
            { text: "Daily Scrum", correct: false },
            { text: "Sprint Retrospective", correct: false }
        ],
        explanation: "Scrum combines four formal events for inspection and adaptation within a containing event, the Sprint. These are Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective. Product Backlog refinement is an ongoing activity. (Scrum Guide 2020, Scrum Events & Product Backlog sections)"
    },
    {
        id: 99,
        text: "The entire Scrum Team is accountable for creating a valuable, useful Increment every Sprint.",
        type: "true-false",
        options: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ],
        explanation: "The entire Scrum Team is accountable for creating a valuable, useful Increment every Sprint. (Scrum Guide 2020, Scrum Team section)"
    },
    {
        id: 100,
        text: "The Product Owner has the authority to cancel a Sprint.",
        type: "true-false",
        options: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ],
        explanation: "A Sprint could be cancelled if the Sprint Goal becomes obsolete. Only the Product Owner has the authority to cancel the Sprint. (Scrum Guide 2020, The Sprint section)"
    },
    {
        id: 101,
        text: "The three pillars of empirical process control are:",
        type: "mcq-single",
        options: [
            { text: "Planning, Execution, Review", correct: false },
            { text: "Transparency, Inspection, Adaptation", correct: true },
            { text: "Communication, Collaboration, Commitment", correct: false },
            { text: "Courage, Focus, Respect", correct: false }
        ],
        explanation: "These events work because they implement the empirical Scrum pillars of transparency, inspection, and adaptation. (Scrum Guide 2020, Scrum Theory section)"
    },
    {
        id: 102,
        text: "The Sprint is a container for all other Scrum events.",
        type: "true-false",
        options: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ],
        explanation: "The Sprint is a container for all other events. (Scrum Guide 2020, Scrum Events section)"
    },
    {
        id: 103,
        text: "During the Sprint, the Product Owner can add new work to the Sprint Backlog if it aligns with the Sprint Goal.",
        type: "true-false",
        options: [
            { text: "True", correct: false }, // Tricky: PO negotiates scope with Devs, Devs own Sprint Backlog
            { text: "False", correct: true }
        ],
        explanation: "The Sprint Backlog is a plan by and for the Developers. Scope may be clarified and renegotiated with the Product Owner as more is learned, but the Product Owner does not unilaterally add work to the Sprint Backlog. Developers pull work. (Scrum Guide 2020, Sprint Backlog & The Sprint sections)"
    },
    {
        id: 104,
        text: "What is the maximum timebox for a Daily Scrum?",
        type: "mcq-single",
        options: [
            { text: "5 minutes", correct: false },
            { text: "15 minutes", correct: true },
            { text: "30 minutes", correct: false },
            { text: "1 hour", correct: false }
        ],
        explanation: "The Daily Scrum is a 15-minute event for the Developers of the Scrum Team. (Scrum Guide 2020, Daily Scrum section)"
    },
    {
        id: 105,
        text: "The Scrum Values are: (Select all that apply)",
        type: "mcq-multiple",
        options: [
            { text: "Collaboration", correct: false },
            { text: "Commitment", correct: true },
            { text: "Focus", correct: true },
            { text: "Transparency", correct: false }, // This is a pillar of empiricism
            { text: "Openness", correct: true },
            { text: "Respect", correct: true },
            { text: "Courage", correct: true }
        ],
        explanation: "Successful use of Scrum depends on people becoming more proficient in living five values: Commitment, Focus, Openness, Respect, and Courage. (Scrum Guide 2020, Scrum Values section)"
    },
    {
        id: 106,
        text: "The Product Backlog is an ordered list of everything that is known to be needed in the product.",
        type: "true-false",
        options: [
            { text: "True", correct: true }, // "ordered list of what is needed to improve the product" is close enough
            { text: "False", correct: false }
        ],
        explanation: "The Product Backlog is an emergent, ordered list of what is needed to improve the product. It is the single source of work undertaken by the Scrum Team. (Scrum Guide 2020, Product Backlog section)"
    },
    {
        id: 107,
        text: "Who is responsible for managing the Product Backlog?",
        type: "mcq-single",
        options: [
            { text: "The Scrum Team", correct: false },
            { text: "The Scrum Master", correct: false },
            { text: "The Product Owner", correct: true },
            { text: "The Key Stakeholders", correct: false }
        ],
        explanation: "The Product Owner is accountable for effective Product Backlog management. (Scrum Guide 2020, Product Owner section)"
    },
    {
        id: 108,
        text: "The Sprint Retrospective is an opportunity for the Scrum Team to inspect and adapt the product Increment.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "The purpose of the Sprint Retrospective is to plan ways to increase quality and effectiveness for the Scrum Team itself (individuals, interactions, processes, tools, Definition of Done). The Increment is inspected during the Sprint Review. (Scrum Guide 2020, Sprint Retrospective section)"
    },
    {
        id: 109,
        text: "If the Scrum Values are not embodied by the Scrum Team and its stakeholders, what is a likely outcome?",
        type: "mcq-single",
        options: [
            { text: "The Sprint duration must be extended.", correct: false },
            { text: "The empirical Scrum pillars of transparency, inspection, and adaptation may lose their value and trust may erode.", correct: true },
            { text: "The Product Owner must take a more directive role.", correct: false },
            { text: "The team will naturally become more self-managing.", correct: false }
        ],
        explanation: "When these values are embodied by the Scrum Team and the people they work with, the empirical Scrum pillars of transparency, inspection, and adaptation come to life building trust. (Scrum Guide 2020, Scrum Values section)"
    },
    {
        id: 110,
        text: "The Developers are responsible for instilling quality by adhering to a Definition of Done.",
        type: "true-false",
        options: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ],
        explanation: "The Developers are always accountable for: Instilling quality by adhering to a Definition of Done. (Scrum Guide 2020, Developers section)"
    },
    {
        id: 111,
        text: "Which Scrum event has a maximum duration of 3 hours for a one-month Sprint?",
        type: "mcq-single",
        options: [
            { text: "Sprint Planning", correct: false },
            { text: "Daily Scrum", correct: false },
            { text: "Sprint Review", correct: false },
            { text: "Sprint Retrospective", correct: true }
        ],
        explanation: "The Sprint Retrospective is timeboxed to a maximum of three hours for a one-month Sprint. For shorter Sprints, the event is usually shorter. (Scrum Guide 2020, Sprint Retrospective section)"
    },
    {
        id: 112,
        text: "The Product Owner is the sole person responsible for sizing Product Backlog Items.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "The Developers who will be doing the work are responsible for the sizing. (Scrum Guide 2020, Product Backlog section)"
    },
    {
        id: 113,
        text: "What is the role of stakeholders in the Sprint Review?",
        type: "mcq-single",
        options: [
            { text: "To approve or reject the work done by the Developers.", correct: false },
            { text: "To provide feedback and collaborate on what to do next.", correct: true },
            { text: "To receive a status report from the Scrum Master.", correct: false },
            { text: "To assign new tasks to the Developers for the next Sprint.", correct: false }
        ],
        explanation: "During the event, the Scrum Team and stakeholders review what was accomplished in the Sprint and what has changed in their environment. Based on this information, attendees collaborate on what to do next. (Scrum Guide 2020, Sprint Review section)"
    },
    {
        id: 114,
        text: "Scrum requires a dedicated, full-time Scrum Master for each Scrum Team.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "The Scrum Guide defines the accountabilities of the Scrum Master but does not mandate that they must be full-time or dedicated to a single team. This is an organizational decision. (Scrum Guide 2020, Scrum Master section)"
    },
    {
        id: 115,
        text: "Which of the following are accountabilities of the Product Owner? (Select all that apply)",
        type: "mcq-multiple",
        options: [
            { text: "Developing and explicitly communicating the Product Goal.", correct: true },
            { text: "Coaching the team members in self-management.", correct: false }, // SM
            { text: "Ordering Product Backlog items.", correct: true },
            { text: "Facilitating Scrum events as requested or needed.", correct: false }, // SM
            { text: "Ensuring the Product Backlog is transparent, visible, and understood.", correct: true }
        ],
        explanation: "The Product Owner is accountable for effective Product Backlog management, which includes: Developing and explicitly communicating the Product Goal; Creating and clearly communicating Product Backlog items; Ordering Product Backlog items; and, Ensuring that the Product Backlog is transparent, visible and understood. (Scrum Guide 2020, Product Owner section)"
    },
    {
        id: 116,
        text: "The Scrum Guide defines the role of 'Project Manager'.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "Scrum defines three specific accountabilities within the Scrum Team: the Developers, the Product Owner, and the Scrum Master. There is no 'Project Manager' role defined in Scrum. (Scrum Guide 2020, Scrum Team section)"
    },
    {
        id: 117,
        text: "What is the purpose of the Sprint?",
        type: "mcq-single",
        options: [
            { text: "To allow stakeholders to inspect the Increment and provide feedback.", correct: false }, // Sprint Review
            { text: "To turn ideas into value.", correct: true },
            { text: "To plan ways to increase quality and effectiveness.", correct: false }, // Sprint Retrospective
            { text: "To define the work for the next 24 hours.", correct: false } // Daily Scrum
        ],
        explanation: "Sprints are the heartbeat of Scrum, where ideas are turned into value. (Scrum Guide 2020, The Sprint section)"
    },
    {
        id: 118,
        text: "The Scrum Master is accountable for the Product Backlog.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "The Product Owner is accountable for the Product Backlog and its effective management. The Scrum Master serves the Product Owner in this regard. (Scrum Guide 2020, Product Owner & Scrum Master sections)"
    },
    {
        id: 119,
        text: "Lean thinking, a foundation of Scrum, primarily focuses on:",
        type: "mcq-single",
        options: [
            { text: "Maximizing the amount of documentation.", correct: false },
            { text: "Reducing waste and focusing on the essentials.", correct: true },
            { text: "Following a predefined, rigid process.", correct: false },
            { text: "Increasing the number of features delivered per Sprint.", correct: false }
        ],
        explanation: "Scrum is founded on empiricism and lean thinking. Lean thinking reduces waste and focuses on the essentials. (Scrum Guide 2020, Scrum Theory section)"
    },
    {
        id: 120,
        text: "It is acceptable to skip a Daily Scrum if the Developers feel they are on track.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "Failure to operate any events as prescribed results in lost opportunities to inspect and adapt. The Daily Scrum is a key inspection point for progress towards the Sprint Goal. (Scrum Guide 2020, Scrum Events & Daily Scrum sections)"
    },
    {
        id: 121,
        text: "The Product Owner can delegate the work of Product Backlog management but remains accountable.",
        type: "true-false",
        options: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ],
        explanation: "The Product Owner may do the above work [Product Backlog management] or may delegate the responsibility to others. Regardless, the Product Owner remains accountable. (Scrum Guide 2020, Product Owner section)"
    },
    {
        id: 122,
        text: "The Sprint Goal is created during which Scrum event?",
        type: "mcq-single",
        options: [
            { text: "Sprint Review", correct: false },
            { text: "Daily Scrum", correct: false },
            { text: "Sprint Planning", correct: true },
            { text: "Sprint Retrospective", correct: false }
        ],
        explanation: "The whole Scrum Team then collaborates to define a Sprint Goal that communicates why the Sprint is valuable to stakeholders. The Sprint Goal must be finalized prior to the end of Sprint Planning. (Scrum Guide 2020, Sprint Planning section)"
    },
    {
        id: 123,
        text: "What is the result of the Sprint Review?",
        type: "mcq-single",
        options: [
            { text: "A formally approved Increment.", correct: false },
            { text: "A revised Product Backlog and potentially new opportunities.", correct: true },
            { text: "An updated Sprint Backlog for the next Sprint.", correct: false },
            { text: "A list of process improvements for the Scrum Team.", correct: false }
        ],
        explanation: "The Sprint Review is a working session... Based on this information [what was accomplished and what changed in the environment], attendees collaborate on what to do next. The Product Backlog may also be adjusted to meet new opportunities. (Scrum Guide 2020, Sprint Review section)"
    },
    {
        id: 124,
        text: "Scrum is a methodology that provides detailed instructions on how to perform the work.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "Scrum is a lightweight framework... Rather than provide people with detailed instructions, the rules of Scrum guide their relationships and interactions. (Scrum Guide 2020, Scrum Definition section)"
    },
    {
        id: 125,
        text: "The Definition of Done helps to ensure:",
        type: "mcq-single",
        options: [
            { text: "All tasks in the Sprint Backlog are completed.", correct: false },
            { text: "The Increment is usable and meets the required quality measures.", correct: true },
            { text: "The Product Owner is satisfied with every feature.", correct: false },
            { text: "The Sprint Goal is met.", correct: false }
        ],
        explanation: "The Definition of Done is a formal description of the state of the Increment when it meets the quality measures required for the product. In order to provide value, the Increment must be usable. (Scrum Guide 2020, Commitment: Definition of Done & Increment sections)"
    },
    {
        id: 126,
        text: "Is it the Scrum Master's accountability to order the Product Backlog items for maximizing value?",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "False. The Product Owner is accountable for effective Product Backlog management, which includes ordering Product Backlog items. The Scrum Master serves the Product Owner in this. (Scrum Guide 2020, Product Owner section)"
    },
    {
        id: 127,
        text: "The Developers are accountable for the Product Goal.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "False. The Product Goal is the long-term objective for the Scrum Team and is part of the Product Backlog, for which the Product Owner is accountable. The Developers commit to the Sprint Goal. (Scrum Guide 2020, Commitments section)"
    },
    {
        id: 128,
        text: "If the Daily Scrum's purpose is to inspect progress toward the Sprint Goal, who is primarily responsible for conducting this inspection and adapting the plan?",
        type: "mcq-single",
        options: [
            { text: "The Product Owner", correct: false },
            { text: "The Scrum Master", correct: false },
            { text: "The Developers", correct: true },
            { text: "The Stakeholders attending", correct: false }
        ],
        explanation: "The Daily Scrum is an event for the Developers. They inspect progress and adapt their plan for the next 24 hours to achieve the Sprint Goal. (Scrum Guide 2020, Daily Scrum section)"
    },
    {
        id: 129,
        text: "Select the statement that accurately describes a characteristic of the Sprint Review.",
        type: "mcq-single",
        options: [
            { text: "It is a formal gate for stakeholder approval of the Increment.", correct: false },
            { text: "Its primary purpose is for the Scrum Team to reflect on its process and improve.", correct: false }, // This is Retrospective
            { text: "It is a working session where attendees collaborate on what to do next based on the Increment and marketplace changes.", correct: true },
            { text: "It is strictly limited to a demonstration of new features by the Product Owner.", correct: false }
        ],
        explanation: "The Sprint Review is a working session... Based on this information, attendees collaborate on what to do next. The Product Backlog may also be adjusted. (Scrum Guide 2020, Sprint Review section)"
    },
    {
        id: 130,
        text: "Is the statement 'The Sprint Backlog is solely created and owned by the Product Owner' consistent with the Scrum Guide?",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "False. The Sprint Backlog is a plan by and for the Developers. It is composed of the Sprint Goal (why), the set of Product Backlog items selected for the Sprint (what), as well as an actionable plan for delivering the Increment (how). (Scrum Guide 2020, Sprint Backlog section)"
    },
    {
        id: 131,
        text: "Which Scrum role is primarily accountable for maximizing the value of the product resulting from the work of the Scrum Team?",
        type: "mcq-single",
        options: [
            { text: "The Scrum Master, by removing impediments.", correct: false },
            { text: "The Developers, by building a high-quality Increment.", correct: false },
            { text: "The Product Owner.", correct: true },
            { text: "The entire Scrum Team, collectively.", correct: false } // While the team creates value, the PO is accountable for MAXIMIZING it.
        ],
        explanation: "The Product Owner is accountable for maximizing the value of the product resulting from the work of the Scrum Team. (Scrum Guide 2020, Product Owner section)"
    },
    {
        id: 132,
        text: "Altering the core design of Scrum or omitting its elements is a recommended way to adapt Scrum to a specific organizational context.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "False. Changing the core design or ideas of Scrum, leaving out elements, or not following the rules of Scrum, covers up problems and limits the benefits of Scrum, potentially even rendering it useless. (Scrum Guide 2020, Purpose of the Scrum Guide section)"
    },
    {
        id: 133,
        text: "Consider the Scrum Value of 'Focus'. How does this value relate to the Sprint Goal?",
        type: "mcq-single",
        options: [
            { text: "It means Developers should only focus on tasks assigned by the Product Owner.", correct: false },
            { text: "It means the Scrum Team primarily focuses on the work of the Sprint to make the best possible progress toward the Sprint Goal.", correct: true },
            { text: "It means the Scrum Master should focus solely on removing impediments.", correct: false },
            { text: "It means the Product Owner focuses only on stakeholder communication.", correct: false }
        ],
        explanation: "The Scrum Team's primary focus is on the work of the Sprint to make the best possible progress toward these goals [including the Sprint Goal]. (Scrum Guide 2020, Scrum Values section)"
    },
    {
        id: 134,
        text: "The Product Owner can force the Developers to include more items in the Sprint Backlog than they forecasted they could complete.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "False. Through discussion with the Product Owner, the Developers select items from the Product Backlog to include in the current Sprint. Only the Developers can assess what they can accomplish over the upcoming Sprint. (Scrum Guide 2020, Sprint Planning section - Topic Two)"
    },
    {
        id: 135,
        text: "What is a key outcome of the Sprint Retrospective?",
        type: "mcq-single",
        options: [
            { text: "An updated Product Backlog.", correct: false },
            { text: "A list of impediments for the Scrum Master to remove.", correct: false },
            { text: "Identified improvements to the Scrum Team's effectiveness, which may be added to the Sprint Backlog for the next Sprint.", correct: true },
            { text: "Stakeholder alignment on the next Product Goal.", correct: false }
        ],
        explanation: "The Scrum Team identifies the most helpful changes to improve its effectiveness. The most impactful improvements are addressed as soon as possible. They may even be added to the Sprint Backlog for the next Sprint. (Scrum Guide 2020, Sprint Retrospective section)"
    },
    {
        id: 136,
        text: "The Definition of Done is primarily for the Developers to understand their tasks.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "False. The Definition of Done creates transparency by providing everyone a shared understanding of what work was completed as part of the Increment. It applies to the Increment and ensures quality. (Scrum Guide 2020, Commitment: Definition of Done section)"
    },
    {
        id: 137,
        text: "Which statement best describes the relationship between the Product Goal and the Product Backlog?",
        type: "mcq-single",
        options: [
            { text: "The Product Backlog is a list of tasks to achieve multiple Product Goals.", correct: false },
            { text: "The Product Goal is the single, long-term objective for the Scrum Team, and the Product Backlog emerges to define what will fulfill it.", correct: true },
            { text: "The Product Goal is refined daily during the Daily Scrum.", correct: false },
            { text: "Once the Product Goal is set, the Product Backlog becomes fixed.", correct: false }
        ],
        explanation: "The Product Goal describes a future state of the product... The Product Goal is in the Product Backlog. The rest of the Product Backlog emerges to define “what” will fulfill the Product Goal. (Scrum Guide 2020, Commitment: Product Goal section)"
    },
    {
        id: 138,
        text: "It is the Product Owner's responsibility to ensure the Daily Scrum is productive and kept within the 15-minute timebox.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "False. The Scrum Master serves the Scrum Team by... ensuring that all Scrum events take place and are positive, productive, and kept within the timebox. The Daily Scrum is for the Developers. (Scrum Guide 2020, Scrum Master section)"
    },
    {
        id: 139,
        text: "What is the Scrum Team's accountability concerning the Product Goal?",
        type: "mcq-single",
        options: [
            { text: "Only the Product Owner is concerned with the Product Goal.", correct: false },
            { text: "The Scrum Team commits to achieving the Product Goal within a single Sprint.", correct: false },
            { text: "The Product Goal serves as a target for the Scrum Team to plan against; they must fulfill (or abandon) one before taking on the next.", correct: true },
            { text: "The Developers define the Product Goal, and the Product Owner communicates it.", correct: false }
        ],
        explanation: "The Product Goal is the long-term objective for the Scrum Team. They must fulfill (or abandon) one objective before taking on the next. (Scrum Guide 2020, Commitment: Product Goal section)"
    },
    {
        id: 140,
        text: "Adaptation becomes less effective if the people involved are not empowered or self-managing.",
        type: "true-false",
        options: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ],
        explanation: "Adaptation becomes more difficult when the people involved are not empowered or self-managing. A Scrum Team is expected to adapt the moment it learns anything new through inspection. (Scrum Guide 2020, Adaptation section)"
    },
    {
        id: 141,
        text: "If a Scrum Team consistently fails to meet its Sprint Goal, who is primarily responsible for helping the team improve its effectiveness?",
        type: "mcq-single",
        options: [
            { text: "The Product Owner, by reducing the Sprint scope.", correct: false },
            { text: "The Developers, by working harder.", correct: false },
            { text: "The Scrum Master, by enabling the team to improve its practices.", correct: true },
            { text: "The Stakeholders, by lowering their expectations.", correct: false }
        ],
        explanation: "The Scrum Master is accountable for the Scrum Team's effectiveness. They do this by enabling the Scrum Team to improve its practices, within the Scrum framework. (Scrum Guide 2020, Scrum Master section)"
    },
    {
        id: 142,
        text: "The Scrum Guide states that Sprints must be exactly two weeks long.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "False. Sprints are fixed length events of one month or less to create consistency. The duration is chosen by the Scrum Team. (Scrum Guide 2020, The Sprint section)"
    },
    {
        id: 143,
        text: "Which Scrum accountability is responsible for creating a plan for the Sprint, the Sprint Backlog?",
        type: "mcq-single",
        options: [
            { text: "The Product Owner", correct: false },
            { text: "The Scrum Master", correct: false },
            { text: "The Developers", correct: true },
            { text: "The Project Lead (a role not in Scrum)", correct: false }
        ],
        explanation: "The Developers are always accountable for: Creating a plan for the Sprint, the Sprint Backlog. (Scrum Guide 2020, Developers section)"
    },
    {
        id: 144,
        text: "The Sprint Review's timebox is dependent on the number of stakeholders attending.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "False. The Sprint Review is timeboxed to a maximum of four hours for a one-month Sprint. For shorter Sprints, the event is usually shorter. The number of attendees does not change this timebox. (Scrum Guide 2020, Sprint Review section)"
    },
    {
        id: 145,
        text: "What is the relationship between an Increment and the Definition of Done?",
        type: "mcq-single",
        options: [
            { text: "The Definition of Done is a list of all Increments.", correct: false },
            { text: "An Increment exists only when a Product Backlog item meets the Definition of Done.", correct: true },
            { text: "The Developers create the Increment, and the Product Owner creates the Definition of Done.", correct: false },
            { text: "The Definition of Done is optional if the Increment is small.", correct: false }
        ],
        explanation: "The moment a Product Backlog item meets the Definition of Done, an Increment is born. (Scrum Guide 2020, Commitment: Definition of Done section)"
    },
    {
        id: 146,
        text: "The Product Owner is required to participate in the Daily Scrum to answer questions from the Developers.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "False. The Daily Scrum is an event for the Developers. If the Product Owner or Scrum Master are actively working on items in the Sprint Backlog, they participate as Developers. Otherwise, their presence is at the Developers' discretion as observers. Clarifying PBIs can happen throughout the Sprint. (Scrum Guide 2020, Daily Scrum section)"
    },
    {
        id: 147,
        text: "Which Scrum event is the best opportunity to inspect and adapt the Definition of Done?",
        type: "mcq-single",
        options: [
            { text: "Sprint Planning", correct: false },
            { text: "Daily Scrum", correct: false },
            { text: "Sprint Review", correct: false },
            { text: "Sprint Retrospective", correct: true }
        ],
        explanation: "The Scrum Team inspects how the last Sprint went with regards to individuals, interactions, processes, tools, and their Definition of Done. This is the formal opportunity to adapt the DoD. (Scrum Guide 2020, Sprint Retrospective section)"
    },
    {
        id: 148,
        text: "Is it the Developers' accountability to ensure the Product Backlog is transparent?",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "False. The Product Owner is accountable for ensuring that the Product Backlog is transparent, visible and understood. (Scrum Guide 2020, Product Owner section)"
    },
    {
        id: 149,
        text: "If an organization has standards for an Increment, what is the Scrum Team's responsibility regarding the Definition of Done?",
        type: "mcq-single",
        options: [
            { text: "They can ignore the organizational standards if they create a more stringent DoD.", correct: false },
            { text: "They must follow the organizational standards as a minimum for their Definition of Done.", correct: true },
            { text: "They create their own DoD, and it replaces any organizational standard.", correct: false },
            { text: "The Product Owner decides whether to use the organizational standards.", correct: false }
        ],
        explanation: "If the Definition of Done for an increment is part of the standards of the organization, all Scrum Teams must follow it as a minimum. If it is not an organizational standard, the Scrum Team must create a Definition of Done appropriate for the product. (Scrum Guide 2020, Commitment: Definition of Done section)"
    },
    {
        id: 150,
        text: "The Scrum Values are optional guidelines that a mature Scrum Team can choose to ignore.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "False. Successful use of Scrum depends on people becoming more proficient in living these five values. The decisions that are made, the steps taken, and the way Scrum is used should reinforce these values, not diminish or undermine them. (Scrum Guide 2020, Scrum Values section)"
    },
    {
        id: 151,
        text: "Which of these statements about Scrum artifacts is true?",
        type: "mcq-single",
        options: [
            { text: "Scrum has five formal artifacts.", correct: false },
            { text: "Each artifact contains a commitment to ensure it provides information that enhances transparency and focus.", correct: true },
            { text: "The Scrum Master is accountable for all Scrum artifacts.", correct: false },
            { text: "Artifacts are only inspected during the Sprint Review.", correct: false }
        ],
        explanation: "Scrum's artifacts represent work or value. Each artifact contains a commitment to ensure it provides information that enhances transparency and focus against which progress can be measured. There are three formal artifacts: Product Backlog, Sprint Backlog, Increment. (Scrum Guide 2020, Scrum Artifacts section)"
    },
    {
        id: 152,
        text: "The Product Owner must obtain stakeholder consensus before ordering Product Backlog Items.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "False. The Product Owner is accountable for ordering Product Backlog items. While they represent the needs of many stakeholders and should collaborate with them, the final decision on ordering rests with the Product Owner to maximize value. For Product Owners to succeed, the entire organization must respect their decisions. (Scrum Guide 2020, Product Owner section)"
    },
    {
        id: 153,
        text: "What is the primary purpose of 'Inspection' in Scrum?",
        type: "mcq-single",
        options: [
            { text: "To find fault with team members' performance.", correct: false },
            { text: "To detect potentially undesirable variances or problems regarding agreed goals.", correct: true },
            { text: "To ensure the plan is being followed دقیقًا.", correct: false },
            { text: "To provide management with detailed status reports.", correct: false }
        ],
        explanation: "The Scrum artifacts and the progress toward agreed goals must be inspected frequently and diligently to detect potentially undesirable variances or problems. (Scrum Guide 2020, Inspection section)"
    },
    {
        id: 154,
        text: "Can the Sprint Goal be changed once the Sprint has begun?",
        type: "mcq-single",
        options: [
            { text: "Yes, if the Product Owner decides it's necessary.", correct: false },
            { text: "Yes, if the Developers agree it's a good idea.", correct: false },
            { text: "No, no changes are made that would endanger the Sprint Goal.", correct: true },
            { text: "Yes, but only if the Scrum Master approves the change.", correct: false }
        ],
        explanation: "During the Sprint: No changes are made that would endanger the Sprint Goal. (Scrum Guide 2020, The Sprint section)"
    },
    {
        id: 155,
        text: "If a Developer has an impediment, when is the LATEST they should make it transparent?",
        type: "mcq-single",
        options: [
            { text: "At the Sprint Retrospective.", correct: false },
            { text: "At the next Sprint Review.", correct: false },
            { text: "At the Daily Scrum.", correct: true },
            { text: "When the Scrum Master asks for impediments.", correct: false }
        ],
        explanation: "Daily Scrums improve communications, identify impediments, promote quick decision-making... If an impediment is identified, it should be made transparent as soon as possible, with the Daily Scrum being a formal opportunity to do so. (Scrum Guide 2020, Daily Scrum section)"
    },
	{
        id: 156, // Inspiré de "When can the Product Backlog be updated?"
        text: "At what point in time can modifications be made to the Product Backlog?",
        type: "mcq-single",
        options: [
            { text: "Only during the Sprint Review, with stakeholder approval.", correct: false },
            { text: "Never, once a Sprint begins.", correct: false },
            { text: "At any time, typically by the Product Owner or a delegate.", correct: true },
            { text: "Exclusively during Product Backlog refinement sessions.", correct: false }
        ],
        explanation: "The Product Backlog is dynamic; it constantly changes to identify what the product needs to be appropriate, competitive, and useful. It can be updated at any time by the Product Owner or their delegate. (Implicit from Scrum Guide, Product Backlog section)"
    },
    {
        id: 157, // Variation de la Q156
        text: "Is it true that the Product Backlog can only be changed during official Product Backlog refinement meetings?",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "False. The Product Backlog is a living artifact and can be updated by the Product Owner or their delegate at any time as new information emerges or priorities change. Refinement is an ongoing activity, not the sole window for changes. (Scrum Guide 2020, Product Backlog section)"
    },
    {
        id: 158, // Inspiré de "The Product Owner will often monitor and share progress..."
        text: "Which of the following methods might a Product Owner use to monitor and communicate progress of the Product Backlog's likely completion?",
        type: "mcq-single",
        options: [
            { text: "Strictly a Gantt chart for detailed timelines.", correct: false },
            { text: "Only a Value burn-up chart as prescribed by Scrum.", correct: false },
            { text: "Any practice that helps forecast progress, like burn-downs or cumulative flows, while remembering the importance of empiricism.", correct: true },
            { text: "A formal Sprint Review acceptance report signed by stakeholders.", correct: false }
        ],
        explanation: "Various practices exist to forecast progress, like burn-downs, burn-ups, or cumulative flows. While proven useful, these do not replace the importance of empiricism. What will happen is unknown, only what has already happened may be used for forward-looking decision making. (Scrum Guide 2020, The Sprint section)"
    },
    {
        id: 159, // Variation de la Q158
        text: "Are Product or Release burn-down charts mandatory tools for a Product Owner to track progress according to Scrum?",
        type: "true-false",
        options: [
            { text: "True, they are essential for transparency.", correct: false },
            { text: "False, while useful, no specific forecasting tools are mandated by Scrum; empiricism is key.", correct: true }
        ],
        explanation: "False. The Scrum Guide mentions practices like burn-downs but states they do not replace empiricism. Scrum does not mandate specific tools for forecasting. (Scrum Guide 2020, The Sprint section)"
    },
    {
        id: 160, // Inspiré de "In order to make investment decisions, the Product Owner is likely to look at TCO..."
        text: "When considering the Total Cost of Ownership (TCO) for a product, what should a Product Owner primarily take into account?",
        type: "mcq-single",
        options: [
            { text: "Only the initial development and delivery costs.", correct: false },
            { text: "All investments needed to conceive, develop, operate, and maintain the product throughout its lifecycle.", correct: true },
            { text: "The accumulated cost over the earned value of the product.", correct: false },
            { text: "The cost of the Scrum Team's salaries during development.", correct: false }
        ],
        explanation: "The Product Owner is accountable for maximizing value, which involves understanding the TCO. This includes not just development but also ongoing operation and maintenance costs over the product's lifetime."
    },
    {
        id: 161, // Variation de la Q160
        text: "Does TCO for a Product Owner only include the budget spent on active development Sprints?",
        type: "true-false",
        options: [
            { text: "True, because Sprints are where value is created.", correct: false },
            { text: "False, TCO includes all costs across the product's lifecycle, including operation and maintenance.", correct: true }
        ],
        explanation: "False. Total Cost of Ownership (TCO) is a holistic view of all expenses related to a product, from its conception through development, operation, maintenance, and eventual retirement."
    },
    {
        id: 162, // Inspiré de "Is the Product Owner required to be present at the Sprint Retrospective?"
        text: "Regarding the Product Owner's attendance at the Sprint Retrospective, which statement is most accurate according to Scrum?",
        type: "mcq-single",
        options: [
            { text: "They are not allowed, as it's an event solely for the Developers.", correct: false },
            { text: "Their attendance is optional and only if invited by the Scrum Master.", correct: false },
            { text: "Their attendance is mandatory as a member of the Scrum Team, which inspects itself.", correct: true },
            { text: "They only attend if there are product-specific issues to discuss.", correct: false }
        ],
        explanation: "The Sprint Retrospective is an event for the Scrum Team (which includes the Product Owner, Scrum Master, and Developers) to inspect itself and create a plan for improvements. (Scrum Guide 2020, Sprint Retrospective section)"
    },
    {
        id: 163, // Variation de la Q162
        text: "The Product Owner is explicitly excluded from participating in the Sprint Retrospective.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "False. The Sprint Retrospective is for the Scrum Team. The Product Owner is a member of the Scrum Team and participates in this event. (Scrum Guide 2020, Sprint Retrospective section)"
    },
    {
        id: 164, // Inspiré de "To create focus which of the following are most important..."
        text: "To ensure focus when Sprint Planning begins, which two elements are most crucial for the Product Owner to have prepared or communicated?",
        type: "mcq-multiple",
        options: [
            { text: "Formal budget approval for the Sprint.", correct: false },
            { text: "A Product Backlog with the most important items ready for discussion.", correct: true },
            { text: "A clear cadence for all Daily Scrums.", correct: false },
            { text: "A fixed and non-negotiable Sprint Goal.", correct: false }, // Sprint Goal is defined *during* Sprint Planning
            { text: "A fully refined and estimated Product Backlog for the next three Sprints.", correct: false },
            { text: "The Product Goal, clearly communicated.", correct: true }
        ],
        explanation: "Sprint Planning initiates the Sprint. The Product Owner ensures that attendees are prepared to discuss the most important Product Backlog items and how they map to the Product Goal. (Scrum Guide 2020, Sprint Planning section)"
    },
    {
        id: 165, // Variation de la Q164
        text: "Is it a prerequisite for Sprint Planning that the Product Owner has a fully detailed and estimated Product Backlog for the entire product release?",
        type: "true-false",
        options: [
            { text: "True, to enable accurate planning.", correct: false },
            { text: "False, only the most important items PDPN_À_DISCUTER et leur lien avec le Product Goal sont essentiels pour démarrer.", correct: true }
        ],
        explanation: "False. The Product Backlog is emergent. For Sprint Planning, the Product Owner ensures readiness to discuss the most important items and their relation to the Product Goal. Not all items need to be fully detailed. (Scrum Guide 2020, Sprint Planning & Product Backlog sections)"
    },
    {
        id: 166, // Inspiré de "What is the principal value of releasing the Increment to customers?"
        text: "What is a primary benefit for the Product Owner when an Increment is released to customers?",
        type: "mcq-single",
        options: [
            { text: "To measure the Scrum Team's velocity.", correct: false },
            { text: "To validate assumptions about value and gather feedback.", correct: true },
            { text: "To demonstrate all functionalities developed during the Sprint.", correct: false },
            { text: "To formally close the Sprint.", correct: false }
        ],
        explanation: "Releasing the Increment to customers or users is a key way to validate assumptions about value and get feedback for future product direction. This aligns with empiricism."
    },
    {
        id: 167, // Variation de la Q166
        text: "True or False: The main reason a Product Owner advocates for frequent releases of the Increment is to showcase the team's productivity.",
        type: "true-false",
        options: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "False. While productivity is a factor, a primary value of frequent releases for a Product Owner is to validate assumptions, gather feedback, and ensure the product is delivering value to customers, enabling adaptation. (Implicit from Scrum's empirical nature)"
    },
    {
        id: 168, // Inspiré de "Adaptation requires regular inspection. In what ways does the PO contribute..."
        text: "How does the Product Owner primarily contribute to 'adaptation' based on 'inspection'? (Select the best two answers)",
        type: "mcq-multiple",
        options: [
            { text: "By inspecting the Sprint burn-down daily and re-planning the team's tasks.", correct: false }, // Devs adapt plan daily
            { text: "By sharing the current state of the Product Backlog at the Sprint Review, which, combined with Increment inspection, leads to an adapted Product Backlog.", correct: true },
            { text: "By verifying the Sprint Backlog for completeness at Sprint Planning to allow the Sprint to start.", correct: false }, // This is part of planning, not primarily adaptation post-inspection of outcome
            { text: "By inviting stakeholders to the Sprint Review to learn how market changes influence what is most valuable to do next.", correct: true }
        ],
        explanation: "Inspection without adaptation is pointless. The Sprint Review is a formal event for inspection (of Increment, market) and adaptation (of Product Backlog). The PO uses stakeholder feedback and market insights from this event to adapt the Product Backlog. (Scrum Guide 2020, Adaptation & Sprint Review sections)"
    },
    {
        id: 169, // Variation de la Q168
        text: "Does the Product Owner's inspection of the team's daily task board directly lead to adaptation of the Product Backlog?",
        type: "true-false",
        options: [
            { text: "True, this is how the PO ensures value is being delivered.", correct: false },
            { text: "False, the PO adapts the Product Backlog based on inspection of the Increment and market feedback, typically from the Sprint Review.", correct: true }
        ],
        explanation: "False. Developers inspect progress towards the Sprint Goal and adapt the Sprint Backlog daily. The Product Owner inspects the outcome of the Sprint (the Increment) at the Sprint Review and adapts the Product Backlog based on that and stakeholder feedback. (Scrum Guide 2020)"
    },
    {
        id: 170, // Inspiré de "What variables should a PO consider when ordering the Product Backlog?"
        text: "When ordering the Product Backlog, what is the Product Owner's overarching consideration?",
        type: "mcq-single",
        options: [
            { text: "The availability of resources and skills for implementation.", correct: false },
            { text: "Minimizing development cost to maximize ROI.", correct: false }, // ROI is a factor in value, but not the SOLE ordering variable
            { text: "Effort estimates provided by the Developers first, then value.", correct: false },
            { text: "Anything that informs them how to best achieve the Product Goal and optimize the value delivered by the product.", correct: true }
        ],
        explanation: "The Product Owner is responsible for ordering the items in the Product Backlog to best achieve the Product Goal, thereby optimizing the value of the work the Developers perform. How this is done may vary widely. (Implicit from PO accountability, Scrum Guide 2020)"
    },
    {
        id: 171, // Variation de la Q170
        text: "Is the Product Owner required to order Product Backlog Items strictly by the lowest development effort first?",
        type: "true-false",
        options: [
            { text: "True, to ensure quick wins.", correct: false },
            { text: "False, the PO orders items to best achieve goals and optimize value, considering various factors including effort, risk, dependencies, and value.", correct: true }
        ],
        explanation: "False. While effort is a factor, the Product Owner orders the Product Backlog to maximize value towards the Product Goal. This involves balancing various factors, not just effort. (Scrum Guide 2020, Product Owner section)"
    },
    {
        id: 172, // Inspiré de "What two things best help the PO manage the value of a product?"
        text: "Which two of these are most fundamental in helping the Product Owner manage and maximize the value of a product?",
        type: "mcq-multiple",
        options: [
            { text: "Setting precise value points on individual PBIs using techniques like Value Poker.", correct: false }, // Technique, not fundamental principle
            { text: "The order of the Product Backlog.", correct: true },
            { text: "Devising a complex formula for a neutral calculation of value.", correct: false },
            { text: "Validating assumptions about value through frequent releases and feedback.", correct: true },
            { text: "Ensuring all PBIs are small enough to be completed in one day.", correct: false }
        ],
        explanation: "The Product Owner manages the Product Backlog against the assumption that value will be generated. The order of the Product Backlog is a key tool for this. Validating assumptions by releasing Increments and gathering feedback is crucial for ensuring actual value is delivered and for adapting. (Implicit from Scrum principles)"
    },
    {
        id: 173, // Variation de la Q172
        text: "True or False: A Product Owner primarily manages product value by creating detailed financial projections for each Product Backlog Item.",
        type: "true-false",
        options: [
            { text: "True, this is key for ROI.", correct: false },
            { text: "False, while financial aspects are important, value management is more holistically done through ordering, focusing on the Product Goal, and validating assumptions via releases and feedback.", correct: true }
        ],
        explanation: "False. While ROI is a consideration, product value in Scrum is broader. The PO manages value through the Product Backlog order, alignment with the Product Goal, and empirical feedback from releases, not just detailed financial projections per item. (Implicit from Scrum Guide)"
    },
     {
        id: 174, // Inspiré de "When does a Developer become accountable for the value of a PBI..."
        text: "Who is ultimately accountable for the value delivered by a Product Backlog Item selected for the Sprint?",
        type: "mcq-single",
        options: [
            { text: "The specific Developer who worked on that item.", correct: false },
            { text: "The Product Owner, as they define what is valuable.", correct: true },
            { text: "The entire Scrum Team, as they collectively create the Increment.", correct: false }, // Team creates valuable Increment, PO is accountable for maximizing value of *product*
            { text: "The Scrum Master, by ensuring the process is followed.", correct: false }
        ],
        explanation: "The Product Owner is accountable for maximizing the value of the product resulting from the work of the Scrum Team. While Developers build the Increment, the PO guides what is valuable. (Scrum Guide 2020, Product Owner section)"
    },
    {
        id: 175, // Variation de la Q174
        text: "Are Developers individually accountable for the business value of each Product Backlog Item they implement?",
        type: "true-false",
        options: [
            { text: "Yes, each Developer owns the value of their work.", correct: false },
            { text: "False, the Product Owner is accountable for maximizing product value; the entire Scrum Team is accountable for creating a valuable Increment.", correct: true }
        ],
        explanation: "False. The Product Owner is accountable for maximizing the value of the product. The entire Scrum Team is accountable for creating a valuable, useful Increment. Developers are accountable for the quality and creation of the Increment. (Scrum Guide 2020)"
    },
    {
        id: 176, // Inspiré de "To what extent does technical debt limit the value a PO can get..."
        text: "How can significant technical debt impact a Product Owner's ability to maximize product value? (Select the best two answers)",
        type: "mcq-multiple",
        options: [
            { text: "It often leads to a larger portion of the product's budget being spent on maintenance instead of new features.", correct: true },
            { text: "It can reduce the velocity at which new, valuable functionality can be created and delivered.", correct: true },
            { text: "Technical debt is solely a Developer concern and does not directly affect the Product Owner.", correct: false },
            { text: "Technical debt primarily improves short-term delivery speed, thus increasing immediate value.", correct: false }
        ],
        explanation: "Technical debt can consume resources for bug fixing and refactoring (maintenance), reducing capacity for new value. It also often makes adding new features slower and more complex, thus reducing the speed of value delivery."
    },
    {
        id: 177, // Variation de la Q176
        text: "True or False: A Product Owner should generally ignore technical debt as it's a technical issue handled by the Developers.",
        type: "true-false",
        options: [
            { text: "True, the PO focuses only on new features.", correct: false },
            { text: "False, technical debt impacts the ability to deliver future value and TCO, which are PO concerns.", correct: true }
        ],
        explanation: "False. Technical debt directly impacts the product's long-term value, maintainability, and the speed at which new features can be added. These are all critical concerns for the Product Owner. Addressing technical debt can be a valuable PBI."
    },
    {
        id: 178, // Inspiré de "Which description best fits the role of the Product Owner?"
        text: "What is the most accurate description of the Product Owner's primary focus?",
        type: "mcq-single",
        options: [
            { text: "Scope Protector, ensuring no changes are made to the Sprint Backlog.", correct: false },
            { text: "Chief Business Analyst, detailing all requirements upfront.", correct: false },
            { text: "Value Maximizer, ensuring the Scrum Team works on the most valuable things for the product.", correct: true },
            { text: "Project Manager 2.0, coordinating all project activities.", correct: false },
            { text: "Requirements Collector, gathering all stakeholder requests.", correct: false }
        ],
        explanation: "The Product Owner is accountable for maximizing the value of the product resulting from the work of the Scrum Team. (Scrum Guide 2020, Product Owner section)"
    },
    {
        id: 179, // Variation de la Q178
        text: "Is the Product Owner's role best described as a 'Requirements Collector' for the team?",
        type: "true-false",
        options: [
            { text: "Yes, their main job is to gather all possible requirements.", correct: false },
            { text: "No, they are accountable for maximizing product value, which involves more than just collecting requirements; it includes ordering, defining the Product Goal, and making strategic decisions.", correct: true }
        ],
        explanation: "No. While understanding requirements is part of it, the Product Owner's accountability is to maximize value. This involves strategic thinking, prioritization, and managing the Product Backlog to achieve the Product Goal. (Scrum Guide 2020, Product Owner section)"
    },
    {
        id: 180, // Inspiré de "What are typical activities for a Product Owner in a Sprint?"
        text: "Which of these activities are typical for a Product Owner during a Sprint? (Select the best two answers)",
        type: "mcq-multiple",
        options: [
            { text: "Attending every Daily Scrum to provide task direction to Developers.", correct: false }, // Attends if participating as Dev, or invited to observe, not to direct
            { text: "Creating detailed financial reports on Sprint expenditure daily.", correct: false },
            { text: "Collaborating with stakeholders, user communities, and subject matter experts.", correct: true },
            { text: "Working with the Developers on Product Backlog refinement.", correct: true },
            { text: "Updating the detailed work plan for the Developers on a daily basis.", correct: false } // Devs plan their own work
        ],
        explanation: "The Product Owner represents the needs of many stakeholders in the Product Backlog. This requires active interaction. Product Backlog refinement is an ongoing activity in which the Product Owner and the Developers collaborate. (Scrum Guide 2020, Product Owner & Product Backlog Refinement)"
    },
    {
        id: 181, // Variation de la Q180
        text: "Is the Product Owner responsible for assigning daily tasks to the Developers during the Sprint?",
        type: "true-false",
        options: [
            { text: "Yes, to ensure the Sprint Goal is met.", correct: false },
            { text: "No, Developers are self-managing and pull work from the Sprint Backlog to meet the Sprint Goal.", correct: true }
        ],
        explanation: "No. Developers are self-managing. They decide who does what, when, and how to accomplish the Sprint Goal. The Product Owner clarifies PBIs and collaborates, but does not assign tasks. (Scrum Guide 2020, Scrum Team & Developers sections)"
    },
    {
        id: 182, // Inspiré de "A Product Owner is entitled to postpone the start of a new Sprint..."
        text: "Under what condition does the Scrum Guide state a new Sprint begins?",
        type: "mcq-single",
        options: [
            { text: "Only when the Product Owner has identified a clear Sprint Goal.", correct: false },
            { text: "Immediately after the conclusion of the previous Sprint.", correct: true },
            { text: "When at least 80% of Product Backlog items for the Sprint are fully refined.", correct: false },
            { text: "After stakeholders have formally approved the Increment from the previous Sprint.", correct: false }
        ],
        explanation: "A new Sprint starts immediately after the conclusion of the previous Sprint. (Scrum Guide 2020, The Sprint section)"
    },
    {
        id: 183, // Variation de la Q182
        text: "Can a Product Owner delay the start of a new Sprint if they feel more refinement is needed for the top Product Backlog items?",
        type: "true-false",
        options: [
            { text: "Yes, to ensure a more productive Sprint Planning.", correct: false },
            { text: "No, a new Sprint starts immediately after the previous one concludes; refinement is an ongoing activity.", correct: true }
        ],
        explanation: "No. Sprints create consistency. A new Sprint starts immediately after the conclusion of the previous Sprint. Product Backlog refinement is an ongoing activity to prepare items for future Sprints. (Scrum Guide 2020, The Sprint & Product Backlog Refinement sections)"
    },
    {
        id: 184, // Inspiré de "How does an organization know that a product built using Scrum is successful?"
        text: "What is a key indicator of a product's success when using Scrum?",
        type: "mcq-single",
        options: [
            { text: "The Product Owner and stakeholders formally accepting the Increment at each Sprint Review.", correct: false },
            { text: "The team consistently meeting its velocity targets.", correct: false },
            { text: "Frequently releasing the Increment to the customer and measuring the value the customer receives.", correct: true },
            { text: "Measuring that development time matches estimated time.", correct: false }
        ],
        explanation: "Scrum Teams deliver products iteratively and incrementally, maximizing opportunities for feedback. If the Increment is not released, the opportunity to capture customer feedback and measure the product's true value is lost."
    },
    {
        id: 185, // Variation de la Q184
        text: "True or False: A product built with Scrum is considered successful primarily if the team's velocity has increased since the last release.",
        type: "true-false",
        options: [
            { text: "True, as higher velocity means more output.", correct: false },
            { text: "False, success is primarily measured by the value delivered to and received by the customer, often validated through releases and feedback.", correct: true }
        ],
        explanation: "False. While velocity can be an indicator for the team, product success in Scrum is tied to delivering value. Measuring customer-received value through frequent releases is a more direct indicator of success than internal metrics like velocity alone."
    }
];