import "./styles.css";

const InputText = () => {
  const [inputTextValue, setInputTextValue] = useState("");
  const [text, setText] = useState("JavaScript");
  const handleChange = (e) => setInputTextValue(e.target.value);
  const handleClick = () => {
    setText(input);
  };
};
