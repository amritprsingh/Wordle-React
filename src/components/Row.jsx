import "../styles/Row.scss";

export default function Row({ word, applyRotation, solution, bounceOnError }) {
  let copy = solution;
  return (
    <div className={`row ${bounceOnError && "row--bounce"}`}>
      {word.split("").map((letter, index) => {
        const bgClass =
          solution[index] === letter
            ? "correct"
            : copy.includes(letter)
            ? "present"
            : "absent";
        if (solution[index] === letter || bgClass === "present") {
          let ind = copy.indexOf(letter);
          copy = copy.substring(0, ind) + copy.substring(ind + 1);
        }

        return (
          <div
            className={`letter ${bgClass} ${
              applyRotation && `rotate--${index + 1}00`
            } ${letter !== " " && "letter--active"}`}
            key={index}
          >
            {letter}
            <div className="back">{letter}</div>
          </div>
        );
      })}
    </div>
  );
}
