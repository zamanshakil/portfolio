import React from 'react';
import { ImBook } from "react-icons/im";

const blogConfig = [
  {
    id: "pub-2",
    title: "Gradient-based Active Learning for Intelligent Discovery of Colloidal Phase Diagrams",
    category: { en: "Research" },
    description_i18n: {
      en: "Sumeet Vadhavkar, Pradeep Bajracharya, Md Shakil Zaman, Poornima Padmanabhan, Linwei Wang — Molecular Systems Design & Engineering, 2026.",
    },
    links: [{ name: "paper", url: "https://doi.org/10.1039/d5me00233h", icon: <ImBook/> }],
    date: "2026-03-01"
  },
  {
    id: "pub-1",
    title: "Few-shot Generation of Personalized Neural Surrogates for Cardiac Simulation via Bayesian Meta-Learning",
    category: { en: "Research" },
    description_i18n: {
      en: "Xiajun Jiang, Zhiyuan Li, Ryan Missel, Md Shakil Zaman, Brian Zenger, Wilson W Good, Rob S Macleod, John L Sapp, Linwei Wang — MICCAI, 2022.",
    },
    links: [{ name: "arxiv", url: "https://arxiv.org/", icon: <ImBook/> }],
    date: "2022-03-01"
  },
  {
    id: "pub-0",
    title: "Fast Posterior Estimation of Cardiac Electrophysiological Model Parameters via Bayesian Active Learning",
    category: { en: "Research" },
    description_i18n: {
      en: "Md Shakil Zaman, Jwala Dhamala, Pradeep Bajracharya, John L Sapp, B Milan Horácek, Katherine C Wu, Natalia A Trayanova, Linwei Wang — Frontiers in Physiology, 2021.",
    },
    links: [{ name: "arxiv", url: "https://arxiv.org/", icon: <ImBook/> }],
    date: "2021-08-01"
  }
];

export default blogConfig;
