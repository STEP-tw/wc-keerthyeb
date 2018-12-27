#! /bin/bash

if [ $# -eq 0 ]; then
  echo "Usage:"
  echo "run_test.sh <name_of_script.js> [node_run_commands]"
  exit
fi

script=$1
if [ ! -f ${script} ]; then
  echo "Unable to find ${script}"
  exit 1
fi

node_run_commands=$2
if [ ! -f ${node_run_commands} ]; then
  echo "Unable to find ${node_run_commands}"
  exit 1
fi

if [ -z ${node_run_commands} ]; then
  node_run_commands="input"
fi

actual_output=".actual_out"
expected_out=".exp_out"

rm -f ${actual_output}
rm -f ${expected_out}

IFS=$'\n'
lines=$(cat $node_run_commands)
for line in ${lines[*]}; do
  IFS="|"
  echo "-------------------------------"
  echo "Running test with input ${line}"
  output=$(node $script ${line[*]})
  echo $output | tee -a ${actual_output}
  output=$(wc ${line[*]})
  echo $output | tee -a ${expected_out}
done
echo "-------------------------------"

RED='\033[0;31m'
NC='\033[0m'

diff_tool="colordiff"
if [ -z $(command -v ${diff_tool}) ]; then
  diff_tool="diff"
fi

difference=$(${diff_tool} -y -W40 ${actual_output} ${expected_out})
if [ $? -ne 0 ]; then
  echo -e "${RED}Tests failed!${NC}"
  echo ${difference}
  exit 1
else
  echo "Tests passed!"
fi