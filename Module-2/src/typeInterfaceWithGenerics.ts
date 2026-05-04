interface Developer<T> {
    name: string,
    selary: number,
    device: {
        brand: string,
        model: string
    },
    smartWatch: T
};

interface generalWatch { heartBeat: string; stopWatch: boolean }
interface appleWatch { heartBeat: string; callSupport: boolean; aiFeature: boolean }

const poorDeveloper: Developer<generalWatch> = {
    name: "Parvez",
    selary: 20,
    device: {
        brand: "HP",
        model: "Victus 15"
    },
    smartWatch: {
        heartBeat: "20hp",
        stopWatch: true
    }
};

const richDeveloper: Developer<appleWatch> = {
    name: "Parvez",
    selary: 20,
    device: {
        brand: "HP",
        model: "Victus 16"
    },
    smartWatch: {
        heartBeat: "20hp",
        callSupport: true,
        aiFeature: true
    }
};
console.log(poorDeveloper);
console.log(richDeveloper);