import React from "react";
import { BsClipboardData } from "react-icons/bs";
import { FaFlask } from "react-icons/fa";

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
      title: "Graduate Research Assistant",
      title_i18n: { en: "Graduate Research Assistant", es: "Graduate Research Assistant" },
      company: "Rochester Institute of Technology",
      description_i18n: {
        en: "Developed machine learning models (CNNs, VAEs) for cardiac diagnosis using ECG, MRI, and CT data; applied Bayesian optimization and active learning to reduce experimental trials and data labeling costs.",
        es: "Developed machine learning models (CNNs, VAEs) for cardiac diagnosis using ECG, MRI, and CT data; applied Bayesian optimization and active learning to reduce experimental trials and data labeling costs.",
      },
      date: "2019-2022",
      icon: <FaFlask />,
      tags: ["ml", "python", "pytorch", "bayesian", "research"],
    },
  ],
};

export default homeConfig;
