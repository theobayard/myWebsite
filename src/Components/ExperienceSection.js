import ExperienceItem from './ExperienceItem'
import PageSection from './PageSection'

function ExperienceSection() {
    const expList = [
        {
            title:"Researcher",
            organization:"Harvey Mudd",
            timeframe: "May 2020 - Current",
            description: "Developed software R&D skills through experience refactoring/building on top of a topic modeling research tool and by conducting and analyzing interviews. This work was ultimately presented at WeCNLP and another paper and user interviews are currently being developed."
        },
        {
            title:"Research Assistant",
            organization:"University of Colorado Boulder",
            timeframe: "August 2017 - May 2018",
            description: "Worked at the Emotional Decision Judgment and Intuition Lab at CU. The research ultimately received second place in its division at the state science fair. This project required extensive work with the programming language R to analyze the data."
        }
    ]

    const expItems = expList.map((exp,index) => {
        return(
            <ExperienceItem
                title={exp.title}
                organization={exp.organization}
                timeframe={exp.timeframe}
                description={exp.description}
            />
        )
    })

    return(
        <PageSection id={"experience"} title={"Experience"}>
            {expItems}
        </PageSection>
    )
    
}

export default ExperienceSection;