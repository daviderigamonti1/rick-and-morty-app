export default function Pagination({ filteredItems, page, setPage, itemsPerPage = 20 }) {

    return (
        <div className="pagination">
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                ◀ Pagina precedente
            </button>
            <span>
                Pagina {page} di {Math.ceil(filteredItems.length / itemsPerPage)}
            </span>
            <button onClick={() => setPage(page + 1)} disabled={page >= Math.ceil(filteredItems.length / itemsPerPage)}>
                Pagina successiva ▶
            </button>
        </div>
    )
}