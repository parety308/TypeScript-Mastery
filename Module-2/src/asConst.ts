const userRoles = {
    Admin: "Admin",
    Editor: "Editor",
    User: "User"
} as const;
const canEdit = (role: keyof typeof userRoles) => {
    if (role === userRoles.Admin || role === userRoles.Editor) {
        return true;
    }
    else {
        return false;
    }
};

console.log(canEdit("Admin"));