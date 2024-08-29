import React, { useState } from "react";
import India from "@svg-maps/india";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import { Tooltip } from "antd";
import "antd/dist/reset.css"; // Import Ant Design styles

const heritageSites = {
  "Andhra Pradesh": [
    "Tirumala Venkateswara Temple",
    "Charminar",
    "Golconda Fort",
  ],
  "Arunachal Pradesh": [
    "Tawang Monastery",
    "Namdapha National Park",
    "Parashuram Kund",
  ],
  Assam: ["Kaziranga National Park", "Majuli Island", "Sivasagar"],
  Bihar: ["Bodh Gaya", "Nalanda University", "Vikramshila"],
  Chhattisgarh: [
    "Kanger Valley National Park",
    "Bastar Palace",
    "Chitrakote Falls",
  ],
  Goa: ["Basilica of Bom Jesus", "Fort Aguada", "Se Cathedral"],
  Gujarat: ["Rani ki Vav", "Gir National Park", "Sun Temple"],
  Haryana: [
    "Sultanpur National Park",
    "Raja Nahar Singh Palace",
    "Kurukshetra",
  ],
  "Himachal Pradesh": ["Shimla Ridge", "Manali", "Dharamshala"],
  Jharkhand: ["Ranchi Hill", "Pahari Mandir", "Jagannath Temple"],
  Karnataka: ["Hampi", "Mysore Palace", "Badami Caves"],
  Kerala: ["Backwaters of Alleppey", "Padmanabhaswamy Temple", "Fort Kochi"],
  "Madhya Pradesh": ["Khajuraho Temples", "Sanchi Stupa", "Gwalior Fort"],
  Maharashtra: [
    "Ajanta and Ellora Caves",
    "Gateway of India",
    "Elephanta Caves",
  ],
  Manipur: ["Loktak Lake", "Imphal War Cemetery", "Kangla Fort"],
  Meghalaya: ["Cherrapunji", "Living Root Bridges", "Shillong"],
  Mizoram: ["Champhai", "Mizoram State Museum", "Tamdil Lake"],
  Nagaland: ["Kohima War Cemetery", "Dzukou Valley", "Naga Heritage Village"],
  Odisha: ["Konark Sun Temple", "Jagannath Temple", "Puri Beach"],
  Punjab: ["Golden Temple", "Wagah Border", "Jallianwala Bagh"],
  Rajasthan: ["Amber Fort", "City Palace", "Hawa Mahal"],
  Sikkim: ["Rumtek Monastery", "Gangtok", "Pelling"],
  "Tamil Nadu": ["Brihadeeswarar Temple", "Meenakshi Temple", "Rameswaram"],
  Telangana: ["Charminar", "Golconda Fort", "Ramoji Film City"],
  Tripura: ["Ujjayanta Palace", "Neermahal", "Tripura Sundari Temple"],
  "Uttar Pradesh": ["Taj Mahal", "Agra Fort", "Fatehpur Sikri"],
  Uttarakhand: ["Haridwar", "Rishikesh", "Jim Corbett National Park"],
  "West Bengal": ["Victoria Memorial", "Sundarbans", "Darjeeling"],
};

function IndiaMap() {
  const [stateName, setStateName] = useState("");
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  function onLocationClick(event) {
    const name = event.target.getAttribute("name");
    setStateName(name);
  }

  function onLocationMouseEnter(event) {
    const name = event.target.getAttribute("name");
    setTooltipContent(heritageSites[name]?.join(", ") || "No data");

    const rect = event.target.getBoundingClientRect();
    setTooltipPosition({
      top: rect.top + window.scrollY + rect.height / 2,
      left: rect.left + window.scrollX + rect.width / 2,
    });

    setTooltipVisible(true);
  }

  function onLocationMouseLeave() {
    setTooltipVisible(false);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-amber-100 via-yellow-100 to-white p-4">
      <h1 className="text-5xl md:text-4xl font-bold text-center mb-8 font-Main text-gray-800">
        Discover India's Rich Cultural Heritage
      </h1>
      <div className="relative w-full max-w-4xl">
        <SVGMap
          map={India}
          onLocationClick={onLocationClick}
          onLocationMouseEnter={onLocationMouseEnter}
          onLocationMouseLeave={onLocationMouseLeave}
          className="india-map"
        />
        <Tooltip
          title={tooltipContent}
          visible={tooltipVisible}
          placement="top"
          overlayStyle={{
            backgroundColor: "#333",
            color: "#fff",
            fontSize: "14px",
            padding: "5px 10px",
          }}
          style={{
            position: "absolute",
            top: `${tooltipPosition.top}px`,
            left: `${tooltipPosition.left}px`,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        >
          <div className="h-full w-full"></div>
        </Tooltip>
      </div>
      <div className="mt-8 p-6 bg-white bg-opacity-90 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl text-center font-semibold text-gray-900 mb-4">
          {stateName}
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          {heritageSites[stateName]?.map((site, index) => (
            <li key={index}>{site}</li>
          )) || <li>No heritage sites available</li>}
        </ul>
      </div>
    </div>
  );
}

export default IndiaMap;
