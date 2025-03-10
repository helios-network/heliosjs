/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: ethermint/types/v1/account.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../cosmos/auth/v1beta1/auth";
import * as dependency_2 from "./../../../cosmos_proto/cosmos";
import * as dependency_3 from "./../../../gogoproto/gogo";
import * as pb_1 from "google-protobuf";
export namespace ethermint.types.v1 {
    export class EthAccount extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            base_account?: dependency_1.cosmos.auth.v1beta1.BaseAccount;
            code_hash?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("base_account" in data && data.base_account != undefined) {
                    this.base_account = data.base_account;
                }
                if ("code_hash" in data && data.code_hash != undefined) {
                    this.code_hash = data.code_hash;
                }
            }
        }
        get base_account() {
            return pb_1.Message.getWrapperField(this, dependency_1.cosmos.auth.v1beta1.BaseAccount, 1) as dependency_1.cosmos.auth.v1beta1.BaseAccount;
        }
        set base_account(value: dependency_1.cosmos.auth.v1beta1.BaseAccount) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_base_account() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get code_hash() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set code_hash(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            base_account?: ReturnType<typeof dependency_1.cosmos.auth.v1beta1.BaseAccount.prototype.toObject>;
            code_hash?: string;
        }): EthAccount {
            const message = new EthAccount({});
            if (data.base_account != null) {
                message.base_account = dependency_1.cosmos.auth.v1beta1.BaseAccount.fromObject(data.base_account);
            }
            if (data.code_hash != null) {
                message.code_hash = data.code_hash;
            }
            return message;
        }
        toObject() {
            const data: {
                base_account?: ReturnType<typeof dependency_1.cosmos.auth.v1beta1.BaseAccount.prototype.toObject>;
                code_hash?: string;
            } = {};
            if (this.base_account != null) {
                data.base_account = this.base_account.toObject();
            }
            if (this.code_hash != null) {
                data.code_hash = this.code_hash;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_base_account)
                writer.writeMessage(1, this.base_account, () => this.base_account.serialize(writer));
            if (this.code_hash.length)
                writer.writeString(2, this.code_hash);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EthAccount {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EthAccount();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.base_account, () => message.base_account = dependency_1.cosmos.auth.v1beta1.BaseAccount.deserialize(reader));
                        break;
                    case 2:
                        message.code_hash = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): EthAccount {
            return EthAccount.deserialize(bytes);
        }
    }
}
