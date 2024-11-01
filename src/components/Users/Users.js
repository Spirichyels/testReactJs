import Paginator from "../common/Paginator/Paginator.Old";
import User from "./User";

let Users = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
  users,
  ...props
}) => {
  return (
    <div>
      <div>
        <Paginator
          currentPage={currentPage}
          totalUsersCount={totalUsersCount}
          pageSize={pageSize}
          onPageChanged={onPageChanged}
        />
      </div>
      <div>
        {users.map((u) => (
          <User
            key={u.id}
            user={u}
            followingInProgress={props.followingInProgress}
            unFollow={props.unFollow}
            follow={props.follow}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
