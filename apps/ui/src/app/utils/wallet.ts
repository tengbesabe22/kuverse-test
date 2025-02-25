export async function getWallet() {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    console.log(accounts);
    const account = accounts[0];
    return account;
  }