function FilterButtons({
  currentFilter,
  setCurrentFilter
}) {
  return (
    <div className="filters">

      <button
        className={currentFilter === "all" ? "active-filter" : ""}
        onClick={() => setCurrentFilter("all")}
      >
        All
      </button>

      <button
        className={currentFilter === "active" ? "active-filter" : ""}
        onClick={() => setCurrentFilter("active")}
      >
        Active
      </button>

      <button
        className={currentFilter === "completed" ? "active-filter" : ""}
        onClick={() => setCurrentFilter("completed")}
      >
        Completed
      </button>

    </div>
  );
}

export default FilterButtons;