/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: cosmos/bank/v1beta1/tx.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../gogoproto/gogo";
import * as dependency_2 from "./../../base/v1beta1/coin";
import * as dependency_3 from "./bank";
import * as dependency_4 from "./../../../cosmos_proto/cosmos";
import * as dependency_5 from "./../../msg/v1/msg";
import * as dependency_6 from "./../../../amino/amino";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace cosmos.bank.v1beta1 {
    export class MsgSend extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            from_address?: string;
            to_address?: string;
            amount?: dependency_2.cosmos.base.v1beta1.Coin[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("from_address" in data && data.from_address != undefined) {
                    this.from_address = data.from_address;
                }
                if ("to_address" in data && data.to_address != undefined) {
                    this.to_address = data.to_address;
                }
                if ("amount" in data && data.amount != undefined) {
                    this.amount = data.amount;
                }
            }
        }
        get from_address() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set from_address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get to_address() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set to_address(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get amount() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.base.v1beta1.Coin, 3) as dependency_2.cosmos.base.v1beta1.Coin[];
        }
        set amount(value: dependency_2.cosmos.base.v1beta1.Coin[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        static fromObject(data: {
            from_address?: string;
            to_address?: string;
            amount?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.Coin.prototype.toObject>[];
        }): MsgSend {
            const message = new MsgSend({});
            if (data.from_address != null) {
                message.from_address = data.from_address;
            }
            if (data.to_address != null) {
                message.to_address = data.to_address;
            }
            if (data.amount != null) {
                message.amount = data.amount.map(item => dependency_2.cosmos.base.v1beta1.Coin.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                from_address?: string;
                to_address?: string;
                amount?: ReturnType<typeof dependency_2.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            } = {};
            if (this.from_address != null) {
                data.from_address = this.from_address;
            }
            if (this.to_address != null) {
                data.to_address = this.to_address;
            }
            if (this.amount != null) {
                data.amount = this.amount.map((item: dependency_2.cosmos.base.v1beta1.Coin) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.from_address.length)
                writer.writeString(1, this.from_address);
            if (this.to_address.length)
                writer.writeString(2, this.to_address);
            if (this.amount.length)
                writer.writeRepeatedMessage(3, this.amount, (item: dependency_2.cosmos.base.v1beta1.Coin) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSend {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSend();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.from_address = reader.readString();
                        break;
                    case 2:
                        message.to_address = reader.readString();
                        break;
                    case 3:
                        reader.readMessage(message.amount, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_2.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_2.cosmos.base.v1beta1.Coin));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgSend {
            return MsgSend.deserialize(bytes);
        }
    }
    export class MsgSendResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): MsgSendResponse {
            const message = new MsgSendResponse({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSendResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSendResponse();
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
        static deserializeBinary(bytes: Uint8Array): MsgSendResponse {
            return MsgSendResponse.deserialize(bytes);
        }
    }
    export class MsgMultiSend extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            inputs?: dependency_3.cosmos.bank.v1beta1.Input[];
            outputs?: dependency_3.cosmos.bank.v1beta1.Output[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1, 2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("inputs" in data && data.inputs != undefined) {
                    this.inputs = data.inputs;
                }
                if ("outputs" in data && data.outputs != undefined) {
                    this.outputs = data.outputs;
                }
            }
        }
        get inputs() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.cosmos.bank.v1beta1.Input, 1) as dependency_3.cosmos.bank.v1beta1.Input[];
        }
        set inputs(value: dependency_3.cosmos.bank.v1beta1.Input[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get outputs() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.cosmos.bank.v1beta1.Output, 2) as dependency_3.cosmos.bank.v1beta1.Output[];
        }
        set outputs(value: dependency_3.cosmos.bank.v1beta1.Output[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        static fromObject(data: {
            inputs?: ReturnType<typeof dependency_3.cosmos.bank.v1beta1.Input.prototype.toObject>[];
            outputs?: ReturnType<typeof dependency_3.cosmos.bank.v1beta1.Output.prototype.toObject>[];
        }): MsgMultiSend {
            const message = new MsgMultiSend({});
            if (data.inputs != null) {
                message.inputs = data.inputs.map(item => dependency_3.cosmos.bank.v1beta1.Input.fromObject(item));
            }
            if (data.outputs != null) {
                message.outputs = data.outputs.map(item => dependency_3.cosmos.bank.v1beta1.Output.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                inputs?: ReturnType<typeof dependency_3.cosmos.bank.v1beta1.Input.prototype.toObject>[];
                outputs?: ReturnType<typeof dependency_3.cosmos.bank.v1beta1.Output.prototype.toObject>[];
            } = {};
            if (this.inputs != null) {
                data.inputs = this.inputs.map((item: dependency_3.cosmos.bank.v1beta1.Input) => item.toObject());
            }
            if (this.outputs != null) {
                data.outputs = this.outputs.map((item: dependency_3.cosmos.bank.v1beta1.Output) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.inputs.length)
                writer.writeRepeatedMessage(1, this.inputs, (item: dependency_3.cosmos.bank.v1beta1.Input) => item.serialize(writer));
            if (this.outputs.length)
                writer.writeRepeatedMessage(2, this.outputs, (item: dependency_3.cosmos.bank.v1beta1.Output) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgMultiSend {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgMultiSend();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.inputs, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.cosmos.bank.v1beta1.Input.deserialize(reader), dependency_3.cosmos.bank.v1beta1.Input));
                        break;
                    case 2:
                        reader.readMessage(message.outputs, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_3.cosmos.bank.v1beta1.Output.deserialize(reader), dependency_3.cosmos.bank.v1beta1.Output));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgMultiSend {
            return MsgMultiSend.deserialize(bytes);
        }
    }
    export class MsgMultiSendResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): MsgMultiSendResponse {
            const message = new MsgMultiSendResponse({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgMultiSendResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgMultiSendResponse();
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
        static deserializeBinary(bytes: Uint8Array): MsgMultiSendResponse {
            return MsgMultiSendResponse.deserialize(bytes);
        }
    }
    export class MsgUpdateParams extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            authority?: string;
            params?: dependency_3.cosmos.bank.v1beta1.Params;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("authority" in data && data.authority != undefined) {
                    this.authority = data.authority;
                }
                if ("params" in data && data.params != undefined) {
                    this.params = data.params;
                }
            }
        }
        get authority() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set authority(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get params() {
            return pb_1.Message.getWrapperField(this, dependency_3.cosmos.bank.v1beta1.Params, 2) as dependency_3.cosmos.bank.v1beta1.Params;
        }
        set params(value: dependency_3.cosmos.bank.v1beta1.Params) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_params() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            authority?: string;
            params?: ReturnType<typeof dependency_3.cosmos.bank.v1beta1.Params.prototype.toObject>;
        }): MsgUpdateParams {
            const message = new MsgUpdateParams({});
            if (data.authority != null) {
                message.authority = data.authority;
            }
            if (data.params != null) {
                message.params = dependency_3.cosmos.bank.v1beta1.Params.fromObject(data.params);
            }
            return message;
        }
        toObject() {
            const data: {
                authority?: string;
                params?: ReturnType<typeof dependency_3.cosmos.bank.v1beta1.Params.prototype.toObject>;
            } = {};
            if (this.authority != null) {
                data.authority = this.authority;
            }
            if (this.params != null) {
                data.params = this.params.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.authority.length)
                writer.writeString(1, this.authority);
            if (this.has_params)
                writer.writeMessage(2, this.params, () => this.params.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgUpdateParams {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgUpdateParams();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.authority = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.params, () => message.params = dependency_3.cosmos.bank.v1beta1.Params.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgUpdateParams {
            return MsgUpdateParams.deserialize(bytes);
        }
    }
    export class MsgUpdateParamsResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): MsgUpdateParamsResponse {
            const message = new MsgUpdateParamsResponse({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgUpdateParamsResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgUpdateParamsResponse();
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
        static deserializeBinary(bytes: Uint8Array): MsgUpdateParamsResponse {
            return MsgUpdateParamsResponse.deserialize(bytes);
        }
    }
    export class MsgSetSendEnabled extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            authority?: string;
            send_enabled?: dependency_3.cosmos.bank.v1beta1.SendEnabled[];
            use_default_for?: string[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2, 3], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("authority" in data && data.authority != undefined) {
                    this.authority = data.authority;
                }
                if ("send_enabled" in data && data.send_enabled != undefined) {
                    this.send_enabled = data.send_enabled;
                }
                if ("use_default_for" in data && data.use_default_for != undefined) {
                    this.use_default_for = data.use_default_for;
                }
            }
        }
        get authority() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set authority(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get send_enabled() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.cosmos.bank.v1beta1.SendEnabled, 2) as dependency_3.cosmos.bank.v1beta1.SendEnabled[];
        }
        set send_enabled(value: dependency_3.cosmos.bank.v1beta1.SendEnabled[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        get use_default_for() {
            return pb_1.Message.getFieldWithDefault(this, 3, []) as string[];
        }
        set use_default_for(value: string[]) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            authority?: string;
            send_enabled?: ReturnType<typeof dependency_3.cosmos.bank.v1beta1.SendEnabled.prototype.toObject>[];
            use_default_for?: string[];
        }): MsgSetSendEnabled {
            const message = new MsgSetSendEnabled({});
            if (data.authority != null) {
                message.authority = data.authority;
            }
            if (data.send_enabled != null) {
                message.send_enabled = data.send_enabled.map(item => dependency_3.cosmos.bank.v1beta1.SendEnabled.fromObject(item));
            }
            if (data.use_default_for != null) {
                message.use_default_for = data.use_default_for;
            }
            return message;
        }
        toObject() {
            const data: {
                authority?: string;
                send_enabled?: ReturnType<typeof dependency_3.cosmos.bank.v1beta1.SendEnabled.prototype.toObject>[];
                use_default_for?: string[];
            } = {};
            if (this.authority != null) {
                data.authority = this.authority;
            }
            if (this.send_enabled != null) {
                data.send_enabled = this.send_enabled.map((item: dependency_3.cosmos.bank.v1beta1.SendEnabled) => item.toObject());
            }
            if (this.use_default_for != null) {
                data.use_default_for = this.use_default_for;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.authority.length)
                writer.writeString(1, this.authority);
            if (this.send_enabled.length)
                writer.writeRepeatedMessage(2, this.send_enabled, (item: dependency_3.cosmos.bank.v1beta1.SendEnabled) => item.serialize(writer));
            if (this.use_default_for.length)
                writer.writeRepeatedString(3, this.use_default_for);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSetSendEnabled {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSetSendEnabled();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.authority = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.send_enabled, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_3.cosmos.bank.v1beta1.SendEnabled.deserialize(reader), dependency_3.cosmos.bank.v1beta1.SendEnabled));
                        break;
                    case 3:
                        pb_1.Message.addToRepeatedField(message, 3, reader.readString());
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgSetSendEnabled {
            return MsgSetSendEnabled.deserialize(bytes);
        }
    }
    export class MsgSetSendEnabledResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): MsgSetSendEnabledResponse {
            const message = new MsgSetSendEnabledResponse({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSetSendEnabledResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSetSendEnabledResponse();
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
        static deserializeBinary(bytes: Uint8Array): MsgSetSendEnabledResponse {
            return MsgSetSendEnabledResponse.deserialize(bytes);
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
    export abstract class UnimplementedMsgService {
        static definition = {
            Send: {
                path: "/cosmos.bank.v1beta1.Msg/Send",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: MsgSend) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => MsgSend.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: MsgSendResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => MsgSendResponse.deserialize(new Uint8Array(bytes))
            },
            MultiSend: {
                path: "/cosmos.bank.v1beta1.Msg/MultiSend",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: MsgMultiSend) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => MsgMultiSend.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: MsgMultiSendResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => MsgMultiSendResponse.deserialize(new Uint8Array(bytes))
            },
            UpdateParams: {
                path: "/cosmos.bank.v1beta1.Msg/UpdateParams",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: MsgUpdateParams) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => MsgUpdateParams.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: MsgUpdateParamsResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => MsgUpdateParamsResponse.deserialize(new Uint8Array(bytes))
            },
            SetSendEnabled: {
                path: "/cosmos.bank.v1beta1.Msg/SetSendEnabled",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: MsgSetSendEnabled) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => MsgSetSendEnabled.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: MsgSetSendEnabledResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => MsgSetSendEnabledResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract Send(call: grpc_1.ServerUnaryCall<MsgSend, MsgSendResponse>, callback: grpc_1.sendUnaryData<MsgSendResponse>): void;
        abstract MultiSend(call: grpc_1.ServerUnaryCall<MsgMultiSend, MsgMultiSendResponse>, callback: grpc_1.sendUnaryData<MsgMultiSendResponse>): void;
        abstract UpdateParams(call: grpc_1.ServerUnaryCall<MsgUpdateParams, MsgUpdateParamsResponse>, callback: grpc_1.sendUnaryData<MsgUpdateParamsResponse>): void;
        abstract SetSendEnabled(call: grpc_1.ServerUnaryCall<MsgSetSendEnabled, MsgSetSendEnabledResponse>, callback: grpc_1.sendUnaryData<MsgSetSendEnabledResponse>): void;
    }
    export class MsgClient extends grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        Send: GrpcUnaryServiceInterface<MsgSend, MsgSendResponse> = (message: MsgSend, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<MsgSendResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<MsgSendResponse>, callback?: grpc_1.requestCallback<MsgSendResponse>): grpc_1.ClientUnaryCall => {
            return super.Send(message, metadata, options, callback);
        };
        MultiSend: GrpcUnaryServiceInterface<MsgMultiSend, MsgMultiSendResponse> = (message: MsgMultiSend, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<MsgMultiSendResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<MsgMultiSendResponse>, callback?: grpc_1.requestCallback<MsgMultiSendResponse>): grpc_1.ClientUnaryCall => {
            return super.MultiSend(message, metadata, options, callback);
        };
        UpdateParams: GrpcUnaryServiceInterface<MsgUpdateParams, MsgUpdateParamsResponse> = (message: MsgUpdateParams, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<MsgUpdateParamsResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<MsgUpdateParamsResponse>, callback?: grpc_1.requestCallback<MsgUpdateParamsResponse>): grpc_1.ClientUnaryCall => {
            return super.UpdateParams(message, metadata, options, callback);
        };
        SetSendEnabled: GrpcUnaryServiceInterface<MsgSetSendEnabled, MsgSetSendEnabledResponse> = (message: MsgSetSendEnabled, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<MsgSetSendEnabledResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<MsgSetSendEnabledResponse>, callback?: grpc_1.requestCallback<MsgSetSendEnabledResponse>): grpc_1.ClientUnaryCall => {
            return super.SetSendEnabled(message, metadata, options, callback);
        };
    }
}
