interface MainButtonProps {
  children?: any;
  title: string;
}
function MainButton({ children, title }: MainButtonProps) {
  return (
    <div className="main-button">
      <button className="magnet-button">
        <span className="hover-filp-item">
          <span data-text={title}>{title}</span>
        </span>
        {children}
      </button>
    </div>
  );
}

export default MainButton;
