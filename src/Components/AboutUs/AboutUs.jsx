import { useState } from "react";
import styles from "./AboutUs.module.css";
import Dashboard from "../Dashborad/Dashboard";
import Header from "../Header/Header";
import { FiChevronRight } from "react-icons/fi";

const AboutUs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = [
        {
            question: "Project Overview",
            answer:
                "CodePalette is a cutting-edge platform designed to empower developers by providing streamlined tools, collaborative features, and an interactive environment to write, test, and share code seamlessly.",
        },
        {
            question: "Problem Statement",
            answer:
                "Developers often face challenges like fragmented tools, lack of collaboration, and inefficient workflows. CodePalette addresses these issues by offering an all-in-one solution tailored to developers' needs.",
        },
        {
            question: "Project Objectives",
            answer:
                "Our goals include enhancing developer productivity, fostering collaboration, and reducing the learning curve for new developers by providing an intuitive platform.",
        },
        {
            question: "Methodology/Approach",
            answer:
                "We utilize modern web technologies and frameworks, emphasize user feedback, and continuously iterate to ensure the platform remains developer-friendly and innovative.",
        },
        {
            question: "Team Composition",
            answer:
                "Our team consists of experienced developers, UI/UX designers, and project managers, all passionate about creating a better coding experience.",
        },
        {
            question: "Project Impact",
            answer:
                "CodePalette has the potential to revolutionize how developers work, enabling faster project completion, better collaboration, and improved code quality.",
        },
        {
            question: "Project Values",
            answer:
                "Our project is driven by values such as innovation, collaboration, and a commitment to open-source principles.",
        },
        {
            question: "Timeline and Milestones",
            answer:
                "The project is structured into phases, with key milestones like feature launches, beta testing, and user onboarding planned over the next 12 months.",
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <Dashboard />
            </div>
            <Header />
            <div className={styles.mainContent}>
                {accordionData.map((item, index) => (
                    <div className={styles.accordionItem} key={index}>
                        <div
                            className={styles.accordionHeader}
                            onClick={() => toggleAccordion(index)}
                        >
                            <span>{item.question}</span>
                            <FiChevronRight
                                className={`${styles.icon} ${
                                    activeIndex === index ? styles.rotate : ""
                                }`}
                            />
                        </div>
                        <div
                            className={`${styles.accordionContent} ${
                                activeIndex === index ? styles.open : ""
                            }`}
                        >
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutUs;
