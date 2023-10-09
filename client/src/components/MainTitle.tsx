
interface MainTitleProps {
  title: string;
}

function MainTitle({title}: MainTitleProps) {
  return (
    <div className="main-title">
      <h2>{title}</h2>
    </div>
  );
}

export default MainTitle;
