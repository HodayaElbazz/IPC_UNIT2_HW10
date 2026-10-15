// Draws one shelf (read / now / ordered) on the page
function fillShelf(listId, countId, ids, statusClass, statusText) {
  const list = document.getElementById(listId);
  document.getElementById(countId).textContent = ids.length;

  if (ids.length === 0) {
    list.innerHTML = `<li class="empty">Nothing here yet.</li>`;
    return;
  }

  list.innerHTML = ids.map(id => {
    const book = getBook(id);
    return `
      <li>
        <div>
          <div class="title">${book.title}</div>
          <div class="by">${book.author} · ${book.genre} · ${book.year}</div>
        </div>
        <span class="status ${statusClass}">${statusText}</span>
      </li>
    `;
  }).join("");
}

fillShelf("now-list",     "now-count",     myBooks.now,     "now",     "📖 With you now");
fillShelf("ordered-list", "ordered-count", myBooks.ordered, "ordered", "⏳ On the way");
fillShelf("read-list",    "read-count",    myBooks.read,    "read",    "✓ Finished");
