import React from "react";

function About() {
  return (
    <div
      id="About"
      className=" grid place-content-center justify-items-center bg-gray-100 h-screen"
    >
      <img
        className="rounded-full"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQG9HFcJuYPVbw/profile-displayphoto-shrink_200_200/0/1613924415563?e=1635379200&v=beta&t=bqs7z0IWk6VtvTBVnnpUsBdq01B7CUct2nL87sCKFp4"
        alt=""
      />
      <p className="text-center text-lg font-medium p-10">
        Im a Data Scientist (data-driven person) who enjoy finding solution to
        most of my problems through the data,by using AI and ML/DL tools and
        technologies to do the Data Mining so i can extract and transform
        information from raw data. With all of the new social media, the world
        has encounter a massive amount of data,that become a source that we can
        use to study different topics/people : how they feel,what's drive
        them,what's the preferences...
      </p>
    </div>
  );
}

export default About;
