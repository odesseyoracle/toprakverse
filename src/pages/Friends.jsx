import React from "react";
import { useUserContext } from "../contexts/UserContext";
import Card from "../components/Card";

const Friends = () => {
  const { userData } = useUserContext();

  const friends = userData.filter((user) => !user.loggedIn);

  return (
    <div className="m-20">
      <h1 className="text-4xl font-extrabold">Friends</h1>
      <div>
        {friends.map((user) => {
          return (
            <Card
              userName={user.userName}
              profilePicture={user.profilePicture}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Friends;
