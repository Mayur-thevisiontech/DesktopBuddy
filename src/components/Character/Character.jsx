import "./Character.css";
import CharacterSVG from "./CharacterSVG";

function Character() {
  return (
    <div className="character-container">
      <div className="character">
        <CharacterSVG />
      </div>
    </div>
  );
}

export default Character;