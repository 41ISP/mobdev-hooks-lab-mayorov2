import './App.css'
import { useState } from 'react'
import ShelfScreen from './components/ShelfScreen.jsx'

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: 'Клара и Солнце', author: 'Кадзуо Исигуро', read: true },
  ])
  const [showOnlyUnread, setShowOnlyUnread] = useState(false)

  function handleAdd(title) {
    setBooks((prev) => [
      ...prev,
      {
        id: Math.max(0, ...prev.map((book) => book.id)) + 1,
        title,
        author: '',
        read: false,
      },
    ])
  }

  function handleToggleRead(id) {
    setBooks((prev) =>
      prev.map((book) => book.id === id ? { ...book, read: !book.read } : book),
    )
  }

  function handleDelete(id) {
    setBooks((prev) => prev.filter((book) => book.id !== id))
  }

  return (
    <ShelfScreen
      books={books}
      showOnlyUnread={showOnlyUnread}
      onFilterChange={setShowOnlyUnread}
      onAdd={handleAdd}
      onToggleRead={handleToggleRead}
      onDelete={handleDelete}
    />
  )
}

export default App