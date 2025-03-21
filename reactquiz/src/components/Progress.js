function Progress({ index, numQuestions, maxPoints, points, answer }) {
  return (
    <header className="progress">
      <progress
        value={index + Number(answer !== null)}
        max={numQuestions}
        min={1}
      ></progress>
      <p>
        Question <strong> {index + 1}</strong> / {numQuestions}
      </p>
      <p>
        {points}/{maxPoints}
      </p>
    </header>
  );
}

export default Progress;
