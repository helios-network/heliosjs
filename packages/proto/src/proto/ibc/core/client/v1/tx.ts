/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: ibc/core/client/v1/tx.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../../gogoproto/gogo";
import * as dependency_2 from "./../../../../google/protobuf/any";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export namespace ibc.core.client.v1 {
    export class MsgCreateClient extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            client_state?: dependency_2.google.protobuf.Any;
            consensus_state?: dependency_2.google.protobuf.Any;
            signer?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("client_state" in data && data.client_state != undefined) {
                    this.client_state = data.client_state;
                }
                if ("consensus_state" in data && data.consensus_state != undefined) {
                    this.consensus_state = data.consensus_state;
                }
                if ("signer" in data && data.signer != undefined) {
                    this.signer = data.signer;
                }
            }
        }
        get client_state() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 1) as dependency_2.google.protobuf.Any;
        }
        set client_state(value: dependency_2.google.protobuf.Any) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_client_state() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get consensus_state() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 2) as dependency_2.google.protobuf.Any;
        }
        set consensus_state(value: dependency_2.google.protobuf.Any) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_consensus_state() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get signer() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set signer(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            client_state?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
            consensus_state?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
            signer?: string;
        }): MsgCreateClient {
            const message = new MsgCreateClient({});
            if (data.client_state != null) {
                message.client_state = dependency_2.google.protobuf.Any.fromObject(data.client_state);
            }
            if (data.consensus_state != null) {
                message.consensus_state = dependency_2.google.protobuf.Any.fromObject(data.consensus_state);
            }
            if (data.signer != null) {
                message.signer = data.signer;
            }
            return message;
        }
        toObject() {
            const data: {
                client_state?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
                consensus_state?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
                signer?: string;
            } = {};
            if (this.client_state != null) {
                data.client_state = this.client_state.toObject();
            }
            if (this.consensus_state != null) {
                data.consensus_state = this.consensus_state.toObject();
            }
            if (this.signer != null) {
                data.signer = this.signer;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_client_state)
                writer.writeMessage(1, this.client_state, () => this.client_state.serialize(writer));
            if (this.has_consensus_state)
                writer.writeMessage(2, this.consensus_state, () => this.consensus_state.serialize(writer));
            if (this.signer.length)
                writer.writeString(3, this.signer);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCreateClient {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgCreateClient();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.client_state, () => message.client_state = dependency_2.google.protobuf.Any.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.consensus_state, () => message.consensus_state = dependency_2.google.protobuf.Any.deserialize(reader));
                        break;
                    case 3:
                        message.signer = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgCreateClient {
            return MsgCreateClient.deserialize(bytes);
        }
    }
    export class MsgCreateClientResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): MsgCreateClientResponse {
            const message = new MsgCreateClientResponse({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgCreateClientResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgCreateClientResponse();
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
        static deserializeBinary(bytes: Uint8Array): MsgCreateClientResponse {
            return MsgCreateClientResponse.deserialize(bytes);
        }
    }
    export class MsgUpdateClient extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            client_id?: string;
            header?: dependency_2.google.protobuf.Any;
            signer?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("client_id" in data && data.client_id != undefined) {
                    this.client_id = data.client_id;
                }
                if ("header" in data && data.header != undefined) {
                    this.header = data.header;
                }
                if ("signer" in data && data.signer != undefined) {
                    this.signer = data.signer;
                }
            }
        }
        get client_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set client_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get header() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 2) as dependency_2.google.protobuf.Any;
        }
        set header(value: dependency_2.google.protobuf.Any) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_header() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get signer() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set signer(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            client_id?: string;
            header?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
            signer?: string;
        }): MsgUpdateClient {
            const message = new MsgUpdateClient({});
            if (data.client_id != null) {
                message.client_id = data.client_id;
            }
            if (data.header != null) {
                message.header = dependency_2.google.protobuf.Any.fromObject(data.header);
            }
            if (data.signer != null) {
                message.signer = data.signer;
            }
            return message;
        }
        toObject() {
            const data: {
                client_id?: string;
                header?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
                signer?: string;
            } = {};
            if (this.client_id != null) {
                data.client_id = this.client_id;
            }
            if (this.header != null) {
                data.header = this.header.toObject();
            }
            if (this.signer != null) {
                data.signer = this.signer;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.client_id.length)
                writer.writeString(1, this.client_id);
            if (this.has_header)
                writer.writeMessage(2, this.header, () => this.header.serialize(writer));
            if (this.signer.length)
                writer.writeString(3, this.signer);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgUpdateClient {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgUpdateClient();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.client_id = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.header, () => message.header = dependency_2.google.protobuf.Any.deserialize(reader));
                        break;
                    case 3:
                        message.signer = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgUpdateClient {
            return MsgUpdateClient.deserialize(bytes);
        }
    }
    export class MsgUpdateClientResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): MsgUpdateClientResponse {
            const message = new MsgUpdateClientResponse({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgUpdateClientResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgUpdateClientResponse();
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
        static deserializeBinary(bytes: Uint8Array): MsgUpdateClientResponse {
            return MsgUpdateClientResponse.deserialize(bytes);
        }
    }
    export class MsgUpgradeClient extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            client_id?: string;
            client_state?: dependency_2.google.protobuf.Any;
            consensus_state?: dependency_2.google.protobuf.Any;
            proof_upgrade_client?: Uint8Array;
            proof_upgrade_consensus_state?: Uint8Array;
            signer?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("client_id" in data && data.client_id != undefined) {
                    this.client_id = data.client_id;
                }
                if ("client_state" in data && data.client_state != undefined) {
                    this.client_state = data.client_state;
                }
                if ("consensus_state" in data && data.consensus_state != undefined) {
                    this.consensus_state = data.consensus_state;
                }
                if ("proof_upgrade_client" in data && data.proof_upgrade_client != undefined) {
                    this.proof_upgrade_client = data.proof_upgrade_client;
                }
                if ("proof_upgrade_consensus_state" in data && data.proof_upgrade_consensus_state != undefined) {
                    this.proof_upgrade_consensus_state = data.proof_upgrade_consensus_state;
                }
                if ("signer" in data && data.signer != undefined) {
                    this.signer = data.signer;
                }
            }
        }
        get client_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set client_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get client_state() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 2) as dependency_2.google.protobuf.Any;
        }
        set client_state(value: dependency_2.google.protobuf.Any) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_client_state() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get consensus_state() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 3) as dependency_2.google.protobuf.Any;
        }
        set consensus_state(value: dependency_2.google.protobuf.Any) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get has_consensus_state() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get proof_upgrade_client() {
            return pb_1.Message.getFieldWithDefault(this, 4, new Uint8Array(0)) as Uint8Array;
        }
        set proof_upgrade_client(value: Uint8Array) {
            pb_1.Message.setField(this, 4, value);
        }
        get proof_upgrade_consensus_state() {
            return pb_1.Message.getFieldWithDefault(this, 5, new Uint8Array(0)) as Uint8Array;
        }
        set proof_upgrade_consensus_state(value: Uint8Array) {
            pb_1.Message.setField(this, 5, value);
        }
        get signer() {
            return pb_1.Message.getFieldWithDefault(this, 6, "") as string;
        }
        set signer(value: string) {
            pb_1.Message.setField(this, 6, value);
        }
        static fromObject(data: {
            client_id?: string;
            client_state?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
            consensus_state?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
            proof_upgrade_client?: Uint8Array;
            proof_upgrade_consensus_state?: Uint8Array;
            signer?: string;
        }): MsgUpgradeClient {
            const message = new MsgUpgradeClient({});
            if (data.client_id != null) {
                message.client_id = data.client_id;
            }
            if (data.client_state != null) {
                message.client_state = dependency_2.google.protobuf.Any.fromObject(data.client_state);
            }
            if (data.consensus_state != null) {
                message.consensus_state = dependency_2.google.protobuf.Any.fromObject(data.consensus_state);
            }
            if (data.proof_upgrade_client != null) {
                message.proof_upgrade_client = data.proof_upgrade_client;
            }
            if (data.proof_upgrade_consensus_state != null) {
                message.proof_upgrade_consensus_state = data.proof_upgrade_consensus_state;
            }
            if (data.signer != null) {
                message.signer = data.signer;
            }
            return message;
        }
        toObject() {
            const data: {
                client_id?: string;
                client_state?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
                consensus_state?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
                proof_upgrade_client?: Uint8Array;
                proof_upgrade_consensus_state?: Uint8Array;
                signer?: string;
            } = {};
            if (this.client_id != null) {
                data.client_id = this.client_id;
            }
            if (this.client_state != null) {
                data.client_state = this.client_state.toObject();
            }
            if (this.consensus_state != null) {
                data.consensus_state = this.consensus_state.toObject();
            }
            if (this.proof_upgrade_client != null) {
                data.proof_upgrade_client = this.proof_upgrade_client;
            }
            if (this.proof_upgrade_consensus_state != null) {
                data.proof_upgrade_consensus_state = this.proof_upgrade_consensus_state;
            }
            if (this.signer != null) {
                data.signer = this.signer;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.client_id.length)
                writer.writeString(1, this.client_id);
            if (this.has_client_state)
                writer.writeMessage(2, this.client_state, () => this.client_state.serialize(writer));
            if (this.has_consensus_state)
                writer.writeMessage(3, this.consensus_state, () => this.consensus_state.serialize(writer));
            if (this.proof_upgrade_client.length)
                writer.writeBytes(4, this.proof_upgrade_client);
            if (this.proof_upgrade_consensus_state.length)
                writer.writeBytes(5, this.proof_upgrade_consensus_state);
            if (this.signer.length)
                writer.writeString(6, this.signer);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgUpgradeClient {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgUpgradeClient();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.client_id = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.client_state, () => message.client_state = dependency_2.google.protobuf.Any.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.consensus_state, () => message.consensus_state = dependency_2.google.protobuf.Any.deserialize(reader));
                        break;
                    case 4:
                        message.proof_upgrade_client = reader.readBytes();
                        break;
                    case 5:
                        message.proof_upgrade_consensus_state = reader.readBytes();
                        break;
                    case 6:
                        message.signer = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgUpgradeClient {
            return MsgUpgradeClient.deserialize(bytes);
        }
    }
    export class MsgUpgradeClientResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): MsgUpgradeClientResponse {
            const message = new MsgUpgradeClientResponse({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgUpgradeClientResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgUpgradeClientResponse();
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
        static deserializeBinary(bytes: Uint8Array): MsgUpgradeClientResponse {
            return MsgUpgradeClientResponse.deserialize(bytes);
        }
    }
    export class MsgSubmitMisbehaviour extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            client_id?: string;
            misbehaviour?: dependency_2.google.protobuf.Any;
            signer?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("client_id" in data && data.client_id != undefined) {
                    this.client_id = data.client_id;
                }
                if ("misbehaviour" in data && data.misbehaviour != undefined) {
                    this.misbehaviour = data.misbehaviour;
                }
                if ("signer" in data && data.signer != undefined) {
                    this.signer = data.signer;
                }
            }
        }
        get client_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set client_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get misbehaviour() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 2) as dependency_2.google.protobuf.Any;
        }
        set misbehaviour(value: dependency_2.google.protobuf.Any) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_misbehaviour() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get signer() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set signer(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            client_id?: string;
            misbehaviour?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
            signer?: string;
        }): MsgSubmitMisbehaviour {
            const message = new MsgSubmitMisbehaviour({});
            if (data.client_id != null) {
                message.client_id = data.client_id;
            }
            if (data.misbehaviour != null) {
                message.misbehaviour = dependency_2.google.protobuf.Any.fromObject(data.misbehaviour);
            }
            if (data.signer != null) {
                message.signer = data.signer;
            }
            return message;
        }
        toObject() {
            const data: {
                client_id?: string;
                misbehaviour?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
                signer?: string;
            } = {};
            if (this.client_id != null) {
                data.client_id = this.client_id;
            }
            if (this.misbehaviour != null) {
                data.misbehaviour = this.misbehaviour.toObject();
            }
            if (this.signer != null) {
                data.signer = this.signer;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.client_id.length)
                writer.writeString(1, this.client_id);
            if (this.has_misbehaviour)
                writer.writeMessage(2, this.misbehaviour, () => this.misbehaviour.serialize(writer));
            if (this.signer.length)
                writer.writeString(3, this.signer);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSubmitMisbehaviour {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSubmitMisbehaviour();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.client_id = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.misbehaviour, () => message.misbehaviour = dependency_2.google.protobuf.Any.deserialize(reader));
                        break;
                    case 3:
                        message.signer = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgSubmitMisbehaviour {
            return MsgSubmitMisbehaviour.deserialize(bytes);
        }
    }
    export class MsgSubmitMisbehaviourResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): MsgSubmitMisbehaviourResponse {
            const message = new MsgSubmitMisbehaviourResponse({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSubmitMisbehaviourResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSubmitMisbehaviourResponse();
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
        static deserializeBinary(bytes: Uint8Array): MsgSubmitMisbehaviourResponse {
            return MsgSubmitMisbehaviourResponse.deserialize(bytes);
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
            CreateClient: {
                path: "/ibc.core.client.v1.Msg/CreateClient",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: MsgCreateClient) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => MsgCreateClient.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: MsgCreateClientResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => MsgCreateClientResponse.deserialize(new Uint8Array(bytes))
            },
            UpdateClient: {
                path: "/ibc.core.client.v1.Msg/UpdateClient",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: MsgUpdateClient) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => MsgUpdateClient.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: MsgUpdateClientResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => MsgUpdateClientResponse.deserialize(new Uint8Array(bytes))
            },
            UpgradeClient: {
                path: "/ibc.core.client.v1.Msg/UpgradeClient",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: MsgUpgradeClient) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => MsgUpgradeClient.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: MsgUpgradeClientResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => MsgUpgradeClientResponse.deserialize(new Uint8Array(bytes))
            },
            SubmitMisbehaviour: {
                path: "/ibc.core.client.v1.Msg/SubmitMisbehaviour",
                requestStream: false,
                responseStream: false,
                requestSerialize: (message: MsgSubmitMisbehaviour) => Buffer.from(message.serialize()),
                requestDeserialize: (bytes: Buffer) => MsgSubmitMisbehaviour.deserialize(new Uint8Array(bytes)),
                responseSerialize: (message: MsgSubmitMisbehaviourResponse) => Buffer.from(message.serialize()),
                responseDeserialize: (bytes: Buffer) => MsgSubmitMisbehaviourResponse.deserialize(new Uint8Array(bytes))
            }
        };
        [method: string]: grpc_1.UntypedHandleCall;
        abstract CreateClient(call: grpc_1.ServerUnaryCall<MsgCreateClient, MsgCreateClientResponse>, callback: grpc_1.sendUnaryData<MsgCreateClientResponse>): void;
        abstract UpdateClient(call: grpc_1.ServerUnaryCall<MsgUpdateClient, MsgUpdateClientResponse>, callback: grpc_1.sendUnaryData<MsgUpdateClientResponse>): void;
        abstract UpgradeClient(call: grpc_1.ServerUnaryCall<MsgUpgradeClient, MsgUpgradeClientResponse>, callback: grpc_1.sendUnaryData<MsgUpgradeClientResponse>): void;
        abstract SubmitMisbehaviour(call: grpc_1.ServerUnaryCall<MsgSubmitMisbehaviour, MsgSubmitMisbehaviourResponse>, callback: grpc_1.sendUnaryData<MsgSubmitMisbehaviourResponse>): void;
    }
    export class MsgClient extends grpc_1.makeGenericClientConstructor(UnimplementedMsgService.definition, "Msg", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
            super(address, credentials, options);
        }
        CreateClient: GrpcUnaryServiceInterface<MsgCreateClient, MsgCreateClientResponse> = (message: MsgCreateClient, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<MsgCreateClientResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<MsgCreateClientResponse>, callback?: grpc_1.requestCallback<MsgCreateClientResponse>): grpc_1.ClientUnaryCall => {
            return super.CreateClient(message, metadata, options, callback);
        };
        UpdateClient: GrpcUnaryServiceInterface<MsgUpdateClient, MsgUpdateClientResponse> = (message: MsgUpdateClient, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<MsgUpdateClientResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<MsgUpdateClientResponse>, callback?: grpc_1.requestCallback<MsgUpdateClientResponse>): grpc_1.ClientUnaryCall => {
            return super.UpdateClient(message, metadata, options, callback);
        };
        UpgradeClient: GrpcUnaryServiceInterface<MsgUpgradeClient, MsgUpgradeClientResponse> = (message: MsgUpgradeClient, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<MsgUpgradeClientResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<MsgUpgradeClientResponse>, callback?: grpc_1.requestCallback<MsgUpgradeClientResponse>): grpc_1.ClientUnaryCall => {
            return super.UpgradeClient(message, metadata, options, callback);
        };
        SubmitMisbehaviour: GrpcUnaryServiceInterface<MsgSubmitMisbehaviour, MsgSubmitMisbehaviourResponse> = (message: MsgSubmitMisbehaviour, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<MsgSubmitMisbehaviourResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<MsgSubmitMisbehaviourResponse>, callback?: grpc_1.requestCallback<MsgSubmitMisbehaviourResponse>): grpc_1.ClientUnaryCall => {
            return super.SubmitMisbehaviour(message, metadata, options, callback);
        };
    }
}
