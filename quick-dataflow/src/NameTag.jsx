export default function NameTag({ display }) {
  return (
    <div>
      <h2>NameTag: {display ? display.toUpperCase() : ""} </h2>
    </div>
  );
}
