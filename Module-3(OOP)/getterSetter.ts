class BankAccounts {
    readonly accNo: number;
    userName: string;
    private userBalance: number;

    // Deposite(balance: number) {
    //     this.userBalance += balance;
    // }
    // ShowBalance() {
    //     return this.userBalance;
    // }

    //setter
    set addBalance(amount: number) {
        this.userBalance += amount;
    }
    //getter
    get getBalance() {
        return this.userBalance;
    }

    constructor(accNo: number, name: string, balance: number) {
        this.accNo = accNo;
        this.userName = name;
        this.userBalance = balance
    };
};

const acs1 = new BankAccounts(12345, "Parvez Hasan", 200);
acs1.addBalance = 200;
console.log(acs1.getBalance);