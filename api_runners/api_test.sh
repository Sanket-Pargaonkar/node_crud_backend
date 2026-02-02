#!/bin/bash

dir="./api_runners/endpoints"

execFiles=()
count=1
for entry in "$dir"/*; do   
    execFiles+=("$entry")
    opt=$(basename "$entry");    
    echo "$count. ${opt%.*}";
    ((count++))
done

read sel

if [[ $sel -ge $count || $sel -lt 1 ]]; then
    echo "Invalid choice"
    exit 1
fi

exec "${execFiles[(($sel - 1))]}" 