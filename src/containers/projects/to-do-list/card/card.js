import deleteIcon from "assets/main-icons/delete.png";

export const Card = ({ isChecked, date, name, deleteCard, onChange }) => {
  const borderColor = isChecked ? "border-lime-300" : "border-violet-400";

  return (
    <div
      className={`flex justify-between min-h-14 my-0.5 font-sans shadow-md border-l-8 ${borderColor}`}
    >
      <div className="pl-5 my-2">
        <div className="text-gray-600 text-xs">{date}</div>
        <div className="flex justify-between">
          <div className="flex-grow overflow-hidden break-all max-w-80">
            {name}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between py-2 pr-3">
        <input
          type="checkbox"
          className="w-3.5 h-3.5 border-solid border-cyan-400 rounded"
          checked={isChecked}
          onChange={() => onChange(name)}
        />
        <button onClick={() => deleteCard(name)}>
          <img src={deleteIcon} alt="delete" className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
