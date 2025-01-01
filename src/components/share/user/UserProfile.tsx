import Image from 'next/image';
import React from 'react';
import profileImage from "@/app/assets/images/diamondWithe520px.png";

const UserProfile = () => {
    return (
        <div className="min-h-screen  text-black dark:text-white p-8 w-full bg-white dark:bg-primary">
            <div className="max-w-4xl mx-auto rounded-lg overflow-hidden">
                {/* Header Section */}
                <div className="bg-primary-600  border-0 border-b border-white/20 text-white p-6">
                    <div className="flex items-center space-x-4">
                        <Image
                            src={profileImage}
                            alt="Profile Image"
                            width={100}
                            height={100}
                            className="rounded-full border-4 border-white"
                        />
                        <div>
                            <h1 className="text-2xl font-bold">Win Win Maw</h1>
                            <p className="text-sm"> Senior Frontend Developer | Fullstack Designer | UI/UX Designer | React & Laravel Enthusiast</p>
                            <p className="mt-2 text-sm">Availability: Freelance</p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="p-6 space-y-8">
                    {/* About Me Section */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">About Me</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            {/* Passionate developer with 5+ years of experience in building scalable web applications and crafting beautiful, user-friendly interfaces. Adept at working with React, Node.js, and Tailwind CSS. */}
                            Passionate and creative Senior Frontend Developer with a strong eye for innovative design and user
                            friendly interfaces. I thrive on learning new technologies, solving complex problems, and turning ideas
                            into functional, beautiful applications. Known for being hardworking, honest, and dedicated, I bring
                            excellent communication skills and a collaborative spirit to every project. With a love for coding and
                            design, I stay active and engaged in my work, always striving for the best results.

                        </p>
                    </div>

                    {/* Skills Section */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Skills</h2>
                        <div className="flex flex-wrap gap-2">
                            {['React JS', 'Next.js', 'AWS', 'TypeScript', 'Tailwind CSS', 'REST API', 'Three.js', 'PHP', 'Laravel', 'Git Hub', 'Figma', 'Graphic Design'].map(skill => (
                                <span key={skill} className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm">
                                    {skill}
                                </span>
                            ))}
                            {['Teamwork', 'Leadership', 'Quick Leaner', 'Adaptability', 'Creative', 'Tolerance'].map(skill => (
                                <span key={skill} className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>

                    </div>

                    {/* Work Experience Section */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold">Senior Frontend Developer</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Axle Tech Co., Ltd - Sep 2024 to Present
                                </p>

                                <p className="text-gray-600 dark:text-gray-500">
                                    Leading frontend development projects, I design and deliver user-friendly interfaces using Figma and modern technologies. I collaborate closely with cross-functional teams to ensure alignment between design and functionality while overseeing project timelines. As a leader, I assign tasks, mentor junior developers, and provide guidance to elevate their skills and performance. Successfully managed challenges, such as API delays, by coordinating solutions with the backend team, ensuring on-time project delivery with exceptional client satisfaction.
                                </p>
                                {/* <p className="text-gray-600">React.js | Leadership</p> */}
                            </div>
                            <div>
                                <h3 className="font-semibold">Full Stack Designer</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    Axle Tech Co., Ltd - Sep 2022 to Sep 2024
                                </p>

                                <p className="text-gray-600 dark:text-gray-500">
                                    As a Full Stack Designer, I focused on crafting visually compelling and functional user interfaces, utilizing Figma and front-end technologies. I played a key role in project success by collaborating with developers to integrate designs seamlessly into the development process. Additionally, I supported team productivity by mentoring junior members and providing feedback to improve their contributions while maintaining high standards for project outcomes.

                                </p>
                                {/* <p className="text-gray-600">React.js | Leadership</p> */}
                            </div>

                        </div>
                    </div>

                    {/* Projects Section */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Projects</h2>
                        <ul className="space-y-4">
                            <li>
                                <h3 className="font-semibold">Live Streaming Platform</h3>
                                <p className="text-sm text-gray-600">
                                    Nov 2023 - Present (Axle Tech Co., Ltd)
                                </p>
                                <p className="text-gray-600">
                                    A feature-rich streaming platform inspired by Twitch,
                                    including real-time chat, subscriptions, and advanced
                                    streaming tools.
                                </p>
                            </li>
                            <li>
                                <h3 className="font-semibold">Safe Property Real Estate</h3>
                                <p className="text-sm text-gray-600">
                                    Associated with Axle Tech Co., Ltd
                                </p>
                                <p className="text-gray-600">
                                    Platform for property listings with admin dashboard, property
                                    management, and news events section.
                                </p>
                            </li>
                            <li>
                                <h3 className="font-semibold">
                                    Swal Mala Xiang Guo - Food Ordering
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Associated with Axle Tech Co., Ltd
                                </p>
                                <p className="text-gray-600">
                                    Comprehensive food delivery platform with POS system and
                                    admin dashboard.
                                </p>
                            </li>

                            <li>
                                <h3 className="font-semibold">
                                    Sun Myat Tun Construction
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Associated with Axle Tech Co., Ltd
                                </p>
                                <p className="text-gray-600">
                                    This is real estate project for Myanmar construction group. It has include showing building project and price(detail), tier level for each customer, lock unlock section according tier level,
                                </p>
                            </li>
                        </ul>
                    </div>


                    {/* Education Section */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Education</h2>
                        <div className='mb-4'>
                            <h3 className="font-semibold">B.Sc. in Computer Science</h3>
                            <p className="text-sm text-gray-500">
                                University of Dagon (2016 - 2024)
                            </p>
                            <p className='text-gray-500'>Activities and societies: Volleyball Team</p>
                        </div>
                        <div className='mb-4'>
                            <h3 className="font-semibold">Fullstack Developer</h3>
                            <p className="text-sm text-gray-500">
                                MMS IT (2021 - Present)
                            </p>
                            <p className='text-gray-500'>Special Web Design | Web Development | Laravel</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Studies English in SLD Education Language Center</h3>
                            <p className="text-sm text-gray-500">
                                SLD Education Language Center (2024 - Present)
                            </p>
                            <p className="text-gray-500">Intermediate</p>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Contact</h2>
                        <p>
                            <strong>Email:</strong> mawinwinmaw4@gmail.com
                        </p>
                        <p>
                            <strong>Phone:</strong> +959 960269033
                        </p>
                        <p>
                            <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/winwinmaw01" className="text-blue-500">linkedin.com/in/winwinmaw01</a>
                        </p>
                        <p>
                            <strong>GitHub:</strong> <a href="https://github.com/WinWinMaw4" className="text-blue-500">github.com/WinWinMaw4</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
