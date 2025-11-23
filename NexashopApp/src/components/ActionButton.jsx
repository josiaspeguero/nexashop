import "../styles/components.css";
function ActionButton({ text, isActive, type }) {
  return (
    <div>
      <div className="action-button">
        <button
          type={type}
          disabled={isActive}
          className={isActive ? "send-btn-form-disable" : "send-btn-form"}
        >
          {text}
        </button>
        <div className={isActive ? "loader-animation" : "loader"}></div>
      </div>
    </div>
  );
}

export default ActionButton;
