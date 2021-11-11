import React, { useState } from "react";
import NavBar from "../jobSeekerNav/JobSeekerNav";
import { Row } from "react-bootstrap";
import JobPostCard from "./JobPostCard";

export default function JobSeekerDashboard() {
  const [currPost, setCurrPost] = useState(1);
  const [postPerPage] = useState(1);

  let jobList = [
    {
      companyLogo:
        "https://www.ibm.com/brand/experience-guides/developer/8f4e3cc2b5d52354a6d43c8edba1e3c9/02_8-bar-reverse.svg",
      jobTitle: "UX Designer Intern",
      company: "IBM",
      city: "San Francisco",
      state: "CA",
      timePeriod: "2 days ago",
      requirement: [
        "Internship",
        "In person/Remote",
        "0+ years of industry experience",
      ],
      fullRequirements: [
        "BS in Computer Science or other technical areas",
        "Experience in designing UI and UX",
        "Must be familiar with programming languages such as JavaScript, HTML, CSS",
        "Must know one or more tools such as Figma, Photoshop, Adobe XD, etc."
      ],
      description:
        "Intro: This is a summer 2022 position. Appicants should be rising Junior or rising Senior students pursuing a Bachelor's degree in the areas of Computer Science, Data Science, or similar disciplines. The internship will be 12-14 weeks long.",
      benefits: [
        "Medical insurance",
        "Dental insurance",
        "Paid time off",
        "401K match",
        "Bonus"
      ],
      businessEmail: "ibm-career@ibm.com",
      salary: "$45/hour"
    },

    {
      companyLogo:
        "https://seeklogo.com/images/N/netflix-n-logo-0F1ED3EBEB-seeklogo.com.png",
      jobTitle: "Software Engineer",
      company: "Netflix",
      city: "San Francisco",
      state: "CA",
      timePeriod: "5 days ago",
      requirement: [
        "Full Time",
        "In person/Remote",
        "3+ years of industry experience",
      ],
      description:
        "Intro: This is a full-time position. Appicants should have a Bachelor's degree or Master's degree in the areas of Computer Science, Data Science, Computer Engineering, Analytics, Electrical Engineering, Information Technology or similar disciplines.",
      fullRequirements: [
        "BS/MS in Computer Science or Computer Engineer, Data Science, Analytics, Electrical Engineering, Information Technology, or other technical areas",
        "3+ years of software engineering experience in industry",
        "Familiarilty with programming languages such as Java, Python, C++, JavaScript, SQL, and other frameworks",
        "Familiarity with  AWS infrastructures"
      ],
      benefits: [
          "Medical insurance",
          "Dental insurance",
          "Paid time off",
          "401K match, Maternity and Parental leave",
          "Annual Bonus",
          "Commuter Benefits"
      ],
      businessEmail: "netflix-career@netflix.com",
      salary: "$110000 - $150000 a year"
    },

    {
      companyLogo:
        "https://oceansquare.com/wp-content/uploads/2018/04/tesla-logo-500.jpg",
      jobTitle: "Frontend Engineer",
      company: "Tesla",
      city: "San Jose",
      state: "CA",
      timePeriod: "1 day ago",
      requirement: [
        "Full Time",
        "In person/Remote",
        "1+ year of industry experience",
      ],
      description:
        "Intro: This is a full-time position. Appicants should have a Bachelor's degree/ Master's degree or be rising Junior/Senior students pursuing a Bachelor's degree or Master's degree in the areas of Computer Science, Data Science, Computer Engineering, Analytics, Electrical Engineering, Information Technology or similar disciplines.",
      fullRequirements: [
        "BS/MS in Computer Science or Computer Engineer, or other technical areas",
        "1+ year of software engineering experience in industry",
        "Experience in using ReactJS/Native, Webpack, Jest, etc.",
        "Familiarity with programming languages such as Java, Python, JavaScript, HTML, CSS, etc.",
        "Experience with integrating with REST API"
      ],
      benefits: [
        "Medical insurance",
        "Dental and vision insurance",
        "Paid time off",
        "401K match",
        "Commuter benefits"
      ],
      businessEmail: "tesla-career@tesla.com",
      salary: "$105000 - $145000 a year"
    },
  ];

  const indexOfLastPost = currPost * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currJobList = jobList.slice(indexOfFirstPost, indexOfLastPost);

  const changePost = () => {
    currPost >= jobList.length ? setCurrPost(1) : setCurrPost(currPost + 1);
  };

  return (
    <>
      <NavBar />
      <div className="container mt-md-4 mb-md-4">
        <Row>
          <div>
            {currJobList.map((j, i) => {
              return (
                <JobPostCard
                  key={i}
                  companyLogo={j.companyLogo}
                  jobTitle={j.jobTitle}
                  company={j.company}
                  city={j.city}
                  state={j.state}
                  timePeriod={j.timePeriod}
                  requirement={j.requirement}
                  description={j.description}
                  changePost={changePost}
                  fullRequirements={j.fullRequirements}
                  benefits={j.benefits}
                  businessEmail={j.businessEmail}
                  salary={j.salary}
                />
              );
            })}
          </div>
        </Row>
      </div>
    </>
  );
}
