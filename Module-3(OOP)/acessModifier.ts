class BankAccount {
    readonly accNo: number;
    userName: string;
    private userBalance: number;

    Deposite(balance: number) {
        this.userBalance += balance;
    }
    ShowBalance() {
        return this.userBalance;
    }

    constructor(accNo: number, name: string, balance: number) {
        this.accNo = accNo;
        this.userName = name;
        this.userBalance = balance
    };
};

const ac1 = new BankAccount(12345, "Parvez Hasan", 200);
ac1.Deposite(200);
console.log(ac1.ShowBalance(),ac1.accNo);