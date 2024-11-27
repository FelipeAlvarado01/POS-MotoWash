import { useState } from "react";

export function TwitterFollowCard({ userName, children, initialIsFollowing }) {
  //const addAt = (userName) => `@${userName}`;

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing); //declara que se inicia el isFollowing en false

  const text = isFollowing ? "Siguiendo" : "Seguir";

  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handClick = () => {
    setIsFollowing(!isFollowing);
  };

  console.log(isFollowing);
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="Avatar"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
        </button>
      </aside>
    </article>
  );
}
