import type { User } from '../store/useAuthStore'

type ProfileCardProps = {
  user: User
  username: string
  setUsername: (value: string) => void
  onLogin: () => void
  onLogout: () => void
}

export function ProfileCard({
  user,
  username,
  setUsername,
  onLogin,
  onLogout,
}: ProfileCardProps) {
  return (
    <div className="profile-box">
      <div>
        <span className="label">User</span>
        <strong>{user.isLoggedIn ? user.name : 'Guest'}</strong>
      </div>

      <div className="auth-actions">
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Ismingiz"
          aria-label="username"
        />
        {user.isLoggedIn ? (
          <button type="button" onClick={onLogout}>Logout</button>
        ) : (
          <button type="button" onClick={onLogin}>Login</button>
        )}
      </div>
    </div>
  )
}
