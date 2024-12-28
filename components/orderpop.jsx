const Orderpop = props => {
    return (
        <div
            onClick={e =>
                e.target === e.currentTarget ? e.currentTarget.classList.remove("active") : ""
            }
            className={`orderpop`}
        >
            {props.children}
        </div>
    );
};
export default Orderpop;
