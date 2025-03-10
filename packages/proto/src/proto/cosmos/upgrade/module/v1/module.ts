/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: cosmos/upgrade/module/v1/module.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../app/v1alpha1/module";
import * as pb_1 from "google-protobuf";
export namespace cosmos.upgrade.module.v1 {
    export class Module extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            authority?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("authority" in data && data.authority != undefined) {
                    this.authority = data.authority;
                }
            }
        }
        get authority() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set authority(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            authority?: string;
        }): Module {
            const message = new Module({});
            if (data.authority != null) {
                message.authority = data.authority;
            }
            return message;
        }
        toObject() {
            const data: {
                authority?: string;
            } = {};
            if (this.authority != null) {
                data.authority = this.authority;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.authority.length)
                writer.writeString(1, this.authority);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Module {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Module();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.authority = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Module {
            return Module.deserialize(bytes);
        }
    }
}
