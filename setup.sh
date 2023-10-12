#!/bin/bash                                                                                                         

if [[ "$#" -eq 0 ]]; then
    echo "[ MANDATORY ] Copying smart contract code for compilation and deployement.."
    cp ./code/coin42.sol ./deployment/contracts
    echo "[ MANDATORY ] Done"
elif [[ "$#" -eq 1 ]] && [[ "$1" = "--bonus" ]]; then
    echo "[ BONUS ] Copying multisig smart contract code for compilation and deployement.."
    cp ./code/multisig42.sol ./deployment/contracts
    echo "[ BONUS ] Done"
    echo "[ BONUS ] Installing packages..."
    npm install --prefix ./bonus ./bonus
    echo "[ BONUS ] Done"
else
    echo "Wrong usage : run setup.sh for mandatory part or setup.sh --bonus for the bonus part"
fi
