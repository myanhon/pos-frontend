#!/bin/bash

#Don't forget to make it executable -> chmod +x 'FILE'
echo 'API_URL =' $API_URL
echo 'STRIPE_KEY =' $STRIPE_KEY
jq --arg NEW_API_URL "$API_URL" --arg NEW_STRIPE_PK_KEY "$STRIPE_KEY" '.API_URL |=$NEW_API_URL | .STRIPE_KEY |=$NEW_STRIPE_PK_KEY' ./config.json > tmp.$$.json && mv tmp.$$.json ./config.json

cat config.json
exec "$@"