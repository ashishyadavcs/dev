import Banner from "@/components/web/banner";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { animateList } from "utils/animation";

const Page = () => {
    const [maths, setmaths] = useState([]);
    const mathgen = e => {
        e.preventDefault();
        const arr = [];
        for (let i = 0; i <= 10; i++) {
            const num1 = Math.floor(Math.random() * 10) + 1;
            const num2 = Math.floor(Math.random() * 10) + 1;
            const answer = num1 + num2;
            arr = [...arr, { num1, num2, answer }];
        }
        setmaths(prev => [...prev, ...arr]);
    };
    animateList(".adw li");
    const adw = [
        {
            title: `Different Learning Styles`,
            desc: `Not all students learn in the same way. Some students may struggle with traditional teaching methods but excel when using gamified approaches. A math game can cater to different learning styles.`,
        },
        {
            title: `Math Skill Improvement: `,
            desc: `Math games can be an effective and engaging way to improve math skills. They often make learning fun and interactive, which can help students better understand and retain mathematical concepts.`,
        },
        {
            title: `Competition and Motivation`,
            desc: `Many math games incorporate elements of competition, which can motivate students to improve their math skills. They may strive to earn higher scores, beat their previous records, or compete with their peers.`,
        },
    ];
    return (
        <>
            <Banner
                image
                title="jordan’s Math Work<br>Free Games and Worksheets"
                description={``}
            />
            <Jordan className="container my-4">
                <NextSeo
                    title="✅Jordan's Math Work, Games for Children class 1-8"
                    description="Discover a wide range of free PDF learning materials for children. Jordan's math work games Download textbooks, worksheets, and more. Enhance their education today! Get access now."
                />
                <div className="row">
                    <div className="col-md-6">
                        <p>
                            <b>Introduction :</b> &nbsp; Mathematics often proves both captivating
                            and daunting for students worldwide. Through the lens of "Jordan's Math
                            Work," we embark on a 3000-word journey, unraveling the experiences,
                            trials, and tribulations faced by students in the realm of mathematics.
                        </p>
                        <ul className="adw">
                            {adw.map((li, i) => (
                                <li>
                                    <h3 index={i + 1}>{li.title}</h3>
                                    <p>{li.desc}</p>
                                </li>
                            ))}
                        </ul>
                        <p>
                            Our focus will be on how "Jordan's Math Work" embodies the challenges
                            encountered throughout the educational journey, as well as strategies
                            for optimizing this path to foster a greater understanding and
                            enthusiasm for math.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <Image
                            className="img"
                            layout="responsive"
                            objectFit="contain"
                            height={800}
                            width={1000}
                            alt="Jordan's Math Work"
                            src="/images/jordans-math-work-1.png"
                        />
                    </div>
                </div>
                <div className="gen">
                    <div className="table">
                        <table>
                            <thead></thead>
                            <tbody>
                                {maths.map(p => (
                                    <tr
                                        style={{ color: `#${Math.round(Math.random() * 1000000)}` }}
                                    >
                                        <td>{p.num1}</td>
                                        <td>+</td>
                                        <td>{p.num2}</td>
                                        <td>=</td>
                                        <td>
                                            <input
                                                onChange={e => {
                                                    e.currentTarget.value == p.answer
                                                        ? e.currentTarget.classList.add("correct")
                                                        : e.currentTarget.classList.remove(
                                                              "correct"
                                                          );
                                                }}
                                                type="text"
                                                id={p.answer}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="d-flex">
                        <button onClick={mathgen} className="theme-btn mx-auto my-4">
                            create worksheet {maths.length > 0 && "+"}
                            {/* <form onSubmit={mathgen}>
                            <select>
                                <option selected>+</option>
                                <option>-</option>
                                <option>x</option>
                                <option>/</option>
                            </select>
                            <input placeholder="number of problem" type="number"/>
                        </form> */}
                        </button>
                        {maths.length > 0 && (
                            <button
                                onClick={e => setmaths([])}
                                className="theme-btn btn-white mx-auto my-4"
                            >
                                reset worksheet
                            </button>
                        )}
                    </div>
                </div>
                <h2>Chapter 1: Jordan's Math Work</h2> - A Strong Foundation
                <p>
                    We commence our exploration of Jordan's mathematical odyssey from elementary
                    school. This is where the bedrock of mathematical comprehension is laid.
                    However, the early years of mathematical initiation can be bewildering for young
                    learners, such as Jordan. It's during this period that teachers, as well as
                    parents, assume a pivotal role in helping students like Jordan establish a
                    robust mathematical base. Formative Encounters: Initial experiences in Jordan's
                    math journey involve fundamental arithmetic. Addition and subtraction concepts
                    are brought to life through tangible objects, rendering them more engaging.
                    Teacher's Influence: Competent educators create a conducive learning
                    environment, fostering curiosity and a growth-oriented mindset. They inspire
                    students like Jordan to welcome challenges rather than retreat from them.
                </p>
                <h2>Chapter 2: Navigating the Middle School Maze</h2>
                <p>
                    Middle school marks the next stage in Jordan's mathematical voyage, introducing
                    more intricate math concepts such as algebra, geometry, and fractions. This
                    phase can significantly influence a student's confidence and attitude toward
                    math. In this chapter, we delve into the hurdles faced by Jordan and others
                    navigating this juncture. Confronting Algebraic Apprehensions: Many students
                    find algebra daunting, owing to its utilization of variables and equations.
                    Effective guidance and practice can demystify these concepts for Jordan and
                    others. Embracing Geometry's Visual Charm: Geometry introduces students like
                    Jordan to the art of visual problem-solving, requiring a shift in thought from
                    numbers to shapes and angles.
                </p>
                <h2>Chapter 3: The High School Challenge</h2>
                <p>
                    As Jordan advances into high school, the complexity of math escalates further.
                    The curriculum introduces advanced math topics such as calculus, statistics, and
                    trigonometry. This phase assumes paramount importance, as it shapes future
                    academic and career choices, necessitating that students like Jordan conquer
                    their math apprehensions. Diving into Calculus: Jordan grapples with the
                    intricacies of calculus, which revolves around understanding rates of change and
                    integration, vital skills for numerous scientific and engineering fields.
                    Statistics and Data Mastery: In our data-rich world, Jordan learns to decipher
                    data, make informed decisions, and comprehend probability, a skillset
                    indispensable in contemporary society.
                </p>
                <h2>Chapter 4: Technology's Role in Jordan's Math Work</h2>
                <p>
                    In this digital age, technology has become an integral facet of education. We
                    explore how technology can amplify Jordan's math learning experience.
                    Interactive Educational Platforms: Educational websites and apps offer
                    interactive exercises, simulations, and tutorials, making math more engaging and
                    accessible for students like Jordan. Online Tutoring Resources: Virtual tutoring
                    sessions furnish personalized assistance for Jordan when grappling with complex
                    math problems. Online resources like Khan Academy and Wolfram Alpha prove
                    invaluable aids.
                </p>
                <h2>Chapter 5: Conquering Math Anxiety and Fostering Confidence</h2>
                <p>
                    Math anxiety is a prevalent issue among students, impacting Jordan and many
                    others. In this chapter, we detail strategies to combat math anxiety and nurture
                    self-assurance. The Power of a Positive Mindset: Encouraging a growth mindset,
                    where mistakes are regarded as opportunities for growth, can heighten Jordan's
                    confidence and motivation. The Journey of Practice and Perseverance: Consistent
                    practice is paramount to mastering math. Jordan discovers that patience and
                    persistence render even the most arduous math problems surmountable.
                </p>
                <h2>Chapter 6: The Real-World Utility of Jordan's Math Work</h2>
                <p>
                    Mathematics transcends the boundaries of the classroom; it finds practical
                    applications in real-life scenarios, augmenting the relevance and significance
                    of Jordan's math education. Financial Competence: Jordan acquires proficiency in
                    budgeting, comprehending interest rates, and navigating investments - skills
                    essential for managing personal finances. Exploring STEM Career Avenues: Jordan
                    unlocks a vast realm of potential careers in science, technology, engineering,
                    and mathematics (STEM) fields. Math serves as the gateway to an array of
                    exciting professional prospects.
                </p>
                <h2>Chapter 7: Picturing Jordan's Math Work in the Future</h2>
                <p>
                    As Jordan nears the culmination of formal math education, we cast our gaze
                    toward the possibilities and potential challenges awaiting Jordan in the future.
                    A commitment to lifelong learning and adaptability emerges as pivotal elements,
                    given the ever-evolving landscape of technology and society. The Path of
                    Continuous Learning: Jordan comprehends that math transcends the boundaries of
                    the classroom, embracing the concept that learning math persists long after
                    formal education concludes. Embracing Change: In a world marked by constant
                    transformation, adaptability becomes the cornerstone of success. Jordan's math
                    education equips them with problem-solving skills that transcend specific
                    mathematical topics, preparing them to navigate future uncertainties.
                </p>
                <h2>Conclusion: Jordan's Math Work Unveiled</h2>
                <p>
                    Jordan's mathematical journey serves as a testament to the latent potential
                    within all students, showcasing that with the right guidance, support, and
                    resources, anyone can excel in mathematics. Beyond the confines of mere numbers,
                    mathematics becomes a dynamic tool, empowering individuals to decipher intricate
                    problems, make informed decisions, and contribute to a brighter, more promising
                    future. In summation, Jordan's math work symbolizes the various facets of the
                    educational expedition, highlighting the struggles, triumphs, and growth that
                    ensue for students like Jordan. Math is not a mere subject; it is a potent
                    instrument that enables individuals to unravel intricate conundrums, embrace
                    learning, and effect positive transformations on both personal and global
                    scales.
                </p>
            </Jordan>
        </>
    );
};

export default Page;
const Jordan = styled.div`
    @keyframes cvprogress {
        99% {
            width: 100%;
        }
        
    }
    .adw {
        list-style: none;
        margin: 20px 0;
        li {
            background:#e5fbf5;
            position: relative;
            padding: 15px;
            max-height: 100px;
            overflow: hidden;
            transition: all 4s;
            cursor: pointer;
            &.active {
                max-height: 400px;
            }
            &:before {
                content: "";
                direction: ltr;
                width: 0%;
                height: 3px;
                position: absolute;
                top: 0;
                left: 3px;
                background: #00856c;
                transition: width 0.3s;
            }
            &:not(:last-child) {
                margin-bottom: 20px;
            }
            &.active::before {
                animation: cvprogress 3s linear forwards;
            }
            h3 {
                font-size: 20px;
                line-height: 32px;
                font-weight: 700;
                display: flex;
                align-items: center;
                gap: 10px;
                &:before {
                    content: attr(index);
                    display: inline-block;
                    
                    --size:30px;
                    height:var(--size);
                    width:var(--size);
                    background:teal;
                    color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                }
            }
            &:not(.active) p {
                display: none;
            }
        }
    }
    .img {
        height: auto;
        margin: 1rem auto;
    }
    .gen {
        margin: 30px 0;
    }
    .theme-btn {
        display: block;
        position: relative;
        margin: 20px auto !important;
        form {
            background: inherit;
            padding: 20px;
            width: max-content;
            select {
                padding: 10px;
                width: 100%;
            }
            position: absolute;
            top: 105%;
            left: 0;
        }
    }
    table {
        tr {
            border: 2px solid;
            &:has(.correct) {
                background: #d6ffd6;
            }
            td {
                padding: 20px;
                font-size: 20px;
                font-weight: bold;
                input {
                    width: 100px;
                    border: 2px dashed;
                }
            }
        }
        border-collapse: collapse;
        margin: 30px auto;
        width: 100%;
    }
`;
