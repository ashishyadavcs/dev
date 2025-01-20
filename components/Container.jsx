const Container = ({ children, classname }) => {
    return <div className={`container ${classname ? classname : ""}`}>{children}</div>;
};

export default Container;
