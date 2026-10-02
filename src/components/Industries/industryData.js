import IndustrialImg from "../../assets/images/industry-industrial.png";
import MunicipalImg from "../../assets/images/industry-municipal.png";
import HealthcareImg from "../../assets/images/industry-healthcare.png";
import HospitalityImg from "../../assets/images/industry-hospitality.png";
import SmartImg from "../../assets/images/industry-smart.png";
import AquaImg from "../../assets/images/industry-aquaculture.png";

export const industryData = {
  industrial: {
    number: "01",
    title: "Industrial",
    eyebrow: "Industrial Water & Wastewater",
    headline: "Water and wastewater treatment for industrial operations.",
    description:
      "Industrial facilities can have different process-water, wastewater and reuse requirements. Our approach starts with the application, site conditions and treatment objectives.",
    image: IndustrialImg,
    imageAlt: "Industrial water and wastewater treatment infrastructure",
    focus: [
      "Process and industrial wastewater treatment",
      "Water treatment and reuse",
      "Existing plant assessment and improvement",
      "Plant operation and technical support",
    ],
    challenges: [
      {
        title: "Variable wastewater characteristics",
        text:
          "Industrial wastewater can vary with production processes, operating conditions and the materials handled on site.",
      },
      {
        title: "Water reuse requirements",
        text:
          "Where treated water is intended for reuse, the treatment approach needs to reflect the intended application and required water quality.",
      },
      {
        title: "Existing plant performance",
        text:
          "Existing treatment systems may require assessment, process improvement, retrofitting or operational support.",
      },
    ],
    solutions: [
      "Wastewater Treatment",
      "Water Treatment",
      "Water Reuse",
      "Plant Services",
    ],
    applications:
      "Manufacturing facilities, industrial campuses, process industries and other sites with defined water or wastewater treatment requirements.",
  },

  municipal: {
    number: "02",
    title: "Municipal & Urban",
    eyebrow: "Municipal & Urban Water",
    headline: "Water infrastructure for municipal and urban environments.",
    description:
      "Municipal and urban water environments require practical treatment, restoration and infrastructure solutions that respond to the scale and operating conditions of each site.",
    image: MunicipalImg,
    imageAlt: "Municipal and urban water environment",
    focus: [
      "Municipal wastewater treatment",
      "Urban water treatment",
      "Lake and pond restoration",
      "Water infrastructure support",
    ],
    challenges: [
      {
        title: "Urban wastewater",
        text:
          "Municipal wastewater systems must handle changing flows and wastewater characteristics while maintaining reliable treatment performance.",
      },
      {
        title: "Degraded water bodies",
        text:
          "Urban lakes, ponds and other water bodies can require assessment, restoration and ongoing water-quality management.",
      },
      {
        title: "Operational continuity",
        text:
          "Treatment infrastructure has to remain practical to operate, maintain and support over its service life.",
      },
    ],
    solutions: [
      "Wastewater Treatment",
      "Water Treatment",
      "Waterbody Restoration",
      "Operation & Maintenance",
    ],
    applications:
      "Municipal infrastructure, urban developments, public water environments, lakes, ponds and related water-management projects.",
  },

  "healthcare-pharma": {
    number: "03",
    title: "Healthcare & Pharma",
    eyebrow: "Healthcare & Pharma",
    headline: "Water and wastewater treatment for healthcare environments.",
    description:
      "Healthcare and pharmaceutical environments can have specific water-quality and wastewater requirements. Treatment should be selected around the application, operating conditions and applicable project requirements.",
    image: HealthcareImg,
    imageAlt: "Water and wastewater treatment infrastructure for healthcare applications",
    focus: [
      "Wastewater treatment",
      "Water-quality management",
      "Treatment-system assessment",
      "Plant operation and support",
    ],
    challenges: [
      {
        title: "Application-specific wastewater",
        text:
          "Wastewater characteristics depend on the facility, processes and activities taking place at the site.",
      },
      {
        title: "Water quality",
        text:
          "Different water uses require different treatment objectives and operating considerations.",
      },
      {
        title: "Reliable operation",
        text:
          "Treatment systems need practical operating and maintenance arrangements suited to the facility.",
      },
    ],
    solutions: [
      "Wastewater Treatment",
      "Water Treatment",
      "Package Treatment Units",
      "Operation & Maintenance",
    ],
    applications:
      "Healthcare facilities, laboratories, pharmaceutical environments and other sites with defined water-quality or wastewater requirements.",
  },

  "hospitality-commercial": {
    number: "04",
    title: "Hospitality & Commercial",
    eyebrow: "Hospitality & Commercial",
    headline: "Water treatment and reuse for hotels, resorts and commercial facilities.",
    description:
      "Hospitality and commercial facilities need treatment systems that fit the site's water demand, wastewater characteristics, available space and operating requirements.",
    image: HospitalityImg,
    imageAlt: "Hospitality water and wastewater treatment environment",
    focus: [
      "Wastewater treatment",
      "Water reuse",
      "Compact treatment systems",
      "Plant operation and maintenance",
    ],
    challenges: [
      {
        title: "Changing water demand",
        text:
          "Water use and wastewater generation can vary with occupancy, season, facility operations and site activity.",
      },
      {
        title: "Reuse opportunities",
        text:
          "Treated water may support suitable reuse applications when treatment quality and site requirements are aligned.",
      },
      {
        title: "Space and operations",
        text:
          "Treatment infrastructure often needs to work within existing site constraints and practical maintenance requirements.",
      },
    ],
    solutions: [
      "Wastewater Treatment",
      "Water Reuse",
      "Package Treatment Units",
      "AMC & Plant Services",
    ],
    applications:
      "Hotels, resorts, commercial developments, institutional facilities and other large water-consuming sites.",
  },

  "smart-urban-water": {
    number: "05",
    title: "Smart & Urban Water",
    eyebrow: "Smart & Urban Water",
    headline: "Water management where visibility and environmental conditions matter.",
    description:
      "Some water environments require more than treatment alone. Monitoring, operational visibility and environmental management can form part of the overall project requirement.",
    image: SmartImg,
    imageAlt: "Urban waterbody with treatment and monitoring infrastructure",
    focus: [
      "Water-quality management",
      "Monitoring and operational visibility",
      "Urban waterbody management",
      "Restoration support",
    ],
    challenges: [
      {
        title: "Changing water conditions",
        text:
          "Urban water bodies can change with weather, inflows, organic loading, circulation and surrounding activity.",
      },
      {
        title: "Operational visibility",
        text:
          "Monitoring can help project teams understand changing conditions and support ongoing water-management decisions.",
      },
      {
        title: "Environmental management",
        text:
          "Restoration projects may require treatment, circulation, oxygenation and other measures considered together.",
      },
    ],
    solutions: [
      "Waterbody Restoration",
      "Algae Control Systems",
      "Aeration & Oxygenation",
      "Monitoring & Water Management",
    ],
    applications:
      "Urban lakes, ponds, public water environments and projects where water-quality management and operational visibility are important.",
  },

  "aquaculture-water-bodies": {
    number: "06",
    title: "Aquaculture & Water Bodies",
    eyebrow: "Aquaculture & Water Bodies",
    headline: "Water-quality and ecological management for aquatic environments.",
    description:
      "Aquaculture facilities and water bodies depend on appropriate water-quality conditions. The treatment approach should reflect the site's biological, hydraulic and operating requirements.",
    image: AquaImg,
    imageAlt: "Aquaculture and waterbody treatment environment",
    focus: [
      "Water-quality management",
      "Aeration and oxygenation",
      "Aquatic ecosystem restoration",
      "Ongoing environmental support",
    ],
    challenges: [
      {
        title: "Water quality",
        text:
          "Aquatic environments can be affected by dissolved oxygen, organic loading, circulation and other site-specific conditions.",
      },
      {
        title: "Oxygenation and circulation",
        text:
          "Appropriate circulation and oxygen-transfer measures can form part of waterbody or aquaculture management.",
      },
      {
        title: "Ecological restoration",
        text:
          "Restoration projects often require a combination of physical, biological and operational measures.",
      },
    ],
    solutions: [
      "Aeration & Oxygenation",
      "Floating Wetlands",
      "Waterbody Restoration",
      "Water-Quality Management",
    ],
    applications:
      "Aquaculture environments, lakes, ponds, reservoirs and other aquatic systems requiring water-quality or ecological management.",
  },
};
