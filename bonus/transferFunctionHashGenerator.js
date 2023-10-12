import  Web3 from 'web3';
import fetch from 'node-fetch';
import dotenv from 'dotenv'

dotenv.config()

const args = process.argv
if (args.length != 4) {
  console.log("Wrong usage : please pass the token address and the receiver address to the script")
  process.exit()
}
const tokenAddress = args[2]
const receiverAddress = args[3]
var web3 = new Web3('https://data-seed-prebsc-1-s1.bnbchain.org:8545');

fetch(`https://api-testnet.bscscan.com/api
?module=contract
&action=getabi
&address=${tokenAddress}
&apikey=${process.env.BSCSCANAPIKEY}`)
  .then(response => response.json())
  .then(data => {
    if (data.status != 1) {
      console.log(data.result)
      process.exit()
    }
    var contractABI = "";
    contractABI = JSON.parse(data.result);
    if (contractABI != '') {
        var contract = new web3.eth.Contract(contractABI, tokenAddress);
        const transferHash = contract.methods.transfer(receiverAddress,  web3.utils.toWei('10', 'ether')).encodeABI()
        console.log(transferHash)
    } else {
        console.log("Error");
    }
  })
  .catch(error => {
    console.error('Error:', error);
  })