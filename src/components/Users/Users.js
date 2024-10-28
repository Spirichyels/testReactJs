import styles from "./Users.module.css";
import userPhoto from "../../assets/images/avatarka.webp";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Paginator from "./Paginator";

let Users = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
  ...props
}) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  let x;
  for (let i = 1; i <= pagesCount; i++) {
    x = { id: i, count: i };
    pages.push(x);
  }

  return (
    <div>
      <Paginator
        currentPage={currentPage}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        onPageChanged={onPageChanged}
      />
      <div>
        {props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div className={styles.ava}>
                <NavLink to={"/profile/" + u.id}>
                  <img
                    src={u.photos.small != null ? u.photos.small : userPhoto}
                    alt=""
                  />
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      props.unFollow(u.id);
                    }}
                  >
                    unFollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      debugger;
                      props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
