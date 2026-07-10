function CharacterSVG() {
  return (
    <svg
      width="180"
      height="220"
      viewBox="0 0 180 220"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow */}
      <ellipse
        cx="90"
        cy="200"
        rx="40"
        ry="10"
        fill="#000"
        opacity="0.15"
      />

      {/* Left Arm */}
      <line
        x1="42"
        y1="100"
        x2="18"
        y2="130"
        stroke="#58C7FF"
        strokeWidth="10"
        strokeLinecap="round"
      />

      {/* Right Arm */}
      <line
        x1="138"
        y1="100"
        x2="162"
        y2="130"
        stroke="#58C7FF"
        strokeWidth="10"
        strokeLinecap="round"
      />

      {/* Left Leg */}
      <line
        x1="72"
        y1="160"
        x2="62"
        y2="192"
        stroke="#58C7FF"
        strokeWidth="10"
        strokeLinecap="round"
      />

      {/* Right Leg */}
      <line
        x1="108"
        y1="160"
        x2="118"
        y2="192"
        stroke="#58C7FF"
        strokeWidth="10"
        strokeLinecap="round"
      />

      {/* Body */}
      <path
        d="
          M90 20
          C58 55 40 84 40 118
          C40 152 63 175 90 175
          C117 175 140 152 140 118
          C140 84 122 55 90 20
          Z
        "
        fill="#36C5FF"
      />

      {/* Shine */}
      <path
        d="
          M76 50
          C60 70 58 92 68 115
        "
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Left Eye */}
      <circle
        cx="72"
        cy="100"
        r="6"
        fill="#222"
      />

      {/* Right Eye */}
      <circle
        cx="108"
        cy="100"
        r="6"
        fill="#222"
      />

      {/* Smile */}
      <path
        d="M72 126 Q90 140 108 126"
        stroke="#222"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default CharacterSVG;