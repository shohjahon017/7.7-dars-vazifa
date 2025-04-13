import { useDispatch, useSelector } from "react-redux";

function Language() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);

  const handleLanguageChange = (e) => {
    dispatch({ type: "SET_LANGUAGE", payload: e.target.value });
  };

  return (
    <div>
      <select
        onChange={handleLanguageChange}
        className="border rounded-lg p-2"
        value={language}
      >
        <option value="en">English</option>
        <option value="uz">O'zbekcha</option>
        <option value="ru">Русский</option>
        <option value="tj">Тоҷикӣ</option>
      </select>
    </div>
  );
}

export default Language;
