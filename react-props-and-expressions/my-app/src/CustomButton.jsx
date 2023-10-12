export default function CustomButton({ color, textContent }) {
  return (
    <button style={{ backgroundColor: color, color: 'black' }}>
      {textContent}
    </button>
  );
}
