/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: cosmos/feegrant/v1beta1/query.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./feegrant";
import * as dependency_2 from "./../../base/query/v1beta1/pagination";
import * as dependency_3 from "./../../../google/api/annotations";
import * as dependency_4 from "./../../../cosmos_proto/cosmos";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace cosmos.feegrant.v1beta1 {
    export class QueryAllowanceRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            granter?: string;
            grantee?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("granter" in data && data.granter != undefined) {
                    this.granter = data.granter;
                }
                if ("grantee" in data && data.grantee != undefined) {
                    this.grantee = data.grantee;
                }
            }
        }
        get granter() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set granter(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get grantee() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set grantee(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            granter?: string;
            grantee?: string;
        }): QueryAllowanceRequest {
            const message = new QueryAllowanceRequest({});
            if (data.granter != null) {
                message.granter = data.granter;
            }
            if (data.grantee != null) {
                message.grantee = data.grantee;
            }
            return message;
        }
        toObject() {
            const data: {
                granter?: string;
                grantee?: string;
            } = {};
            if (this.granter != null) {
                data.granter = this.granter;
            }
            if (this.grantee != null) {
                data.grantee = this.grantee;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.granter.length)
                writer.writeString(1, this.granter);
            if (this.grantee.length)
                writer.writeString(2, this.grantee);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAllowanceRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryAllowanceRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.granter = reader.readString();
                        break;
                    case 2:
                        message.grantee = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryAllowanceRequest {
            return QueryAllowanceRequest.deserialize(bytes);
        }
    }
    export class QueryAllowanceResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            allowance?: dependency_1.cosmos.feegrant.v1beta1.Grant;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("allowance" in data && data.allowance != undefined) {
                    this.allowance = data.allowance;
                }
            }
        }
        get allowance() {
            return pb_1.Message.getWrapperField(this, dependency_1.cosmos.feegrant.v1beta1.Grant, 1) as dependency_1.cosmos.feegrant.v1beta1.Grant;
        }
        set allowance(value: dependency_1.cosmos.feegrant.v1beta1.Grant) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_allowance() {
            return pb_1.Message.getField(this, 1) != null;
        }
        static fromObject(data: {
            allowance?: ReturnType<typeof dependency_1.cosmos.feegrant.v1beta1.Grant.prototype.toObject>;
        }): QueryAllowanceResponse {
            const message = new QueryAllowanceResponse({});
            if (data.allowance != null) {
                message.allowance = dependency_1.cosmos.feegrant.v1beta1.Grant.fromObject(data.allowance);
            }
            return message;
        }
        toObject() {
            const data: {
                allowance?: ReturnType<typeof dependency_1.cosmos.feegrant.v1beta1.Grant.prototype.toObject>;
            } = {};
            if (this.allowance != null) {
                data.allowance = this.allowance.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_allowance)
                writer.writeMessage(1, this.allowance, () => this.allowance.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAllowanceResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryAllowanceResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.allowance, () => message.allowance = dependency_1.cosmos.feegrant.v1beta1.Grant.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryAllowanceResponse {
            return QueryAllowanceResponse.deserialize(bytes);
        }
    }
    export class QueryAllowancesRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            grantee?: string;
            pagination?: dependency_2.cosmos.base.query.v1beta1.PageRequest;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("grantee" in data && data.grantee != undefined) {
                    this.grantee = data.grantee;
                }
                if ("pagination" in data && data.pagination != undefined) {
                    this.pagination = data.pagination;
                }
            }
        }
        get grantee() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set grantee(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get pagination() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.query.v1beta1.PageRequest, 2) as dependency_2.cosmos.base.query.v1beta1.PageRequest;
        }
        set pagination(value: dependency_2.cosmos.base.query.v1beta1.PageRequest) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_pagination() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            grantee?: string;
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryAllowancesRequest {
            const message = new QueryAllowancesRequest({});
            if (data.grantee != null) {
                message.grantee = data.grantee;
            }
            if (data.pagination != null) {
                message.pagination = dependency_2.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
            }
            return message;
        }
        toObject() {
            const data: {
                grantee?: string;
                pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
            } = {};
            if (this.grantee != null) {
                data.grantee = this.grantee;
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
            if (this.grantee.length)
                writer.writeString(1, this.grantee);
            if (this.has_pagination)
                writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAllowancesRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryAllowancesRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.grantee = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.pagination, () => message.pagination = dependency_2.cosmos.base.query.v1beta1.PageRequest.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryAllowancesRequest {
            return QueryAllowancesRequest.deserialize(bytes);
        }
    }
    export class QueryAllowancesResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            allowances?: dependency_1.cosmos.feegrant.v1beta1.Grant[];
            pagination?: dependency_2.cosmos.base.query.v1beta1.PageResponse;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("allowances" in data && data.allowances != undefined) {
                    this.allowances = data.allowances;
                }
                if ("pagination" in data && data.pagination != undefined) {
                    this.pagination = data.pagination;
                }
            }
        }
        get allowances() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_1.cosmos.feegrant.v1beta1.Grant, 1) as dependency_1.cosmos.feegrant.v1beta1.Grant[];
        }
        set allowances(value: dependency_1.cosmos.feegrant.v1beta1.Grant[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get pagination() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.query.v1beta1.PageResponse, 2) as dependency_2.cosmos.base.query.v1beta1.PageResponse;
        }
        set pagination(value: dependency_2.cosmos.base.query.v1beta1.PageResponse) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_pagination() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            allowances?: ReturnType<typeof dependency_1.cosmos.feegrant.v1beta1.Grant.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryAllowancesResponse {
            const message = new QueryAllowancesResponse({});
            if (data.allowances != null) {
                message.allowances = data.allowances.map(item => dependency_1.cosmos.feegrant.v1beta1.Grant.fromObject(item));
            }
            if (data.pagination != null) {
                message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
            }
            return message;
        }
        toObject() {
            const data: {
                allowances?: ReturnType<typeof dependency_1.cosmos.feegrant.v1beta1.Grant.prototype.toObject>[];
                pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
            } = {};
            if (this.allowances != null) {
                data.allowances = this.allowances.map((item: dependency_1.cosmos.feegrant.v1beta1.Grant) => item.toObject());
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
            if (this.allowances.length)
                writer.writeRepeatedMessage(1, this.allowances, (item: dependency_1.cosmos.feegrant.v1beta1.Grant) => item.serialize(writer));
            if (this.has_pagination)
                writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAllowancesResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryAllowancesResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.allowances, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_1.cosmos.feegrant.v1beta1.Grant.deserialize(reader), dependency_1.cosmos.feegrant.v1beta1.Grant));
                        break;
                    case 2:
                        reader.readMessage(message.pagination, () => message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryAllowancesResponse {
            return QueryAllowancesResponse.deserialize(bytes);
        }
    }
    export class QueryAllowancesByGranterRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            granter?: string;
            pagination?: dependency_2.cosmos.base.query.v1beta1.PageRequest;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("granter" in data && data.granter != undefined) {
                    this.granter = data.granter;
                }
                if ("pagination" in data && data.pagination != undefined) {
                    this.pagination = data.pagination;
                }
            }
        }
        get granter() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set granter(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get pagination() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.query.v1beta1.PageRequest, 2) as dependency_2.cosmos.base.query.v1beta1.PageRequest;
        }
        set pagination(value: dependency_2.cosmos.base.query.v1beta1.PageRequest) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_pagination() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            granter?: string;
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }): QueryAllowancesByGranterRequest {
            const message = new QueryAllowancesByGranterRequest({});
            if (data.granter != null) {
                message.granter = data.granter;
            }
            if (data.pagination != null) {
                message.pagination = dependency_2.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
            }
            return message;
        }
        toObject() {
            const data: {
                granter?: string;
                pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
            } = {};
            if (this.granter != null) {
                data.granter = this.granter;
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
            if (this.granter.length)
                writer.writeString(1, this.granter);
            if (this.has_pagination)
                writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAllowancesByGranterRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryAllowancesByGranterRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.granter = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.pagination, () => message.pagination = dependency_2.cosmos.base.query.v1beta1.PageRequest.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryAllowancesByGranterRequest {
            return QueryAllowancesByGranterRequest.deserialize(bytes);
        }
    }
    export class QueryAllowancesByGranterResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            allowances?: dependency_1.cosmos.feegrant.v1beta1.Grant[];
            pagination?: dependency_2.cosmos.base.query.v1beta1.PageResponse;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("allowances" in data && data.allowances != undefined) {
                    this.allowances = data.allowances;
                }
                if ("pagination" in data && data.pagination != undefined) {
                    this.pagination = data.pagination;
                }
            }
        }
        get allowances() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_1.cosmos.feegrant.v1beta1.Grant, 1) as dependency_1.cosmos.feegrant.v1beta1.Grant[];
        }
        set allowances(value: dependency_1.cosmos.feegrant.v1beta1.Grant[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get pagination() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.base.query.v1beta1.PageResponse, 2) as dependency_2.cosmos.base.query.v1beta1.PageResponse;
        }
        set pagination(value: dependency_2.cosmos.base.query.v1beta1.PageResponse) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_pagination() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            allowances?: ReturnType<typeof dependency_1.cosmos.feegrant.v1beta1.Grant.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }): QueryAllowancesByGranterResponse {
            const message = new QueryAllowancesByGranterResponse({});
            if (data.allowances != null) {
                message.allowances = data.allowances.map(item => dependency_1.cosmos.feegrant.v1beta1.Grant.fromObject(item));
            }
            if (data.pagination != null) {
                message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
            }
            return message;
        }
        toObject() {
            const data: {
                allowances?: ReturnType<typeof dependency_1.cosmos.feegrant.v1beta1.Grant.prototype.toObject>[];
                pagination?: ReturnType<typeof dependency_2.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
            } = {};
            if (this.allowances != null) {
                data.allowances = this.allowances.map((item: dependency_1.cosmos.feegrant.v1beta1.Grant) => item.toObject());
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
            if (this.allowances.length)
                writer.writeRepeatedMessage(1, this.allowances, (item: dependency_1.cosmos.feegrant.v1beta1.Grant) => item.serialize(writer));
            if (this.has_pagination)
                writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryAllowancesByGranterResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryAllowancesByGranterResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.allowances, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_1.cosmos.feegrant.v1beta1.Grant.deserialize(reader), dependency_1.cosmos.feegrant.v1beta1.Grant));
                        break;
                    case 2:
                        reader.readMessage(message.pagination, () => message.pagination = dependency_2.cosmos.base.query.v1beta1.PageResponse.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryAllowancesByGranterResponse {
            return QueryAllowancesByGranterResponse.deserialize(bytes);
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
            Allowance: {
                path: "/cosmos.feegrant.v1beta1.Query/Allowance",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: QueryAllowanceRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => QueryAllowanceRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: QueryAllowanceResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => QueryAllowanceResponse.deserialize(new Uint8Array(bytes))
            },
            Allowances: {
                path: "/cosmos.feegrant.v1beta1.Query/Allowances",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: QueryAllowancesRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => QueryAllowancesRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: QueryAllowancesResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => QueryAllowancesResponse.deserialize(new Uint8Array(bytes))
            },
            AllowancesByGranter: {
                path: "/cosmos.feegrant.v1beta1.Query/AllowancesByGranter",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: QueryAllowancesByGranterRequest) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => QueryAllowancesByGranterRequest.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: QueryAllowancesByGranterResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => QueryAllowancesByGranterResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Allowance(call: grpc_1.ServerUnaryCall<QueryAllowanceRequest, QueryAllowanceResponse>, callback: grpc_1.sendUnaryData<QueryAllowanceResponse>): void;
        abstract Allowances(call: grpc_1.ServerUnaryCall<QueryAllowancesRequest, QueryAllowancesResponse>, callback: grpc_1.sendUnaryData<QueryAllowancesResponse>): void;
        abstract AllowancesByGranter(call: grpc_1.ServerUnaryCall<QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse>, callback: grpc_1.sendUnaryData<QueryAllowancesByGranterResponse>): void;
    }
    export class QueryClient extends grpc_1.makeGenericClientConstructor(UnimplementedQueryService.definition, "Query", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        Allowance: GrpcUnaryServiceInterface<QueryAllowanceRequest, QueryAllowanceResponse> = (message: QueryAllowanceRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<QueryAllowanceResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<QueryAllowanceResponse>, callback?: grpc_1.requestCallback<QueryAllowanceResponse>): grpc_1.ClientUnaryCall => {
            return super.Allowance(message, metadata, options, callback);
        };
        Allowances: GrpcUnaryServiceInterface<QueryAllowancesRequest, QueryAllowancesResponse> = (message: QueryAllowancesRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<QueryAllowancesResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<QueryAllowancesResponse>, callback?: grpc_1.requestCallback<QueryAllowancesResponse>): grpc_1.ClientUnaryCall => {
            return super.Allowances(message, metadata, options, callback);
        };
        AllowancesByGranter: GrpcUnaryServiceInterface<QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse> = (message: QueryAllowancesByGranterRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<QueryAllowancesByGranterResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<QueryAllowancesByGranterResponse>, callback?: grpc_1.requestCallback<QueryAllowancesByGranterResponse>): grpc_1.ClientUnaryCall => {
            return super.AllowancesByGranter(message, metadata, options, callback);
        };
    }
}
