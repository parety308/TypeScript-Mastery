//constraint : strict rules deya
type constraints = { id: number; name: string }

const addStdToCourse = <T extends constraints>(stdInfo: T) => {
    return {
        course: "Next Level WD",
        ...stdInfo
    };
};

const std1 = {
    id: 2304054,
    name: "Parvez Hasan",
    hasPen: true
}
const std2 = {
    id: 2304076,
    name: "Muntasir",
    hasWatch: true
}

console.log(addStdToCourse(std1))
console.log(addStdToCourse(std2))