/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: cosmos/base/kv/v1beta1/kv.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../../gogoproto/gogo";
import * as pb_1 from "google-protobuf";
export namespace cosmos.base.kv.v1beta1 {
    export class Pairs extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            pairs?: Pair[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("pairs" in data && data.pairs != undefined) {
                    this.pairs = data.pairs;
                }
            }
        }
        get pairs() {
            return pb_1.Message.getRepeatedWrapperField(this, Pair, 1) as Pair[];
        }
        set pairs(value: Pair[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data: {
            pairs?: ReturnType<typeof Pair.prototype.toObject>[];
        }): Pairs {
            const message = new Pairs({});
            if (data.pairs != null) {
                message.pairs = data.pairs.map(item => Pair.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                pairs?: ReturnType<typeof Pair.prototype.toObject>[];
            } = {};
            if (this.pairs != null) {
                data.pairs = this.pairs.map((item: Pair) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.pairs.length)
                writer.writeRepeatedMessage(1, this.pairs, (item: Pair) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Pairs {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Pairs();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.pairs, () => pb_1.Message.addToRepeatedWrapperField(message, 1, Pair.deserialize(reader), Pair));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Pairs {
            return Pairs.deserialize(bytes);
        }
    }
    export class Pair extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            key?: Uint8Array;
            value?: Uint8Array;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("key" in data && data.key != undefined) {
                    this.key = data.key;
                }
                if ("value" in data && data.value != undefined) {
                    this.value = data.value;
                }
            }
        }
        get key() {
            return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0)) as Uint8Array;
        }
        set key(value: Uint8Array) {
            pb_1.Message.setField(this, 1, value);
        }
        get value() {
            return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array(0)) as Uint8Array;
        }
        set value(value: Uint8Array) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            key?: Uint8Array;
            value?: Uint8Array;
        }): Pair {
            const message = new Pair({});
            if (data.key != null) {
                message.key = data.key;
            }
            if (data.value != null) {
                message.value = data.value;
            }
            return message;
        }
        toObject() {
            const data: {
                key?: Uint8Array;
                value?: Uint8Array;
            } = {};
            if (this.key != null) {
                data.key = this.key;
            }
            if (this.value != null) {
                data.value = this.value;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.key.length)
                writer.writeBytes(1, this.key);
            if (this.value.length)
                writer.writeBytes(2, this.value);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Pair {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Pair();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.key = reader.readBytes();
                        break;
                    case 2:
                        message.value = reader.readBytes();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Pair {
            return Pair.deserialize(bytes);
        }
    }
}
