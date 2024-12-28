const Container = ({ children,classname }) => {
    return <div className={`container ${classname}`}>{children}</div>;
};

export default Container;
