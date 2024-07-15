class BankAccount {
    private _balance: number = 0; // Encapsulation

    get balance(): number {
        return this._balance
    }

    set balance(initBalance: number) {
        if (initBalance < 0) {
            console.log(`must be positive`)
        } else {
            this._balance = initBalance;
        }
    }

    deposit = (amount: number): void => {
        // Validate before update
        if (amount <= 0) {
            this.balance = amount;
        } else {
            console.log(`The amount should be more than 100.`)
        }
    }

    withdraw = (amount: number): string => {
        if (amount > this.balance) {
            return `Not enough money in your bank account.`
        } else {
            this.balance -= amount;
            return this.balance.toString()
        }
    }

}

const userOneBankAccount = new BankAccount();
// userOneBankAccount.withdraw(50)

// setter
userOneBankAccount.balance = 20;

//getter
console.log(userOneBankAccount.balance)

