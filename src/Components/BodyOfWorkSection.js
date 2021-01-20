import BodyOfWorkItem from './BodyOfWorkItem'
import PageSection from './PageSection'

function BodyOfWorkSection() {
    const workList = [
        {
            name: "jsLDA 2.0",
            link: "https://www.cs.hmc.edu/~xanda/jsLDA/",
            stack: "JavaScript, React, d3",
            timeframe: "May 2020 - Current",
            description: "Refactoring and adding functionality to the popular topic modeling tool jsLDA.",
        },
        {
            name: "redditPulse",
            link: "https://github.com/theobayard/redditPulse",
            stack: "JavaScript, React, pushshift (a RESTful API)",
            timeframe: "August 2020 - Current",
            description: "Creating a website for easily extracting reddit data for research using jsLDA 2.0.",
        },
        {
            name: "TiltyBall",
            link: "https://github.com/theobayard/sw-engineering-fall-2020",
            stack: "Swift",
            timeframe: "September 2020 - November 2020",
            description: "Thoroughly researched and planned portions of an iOS app that would bring the fun of 3D marble labyrinths to your mobile device.",
        },
        {
            name: "Reddit Linguistic Analysis",
            stack: "Python, SQL, Pandas, Gensim, Plotly, matplotlib, MALLET",
            link: "https://github.com/theobayard/Reddit-Research",
            timeframe: "Spring 2020",
            description: "Used topic modeling to carry out a discourse analysis of the subreddits of political candidates during the 2016 presidential election.",
        },
        {
            name: "Reddit Sentiment Analysis Tool",
            stack: "Python, matplotlib",
            link: "https://github.com/JRice15/sentimental",
            timeframe: "Spring 2020",
            description: "Created the backend for a web app that analyzes and compares the sentiment of various queries of reddit data. This was done in 32 hours as part of the SLO hacks hackathon."
        },
        {
            name: "Crazy Cacti",
            stack: "C++",
            link: "https://drive.google.com/file/d/1IiabYNAgRy6xT5Yq4JxTyBr4jifUXGx4/view?usp=sharing",
            timeframe: "Spring 2019",
            description: "Lead a team to create a game using UML and OO principles.",
        },
        {
            name: "Augmented Reality Trash Toss",
            stack: "Swift",
            timeframe: "2018",
            description: "Developed an AR trash toss game over the course of 12 hours at the 5C hackathon. Awarded First Place in Division.",
        },

    ]

    const workItems = workList.map((work,index) => {
        return(
            <BodyOfWorkItem
                name={work.name}
                stack={work.stack}
                link={work.link}
                timeframe={work.timeframe}
                description={work.description}
            />
        )
    })

    return(
        <PageSection id={"bodyofwork"} title={"Body Of Work"}>
            {workItems}
        </PageSection>
    )
    
}

export default BodyOfWorkSection;