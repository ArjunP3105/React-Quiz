function Options({ question, dispatch, answer }) {
  const isAnswer = answer !== null;
  return (
    <div className="options">
      {question.options.map((Option, index) => (
        <button
          disabled={isAnswer}
          className={`btn btn-option ${answer === index ? "answer" : ""} ${
            isAnswer
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          } `}
          key={Option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {Option}
        </button>
      ))}
    </div>
  );
}

export default Options;
