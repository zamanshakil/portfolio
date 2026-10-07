import { AiFillGithub } from "react-icons/ai";

import salesAnalytics from "../images/project_sales_analytics.svg";
import snowflakeEtl from "../images/project_snowflake_etl.svg";
import snowflakePlatform from "../images/project_snowflake_platform.svg";
import anomalyDetection from "../images/project_anomaly_detection.svg";

import React from 'react';

const GITHUB_PROFILE = "https://github.com/zamanshakil";

const projectConfig = [
  {
    id: "project-4",
    title: "Access Log Anomaly Detection & AI Investigation System",
    category: { en: "Machine Learning" },
    description_i18n: {
      en: "End-to-end analytical system that detects anomalous access behavior using Isolation Forest and behavioral feature engineering, with an LLM-based explanation layer and a Streamlit dashboard for investigating anomalies.",
    },
    links: [
      { name: "github", url: GITHUB_PROFILE, icon: <AiFillGithub/> }
    ],
    image: anomalyDetection,
    target: "_blank"
  },
  {
    id: "project-3",
    title: "Snowflake Cloud Data Platform",
    category: { en: "Data Engineering" },
    description_i18n: {
      en: "Architected and deployed a cloud-based data platform using Snowflake as the central warehouse, with automated ETL via Snowflake tasks, streams, and stored procedures, integrated with Power BI for real-time analytics.",
    },
    links: [
      { name: "github", url: GITHUB_PROFILE, icon: <AiFillGithub/> }
    ],
    image: snowflakePlatform,
    target: "_blank"
  },
  {
    id: "project-2",
    title: "Snowflake ETL Data Pipeline",
    category: { en: "Data Engineering" },
    description_i18n: {
      en: "End-to-end ETL pipeline using Python (Pandas, Snowflake Connector) to extract and transform data from multiple sources, with data validation, star-schema modeling, and automated, version-controlled workflows.",
    },
    links: [
      { name: "github", url: GITHUB_PROFILE, icon: <AiFillGithub/> }
    ],
    image: snowflakeEtl,
    target: "_blank"
  },
  {
    id: "project-1",
    title: "Enterprise Sales & Financial Analytics Platform",
    category: { en: "Business Intelligence" },
    description_i18n: {
      en: "End-to-end analytics solution integrating multi-source CRM, financial, and operational data, with a scalable star-schema model and interactive Power BI dashboards featuring advanced DAX measures and drill-through.",
    },
    links: [
      { name: "github", url: GITHUB_PROFILE, icon: <AiFillGithub/> }
    ],
    image: salesAnalytics,
    target: "_blank"
  }
];

export default projectConfig;
