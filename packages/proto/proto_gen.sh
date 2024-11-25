#/bin/bash
protoc  --plugin="protoc-gen-ts=/usr/local/bin/protoc-gen-ts" \
        --ts_out=./src/proto                                  \
        -I ./proto                                            \
        ./proto/**/*.proto
