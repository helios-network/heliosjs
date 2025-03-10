/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: cosmos/authz/v1beta1/authz.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../amino/amino";
import * as dependency_2 from "./../../../cosmos_proto/cosmos";
import * as dependency_3 from "./../../../google/protobuf/timestamp";
import * as dependency_4 from "./../../../gogoproto/gogo";
import * as dependency_5 from "./../../../google/protobuf/any";
import * as pb_1 from "google-protobuf";
export namespace cosmos.authz.v1beta1 {
    export class GenericAuthorization extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            msg?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("msg" in data && data.msg != undefined) {
                    this.msg = data.msg;
                }
            }
        }
        get msg() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set msg(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            msg?: string;
        }): GenericAuthorization {
            const message = new GenericAuthorization({});
            if (data.msg != null) {
                message.msg = data.msg;
            }
            return message;
        }
        toObject() {
            const data: {
                msg?: string;
            } = {};
            if (this.msg != null) {
                data.msg = this.msg;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.msg.length)
                writer.writeString(1, this.msg);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenericAuthorization {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GenericAuthorization();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.msg = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GenericAuthorization {
            return GenericAuthorization.deserialize(bytes);
        }
    }
    export class Grant extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            authorization?: dependency_5.google.protobuf.Any;
            expiration?: dependency_3.google.protobuf.Timestamp;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("authorization" in data && data.authorization != undefined) {
                    this.authorization = data.authorization;
                }
                if ("expiration" in data && data.expiration != undefined) {
                    this.expiration = data.expiration;
                }
            }
        }
        get authorization() {
            return pb_1.Message.getWrapperField(this, dependency_5.google.protobuf.Any, 1) as dependency_5.google.protobuf.Any;
        }
        set authorization(value: dependency_5.google.protobuf.Any) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_authorization() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get expiration() {
            return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Timestamp, 2) as dependency_3.google.protobuf.Timestamp;
        }
        set expiration(value: dependency_3.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_expiration() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            authorization?: ReturnType<typeof dependency_5.google.protobuf.Any.prototype.toObject>;
            expiration?: ReturnType<typeof dependency_3.google.protobuf.Timestamp.prototype.toObject>;
        }): Grant {
            const message = new Grant({});
            if (data.authorization != null) {
                message.authorization = dependency_5.google.protobuf.Any.fromObject(data.authorization);
            }
            if (data.expiration != null) {
                message.expiration = dependency_3.google.protobuf.Timestamp.fromObject(data.expiration);
            }
            return message;
        }
        toObject() {
            const data: {
                authorization?: ReturnType<typeof dependency_5.google.protobuf.Any.prototype.toObject>;
                expiration?: ReturnType<typeof dependency_3.google.protobuf.Timestamp.prototype.toObject>;
            } = {};
            if (this.authorization != null) {
                data.authorization = this.authorization.toObject();
            }
            if (this.expiration != null) {
                data.expiration = this.expiration.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_authorization)
                writer.writeMessage(1, this.authorization, () => this.authorization.serialize(writer));
            if (this.has_expiration)
                writer.writeMessage(2, this.expiration, () => this.expiration.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Grant {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Grant();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.authorization, () => message.authorization = dependency_5.google.protobuf.Any.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.expiration, () => message.expiration = dependency_3.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Grant {
            return Grant.deserialize(bytes);
        }
    }
    export class GrantAuthorization extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            granter?: string;
            grantee?: string;
            authorization?: dependency_5.google.protobuf.Any;
            expiration?: dependency_3.google.protobuf.Timestamp;
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
                if ("authorization" in data && data.authorization != undefined) {
                    this.authorization = data.authorization;
                }
                if ("expiration" in data && data.expiration != undefined) {
                    this.expiration = data.expiration;
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
        get authorization() {
            return pb_1.Message.getWrapperField(this, dependency_5.google.protobuf.Any, 3) as dependency_5.google.protobuf.Any;
        }
        set authorization(value: dependency_5.google.protobuf.Any) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get has_authorization() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get expiration() {
            return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Timestamp, 4) as dependency_3.google.protobuf.Timestamp;
        }
        set expiration(value: dependency_3.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 4, value);
        }
        get has_expiration() {
            return pb_1.Message.getField(this, 4) != null;
        }
        static fromObject(data: {
            granter?: string;
            grantee?: string;
            authorization?: ReturnType<typeof dependency_5.google.protobuf.Any.prototype.toObject>;
            expiration?: ReturnType<typeof dependency_3.google.protobuf.Timestamp.prototype.toObject>;
        }): GrantAuthorization {
            const message = new GrantAuthorization({});
            if (data.granter != null) {
                message.granter = data.granter;
            }
            if (data.grantee != null) {
                message.grantee = data.grantee;
            }
            if (data.authorization != null) {
                message.authorization = dependency_5.google.protobuf.Any.fromObject(data.authorization);
            }
            if (data.expiration != null) {
                message.expiration = dependency_3.google.protobuf.Timestamp.fromObject(data.expiration);
            }
            return message;
        }
        toObject() {
            const data: {
                granter?: string;
                grantee?: string;
                authorization?: ReturnType<typeof dependency_5.google.protobuf.Any.prototype.toObject>;
                expiration?: ReturnType<typeof dependency_3.google.protobuf.Timestamp.prototype.toObject>;
            } = {};
            if (this.granter != null) {
                data.granter = this.granter;
            }
            if (this.grantee != null) {
                data.grantee = this.grantee;
            }
            if (this.authorization != null) {
                data.authorization = this.authorization.toObject();
            }
            if (this.expiration != null) {
                data.expiration = this.expiration.toObject();
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
            if (this.has_authorization)
                writer.writeMessage(3, this.authorization, () => this.authorization.serialize(writer));
            if (this.has_expiration)
                writer.writeMessage(4, this.expiration, () => this.expiration.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GrantAuthorization {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GrantAuthorization();
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
                    case 3:
                        reader.readMessage(message.authorization, () => message.authorization = dependency_5.google.protobuf.Any.deserialize(reader));
                        break;
                    case 4:
                        reader.readMessage(message.expiration, () => message.expiration = dependency_3.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GrantAuthorization {
            return GrantAuthorization.deserialize(bytes);
        }
    }
    export class GrantQueueItem extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            msg_type_urls?: string[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("msg_type_urls" in data && data.msg_type_urls != undefined) {
                    this.msg_type_urls = data.msg_type_urls;
                }
            }
        }
        get msg_type_urls() {
            return pb_1.Message.getFieldWithDefault(this, 1, []) as string[];
        }
        set msg_type_urls(value: string[]) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            msg_type_urls?: string[];
        }): GrantQueueItem {
            const message = new GrantQueueItem({});
            if (data.msg_type_urls != null) {
                message.msg_type_urls = data.msg_type_urls;
            }
            return message;
        }
        toObject() {
            const data: {
                msg_type_urls?: string[];
            } = {};
            if (this.msg_type_urls != null) {
                data.msg_type_urls = this.msg_type_urls;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.msg_type_urls.length)
                writer.writeRepeatedString(1, this.msg_type_urls);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GrantQueueItem {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GrantQueueItem();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        pb_1.Message.addToRepeatedField(message, 1, reader.readString());
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GrantQueueItem {
            return GrantQueueItem.deserialize(bytes);
        }
    }
}
