type TUserResponse = {
    info?: {
        address?: {
            zipCode?: string;
        }
    }
};

function getZipcode(user: TUserResponse): string {
  return user.info?.address?.zipCode ?? "00000";
}
const user1: TUserResponse = {
    info: {
        address: {
            zipCode: "201P"
        }
    }
};

const user2: TUserResponse = {};
console.log(getZipcode(user1))
console.log(getZipcode(user2))