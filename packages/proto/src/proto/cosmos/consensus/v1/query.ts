/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: cosmos/consensus/v1/query.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../google/api/annotations";
import * as dependency_2 from "./../../../tendermint/types/params";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace cosmos.consensus.v1 {
    export class QueryParamsRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): QueryParamsRequest {
            const message = new QueryParamsRequest({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryParamsRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryParamsRequest {
            return QueryParamsRequest.deserialize(bytes);
        }
    }
    export class QueryParamsResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            params?: dependency_2.tendermint.types.ConsensusParams;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("params" in data && data.params != undefined) {
                    this.params = data.params;
                }
            }
        }
        get params() {
            return pb_1.Message.getWrapperField(this, dependency_2.tendermint.types.ConsensusParams, 1) as dependency_2.tendermint.types.ConsensusParams;
        }
        set params(value: dependency_2.tendermint.types.ConsensusParams) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_params() {
            return pb_1.Message.getField(this, 1) != null;
        }
        static fromObject(data: {
            params?: ReturnType<typeof dependency_2.tendermint.types.ConsensusParams.prototype.toObject>;
        }): QueryParamsResponse {
            const message = new QueryParamsResponse({});
            if (data.params != null) {
                message.params = dependency_2.tendermint.types.ConsensusParams.fromObject(data.params);
            }
            return message;
        }
        toObject() {
            const data: {
                params?: ReturnType<typeof dependency_2.tendermint.types.ConsensusParams.prototype.toObject>;
            } = {};
            if (this.params != null) {
                data.params = this.params.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_params)
                writer.writeMessage(1, this.params, () => this.params.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryParamsResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.params, () => message.params = dependency_2.tendermint.types.ConsensusParams.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryParamsResponse {
            return QueryParamsResponse.deserialize(bytes);
        }
    }
    interface GrpcUnaryServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
        (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    }
    interface GrpcStreamServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
        (message: P, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
    }
    interface GrpWritableServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
        (callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    }
    interface GrpcChunkServiceInterface<P, R> {
        (metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
        (options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
    }
    interface GrpcPromiseServiceInterface<P, R> {
        (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): Promise<R>;
        (message: P, options?: grpc_1.CallOptions): Promise<R>;
    }
    export abstract class UnimplementedQueryService {
        static definition = {
            Params: {
                path: "/cosmos.consensus.v1.Query/Params",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: QueryParamsRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => QueryParamsRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: QueryParamsResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => QueryParamsResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Params(call: grpc_1.ServerUnaryCall<QueryParamsRequest, QueryParamsResponse>, callback: grpc_1.sendUnaryData<QueryParamsResponse>): void;
    }
    export class QueryClient extends grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        Params: GrpcUnaryServiceInterface<QueryParamsRequest, QueryParamsResponse> = (message: QueryParamsRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<QueryParamsResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<QueryParamsResponse>, callback?: grpc_1.requestCallback<QueryParamsResponse>): grpc_1.ClientUnaryCall => {
            return super.Params(message, metadata, options, callback);
        };
    }
}
