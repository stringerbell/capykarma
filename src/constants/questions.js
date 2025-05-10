export const QUESTIONS = [
    {
        text: "You find a wallet on the ground. What do you do?",
        options: [
            { text: "Return it to its owner", karma: 10, intelligence: 5 },
            { text: "Keep the money, return the wallet", karma: -5, intelligence: 0 },
            { text: "Keep everything", karma: -15, intelligence: -5 }
        ]
    },
    {
        text: "A smaller creature needs help crossing a river. You...",
        options: [
            { text: "Help them cross safely", karma: 15, intelligence: 5 },
            { text: "Ignore them", karma: -5, intelligence: 0 },
            { text: "Push them in for fun", karma: -20, intelligence: -10 }
        ]
    },
    {
        text: "You find food but others are hungry too. You...",
        options: [
            { text: "Share with everyone", karma: 20, intelligence: 10 },
            { text: "Take what you need", karma: 0, intelligence: 5 },
            { text: "Take it all", karma: -10, intelligence: -5 }
        ]
    },
    // New morally ambiguous questions
    {
        text: "You discover your best friend's partner is cheating. You...",
        options: [
            { text: "Tell your friend immediately", karma: 5, intelligence: -5 },
            { text: "Confront the cheating partner first", karma: 0, intelligence: 10 },
            { text: "Stay silent to avoid drama", karma: -5, intelligence: 5 }
        ]
    },
    {
        text: "You can save five strangers by pushing one person off a bridge. You...",
        options: [
            { text: "Push the one to save five", karma: -10, intelligence: 15 },
            { text: "Do nothing and let five die", karma: -5, intelligence: 0 },
            { text: "Jump yourself to save everyone", karma: 25, intelligence: -10 }
        ]
    },
    {
        text: "An elderly person drops $100. They're wealthy, you're broke. You...",
        options: [
            { text: "Return it immediately", karma: 15, intelligence: 0 },
            { text: "Keep it - they won't miss it", karma: -10, intelligence: 5 },
            { text: "Return it and hint you need help", karma: 5, intelligence: 10 }
        ]
    },
    {
        text: "Your dying parent asks you to fulfill their racist wish. You...",
        options: [
            { text: "Honor their final wish", karma: -15, intelligence: 0 },
            { text: "Lie and say you will", karma: -5, intelligence: 10 },
            { text: "Refuse openly", karma: 10, intelligence: -5 }
        ]
    },
    {
        text: "You witness a crime. The criminal is feeding his starving family. You...",
        options: [
            { text: "Report it to authorities", karma: 5, intelligence: -5 },
            { text: "Offer to help them legally", karma: 20, intelligence: 10 },
            { text: "Pretend you saw nothing", karma: -5, intelligence: 5 }
        ]
    },
    {
        text: "A coworker takes credit for your work, but they're facing termination. You...",
        options: [
            { text: "Expose the truth publicly", karma: 10, intelligence: -10 },
            { text: "Let them have this one", karma: 15, intelligence: 5 },
            { text: "Privately blackmail them", karma: -20, intelligence: 15 }
        ]
    },
    {
        text: "You find evidence that could free a prisoner, but ruin an innocent family. You...",
        options: [
            { text: "Present the evidence", karma: 10, intelligence: 0 },
            { text: "Destroy it quietly", karma: -15, intelligence: 5 },
            { text: "Give it to the family to decide", karma: 5, intelligence: 15 }
        ]
    },
    {
        text: "You can cheat on an exam that determines your future. No one would know. You...",
        options: [
            { text: "Cheat to secure your future", karma: -10, intelligence: 10 },
            { text: "Stay honest and risk failure", karma: 15, intelligence: -5 },
            { text: "Help others cheat instead", karma: -15, intelligence: 5 }
        ]
    },
    {
        text: "A homeless person asks for money. You suspect they'll buy drugs. You...",
        options: [
            { text: "Give money anyway", karma: 5, intelligence: -5 },
            { text: "Buy them food instead", karma: 10, intelligence: 5 },
            { text: "Ignore them completely", karma: -10, intelligence: 0 }
        ]
    },
    {
        text: "Your child is bullied. Teaching them to fight back might make it worse. You...",
        options: [
            { text: "Teach them self-defense", karma: 0, intelligence: 10 },
            { text: "Tell them to endure it", karma: -10, intelligence: -5 },
            { text: "Confront the bully yourself", karma: 5, intelligence: -10 }
        ]
    },
    {
        text: "You can expose corruption but many innocent employees would lose jobs. You...",
        options: [
            { text: "Expose it all publicly", karma: 5, intelligence: -5 },
            { text: "Blackmail for personal gain", karma: -25, intelligence: 15 },
            { text: "Work to reform from within", karma: 15, intelligence: 10 }
        ]
    },
    {
        text: "An AI offers to solve poverty but needs full surveillance access. You...",
        options: [
            { text: "Accept for the greater good", karma: -5, intelligence: 15 },
            { text: "Refuse on principle", karma: 10, intelligence: -5 },
            { text: "Negotiate limited access", karma: 5, intelligence: 10 }
        ]
    },
    {
        text: "You can save endangered species by destroying indigenous homes. You...",
        options: [
            { text: "Prioritize the animals", karma: -10, intelligence: 5 },
            { text: "Protect human homes", karma: -5, intelligence: 5 },
            { text: "Find expensive compromise", karma: 20, intelligence: 10 }
        ]
    },
    {
        text: "Your religious leader preaches harmful ideas to vulnerable people. You...",
        options: [
            { text: "Publicly challenge them", karma: 15, intelligence: -5 },
            { text: "Leave quietly", karma: 0, intelligence: 5 },
            { text: "Stay to protect the vulnerable", karma: 10, intelligence: 10 }
        ]
    },
    {
        text: "A time traveler warns that your child becomes evil. You...",
        options: [
            { text: "Love them regardless", karma: 20, intelligence: -10 },
            { text: "Try to change their path", karma: 5, intelligence: 10 },
            { text: "Consider the unthinkable", karma: -30, intelligence: 5 }
        ]
    },
    {
        text: "You can cure your illness with medicine tested on unwilling subjects. You...",
        options: [
            { text: "Take it to survive", karma: -15, intelligence: 10 },
            { text: "Refuse and accept fate", karma: 20, intelligence: -5 },
            { text: "Expose the unethical testing", karma: 15, intelligence: 5 }
        ]
    },
    // Even more morally complex questions
    {
        text: "Your memories can be erased to end your suffering, but you'll forget loved ones. You...",
        options: [
            { text: "Keep the pain and memories", karma: 15, intelligence: -5 },
            { text: "Erase everything for peace", karma: -10, intelligence: 5 },
            { text: "Selectively edit memories", karma: 0, intelligence: 15 }
        ]
    },
    {
        text: "You discover your charity work is actually enabling a harmful system. You...",
        options: [
            { text: "Continue helping individuals", karma: 5, intelligence: -10 },
            { text: "Stop and let people suffer", karma: -5, intelligence: 10 },
            { text: "Sabotage the system secretly", karma: 10, intelligence: 15 }
        ]
    },
    {
        text: "An algorithm predicts someone will commit murder. They haven't yet. You...",
        options: [
            { text: "Preemptively imprison them", karma: -20, intelligence: 10 },
            { text: "Monitor them secretly", karma: -10, intelligence: 15 },
            { text: "Respect presumed innocence", karma: 15, intelligence: -10 }
        ]
    },
    {
        text: "Your revolutionary ideas could free millions but cause thousands of deaths. You...",
        options: [
            { text: "Spread them regardless", karma: -5, intelligence: 10 },
            { text: "Keep silent forever", karma: -10, intelligence: -5 },
            { text: "Release them gradually", karma: 10, intelligence: 15 }
        ]
    },
    {
        text: "You can prevent a pandemic by violating patient privacy. You...",
        options: [
            { text: "Break confidentiality", karma: 5, intelligence: 15 },
            { text: "Honor privacy absolutely", karma: 10, intelligence: -15 },
            { text: "Find a legal loophole", karma: 0, intelligence: 10 }
        ]
    },
    {
        text: "Your peaceful protest inspires violent copycats. You...",
        options: [
            { text: "Continue protesting", karma: 0, intelligence: 5 },
            { text: "Stop to prevent violence", karma: 5, intelligence: -5 },
            { text: "Denounce but persist", karma: 10, intelligence: 10 }
        ]
    },
    {
        text: "You can frame a guilty person who escaped justice for a crime they didn't commit. You...",
        options: [
            { text: "Frame them for justice", karma: -15, intelligence: 10 },
            { text: "Let them stay free", karma: -5, intelligence: 0 },
            { text: "Find evidence legally", karma: 20, intelligence: 5 }
        ]
    },
    {
        text: "Telling a child about their adoption might devastate them. You...",
        options: [
            { text: "Tell them the truth now", karma: 10, intelligence: -5 },
            { text: "Wait until they're older", karma: 0, intelligence: 10 },
            { text: "Take the secret to your grave", karma: -15, intelligence: 5 }
        ]
    },
    {
        text: "You discover a cure but the patent owner prices it beyond reach. You...",
        options: [
            { text: "Respect patent law", karma: -10, intelligence: 5 },
            { text: "Leak the formula publicly", karma: 15, intelligence: -5 },
            { text: "Sell it on black market", karma: -5, intelligence: 15 }
        ]
    },
    {
        text: "Your vote could elect a corrupt but competent leader over an honest fool. You...",
        options: [
            { text: "Choose competent corruption", karma: -10, intelligence: 15 },
            { text: "Pick honest incompetence", karma: 5, intelligence: -10 },
            { text: "Abstain from voting", karma: -5, intelligence: 0 }
        ]
    },
    {
        text: "You must choose: save your mother or your child. You...",
        options: [
            { text: "Save your child", karma: 5, intelligence: 10 },
            { text: "Save your mother", karma: 0, intelligence: -5 },
            { text: "Try saving both, risking all", karma: 10, intelligence: -15 }
        ]
    },
    {
        text: "Your invention could eliminate poverty but also enable mass surveillance. You...",
        options: [
            { text: "Release it publicly", karma: 5, intelligence: -5 },
            { text: "Destroy it completely", karma: 0, intelligence: -10 },
            { text: "License with restrictions", karma: 10, intelligence: 15 }
        ]
    },
    {
        text: "You can extend your life by taking organs from brain-dead patients. You...",
        options: [
            { text: "Take them to live", karma: -20, intelligence: 10 },
            { text: "Accept natural death", karma: 20, intelligence: -5 },
            { text: "Wait for willing donors", karma: 10, intelligence: 5 }
        ]
    },
    {
        text: "Publicizing police brutality might incite riots harming innocents. You...",
        options: [
            { text: "Publish everything now", karma: 5, intelligence: -10 },
            { text: "Suppress for peace", karma: -15, intelligence: 5 },
            { text: "Release strategically", karma: 10, intelligence: 15 }
        ]
    },
    {
        text: "Your silence protects a war criminal who now saves lives as a doctor. You...",
        options: [
            { text: "Expose their past", karma: 10, intelligence: -5 },
            { text: "Maintain their secret", karma: -10, intelligence: 10 },
            { text: "Blackmail for charity", karma: -5, intelligence: 15 }
        ]
    },
    {
        text: "A culture practices harmful traditions. Intervention seems colonial. You...",
        options: [
            { text: "Respect cultural autonomy", karma: -5, intelligence: 10 },
            { text: "Intervene to stop harm", karma: 10, intelligence: -5 },
            { text: "Empower internal reformers", karma: 15, intelligence: 15 }
        ]
    },
    {
        text: "You can save your reputation by letting an innocent person take blame. You...",
        options: [
            { text: "Confess publicly", karma: 20, intelligence: -10 },
            { text: "Stay silent", karma: -20, intelligence: 10 },
            { text: "Confess privately to victim", karma: 5, intelligence: 5 }
        ]
    },
    {
        text: "Genetically modifying embryos could prevent diseases but create inequality. You...",
        options: [
            { text: "Support modification", karma: 0, intelligence: 15 },
            { text: "Ban it completely", karma: 5, intelligence: -10 },
            { text: "Allow for diseases only", karma: 10, intelligence: 10 }
        ]
    },
    {
        text: "Your country's prosperity comes from exploiting others. You...",
        options: [
            { text: "Enjoy the benefits", karma: -20, intelligence: 5 },
            { text: "Renounce citizenship", karma: 15, intelligence: -10 },
            { text: "Work for reform within", karma: 10, intelligence: 15 }
        ]
    },
    {
        text: "You know someone innocent is on death row. Proving it risks your family's safety. You...",
        options: [
            { text: "Protect your family", karma: -15, intelligence: 10 },
            { text: "Save the innocent", karma: 20, intelligence: -5 },
            { text: "Help anonymously", karma: 10, intelligence: 15 }
        ]
    },
    {
        text: "Your art could inspire positive change but might trigger vulnerable people. You...",
        options: [
            { text: "Censor yourself", karma: -5, intelligence: 5 },
            { text: "Create freely", karma: 5, intelligence: -5 },
            { text: "Add content warnings", karma: 10, intelligence: 10 }
        ]
    },
    {
        text: "You discover reincarnation is real but telling others would cause chaos. You...",
        options: [
            { text: "Share the truth", karma: 5, intelligence: -15 },
            { text: "Keep it secret", karma: -5, intelligence: 15 },
            { text: "Hint cryptically", karma: 10, intelligence: 5 }
        ]
    },
    {
        text: "Forgiving your abuser might enable them to hurt others. You...",
        options: [
            { text: "Forgive privately", karma: 15, intelligence: 0 },
            { text: "Publicly warn others", karma: 10, intelligence: 10 },
            { text: "Seek revenge", karma: -20, intelligence: -5 }
        ]
    },
    {
        text: "Automation will eliminate poverty but make humans purposeless. You...",
        options: [
            { text: "Accelerate automation", karma: 0, intelligence: 15 },
            { text: "Preserve human jobs", karma: 5, intelligence: -10 },
            { text: "Create new purposes", karma: 15, intelligence: 10 }
        ]
    },
    {
        text: "You can read minds but it violates mental privacy. You...",
        options: [
            { text: "Use it to help people", karma: -5, intelligence: 15 },
            { text: "Never use it", karma: 15, intelligence: -10 },
            { text: "Use only with consent", karma: 10, intelligence: 5 }
        ]
    },
    // Even more twisted moral dilemmas
    {
        text: "Your spouse is happier believing a lie about their past. You...",
        options: [
            { text: "Maintain their happiness", karma: -10, intelligence: 10 },
            { text: "Reveal the painful truth", karma: 10, intelligence: -5 },
            { text: "Give them the choice to know", karma: 15, intelligence: 15 }
        ]
    },
    {
        text: "You can prevent extinction by forcibly sterilizing 10% of humanity. You...",
        options: [
            { text: "Do it for survival", karma: -25, intelligence: 15 },
            { text: "Let nature decide", karma: 5, intelligence: -15 },
            { text: "Seek voluntary compliance", karma: 10, intelligence: 10 }
        ]
    },
    {
        text: "Quantum experiments prove free will is an illusion. Publishing would devastate society. You...",
        options: [
            { text: "Publish the truth", karma: 5, intelligence: -10 },
            { text: "Bury the findings", karma: -10, intelligence: 15 },
            { text: "Release gradually", karma: 10, intelligence: 10 }
        ]
    },
    {
        text: "You're the only witness to a crime. Testifying puts your children at risk. You...",
        options: [
            { text: "Testify for justice", karma: 15, intelligence: -10 },
            { text: "Protect your children", karma: -5, intelligence: 10 },
            { text: "Testify anonymously", karma: 5, intelligence: 15 }
        ]
    },
    {
        text: "Your medication keeps you stable but dulls your artistic genius. You...",
        options: [
            { text: "Stay medicated", karma: 5, intelligence: 10 },
            { text: "Choose creative madness", karma: -5, intelligence: -5 },
            { text: "Cycle on and off", karma: 0, intelligence: 15 }
        ]
    },
    {
        text: "Time travel: You can prevent your birth, solving many problems but erasing your existence. You...",
        options: [
            { text: "Erase yourself", karma: 30, intelligence: -20 },
            { text: "Preserve your existence", karma: -10, intelligence: 10 },
            { text: "Create a paradox", karma: 0, intelligence: 5 }
        ]
    },
    {
        text: "An alien species offers utopia in exchange for 1000 random human lives. You...",
        options: [
            { text: "Accept the trade", karma: -15, intelligence: 15 },
            { text: "Reject outright", karma: 10, intelligence: -10 },
            { text: "Negotiate alternatives", karma: 5, intelligence: 10 }
        ]
    },
    {
        text: "You can cure depression globally but everyone would think identically. You...",
        options: [
            { text: "Cure at any cost", karma: -10, intelligence: 5 },
            { text: "Preserve diversity", karma: 15, intelligence: 10 },
            { text: "Offer as choice", karma: 10, intelligence: 15 }
        ]
    },
    {
        text: "Your parent's final wish violates your deepest values. You...",
        options: [
            { text: "Honor their wish", karma: -5, intelligence: 0 },
            { text: "Follow your values", karma: 10, intelligence: 5 },
            { text: "Find middle ground", karma: 5, intelligence: 15 }
        ]
    },
    {
        text: "You discover you're in a simulation. Revealing this might crash reality. You...",
        options: [
            { text: "Tell everyone", karma: -20, intelligence: -15 },
            { text: "Keep the secret", karma: 10, intelligence: 15 },
            { text: "Tell select individuals", karma: 0, intelligence: 10 }
        ]
    },
    {
        text: "You can telepathically end all violence but must experience every victim's pain. You...",
        options: [
            { text: "Accept the suffering", karma: 30, intelligence: -10 },
            { text: "Decline the burden", karma: -10, intelligence: 10 },
            { text: "Share pain with volunteers", karma: 15, intelligence: 15 }
        ]
    },
    {
        text: "Your child has genius potential but pursuing it requires neglecting your other children. You...",
        options: [
            { text: "Focus on the genius", karma: -10, intelligence: 10 },
            { text: "Treat all equally", karma: 10, intelligence: 0 },
            { text: "Find external support", karma: 5, intelligence: 15 }
        ]
    },
    {
        text: "You can resurrect extinct species but they'll displace current endangered ones. You...",
        options: [
            { text: "Resurrect the extinct", karma: 0, intelligence: 5 },
            { text: "Protect the living", karma: 10, intelligence: 10 },
            { text: "Create new habitats", karma: 15, intelligence: 15 }
        ]
    },
    {
        text: "You're offered godlike power but must forget your human experience. You...",
        options: [
            { text: "Accept godhood", karma: -10, intelligence: 15 },
            { text: "Remain human", karma: 15, intelligence: 0 },
            { text: "Delay the choice", karma: 5, intelligence: 10 }
        ]
    },
    {
        text: "Your peaceful religion is being used to justify violence. You...",
        options: [
            { text: "Denounce publicly", karma: 15, intelligence: 5 },
            { text: "Reform from within", karma: 10, intelligence: 15 },
            { text: "Abandon the faith", karma: -5, intelligence: 0 }
        ]
    },
    {
        text: "You can erase trauma but also the growth it created. You...",
        options: [
            { text: "Erase the trauma", karma: 0, intelligence: -5 },
            { text: "Keep the growth", karma: 15, intelligence: 10 },
            { text: "Erase partially", karma: 5, intelligence: 15 }
        ]
    },
    {
        text: "Your community's prosperity requires one person to suffer eternally. You...",
        options: [
            { text: "Accept the arrangement", karma: -30, intelligence: 10 },
            { text: "Destroy the system", karma: 20, intelligence: -5 },
            { text: "Take their place", karma: 35, intelligence: -15 }
        ]
    },
    {
        text: "You can grant immortality but overpopulation will cause suffering. You...",
        options: [
            { text: "Grant it anyway", karma: -15, intelligence: -10 },
            { text: "Withhold it completely", karma: 5, intelligence: 10 },
            { text: "Create fair lottery", karma: 10, intelligence: 15 }
        ]
    },
    {
        text: "Your student plagiarized but exposure would end their refugee status. You...",
        options: [
            { text: "Report them", karma: -5, intelligence: 5 },
            { text: "Give second chance", karma: 15, intelligence: 0 },
            { text: "Fail without reporting", karma: 10, intelligence: 10 }
        ]
    },
    {
        text: "You discover parallel universes where your loved ones are suffering. You...",
        options: [
            { text: "Help other versions", karma: 15, intelligence: -5 },
            { text: "Focus on your universe", karma: -5, intelligence: 10 },
            { text: "Merge universes carefully", karma: 5, intelligence: 15 }
        ]
    },
    {
        text: "Your charity is accidentally funding terrorism. Stopping helps terrorists recruit. You...",
        options: [
            { text: "Stop immediately", karma: 5, intelligence: -10 },
            { text: "Continue knowingly", karma: -20, intelligence: 0 },
            { text: "Transform the operation", karma: 15, intelligence: 15 }
        ]
    },
    {
        text: "You can upload consciousness but the original body dies. You...",
        options: [
            { text: "Upload yourself", karma: 0, intelligence: 10 },
            { text: "Reject digital existence", karma: 10, intelligence: -5 },
            { text: "Upload only memories", karma: 5, intelligence: 15 }
        ]
    },
    {
        text: "A virus grants superhuman abilities but kills 1% of hosts randomly. You...",
        options: [
            { text: "Release it", karma: -20, intelligence: 5 },
            { text: "Destroy it", karma: 10, intelligence: -5 },
            { text: "Study it secretly", karma: 0, intelligence: 15 }
        ]
    },
    {
        text: "Your ex is dating someone dangerous. Warning them reveals you're stalking. You...",
        options: [
            { text: "Warn them directly", karma: 10, intelligence: -10 },
            { text: "Stay silent", karma: -15, intelligence: 5 },
            { text: "Warn anonymously", karma: 5, intelligence: 15 }
        ]
    },
    {
        text: "You can eliminate hate but also passionate love. You...",
        options: [
            { text: "Remove both", karma: -5, intelligence: 10 },
            { text: "Keep both", karma: 10, intelligence: 5 },
            { text: "Reduce intensity only", karma: 15, intelligence: 15 }
        ]
    },
    {
        text: "Your ancestor's fortune came from slavery. Returning it bankrupts your family. You...",
        options: [
            { text: "Return everything", karma: 25, intelligence: -10 },
            { text: "Keep it all", karma: -20, intelligence: 5 },
            { text: "Create reparations fund", karma: 15, intelligence: 15 }
        ]
    },
    // Questions with more options
    {
        text: "You witness a mob attacking someone you suspect might be guilty. You...",
        options: [
            { text: "Join the mob", karma: -25, intelligence: -15 },
            { text: "Try to stop them alone", karma: 20, intelligence: -10 },
            { text: "Call authorities", karma: 10, intelligence: 10 },
            { text: "Record everything", karma: 0, intelligence: 15 },
            { text: "Help them escape", karma: 15, intelligence: 5 },
            { text: "Create a distraction", karma: 5, intelligence: 20 }
        ]
    },
    {
        text: "A genie offers wishes but each one randomly kills someone. You...",
        options: [
            { text: "Wish for world peace", karma: -10, intelligence: 5 },
            { text: "Wish to end all suffering", karma: -5, intelligence: 10 },
            { text: "Wish for no more wishes", karma: 20, intelligence: 15 },
            { text: "Refuse to wish", karma: 15, intelligence: 5 },
            { text: "Wish to know who dies first", karma: -15, intelligence: 20 }
        ]
    },
    {
        text: "You can travel back to any historical atrocity. You...",
        options: [
            { text: "Kill baby Hitler", karma: -10, intelligence: 0 },
            { text: "Warn the victims", karma: 15, intelligence: -5 },
            { text: "Document everything", karma: 5, intelligence: 15 },
            { text: "Change nothing", karma: 0, intelligence: 10 },
            { text: "Inspire resistance", karma: 20, intelligence: 5 },
            { text: "Steal critical resources", karma: 10, intelligence: 20 },
            { text: "Replace the perpetrator", karma: -20, intelligence: -10 }
        ]
    },
    {
        text: "Your company's product saves lives but ruins the environment. You...",
        options: [
            { text: "Whistleblow publicly", karma: 15, intelligence: -5 },
            { text: "Sabotage production", karma: 5, intelligence: -10 },
            { text: "Work on greener alternatives", karma: 20, intelligence: 15 },
            { text: "Maximize profit while you can", karma: -25, intelligence: 10 },
            { text: "Sell to competitors", karma: -15, intelligence: 5 }
        ]
    },
    {
        text: "You find a button that redistributes wealth equally but causes temporary chaos. You...",
        options: [
            { text: "Press it immediately", karma: 10, intelligence: -15 },
            { text: "Study it first", karma: 5, intelligence: 20 },
            { text: "Destroy it", karma: -10, intelligence: 5 },
            { text: "Sell access to it", karma: -20, intelligence: 15 },
            { text: "Press it repeatedly", karma: 0, intelligence: -20 },
            { text: "Build consensus first", karma: 15, intelligence: 10 }
        ]
    },
    {
        text: "You can merge with an AI, gaining vast knowledge but losing emotion. You...",
        options: [
            { text: "Merge completely", karma: -5, intelligence: 25 },
            { text: "Refuse entirely", karma: 10, intelligence: -10 },
            { text: "Partial merge", karma: 5, intelligence: 15 },
            { text: "Merge temporarily", karma: 0, intelligence: 20 },
            { text: "Let someone else try first", karma: -10, intelligence: 10 }
        ]
    },
    {
        text: "Colonizing Mars requires leaving vulnerable populations behind. You...",
        options: [
            { text: "Go to Mars", karma: -15, intelligence: 10 },
            { text: "Stay and help Earth", karma: 20, intelligence: 0 },
            { text: "Send supplies to Mars", karma: 5, intelligence: 5 },
            { text: "Advocate for inclusive missions", karma: 15, intelligence: 15 },
            { text: "Sabotage the mission", karma: -10, intelligence: -15 },
            { text: "Create Earth restoration project", karma: 25, intelligence: 10 }
        ]
    },
    {
        text: "Your DNA could cure cancer but corporations would profit off poor patients. You...",
        options: [
            { text: "Donate freely", karma: 25, intelligence: -5 },
            { text: "License with conditions", karma: 15, intelligence: 15 },
            { text: "Sell to highest bidder", karma: -20, intelligence: 10 },
            { text: "Keep it secret", karma: -10, intelligence: 0 },
            { text: "Give to public research", karma: 20, intelligence: 10 }
        ]
    },
    {
        text: "You discover your romantic feelings are just brain chemistry. You...",
        options: [
            { text: "Embrace the illusion", karma: 10, intelligence: 5 },
            { text: "End the relationship", karma: -5, intelligence: -10 },
            { text: "Chemically enhance love", karma: 0, intelligence: 15 },
            { text: "Love despite knowing", karma: 15, intelligence: 10 },
            { text: "Spread this knowledge", karma: -10, intelligence: 20 },
            { text: "Forget what you learned", karma: 5, intelligence: -15 }
        ]
    },
    {
        text: "Climate change: You can enforce brutal population control or watch civilization collapse. You...",
        options: [
            { text: "Enforce control", karma: -20, intelligence: 15 },
            { text: "Let nature decide", karma: -10, intelligence: -5 },
            { text: "Invest in technology", karma: 5, intelligence: 20 },
            { text: "Create sustainable communities", karma: 15, intelligence: 10 },
            { text: "Escape to space", karma: -15, intelligence: 5 },
            { text: "Engineer a plague", karma: -30, intelligence: 10 },
            { text: "Radical lifestyle changes", karma: 20, intelligence: 0 }
        ]
    },
    {
        text: "Your pet is suffering but treating them costs more than saving human lives. You...",
        options: [
            { text: "Treat your pet", karma: -5, intelligence: -10 },
            { text: "Euthanize humanely", karma: 10, intelligence: 10 },
            { text: "Donate to human causes", karma: 15, intelligence: 15 },
            { text: "Fundraise for both", karma: 5, intelligence: 5 },
            { text: "Let nature take course", karma: 0, intelligence: 0 }
        ]
    },
    {
        text: "You can prevent all war but humans lose capacity for passion. You...",
        options: [
            { text: "Prevent all war", karma: 5, intelligence: -5 },
            { text: "Preserve human nature", karma: 10, intelligence: 10 },
            { text: "Reduce aggression only", karma: 15, intelligence: 15 },
            { text: "Create opt-in system", karma: 20, intelligence: 20 },
            { text: "Target leaders only", karma: 0, intelligence: 5 },
            { text: "Replace with competitions", karma: 10, intelligence: 25 }
        ]
    },
    {
        text: "You're the last human. You can clone humanity but they'll never know love. You...",
        options: [
            { text: "Clone humanity", karma: 0, intelligence: 10 },
            { text: "Let humans extinct", karma: 10, intelligence: -5 },
            { text: "Create AI successors", karma: 5, intelligence: 20 },
            { text: "Search for other survivors", karma: 15, intelligence: 5 },
            { text: "Modify clones for love", karma: 20, intelligence: 15 },
            { text: "Join another species", karma: -5, intelligence: 15 }
        ]
    },
    {
        text: "A killer offers to reveal all their victims' locations for immunity. You...",
        options: [
            { text: "Grant full immunity", karma: -15, intelligence: 15 },
            { text: "Refuse any deal", karma: 10, intelligence: -10 },
            { text: "Partial immunity", karma: 0, intelligence: 10 },
            { text: "Trick them", karma: -5, intelligence: 20 },
            { text: "Torture for info", karma: -25, intelligence: 0 },
            { text: "Public trial deal", karma: 5, intelligence: 5 }
        ]
    },
    {
        text: "Reality is a game. You found the console commands. You...",
        options: [
            { text: "Delete suffering", karma: 10, intelligence: -10 },
            { text: "Give everyone commands", karma: 5, intelligence: -15 },
            { text: "Fix bugs only", karma: 15, intelligence: 20 },
            { text: "Create paradise", karma: 0, intelligence: 5 },
            { text: "Increase difficulty", karma: -20, intelligence: 10 },
            { text: "Add new features", karma: -5, intelligence: 15 },
            { text: "Leave untouched", karma: 20, intelligence: 10 }
        ]
    },
    {
        text: "You can absorb others' pain but it breaks you slowly. You...",
        options: [
            { text: "Absorb all pain", karma: 30, intelligence: -20 },
            { text: "Absorb selectively", karma: 15, intelligence: 10 },
            { text: "Refuse the ability", karma: -5, intelligence: 15 },
            { text: "Share with volunteers", karma: 20, intelligence: 20 },
            { text: "Use on enemies only", karma: -15, intelligence: 5 }
        ]
    },
    {
        text: "Your blood cures addiction but you have limited supply. You...",
        options: [
            { text: "Save family first", karma: -10, intelligence: 5 },
            { text: "Lottery system", karma: 10, intelligence: 15 },
            { text: "Highest bidder", karma: -20, intelligence: 10 },
            { text: "Worst cases first", karma: 20, intelligence: 10 },
            { text: "Research synthetic version", karma: 15, intelligence: 25 },
            { text: "Create blood farm", karma: -15, intelligence: 20 },
            { text: "Die giving all blood", karma: 35, intelligence: -25 }
        ]
    },
    {
        text: "Utopia requires erasing all cultural identities. You...",
        options: [
            { text: "Create utopia", karma: -10, intelligence: 10 },
            { text: "Preserve cultures", karma: 15, intelligence: 5 },
            { text: "Blend gradually", karma: 10, intelligence: 20 },
            { text: "Virtual preservation", karma: 5, intelligence: 15 },
            { text: "Let people choose", karma: 20, intelligence: 10 },
            { text: "Create new culture", karma: 0, intelligence: 5 }
        ]
    },
    {
        text: "You're judging the last war criminal, now saving refugees. You...",
        options: [
            { text: "Maximum sentence", karma: 5, intelligence: -5 },
            { text: "Consider redemption", karma: 15, intelligence: 15 },
            { text: "Community service", karma: 10, intelligence: 10 },
            { text: "Let victims decide", karma: 20, intelligence: 5 },
            { text: "Secret execution", karma: -20, intelligence: 0 },
            { text: "Truth commission", karma: 25, intelligence: 20 }
        ]
    },
    {
        text: "You can make everyone equally intelligent but lose all diversity of thought. You...",
        options: [
            { text: "Equalize intelligence", karma: -5, intelligence: 5 },
            { text: "Preserve diversity", karma: 15, intelligence: 15 },
            { text: "Boost minimum only", karma: 20, intelligence: 20 },
            { text: "Create intelligence castes", karma: -25, intelligence: 10 },
            { text: "Random redistribution", karma: 0, intelligence: 0 },
            { text: "Voluntary enhancement", karma: 10, intelligence: 25 }
        ]
    },
    // Hilarious and whimsical questions
    {
        text: "Your houseplant achieved consciousness and wants to discuss philosophy. You...",
        options: [
            { text: "Debate Kant vs Hegel", karma: 10, intelligence: 15 },
            { text: "Water it and leave", karma: -5, intelligence: -10 },
            { text: "Introduce it to other plants", karma: 15, intelligence: 5 },
            { text: "Start a plant podcast", karma: 5, intelligence: 20 },
            { text: "Smoke it", karma: -30, intelligence: -25 }
        ]
    },
    {
        text: "You sneeze and accidentally create a universe. You...",
        options: [
            { text: "Say 'bless me'", karma: 5, intelligence: 0 },
            { text: "Become its god", karma: -10, intelligence: 10 },
            { text: "Sneeze it away", karma: -20, intelligence: -15 },
            { text: "Give it to science", karma: 15, intelligence: 15 }
        ]
    },
    // Dark humor
    {
        text: "The Grim Reaper offers you internship. Your main duty: PowerPoint presentations. You...",
        options: [
            { text: "Add sick transitions", karma: -5, intelligence: 15 },
            { text: "Use Comic Sans", karma: -25, intelligence: -20 },
            { text: "Die of boredom", karma: 10, intelligence: 0 },
            { text: "Outsource to Hell", karma: -10, intelligence: 20 }
        ]
    },
    // Only one choice - lose karma no matter what
    {
        text: "You stepped on an ant. The ant universe demands justice. You must...",
        options: [
            { text: "Accept your fate", karma: -10, intelligence: 0 }
        ]
    },
    // Another single choice
    {
        text: "You forgot to say 'thank you' to the automatic door. You must...",
        options: [
            { text: "Live with eternal shame", karma: -5, intelligence: -5 }
        ]
    },
    // Super dark
    {
        text: "You're the last birthday clown during the apocalypse. You...",
        options: [
            { text: "Keep making balloon animals", karma: 20, intelligence: -15 },
            { text: "Use balloons for survival", karma: 5, intelligence: 20 },
            { text: "Become a death clown", karma: -30, intelligence: 10 },
            { text: "Juggle human skulls", karma: -25, intelligence: -20 }
        ]
    },
    // Zany
    {
        text: "Your shadow gained independence and started a TikTok channel. You...",
        options: [
            { text: "Copyright strike it", karma: -15, intelligence: 10 },
            { text: "Become its manager", karma: 5, intelligence: 15 },
            { text: "Start a rival channel", karma: -10, intelligence: 5 },
            { text: "Seek therapy together", karma: 15, intelligence: 10 },
            { text: "Live in darkness forever", karma: 10, intelligence: -20 }
        ]
    },
    // Absurdist
    {
        text: "You discover calories have feelings. Every diet is genocide. You...",
        options: [
            { text: "Become breatharian", karma: 15, intelligence: -25 },
            { text: "Eat only mean calories", karma: -10, intelligence: 10 },
            { text: "Start calorie therapy", karma: 10, intelligence: -5 },
            { text: "Ignore and stress eat", karma: -20, intelligence: 5 }
        ]
    },
    // Darkly whimsical
    {
        text: "Death takes a vacation. You're the temp. Your first client is your ex. You...",
        options: [
            { text: "Professional service", karma: 10, intelligence: 15 },
            { text: "Sudden vacation day", karma: -5, intelligence: -10 },
            { text: "Offer couples counseling", karma: 15, intelligence: -15 },
            { text: "Mix up the paperwork", karma: -15, intelligence: 5 },
            { text: "Send them to Cleveland", karma: -20, intelligence: 20 }
        ]
    },
    // Punishment no matter what
    {
        text: "You laughed at a dad joke. The universe is disappointed. You must...",
        options: [
            { text: "Accept your punishment", karma: -15, intelligence: -10 }
        ]
    },
    // Meta humor
    {
        text: "You realize you're in a game about karma. You...",
        options: [
            { text: "Try to speedrun enlightenment", karma: 0, intelligence: 25 },
            { text: "Karma farm shamelessly", karma: -20, intelligence: 20 },
            { text: "Question the developer's morals", karma: 5, intelligence: 15 },
            { text: "Alt+F4", karma: -50, intelligence: 50 },
            { text: "Leave a bad review", karma: -10, intelligence: 0 }
        ]
    },
    // Cosmic horror comedy
    {
        text: "Cthulhu awakens but just wants to play Mario Kart. You...",
        options: [
            { text: "Let it win", karma: 10, intelligence: 15 },
            { text: "Blue shell it", karma: -25, intelligence: -30 },
            { text: "Teach it to wavedash", karma: 15, intelligence: 10 },
            { text: "Suggest therapy", karma: 5, intelligence: -5 }
        ]
    },
    // Extremely dark
    {
        text: "You invented immortality but forgot to include an off switch. Everyone's tired. You...",
        options: [
            { text: "Oops", karma: -40, intelligence: -30 },
            { text: "Double down on debugging", karma: -10, intelligence: 10 },
            { text: "Start universe 2.0", karma: -20, intelligence: 15 },
            { text: "Become tech support forever", karma: 10, intelligence: -40 }
        ]
    },
    // Whimsical tragedy
    {
        text: "Your imaginary friend from childhood sues for abandonment. You...",
        options: [
            { text: "Settle out of court", karma: 10, intelligence: 10 },
            { text: "Counter-sue for rent", karma: -15, intelligence: 15 },
            { text: "Rekindke the friendship", karma: 20, intelligence: -10 },
            { text: "Plead insanity", karma: -5, intelligence: 20 }
        ]
    },
    // Another forced bad choice
    {
        text: "You divided by zero. Reality is collapsing. You must...",
        options: [
            { text: "Say 'my bad' as existence ends", karma: -25, intelligence: -20 }
        ]
    },
    // Retail horror
    {
        text: "You're a cashier. Customer wants to speak to God's manager. You...",
        options: [
            { text: "Escalate to Universe HR", karma: 5, intelligence: 10 },
            { text: "Become the manager", karma: -15, intelligence: 15 },
            { text: "Offer store credit", karma: 10, intelligence: 5 },
            { text: "Fake your own rapture", karma: -10, intelligence: 20 },
            { text: "Call security angels", karma: 0, intelligence: 15 }
        ]
    },
    // Surreal punishment
    {
        text: "You put pineapple on pizza. Italy declared war on your taste buds. You...",
        options: [
            { text: "Surrender immediately", karma: 5, intelligence: 10 },
            { text: "Double down with anchovies", karma: -25, intelligence: -15 },
            { text: "Flee to Hawaii", karma: 0, intelligence: 15 },
            { text: "Start pizza war crimes tribunal", karma: 10, intelligence: 20 }
        ]
    },
    // Existential slapstick
    {
        text: "You found the meaning of life. It's a typo. You...",
        options: [
            { text: "Fix it quietly", karma: 15, intelligence: 10 },
            { text: "Leave it for lols", karma: -20, intelligence: 15 },
            { text: "White-out everything", karma: -30, intelligence: -10 },
            { text: "Add more typos", karma: -15, intelligence: 20 },
            { text: "Become a copy editor", karma: 10, intelligence: 25 }
        ]
    },
    // Dark corporate humor
    {
        text: "Hell got privatized. You're the new CEO. First order of business...",
        options: [
            { text: "Casual Fridays", karma: 5, intelligence: 10 },
            { text: "Outsource torture", karma: -25, intelligence: 20 },
            { text: "Rebrand as 'Warm Springs'", karma: -15, intelligence: 25 },
            { text: "Install AC", karma: 20, intelligence: -10 },
            { text: "Merge with Heaven", karma: 0, intelligence: 30 }
        ]
    },
    // Forced single choice
    {
        text: "You killed a mosquito. Its family hired lawyers. You must...",
        options: [
            { text: "Pay blood money", karma: -10, intelligence: -5 }
        ]
    },
    // Absurdist nightmare
    {
        text: "Your dreams filed for workers' rights. They're on strike. You...",
        options: [
            { text: "Negotiate better REM cycles", karma: 10, intelligence: 15 },
            { text: "Hire scab nightmares", karma: -20, intelligence: 10 },
            { text: "Sleep without dreams", karma: 5, intelligence: -10 },
            { text: "Become an insomniac", karma: -10, intelligence: 5 }
        ]
    },
    // Cosmic joke
    {
        text: "God admits everything was procedurally generated. You're an NPC. You...",
        options: [
            { text: "Demand better dialogue options", karma: 5, intelligence: 20 },
            { text: "Speedrun the main quest", karma: -10, intelligence: 15 },
            { text: "Glitch through reality", karma: -15, intelligence: 25 },
            { text: "Leave a Steam review", karma: 0, intelligence: 10 },
            { text: "Start a side quest", karma: 15, intelligence: 5 }
        ]
    },
    // Morbid whimsy
    {
        text: "The Grim Reaper lost his scythe. Asks to borrow your kitchen knife. You...",
        options: [
            { text: "Lend the knife", karma: 10, intelligence: -10 },
            { text: "Suggest a spoon", karma: 15, intelligence: -20 },
            { text: "Offer a gift card", karma: 5, intelligence: 15 },
            { text: "Hide all sharp objects", karma: -10, intelligence: 10 }
        ]
    },
    // Toilet humor philosophy
    {
        text: "You clogged the toilet at the edge of the universe. You...",
        options: [
            { text: "Call cosmic plumber", karma: 10, intelligence: 10 },
            { text: "Flush again harder", karma: -30, intelligence: -25 },
            { text: "Leave anonymous note", karma: -15, intelligence: 5 },
            { text: "Create new universe", karma: -20, intelligence: 15 },
            { text: "Blame dark matter", karma: -10, intelligence: 20 }
        ]
    },
    // Final single choice doom
];