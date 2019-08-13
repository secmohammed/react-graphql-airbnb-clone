#! /bin/bash
apollo-codegen introspect-schema http://localhost:4000/graphql --output schema.json
apollo-codegen generate src/modules/graphql/**/*.graphql --schema schema.json --target ts --output schema/types.ts