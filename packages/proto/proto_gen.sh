#/bin/bash

#USE THIS BUILDER OR GET CANCER: npm install -g protoc-gen-ts (https://github.com/thesayyn/protoc-gen-ts)

protoc  --plugin="protoc-gen-ts=/usr/local/bin/protoc-gen-ts" \
        --ts_out=./src/proto                                  \
        -I ./proto                                            \
        ./proto/**/*.proto
