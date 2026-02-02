#! /bin/bash

source .env

baseUrl="http://localhost:${PORT}";
echo -H "Authorisation: ${AUTH_HEADER}" "${baseUrl}/health" 
curl  -X GET -H "Authorisation: ${AUTH_HEADER}" "${baseUrl}/"

