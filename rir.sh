#!/bin/bash

echo 'Remove node_modules Install dependency Run simulator <3 ...'
echo 'Remove'
rm -rf ./node_modules

echo 'Install'
npm i

echo 'Run'

npm run android
