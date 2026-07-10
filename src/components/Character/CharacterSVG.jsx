function CharacterSVG() {
  return (
    <svg
      width="170"
      height="170"
      viewBox="0 0 170 170"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <circle
        cx="85"
        cy="85"
        r="60"
        fill="#38BDF8"
      />

      {/* Eyes */}
      <circle cx="65" cy="75" r="6" fill="#111827" />
      <circle cx="105" cy="75" r="6" fill="#111827" />

      {/* Smile */}
      <path
        d="M65 100 Q85 120 105 100"
        stroke="#111827"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />

      {/* Water Drop */}
      <path
        d="M85 30
           C75 45 68 55 68 67
           C68 78 76 87 85 87
           C94 87 102 78 102 67
           C102 55 95 45 85 30Z"
        fill="#FFFFFFAA"
      />
    </svg>
  );
}

export default CharacterSVG;