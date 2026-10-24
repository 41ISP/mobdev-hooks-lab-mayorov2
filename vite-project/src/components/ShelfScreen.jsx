import BookForm from './BookForm.jsx'
import FilterChip from './FilterChip.jsx'
import BookList from './BookList.jsx'

function ShelfScreen({ books, showOnlyUnread, onFilterChange, onAdd, onToggleRead, onDelete }) {
  const filteredBooks = books.filter((book) => !showOnlyUnread || !book.read)

  return (
    <div className="app">
      <div className="app-header">
        <div className="brand">
          <div className="brand-mark">S</div>
          <div className="brand-name">Shelf</div>
        </div>
      </div>
      <section className="screen active">
        <p className="greeting">Добрый вечер</p>
        <BookForm onAdd={onAdd} />
        <div className="list-toolbar">
          <span className="toolbar-title">Книги</span>
          <FilterChip checked={showOnlyUnread} onChange={onFilterChange} />
        </div>
        <BookList books={filteredBooks} onToggleRead={onToggleRead} onDelete={onDelete} />
      </section>
    </div>
  )
}

export default ShelfScreen