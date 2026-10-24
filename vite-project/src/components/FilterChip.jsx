function FilterChip({ checked, onChange }) {
  return (
    <div className="filter-chip">
      <input hidden type="checkbox" id="filterCheckbox" checked={checked} onChange={(event) => onChange(event.target.checked)} />
      <label htmlFor="filterCheckbox">
        <span className="dot"></span>
        Только непрочитанные
      </label>
    </div>
  )
}

export default FilterChip