/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: cosmos/evidence/v1beta1/query.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../base/query/v1beta1/pagination";
import * as dependency_2 from "./../../../google/protobuf/any";
import * as dependency_3 from "./../../../google/api/annotations";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace cosmos.evidence.v1beta1 {
    export class QueryEvidenceRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            /** @deprecated*/
            evidence_hash?: Uint8Array;
            hash?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("evidence_hash" in data && data.evidence_hash != undefined) {
                    this.evidence_hash = data.evidence_hash;
                }
                if ("hash" in data && data.hash != undefined) {
                    this.hash = data.hash;
                }
            }
        }
        /** @deprecated*/
        get evidence_hash() {
            return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0)) as Uint8Array;
        }
        /** @deprecated*/
        set evidence_hash(value: Uint8Array) {
            pb_1.Message.setField(this, 1, value);
        }
        get hash() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set hash(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            evidence_hash?: Uint8Array;
            hash?: string;
        }): QueryEvidenceRequest {
            const message = new QueryEvidenceRequest({});
            if (data.evidence_hash != null) {
                message.evidence_hash = data.evidence_hash;
            }
            if (data.hash != null) {
                message.hash = data.hash;
            }
            return message;
        }
        toObject() {
            const data: {
                evidence_hash?: Uint8Array;
                hash?: string;
            } = {};
            if (this.evidence_hash != null) {
                data.evidence_hash = this.evidence_hash;
            }
            if (this.hash != null) {
                data.hash = this.hash;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.evidence_hash.length)
                writer.writeBytes(1, this.evidence_hash);
            if (this.hash.length)
                writer.writeString(2, this.hash);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryEvidenceRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryEvidenceRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.evidence_hash = reader.readBytes();
                        break;
                    case 2:
                        message.hash = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryEvidenceRequest {
            return QueryEvidenceRequest.deserialize(bytes);
        }
    }
    export class QueryEvidenceResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            evidence?: dependency_2.google.protobuf.Any;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("evidence" in data && data.evidence != undefined) {
                    this.evidence = data.evidence;
                }
            }
        }
        get evidence() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 1) as dependency_2.google.protobuf.Any;
        }
        set evidence(value: dependency_2.google.protobuf.Any) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_evidence() {
            return pb_1.Message.getField(this, 1) != null;
        }
        static fromObject(data: {
            evidence?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
        }): QueryEvidenceResponse {
            const message = new QueryEvidenceResponse({});
            if (data.evidence != null) {
                message.evidence = dependency_2.google.protobuf.Any.fromObject(data.evidence);
            }
            return message;
        }
        toObject() {
            const data: {
                evidence?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
            } = {};
            if (this.evidence != null) {
                data.evidence = this.evidence.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_evidence)
                writer.writeMessage(1, this.evidence, () => this.evidence.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryEvidenceResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryEvidenceResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.evidence, () => message.evidence = dependency_2.google.protobuf.Any.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryEvidenceResponse {
            return QueryEvidenceResponse.deserialize(bytes);
        }
    }
    export class QueryAllEvidenceRequest extends pb_1.Message {
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
        }): QueryAllEvidenceRequest {
            const message = new QueryAllEvidenceRequest({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAllEvidenceRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryAllEvidenceRequest();
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
        static deserializeBinary(bytes: Uint8Array): QueryAllEvidenceRequest {
            return QueryAllEvidenceRequest.deserialize(bytes);
        }
    }
    export class QueryAllEvidenceResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            evidence?: dependency_2.google.protobuf.Any[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("evidence" in data && data.evidence != undefined) {
                    this.evidence = data.evidence;
                }
                if ("pagination" in data && data.pagination != undefined) {
                    this.pagination = data.pagination;
                }
            }
        }
        get evidence() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.google.protobuf.Any, 1) as dependency_2.google.protobuf.Any[];
        }
        set evidence(value: dependency_2.google.protobuf.Any[]) {
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
            evidence?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryAllEvidenceResponse {
            const message = new QueryAllEvidenceResponse({});
            if (data.evidence != null) {
                message.evidence = data.evidence.map(item => dependency_2.google.protobuf.Any.fromObject(item));
            }
            if (data.pagination != null) {
                message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
            }
            return message;
        }
        toObject() {
            const data: {
                evidence?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>[];
                pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
            } = {};
            if (this.evidence != null) {
                data.evidence = this.evidence.map((item: dependency_2.google.protobuf.Any) => item.toObject());
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
            if (this.evidence.length)
                writer.writeRepeatedMessage(1, this.evidence, (item: dependency_2.google.protobuf.Any) => item.serialize(writer));
            if (this.has_pagination)
                writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAllEvidenceResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryAllEvidenceResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.evidence, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_2.google.protobuf.Any.deserialize(reader), dependency_2.google.protobuf.Any));
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
        static deserializeBinary(bytes: Uint8Array): QueryAllEvidenceResponse {
            return QueryAllEvidenceResponse.deserialize(bytes);
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
            Evidence: {
                path: "/cosmos.evidence.v1beta1.Query/Evidence",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: QueryEvidenceRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => QueryEvidenceRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: QueryEvidenceResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => QueryEvidenceResponse.deserialize(new Uint8Array(bytes))
            },
            AllEvidence: {
                path: "/cosmos.evidence.v1beta1.Query/AllEvidence",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: QueryAllEvidenceRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => QueryAllEvidenceRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: QueryAllEvidenceResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => QueryAllEvidenceResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Evidence(call: grpc_1.ServerUnaryCall<QueryEvidenceRequest, QueryEvidenceResponse>, callback: grpc_1.sendUnaryData<QueryEvidenceResponse>): void;
        abstract AllEvidence(call: grpc_1.ServerUnaryCall<QueryAllEvidenceRequest, QueryAllEvidenceResponse>, callback: grpc_1.sendUnaryData<QueryAllEvidenceResponse>): void;
    }
    export class QueryClient extends grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        Evidence: GrpcUnaryServiceInterface<QueryEvidenceRequest, QueryEvidenceResponse> = (message: QueryEvidenceRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<QueryEvidenceResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<QueryEvidenceResponse>, callback?: grpc_1.requestCallback<QueryEvidenceResponse>): grpc_1.ClientUnaryCall => {
            return super.Evidence(message, metadata, options, callback);
        };
        AllEvidence: GrpcUnaryServiceInterface<QueryAllEvidenceRequest, QueryAllEvidenceResponse> = (message: QueryAllEvidenceRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<QueryAllEvidenceResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<QueryAllEvidenceResponse>, callback?: grpc_1.requestCallback<QueryAllEvidenceResponse>): grpc_1.ClientUnaryCall => {
            return super.AllEvidence(message, metadata, options, callback);
        };
    }
}
