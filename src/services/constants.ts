export const API_URL = {
  USER_LOGIN: "/login",
  USER_SIGN_UP: "/sign-up",
  SESSION: "/session",
  SESSION_ALL: "/session/all",
  SESSION_ACTIVE: "/session/active",
  SESSION_INVITE: "/session/{id}/invite",
};

/*

Actions on Bite Session details page.
Invite: Visible to user if initiatedByUserId === loggedInUser.id
End Session: Visible to user if initiatedByUserId === loggedInUser.id
Delete: Visible to user if initiatedByUserId === loggedInUser.id and active === false
Join: Visible to user if sessionUsers.user.id has loggedInUser.id and its "status" === "invited"
Suggest Restaurant: Visible to user if sessionUsers.user.id has loggedInUser.id and its "status" === "joined"

*/
