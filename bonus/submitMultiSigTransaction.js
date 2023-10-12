import  Web3 from 'web3';
import fetch from 'node-fetch';
var web3 = new Web3('https://data-seed-prebsc-1-s1.bnbchain.org:8545');


const tokenAddress = "0x6a64e59Bb4F0EaF2F00DE8554F65a9a591B1beda"
fetch(`https://api-testnet.bscscan.com/api
?module=contract
&action=getabi
&address=0x6a64e59Bb4F0EaF2F00DE8554F65a9a591B1beda
&apikey=XKC84MIGZI1ND62T6PH3GVSA7DM17QQABP`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    // Handle the JSON data
    var contractABI = "";
    contractABI = JSON.parse(data.result);
    if (contractABI != '') {
        var contract = new web3.eth.Contract(contractABI, tokenAddress);
        const transferHash = contract.methods.transfer("0x520f0d93B7c193aF531D9efE4ea7E2163A25349a",  web3.utils.toWei('10', 'ether')).encodeABI()
        console.log(transferHash)
    } else {
        console.log("Error");
    }
  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error);
  })