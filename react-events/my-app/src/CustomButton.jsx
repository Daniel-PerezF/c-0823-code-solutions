export default function CustomButton({ text, color, onCustomClick }) {
  function handleCustomClick() {
    onCustomClick(text);
  }
  return (
    <button style={{ backgroundColor: color }} onClick={handleCustomClick}>
      {text}
    </button>
  );
}
