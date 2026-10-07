import {
  SiPython,
  SiSnowflake,
  SiDocker,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiR,
} from "react-icons/si";
import { FaGitAlt, FaLinux } from "react-icons/fa";
import React from "react";
import StorageIcon from "@mui/icons-material/Storage";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import CalculateIcon from "@mui/icons-material/Calculate";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import InsightsIcon from "@mui/icons-material/Insights";
import ChatIcon from "@mui/icons-material/Chat";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

const ICON_SIZE = 50;

const skillsConfig = {
  mainSkills: [
    { id: "skills-main-python", className: "skill-icon", icon: <SiPython size={ICON_SIZE} />, text: "Python" },
    { id: "skills-main-sql", className: "skill-icon", icon: <StorageIcon sx={{ fontSize: ICON_SIZE }} />, text: "SQL" },
    { id: "skills-main-powerbi", className: "skill-icon", icon: <QueryStatsIcon sx={{ fontSize: ICON_SIZE }} />, text: "Power BI" },
    { id: "skills-main-snowflake", className: "skill-icon", icon: <SiSnowflake size={ICON_SIZE} />, text: "Snowflake" },
    { id: "skills-main-docker", className: "skill-icon", icon: <SiDocker size={ICON_SIZE} />, text: "Docker" },
    { id: "skills-main-git", className: "skill-icon", icon: <FaGitAlt size={ICON_SIZE} />, text: "Git" }
  ],
  complementarySkills: [
    { id: "skills-comp-pytorch", className: "skill-icon", icon: <SiPytorch size={ICON_SIZE} />, text: "PyTorch" },
    { id: "skills-comp-tensorflow", className: "skill-icon", icon: <SiTensorflow size={ICON_SIZE} />, text: "TensorFlow" },
    { id: "skills-comp-sklearn", className: "skill-icon", icon: <SiScikitlearn size={ICON_SIZE} />, text: "Scikit-learn" },
    { id: "skills-comp-bayesian", className: "skill-icon", icon: <InsightsIcon sx={{ fontSize: ICON_SIZE }} />, text: "Bayesian Modeling" },
    { id: "skills-comp-genai", className: "skill-icon", icon: <AutoAwesomeIcon sx={{ fontSize: ICON_SIZE }} />, text: "Generative AI / LLMs" },
    { id: "skills-comp-nlp", className: "skill-icon", icon: <ChatIcon sx={{ fontSize: ICON_SIZE }} />, text: "NLP" },
    { id: "skills-comp-r", className: "skill-icon", icon: <SiR size={ICON_SIZE} />, text: "R" },
    { id: "skills-comp-matlab", className: "skill-icon", icon: <CalculateIcon sx={{ fontSize: ICON_SIZE }} />, text: "MATLAB" },
    { id: "skills-comp-aws", className: "skill-icon", icon: <CloudQueueIcon sx={{ fontSize: ICON_SIZE }} />, text: "AWS (S3, Glue)" },
    { id: "skills-comp-dataflows", className: "skill-icon", icon: <AccountTreeIcon sx={{ fontSize: ICON_SIZE }} />, text: "Power BI Dataflows" },
    { id: "skills-comp-linux", className: "skill-icon", icon: <FaLinux size={ICON_SIZE} />, text: "Linux" }
  ]
};

export default skillsConfig;
