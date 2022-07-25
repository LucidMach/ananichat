interface props {
  children: JSX.Element[] | JSX.Element;
}

const DropMenu: React.FC<props> = ({ children }) => {
  return (
    <div className="absolute top-full right-0 shadow-md flex flex-col items-end">
      {children}
    </div>
  );
};

export default DropMenu;
