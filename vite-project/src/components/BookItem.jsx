const palette = ['#8a3a3a', '#4f6b52', '#9c7a1a', '#53667d']

function BookItem({ book, onToggleRead, onDelete }) {
  return (
    <div className="book-row">
      <div className="book-cover" style={{ background: palette[book.id % palette.length] }}>
        {book.title.charAt(0).toUpperCase()}
      </div>
      <div className="book-info">
        <p className={`book-title${book.read ? ' done' : ''}`}>{book.title}</p>
        <div className="book-author">{book.author}</div>
      </div>
      <label className={`read-check${book.read ? ' checked' : ''}`}>
        <input hidden type="checkbox" className="read-checkbox" checked={book.read} onChange={() => onToggleRead(book.id)} />
        <span className="check-circle">✓</span>
        <span className="read-label">Прочитано</span>
      </label>
      <button type="button" className="delete-btn" onClick={() => onDelete(book.id)} title="Убрать с полки">✕</button>
    </div>
  )
}

export default BookItem