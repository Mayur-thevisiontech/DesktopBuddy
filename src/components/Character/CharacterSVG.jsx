function CharacterSVG() {
  return (
    <svg
      width="180"
      height="220"
      viewBox="0 0 180 220"
    >
      <circle
        cx="90"
        cy="90"
        r="60"
        fill="deepskyblue"
      />

      <circle
        cx="70"
        cy="80"
        r="7"
        fill="black"
      />

      <circle
        cx="110"
        cy="80"
        r="7"
        fill="black"
      />

      <path
        d="M70 110 Q90 130 110 110"
        stroke="black"
        strokeWidth="4"
        fill="none"
      />
    </svg>
  );
}

export default CharacterSVG;