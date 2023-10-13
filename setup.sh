#!/bin/bash                                                                                                         

if [ "$#" -gt 1 -o \( "$#" -eq 1 -a "$1" != "--bonus" \) ]; then
    echo "Wrong usage : run setup.sh for mandatory part or setup.sh --bonus for the bonus part"
    exit
fi

echo "[ MANDATORY ] Copying smart contract code for compilation and deployement.."
cp ./code/coin42.sol ./deployment/contracts
echo "[ MANDATORY ] Done"
echo "[ MANDATORY ] Installing packages ..."
npm install --prefix ./deployment ./deployment
echo "[ MANDATORY ] Done"

if [[ "$#" -eq 1 ]] && [[ "$1" = "--bonus" ]]; then
    echo "[ BONUS ] Copying multisig smart contract code for compilation and deployement.."
    cp ./code/multisig42.sol ./deployment/contracts
    echo "[ BONUS ] Done"
    echo "[ BONUS ] Installing packages..."
    npm install --prefix ./bonus ./bonus
    echo "[ BONUS ] Done"
fi