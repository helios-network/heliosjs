/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: helios/erc20/v1/query.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../cosmos/base/query/v1beta1/pagination";
import * as dependency_2 from "./genesis";
import * as dependency_3 from "./erc20";
import * as dependency_4 from "./../../../google/api/annotations";
import * as dependency_5 from "./../../../gogoproto/gogo";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace helios.erc20.v1 {
    export class QueryTokenPairsRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageRequest;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("pagination" in data && data.pagination != undefined) {
                    this.pagination = data.pagination;
                }
            }
        }
        get pagination() {
            return pb_1.Message.getWrapperField(this, dependency_1.cosmos.base.query.v1beta1.PageRequest, 1) as dependency_1.cosmos.base.query.v1beta1.PageRequest;
        }
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageRequest) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_pagination() {
            return pb_1.Message.getField(this, 1) != null;
        }
        static fromObject(data: {
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryTokenPairsRequest {
            const message = new QueryTokenPairsRequest({});
            if (data.pagination != null) {
                message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
            }
            return message;
        }
        toObject() {
            const data: {
                pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
            } = {};
            if (this.pagination != null) {
                data.pagination = this.pagination.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_pagination)
                writer.writeMessage(1, this.pagination, () => this.pagination.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryTokenPairsRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryTokenPairsRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.pagination, () => message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryTokenPairsRequest {
            return QueryTokenPairsRequest.deserialize(bytes);
        }
    }
    export class QueryTokenPairsResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            token_pairs?: dependency_3.helios.erc20.v1.TokenPair[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("token_pairs" in data && data.token_pairs != undefined) {
                    this.token_pairs = data.token_pairs;
                }
                if ("pagination" in data && data.pagination != undefined) {
                    this.pagination = data.pagination;
                }
            }
        }
        get token_pairs() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.helios.erc20.v1.TokenPair, 1) as dependency_3.helios.erc20.v1.TokenPair[];
        }
        set token_pairs(value: dependency_3.helios.erc20.v1.TokenPair[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get pagination() {
            return pb_1.Message.getWrapperField(this, dependency_1.cosmos.base.query.v1beta1.PageResponse, 2) as dependency_1.cosmos.base.query.v1beta1.PageResponse;
        }
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageResponse) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_pagination() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            token_pairs?: ReturnType<typeof dependency_3.helios.erc20.v1.TokenPair.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryTokenPairsResponse {
            const message = new QueryTokenPairsResponse({});
            if (data.token_pairs != null) {
                message.token_pairs = data.token_pairs.map(item => dependency_3.helios.erc20.v1.TokenPair.fromObject(item));
            }
            if (data.pagination != null) {
                message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
            }
            return message;
        }
        toObject() {
            const data: {
                token_pairs?: ReturnType<typeof dependency_3.helios.erc20.v1.TokenPair.prototype.toObject>[];
                pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
            } = {};
            if (this.token_pairs != null) {
                data.token_pairs = this.token_pairs.map((item: dependency_3.helios.erc20.v1.TokenPair) => item.toObject());
            }
            if (this.pagination != null) {
                data.pagination = this.pagination.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.token_pairs.length)
                writer.writeRepeatedMessage(1, this.token_pairs, (item: dependency_3.helios.erc20.v1.TokenPair) => item.serialize(writer));
            if (this.has_pagination)
                writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryTokenPairsResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryTokenPairsResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.token_pairs, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.helios.erc20.v1.TokenPair.deserialize(reader), dependency_3.helios.erc20.v1.TokenPair));
                        break;
                    case 2:
                        reader.readMessage(message.pagination, () => message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryTokenPairsResponse {
            return QueryTokenPairsResponse.deserialize(bytes);
        }
    }
    export class QueryTokenPairRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            token?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("token" in data && data.token != undefined) {
                    this.token = data.token;
                }
            }
        }
        get token() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set token(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            token?: string;
        }): QueryTokenPairRequest {
            const message = new QueryTokenPairRequest({});
            if (data.token != null) {
                message.token = data.token;
            }
            return message;
        }
        toObject() {
            const data: {
                token?: string;
            } = {};
            if (this.token != null) {
                data.token = this.token;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.token.length)
                writer.writeString(1, this.token);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryTokenPairRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryTokenPairRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.token = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryTokenPairRequest {
            return QueryTokenPairRequest.deserialize(bytes);
        }
    }
    export class QueryTokenPairResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            token_pair?: dependency_3.helios.erc20.v1.TokenPair;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("token_pair" in data && data.token_pair != undefined) {
                    this.token_pair = data.token_pair;
                }
            }
        }
        get token_pair() {
            return pb_1.Message.getWrapperField(this, dependency_3.helios.erc20.v1.TokenPair, 1) as dependency_3.helios.erc20.v1.TokenPair;
        }
        set token_pair(value: dependency_3.helios.erc20.v1.TokenPair) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_token_pair() {
            return pb_1.Message.getField(this, 1) != null;
        }
        static fromObject(data: {
            token_pair?: ReturnType<typeof dependency_3.helios.erc20.v1.TokenPair.prototype.toObject>;
        }): QueryTokenPairResponse {
            const message = new QueryTokenPairResponse({});
            if (data.token_pair != null) {
                message.token_pair = dependency_3.helios.erc20.v1.TokenPair.fromObject(data.token_pair);
            }
            return message;
        }
        toObject() {
            const data: {
                token_pair?: ReturnType<typeof dependency_3.helios.erc20.v1.TokenPair.prototype.toObject>;
            } = {};
            if (this.token_pair != null) {
                data.token_pair = this.token_pair.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_token_pair)
                writer.writeMessage(1, this.token_pair, () => this.token_pair.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryTokenPairResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryTokenPairResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.token_pair, () => message.token_pair = dependency_3.helios.erc20.v1.TokenPair.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryTokenPairResponse {
            return QueryTokenPairResponse.deserialize(bytes);
        }
    }
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
            params?: dependency_2.helios.erc20.v1.Params;
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
            return pb_1.Message.getWrapperField(this, dependency_2.helios.erc20.v1.Params, 1) as dependency_2.helios.erc20.v1.Params;
        }
        set params(value: dependency_2.helios.erc20.v1.Params) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_params() {
            return pb_1.Message.getField(this, 1) != null;
        }
        static fromObject(data: {
            params?: ReturnType<typeof dependency_2.helios.erc20.v1.Params.prototype.toObject>;
        }): QueryParamsResponse {
            const message = new QueryParamsResponse({});
            if (data.params != null) {
                message.params = dependency_2.helios.erc20.v1.Params.fromObject(data.params);
            }
            return message;
        }
        toObject() {
            const data: {
                params?: ReturnType<typeof dependency_2.helios.erc20.v1.Params.prototype.toObject>;
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
                        reader.readMessage(message.params, () => message.params = dependency_2.helios.erc20.v1.Params.deserialize(reader));
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
            TokenPairs: {
                path: "/helios.erc20.v1.Query/TokenPairs",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: QueryTokenPairsRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => QueryTokenPairsRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: QueryTokenPairsResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => QueryTokenPairsResponse.deserialize(new Uint8Array(bytes))
            },
            TokenPair: {
                path: "/helios.erc20.v1.Query/TokenPair",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: QueryTokenPairRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => QueryTokenPairRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: QueryTokenPairResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => QueryTokenPairResponse.deserialize(new Uint8Array(bytes))
            },
            Params: {
                path: "/helios.erc20.v1.Query/Params",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: QueryParamsRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => QueryParamsRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: QueryParamsResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => QueryParamsResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract TokenPairs(call: grpc_1.ServerUnaryCall<QueryTokenPairsRequest, QueryTokenPairsResponse>, callback: grpc_1.sendUnaryData<QueryTokenPairsResponse>): void;
        abstract TokenPair(call: grpc_1.ServerUnaryCall<QueryTokenPairRequest, QueryTokenPairResponse>, callback: grpc_1.sendUnaryData<QueryTokenPairResponse>): void;
        abstract Params(call: grpc_1.ServerUnaryCall<QueryParamsRequest, QueryParamsResponse>, callback: grpc_1.sendUnaryData<QueryParamsResponse>): void;
    }
    export class QueryClient extends grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        TokenPairs: GrpcUnaryServiceInterface<QueryTokenPairsRequest, QueryTokenPairsResponse> = (message: QueryTokenPairsRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<QueryTokenPairsResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<QueryTokenPairsResponse>, callback?: grpc_1.requestCallback<QueryTokenPairsResponse>): grpc_1.ClientUnaryCall => {
            return super.TokenPairs(message, metadata, options, callback);
        };
        TokenPair: GrpcUnaryServiceInterface<QueryTokenPairRequest, QueryTokenPairResponse> = (message: QueryTokenPairRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<QueryTokenPairResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<QueryTokenPairResponse>, callback?: grpc_1.requestCallback<QueryTokenPairResponse>): grpc_1.ClientUnaryCall => {
            return super.TokenPair(message, metadata, options, callback);
        };
        Params: GrpcUnaryServiceInterface<QueryParamsRequest, QueryParamsResponse> = (message: QueryParamsRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<QueryParamsResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<QueryParamsResponse>, callback?: grpc_1.requestCallback<QueryParamsResponse>): grpc_1.ClientUnaryCall => {
            return super.Params(message, metadata, options, callback);
        };
    }
}
