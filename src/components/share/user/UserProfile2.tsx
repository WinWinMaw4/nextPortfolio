import Image from "next/image";
import React from "react";
import profileImage from "@/app/assets/images/diamondWithe520px.png";

const UserProfile2 = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-6">
          <div className="flex items-center space-x-4">
            <Image
              src={profileImage}
              alt="Win Win Maw"
              width={120}
              height={120}
              className="rounded-full border-4 border-white"
            />
            <div>
              <h1 className="text-2xl font-bold">Win Win Maw</h1>
              <p className="text-sm">
                Web Developer | UI/UX Designer | React & Laravel Enthusiast
              </p>
              <p className="mt-2 text-sm">Availability: Freelance</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 space-y-8">
          {/* About Me Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">About Me</h2>
            <p className="text-gray-600">
              I am a skilled web developer with over two years of experience in UI/UX design, frontend development using React, backend development with Laravel, and strong leadership skills. I thrive on creating visually captivating and user-friendly designs, as well as building robust web applications that exceed client expectations.
            </p>
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "UI/UX Design",
                "React.js",
                "Laravel",
                "Leadership",
                "Frontend Development",
                "Backend Development",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Work Experience Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Experience</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Senior Frontend Developer</h3>
                <p className="text-sm text-gray-600">
                  Axle Tech Co., Ltd (Sep 2024 - Present)
                </p>
                <p className="text-gray-600">React.js | Leadership</p>
              </div>
              <div>
                <h3 className="font-semibold">Full Stack Developer</h3>
                <p className="text-sm text-gray-600">
                  Axle Tech Co., Ltd (Sep 2022 - Aug 2024)
                </p>
                <p className="text-gray-600">
                  React.js | Laravel | Communication
                </p>
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
                  management, and news section.
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
            </ul>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Education</h2>
            <div>
              <h3 className="font-semibold">B.Sc. in Computer Science</h3>
              <p className="text-sm text-gray-600">
                Dagon University (2016 - 2024)
              </p>
              <p className="text-gray-600">Final Year | Volleyball Team</p>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <p>
              <strong>Email:</strong> winwinmaw@example.com
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://linkedin.com/in/winwinmaw"
                className="text-blue-500"
              >
                linkedin.com/in/winwinmaw
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile2;
