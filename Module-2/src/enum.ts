//enum->set of fixed string lateral ek jaigai rakhe 

enum UserRoles {
    Admin = "Admin",
    Editor = "Editor",
    User = "User"
};

const canEdit = (role: UserRoles) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else {
        return false;
    }
};

console.log(canEdit(UserRoles.Admin))