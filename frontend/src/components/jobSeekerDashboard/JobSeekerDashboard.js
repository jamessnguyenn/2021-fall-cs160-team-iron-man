import React from "react";
import NavBar from "../jobSeekerNav/JobSeekerNav";
import { Row } from "react-bootstrap";
import JobPostCard from "./JobPostCard";

export default function JobSeekerDashboard() {
  let jobList = [
    {
      companyLogo:
        "https://www.ibm.com/brand/experience-guides/developer/8f4e3cc2b5d52354a6d43c8edba1e3c9/02_8-bar-reverse.svg",
      jobTitle: "UX Designer",
      company: "IBM",
      city: "San Francisco",
      state: "CA",
      timePeriod: "2 days ago",
      requirement: [
        "Full Time",
        "In person/Remote",
        "3+ years of industry experience",
      ],
      description:
        "Intro: This is a summer 2022 position. Appicants should be rising Junior or rising Senior students pursuing a Bachelor's degree in the areas of Computer Science, Data Science, Computer Engineering, Analytics, Electrical Engineering, Information Technology or similar disciplines.",
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
        "Intro: This is a summer 2022 position. Appicants should be rising Junior or rising Senior students pursuing a Bachelor's degree in the areas of Computer Science, Data Science, Computer Engineering, Analytics, Electrical Engineering, Information Technology or similar disciplines.",
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
        "3+ years of industry experience",
      ],
      description:
        "Intro: This is a summer 2022 position. Appicants should be rising Junior or rising Senior students pursuing a Bachelor's degree in the areas of Computer Science, Data Science, Computer Engineering, Analytics, Electrical Engineering, Information Technology or similar disciplines.",
    },
  ];
  return (
    <>
      <NavBar />
      <div className="container mt-4 mb-4">
        <Row className="">
          <div>
            {jobList.map((j, i) => {
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
                />
              );
            })}
          </div>
        </Row>
      </div>
    </>
  );
}
