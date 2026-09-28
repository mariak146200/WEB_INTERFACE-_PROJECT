function Home({ children, notification }) {
  return (
    <div className="app-shell">
      <main className="page-frame">{children}</main>
      {notification && <div className={`toast${notification.type === 'error' ? ' error' : ''}`} role={notification.type === 'error' ? 'alert' : 'status'}><span className="toast-mark" aria-hidden="true">{notification.type === 'error' ? '!' : '✓'}</span>{notification.message}</div>}
    </div>
  )
}

export default Home