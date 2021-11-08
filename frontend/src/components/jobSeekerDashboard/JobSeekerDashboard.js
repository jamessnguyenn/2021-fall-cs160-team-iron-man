import React from "react";
import NavBar from "../jobSeekerNav/JobSeekerNav";
import { Row } from "react-bootstrap";
import JobPostCard from "./JobPostCard";

export default function JobSeekerDashboard() {
  let jobList = [
    {
      companyLogo: "",
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
      companyLogo: "",
      jobTitle: "Software Engineer",
      company: "OmniVision Technologies, Inc.",
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
      companyLogo: "",
      jobTitle: "Frontend Engineer",
      company: "IBM",
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
      {/* <div style={{ backgroundColor: "#F0F0F0" }}>Posting 1</div>
      <div style={{ backgroundColor: "#F0F0F0" }}>Posting 2</div>
      <div style={{ backgroundColor: "#F0F0F0" }}>Posting 3</div> */}
    </>
  );
}
