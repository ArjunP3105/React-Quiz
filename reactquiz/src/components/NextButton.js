function NextButton({ dispatch, index, numQuestions }) {
  if (index + 1 < numQuestions) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }

  if (index + 1 === numQuestions) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "onEnd" })}
      >
        Check Results
      </button>
    );
  }
}

export default NextButton;
