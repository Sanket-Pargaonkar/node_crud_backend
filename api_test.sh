#!/bin/bash

source .env
baseUrl="http://localhost:${PORT}";
echo -H "Authorisation: ${AUTH_HEADER}" "${baseUrl}/health" 
curl  -H "Authorisation: ${AUTH_HEADER}" "${baseUrl}/health"

echo -H "Authorisation: " "${baseUrl}/health" 
curl  -H "Authorisation: " "${baseUrl}/health"