type para = { money: number, deposit: (value: number) => void};
let bankAccount: para = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

let myself: { name: string, bankAccount: para, hobbies: string[]} = {
    name: 'max',
    bankAccount: bankAccount,
    hobbies: ['sports', 'cooking']
};

myself.bankAccount.deposit(3000);

console.log(myself);