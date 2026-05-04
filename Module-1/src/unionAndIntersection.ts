//explore union ->using | to combine multiple types like a logical OR
type UserRole = "Admin" | "User" | "Guest";

const getDashboardAccess = (role: UserRole): string => {
    switch (role) {
        case "Admin":
            return "Access granted to all features.";
        case "User":
            return "Access granted to basic features.";
        case "Guest":
            return "Access granted to public features.";
    }
}

console.log(getDashboardAccess("Admin"));

//explore intersection->add properties of two types together like a logical AND
type PersonalInfo = {
    name: string;
    age: number;
}

type ContactInfo = {
    email: string;
    phone: string;
}

type UserProfile = PersonalInfo & ContactInfo;
const userProfile: UserProfile = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    phone: "123-456-7890"
}
console.log(userProfile);