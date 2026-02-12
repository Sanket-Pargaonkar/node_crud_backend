#! /bin/bash

source .env

baseUrl="http://localhost:${PORT}";
echo -H "Authorisation: ${AUTH_HEADER}" "${baseUrl}/" 
curl  -X GET -H "Authorisation: ${AUTH_HEADER}" "${baseUrl}/"

