// //js is a dynamically typed language
// // let a=5;
// //a="Rohan";

// //primitive
let shopName: string = "Rahim Store";
let totalProducts: number = 50;
let isOpen: boolean = true;
let rating: null = null;
let discount: undefined = undefined;

// //non-primitive
let baseProducts: string[] = ["Rice", "Oil", "Salt"];
let prices: number[] = [60, 40, 20];

const products: {
    name: string;
    price: number;
    category: "grocery" | "electronics";
    discount?: number;
} = {
    name: "Rice",
    price: 85,
    category: 'grocery'
};


// //void function
function voidBujhi(): void {
    console.log("this is void function");
}

// // console.log(voidBujhi());
// // console.log(products);

function calculateTotal(price: number, quantity: number): number {
    return price * quantity;
}
// // console.log(calculateTotal(20, 2));

// //rest operator
function totalCart(...prices: number[]): number {
    return prices.reduce((sum, p) => sum + p, 250);
};

// //spread operator
const newProducts = [...baseProducts, "Mustard Oil"];
// console.log(newProducts);

//destrcutruring

const buyer: { CustomerName: string, address: string, contactNumber: number } = {
    CustomerName: "Parvez Hasan",
    address: "STHH,CUET",
    contactNumber: +8801785621585
};

const { CustomerName, address, contactNumber } = buyer;

//type alias

type TProduct = {
    name: string;
    price: number;
    deliveredBy: {
        name: string;
        address: string
    }
};

const item1: TProduct = {
    name: "Chili",
    price: 200,
    deliveredBy: {
        name: "Parvez",
        address: "STHH,CUET"
    }
};

//union
type TPaymentMethod = "bkash" | "rocket" | "upay" | "nagad";
let payment: TPaymentMethod = "bkash";

//intersection
type TCustomer = TProduct & {
    payment: TPaymentMethod;
};

const item2: TCustomer = {
    name: "Chili",
    price: 200,
    deliveredBy: {
        name: "Parvez",
        address: "STHH,CUET"
    },
    payment: "bkash"
};

//ternary,Nullish,Optional Chaining
const stock = 0;
//ternary
const status1 = stock > 0 ? true : false;

//nulish
const discountPrice = products.discount ?? 0;

//optional chaining
const sellerName = products?.name;

//unknown
let userInput: unknown;

// type assertion
function processInput(input: unknown) {
    // (userInput as string).toUpperCase();
    if (typeof input === "string") {
        input.toUpperCase();
    }
}
