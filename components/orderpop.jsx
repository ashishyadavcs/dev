const Orderpop = ({ Comp }) => {
    return (
        <div
            onClick={e =>
                e.target === e.currentTarget ? e.currentTarget.classList.remove("active") : ""
            }
            className={`orderpop`}
        >
            <Comp />
        </div>
    );
};
export default Orderpop;
