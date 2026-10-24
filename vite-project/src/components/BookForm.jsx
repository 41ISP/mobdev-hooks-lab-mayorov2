import { useState } from 'react'

function BookForm({ onAdd }) {
  const [draft, setDraft] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const title = draft.trim()
    if (!title) return
    onAdd(title)
    setDraft('')
  }

  return (
    <form className="add-book-row" onSubmit={handleSubmit}>
      <input className="input" value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Название книги..." />
      <button className="btn" type="submit">Добавить на полку</button>
    </form>
  )
}

export default BookForm