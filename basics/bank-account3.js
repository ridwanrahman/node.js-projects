var account = {
    balance: 0
};

var accounts = [];

//create account
function createAccount(account) {
    accounts.push(account);
}

function getAccount(username) {
    var matchedAccount;
    accounts.forEach(function(account) {
        if(account.username === username) {
            matchedAccount = account;
        }
    });
    return matchedAccount;
}

//deposit
function deposit(account, amount) {
    account.balance += amount;
};


//withdraw
function withdraw(account, amount) {
    account.balance -= amount;
};

//getBalance
function getBalance(account){
    return account.balance;
}

var account1 = {
    balance:20,
    username: 'ridwan'
};
var account2 = {
    balance:30,
    username: 'ridwan2'
};
accounts.push(account1, account2);
// console.log(accounts);
var a = getAccount('ridwan2', accounts);
console.log(a);