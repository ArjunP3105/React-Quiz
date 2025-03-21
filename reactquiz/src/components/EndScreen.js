function EndScreen({ points, maxPoints, highscore, dispatch }) {
  const percentage = Math.ceil((points / maxPoints) * 100);
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPoints}({percentage}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <p className="btn btn-ui" onClick={() => dispatch({ type: "reset" })}>
        Reset
      </p>
    </>
  );
}

export default EndScreen;
