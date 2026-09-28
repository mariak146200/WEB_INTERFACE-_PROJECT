function Header({ onBackup, onRestore }) {
  return (
    <header className="topbar">
      <div className="brand-lockup">
        <div className="brand-mark" aria-hidden="true">✳</div>
        <div>
          <p className="brand-name">MARIYAPPAN P - TASK MANAGER</p>
          <p className="brand-subtitle">Task Management Application</p>
        </div>
      </div>
      <nav className="backup-actions" aria-label="Task backup">
        <button className="quiet-button" type="button" onClick={onBackup}>↓ <span>Backup</span></button>
        <button className="quiet-button" type="button" onClick={onRestore}>↑ <span>Restore</span></button>
      </nav>
    </header>
  )
}

export default Header