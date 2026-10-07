import React from "react";
import { BsClipboardData } from "react-icons/bs";
import { FaFlask, FaGraduationCap, FaBriefcase } from "react-icons/fa";

const greeting = (
  <h1 className="heading">
    Hi! I'm <strong className="main-name"> Shakil Zaman</strong>
  </h1>
);

const titles = [
  "Business Intelligence Analyst",
  "Data Engineer",
  "Machine Learning Researcher",
  "Data Scientist",
  "Python Developer",
];

const about = {
  start:
    "I'm a data professional with 5+ years of experience spanning machine learning research, data engineering, and business intelligence.",
  exit:
    "I'm fluent in Python, SQL, Power BI, and Snowflake, with published research in Bayesian optimization and deep learning for healthcare applications.",
};

const homeConfig = {
  greeting_i18n: {
    en: greeting,
    es: greeting,
  },

  titles_i18n: {
    en: titles,
    es: titles,
  },

  about_i18n: {
    en: about,
    es: about,
  },


  workTimeline: [
    {
      id: "work-1",
      kind: "work",
      title: "Business Intelligence Analyst",
      title_i18n: { en: "Business Intelligence Analyst", es: "Business Intelligence Analyst" },
      company: "Paychex",
      description_i18n: {
        en: "Build interactive Power BI dashboards, advanced DAX measures, and ETL/ELT pipelines across Snowflake and SQL Server for 500+ users; partner with the Data Science team to operationalize churn and NPS prediction models.",
        es: "Build interactive Power BI dashboards, advanced DAX measures, and ETL/ELT pipelines across Snowflake and SQL Server for 500+ users; partner with the Data Science team to operationalize churn and NPS prediction models.",
      },
      date: "2023-Present",
      icon: <BsClipboardData />,
      tags: ["powerbi", "dax", "sql", "snowflake", "etl", "python"],
    },
    {
      id: "work-0",
      kind: "both",
      title: "Ph.D. Studies & Graduate Research Assistant",
      title_i18n: { en: "Ph.D. Studies & Graduate Research Assistant", es: "Ph.D. Studies & Graduate Research Assistant" },
      company: "Rochester Institute of Technology (Ph.D. not completed)",
      description_i18n: {
        en: "Developed machine learning models (CNNs, VAEs) for cardiac diagnosis using ECG, MRI, and CT data; applied Bayesian optimization and active learning to reduce experimental trials and data labeling costs.",
        es: "Developed machine learning models (CNNs, VAEs) for cardiac diagnosis using ECG, MRI, and CT data; applied Bayesian optimization and active learning to reduce experimental trials and data labeling costs.",
      },
      date: "2019-2022",
      icon: <FaFlask />,
      tags: ["ml", "python", "pytorch", "bayesian", "research"],
    },
    {
      id: "edu-2",
      kind: "education",
      title: "M.S. in Statistical Computing - Data Mining",
      company: "University of Central Florida",
      description:
        "Moved from classical statistics into machine learning and computational statistics.",
      date: "2017-2019",
      icon: <FaGraduationCap />,
      tags: ["data mining", "statistical computing", "ml"],
    },
    {
      id: "work--1",
      kind: "work",
      title: "Statistical Analyst",
      company: "Meridian Finance, Dhaka",
      description:
        "Market research and statistical analysis (time series, correlation, causal analysis) for clients applying for loans at a non-bank financial institution.",
      date: "2016-2017",
      icon: <FaBriefcase />,
      tags: ["statistics", "time series", "causal analysis"],
    },
    {
      id: "edu-1",
      kind: "education",
      title: "MBA in Finance",
      company: "University of Dhaka",
      description: "Business and finance foundation alongside a quantitative background.",
      date: "2014-2016",
      icon: <FaGraduationCap />,
      tags: ["finance", "business"],
    },
    {
      id: "edu-0",
      kind: "education",
      title: "B.S. in Applied Statistics",
      company: "University of Dhaka",
      description:
        "Foundation in statistical methods, time series, and causal analysis.",
      date: "2010-2014",
      icon: <FaGraduationCap />,
      tags: ["statistics", "time series"],
    },
  ],
};

export default homeConfig;
