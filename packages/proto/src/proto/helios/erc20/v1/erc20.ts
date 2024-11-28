/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: helios/erc20/v1/erc20.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../amino/amino";
import * as dependency_2 from "./../../../cosmos/bank/v1beta1/bank";
import * as dependency_3 from "./../../../cosmos_proto/cosmos";
import * as dependency_4 from "./../../../gogoproto/gogo";
import * as pb_1 from "google-protobuf";
export namespace helios.erc20.v1 {
    export enum Owner {
        OWNER_UNSPECIFIED = 0,
        OWNER_MODULE = 1,
        OWNER_EXTERNAL = 2
    }
    export class TokenPair extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            erc20_address?: string;
            denom?: string;
            enabled?: boolean;
            contract_owner?: Owner;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("erc20_address" in data && data.erc20_address != undefined) {
                    this.erc20_address = data.erc20_address;
                }
                if ("denom" in data && data.denom != undefined) {
                    this.denom = data.denom;
                }
                if ("enabled" in data && data.enabled != undefined) {
                    this.enabled = data.enabled;
                }
                if ("contract_owner" in data && data.contract_owner != undefined) {
                    this.contract_owner = data.contract_owner;
                }
            }
        }
        get erc20_address() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set erc20_address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get denom() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set denom(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get enabled() {
            return pb_1.Message.getFieldWithDefault(this, 3, false) as boolean;
        }
        set enabled(value: boolean) {
            pb_1.Message.setField(this, 3, value);
        }
        get contract_owner() {
            return pb_1.Message.getFieldWithDefault(this, 4, Owner.OWNER_UNSPECIFIED) as Owner;
        }
        set contract_owner(value: Owner) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            erc20_address?: string;
            denom?: string;
            enabled?: boolean;
            contract_owner?: Owner;
        }): TokenPair {
            const message = new TokenPair({});
            if (data.erc20_address != null) {
                message.erc20_address = data.erc20_address;
            }
            if (data.denom != null) {
                message.denom = data.denom;
            }
            if (data.enabled != null) {
                message.enabled = data.enabled;
            }
            if (data.contract_owner != null) {
                message.contract_owner = data.contract_owner;
            }
            return message;
        }
        toObject() {
            const data: {
                erc20_address?: string;
                denom?: string;
                enabled?: boolean;
                contract_owner?: Owner;
            } = {};
            if (this.erc20_address != null) {
                data.erc20_address = this.erc20_address;
            }
            if (this.denom != null) {
                data.denom = this.denom;
            }
            if (this.enabled != null) {
                data.enabled = this.enabled;
            }
            if (this.contract_owner != null) {
                data.contract_owner = this.contract_owner;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.erc20_address.length)
                writer.writeString(1, this.erc20_address);
            if (this.denom.length)
                writer.writeString(2, this.denom);
            if (this.enabled != false)
                writer.writeBool(3, this.enabled);
            if (this.contract_owner != Owner.OWNER_UNSPECIFIED)
                writer.writeEnum(4, this.contract_owner);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TokenPair {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TokenPair();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.erc20_address = reader.readString();
                        break;
                    case 2:
                        message.denom = reader.readString();
                        break;
                    case 3:
                        message.enabled = reader.readBool();
                        break;
                    case 4:
                        message.contract_owner = reader.readEnum();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): TokenPair {
            return TokenPair.deserialize(bytes);
        }
    }
    export class RegisterCoinProposal extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            title?: string;
            description?: string;
            metadata?: dependency_2.cosmos.bank.v1beta1.Metadata[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("title" in data && data.title != undefined) {
                    this.title = data.title;
                }
                if ("description" in data && data.description != undefined) {
                    this.description = data.description;
                }
                if ("metadata" in data && data.metadata != undefined) {
                    this.metadata = data.metadata;
                }
            }
        }
        get title() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set title(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get description() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set description(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get metadata() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.bank.v1beta1.Metadata, 3) as dependency_2.cosmos.bank.v1beta1.Metadata[];
        }
        set metadata(value: dependency_2.cosmos.bank.v1beta1.Metadata[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        static fromObject(data: {
            title?: string;
            description?: string;
            metadata?: ReturnType<typeof dependency_2.cosmos.bank.v1beta1.Metadata.prototype.toObject>[];
        }): RegisterCoinProposal {
            const message = new RegisterCoinProposal({});
            if (data.title != null) {
                message.title = data.title;
            }
            if (data.description != null) {
                message.description = data.description;
            }
            if (data.metadata != null) {
                message.metadata = data.metadata.map(item => dependency_2.cosmos.bank.v1beta1.Metadata.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                title?: string;
                description?: string;
                metadata?: ReturnType<typeof dependency_2.cosmos.bank.v1beta1.Metadata.prototype.toObject>[];
            } = {};
            if (this.title != null) {
                data.title = this.title;
            }
            if (this.description != null) {
                data.description = this.description;
            }
            if (this.metadata != null) {
                data.metadata = this.metadata.map((item: dependency_2.cosmos.bank.v1beta1.Metadata) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.title.length)
                writer.writeString(1, this.title);
            if (this.description.length)
                writer.writeString(2, this.description);
            if (this.metadata.length)
                writer.writeRepeatedMessage(3, this.metadata, (item: dependency_2.cosmos.bank.v1beta1.Metadata) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RegisterCoinProposal {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RegisterCoinProposal();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.title = reader.readString();
                        break;
                    case 2:
                        message.description = reader.readString();
                        break;
                    case 3:
                        reader.readMessage(message.metadata, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_2.cosmos.bank.v1beta1.Metadata.deserialize(reader), dependency_2.cosmos.bank.v1beta1.Metadata));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): RegisterCoinProposal {
            return RegisterCoinProposal.deserialize(bytes);
        }
    }
    export class ProposalMetadata extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            metadata?: dependency_2.cosmos.bank.v1beta1.Metadata[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("metadata" in data && data.metadata != undefined) {
                    this.metadata = data.metadata;
                }
            }
        }
        get metadata() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.bank.v1beta1.Metadata, 1) as dependency_2.cosmos.bank.v1beta1.Metadata[];
        }
        set metadata(value: dependency_2.cosmos.bank.v1beta1.Metadata[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data: {
            metadata?: ReturnType<typeof dependency_2.cosmos.bank.v1beta1.Metadata.prototype.toObject>[];
        }): ProposalMetadata {
            const message = new ProposalMetadata({});
            if (data.metadata != null) {
                message.metadata = data.metadata.map(item => dependency_2.cosmos.bank.v1beta1.Metadata.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                metadata?: ReturnType<typeof dependency_2.cosmos.bank.v1beta1.Metadata.prototype.toObject>[];
            } = {};
            if (this.metadata != null) {
                data.metadata = this.metadata.map((item: dependency_2.cosmos.bank.v1beta1.Metadata) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.metadata.length)
                writer.writeRepeatedMessage(1, this.metadata, (item: dependency_2.cosmos.bank.v1beta1.Metadata) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ProposalMetadata {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ProposalMetadata();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.metadata, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_2.cosmos.bank.v1beta1.Metadata.deserialize(reader), dependency_2.cosmos.bank.v1beta1.Metadata));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ProposalMetadata {
            return ProposalMetadata.deserialize(bytes);
        }
    }
    export class RegisterERC20Proposal extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            title?: string;
            description?: string;
            erc20addresses?: string[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("title" in data && data.title != undefined) {
                    this.title = data.title;
                }
                if ("description" in data && data.description != undefined) {
                    this.description = data.description;
                }
                if ("erc20addresses" in data && data.erc20addresses != undefined) {
                    this.erc20addresses = data.erc20addresses;
                }
            }
        }
        get title() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set title(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get description() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set description(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get erc20addresses() {
            return pb_1.Message.getFieldWithDefault(this, 3, []) as string[];
        }
        set erc20addresses(value: string[]) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            title?: string;
            description?: string;
            erc20addresses?: string[];
        }): RegisterERC20Proposal {
            const message = new RegisterERC20Proposal({});
            if (data.title != null) {
                message.title = data.title;
            }
            if (data.description != null) {
                message.description = data.description;
            }
            if (data.erc20addresses != null) {
                message.erc20addresses = data.erc20addresses;
            }
            return message;
        }
        toObject() {
            const data: {
                title?: string;
                description?: string;
                erc20addresses?: string[];
            } = {};
            if (this.title != null) {
                data.title = this.title;
            }
            if (this.description != null) {
                data.description = this.description;
            }
            if (this.erc20addresses != null) {
                data.erc20addresses = this.erc20addresses;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.title.length)
                writer.writeString(1, this.title);
            if (this.description.length)
                writer.writeString(2, this.description);
            if (this.erc20addresses.length)
                writer.writeRepeatedString(3, this.erc20addresses);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RegisterERC20Proposal {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RegisterERC20Proposal();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.title = reader.readString();
                        break;
                    case 2:
                        message.description = reader.readString();
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
        static deserializeBinary(bytes: Uint8Array): RegisterERC20Proposal {
            return RegisterERC20Proposal.deserialize(bytes);
        }
    }
    export class ToggleTokenConversionProposal extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            title?: string;
            description?: string;
            token?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("title" in data && data.title != undefined) {
                    this.title = data.title;
                }
                if ("description" in data && data.description != undefined) {
                    this.description = data.description;
                }
                if ("token" in data && data.token != undefined) {
                    this.token = data.token;
                }
            }
        }
        get title() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set title(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get description() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set description(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get token() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set token(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            title?: string;
            description?: string;
            token?: string;
        }): ToggleTokenConversionProposal {
            const message = new ToggleTokenConversionProposal({});
            if (data.title != null) {
                message.title = data.title;
            }
            if (data.description != null) {
                message.description = data.description;
            }
            if (data.token != null) {
                message.token = data.token;
            }
            return message;
        }
        toObject() {
            const data: {
                title?: string;
                description?: string;
                token?: string;
            } = {};
            if (this.title != null) {
                data.title = this.title;
            }
            if (this.description != null) {
                data.description = this.description;
            }
            if (this.token != null) {
                data.token = this.token;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.title.length)
                writer.writeString(1, this.title);
            if (this.description.length)
                writer.writeString(2, this.description);
            if (this.token.length)
                writer.writeString(3, this.token);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ToggleTokenConversionProposal {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ToggleTokenConversionProposal();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.title = reader.readString();
                        break;
                    case 2:
                        message.description = reader.readString();
                        break;
                    case 3:
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
        static deserializeBinary(bytes: Uint8Array): ToggleTokenConversionProposal {
            return ToggleTokenConversionProposal.deserialize(bytes);
        }
    }
    export class AddNewAssetConsensusProposal extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            title?: string;
            description?: string;
            assets?: Asset[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("title" in data && data.title != undefined) {
                    this.title = data.title;
                }
                if ("description" in data && data.description != undefined) {
                    this.description = data.description;
                }
                if ("assets" in data && data.assets != undefined) {
                    this.assets = data.assets;
                }
            }
        }
        get title() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set title(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get description() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set description(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get assets() {
            return pb_1.Message.getRepeatedWrapperField(this, Asset, 3) as Asset[];
        }
        set assets(value: Asset[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        static fromObject(data: {
            title?: string;
            description?: string;
            assets?: ReturnType<typeof Asset.prototype.toObject>[];
        }): AddNewAssetConsensusProposal {
            const message = new AddNewAssetConsensusProposal({});
            if (data.title != null) {
                message.title = data.title;
            }
            if (data.description != null) {
                message.description = data.description;
            }
            if (data.assets != null) {
                message.assets = data.assets.map(item => Asset.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                title?: string;
                description?: string;
                assets?: ReturnType<typeof Asset.prototype.toObject>[];
            } = {};
            if (this.title != null) {
                data.title = this.title;
            }
            if (this.description != null) {
                data.description = this.description;
            }
            if (this.assets != null) {
                data.assets = this.assets.map((item: Asset) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.title.length)
                writer.writeString(1, this.title);
            if (this.description.length)
                writer.writeString(2, this.description);
            if (this.assets.length)
                writer.writeRepeatedMessage(3, this.assets, (item: Asset) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AddNewAssetConsensusProposal {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AddNewAssetConsensusProposal();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.title = reader.readString();
                        break;
                    case 2:
                        message.description = reader.readString();
                        break;
                    case 3:
                        reader.readMessage(message.assets, () => pb_1.Message.addToRepeatedWrapperField(message, 3, Asset.deserialize(reader), Asset));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): AddNewAssetConsensusProposal {
            return AddNewAssetConsensusProposal.deserialize(bytes);
        }
    }
    export class RemoveAssetConsensusProposal extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            title?: string;
            description?: string;
            denoms?: string[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("title" in data && data.title != undefined) {
                    this.title = data.title;
                }
                if ("description" in data && data.description != undefined) {
                    this.description = data.description;
                }
                if ("denoms" in data && data.denoms != undefined) {
                    this.denoms = data.denoms;
                }
            }
        }
        get title() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set title(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get description() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set description(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get denoms() {
            return pb_1.Message.getFieldWithDefault(this, 3, []) as string[];
        }
        set denoms(value: string[]) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            title?: string;
            description?: string;
            denoms?: string[];
        }): RemoveAssetConsensusProposal {
            const message = new RemoveAssetConsensusProposal({});
            if (data.title != null) {
                message.title = data.title;
            }
            if (data.description != null) {
                message.description = data.description;
            }
            if (data.denoms != null) {
                message.denoms = data.denoms;
            }
            return message;
        }
        toObject() {
            const data: {
                title?: string;
                description?: string;
                denoms?: string[];
            } = {};
            if (this.title != null) {
                data.title = this.title;
            }
            if (this.description != null) {
                data.description = this.description;
            }
            if (this.denoms != null) {
                data.denoms = this.denoms;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.title.length)
                writer.writeString(1, this.title);
            if (this.description.length)
                writer.writeString(2, this.description);
            if (this.denoms.length)
                writer.writeRepeatedString(3, this.denoms);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RemoveAssetConsensusProposal {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RemoveAssetConsensusProposal();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.title = reader.readString();
                        break;
                    case 2:
                        message.description = reader.readString();
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
        static deserializeBinary(bytes: Uint8Array): RemoveAssetConsensusProposal {
            return RemoveAssetConsensusProposal.deserialize(bytes);
        }
    }
    export class Asset extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            denom?: string;
            contract_address?: string;
            chain_id?: string;
            decimals?: number;
            base_weight?: number;
            metadata?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("denom" in data && data.denom != undefined) {
                    this.denom = data.denom;
                }
                if ("contract_address" in data && data.contract_address != undefined) {
                    this.contract_address = data.contract_address;
                }
                if ("chain_id" in data && data.chain_id != undefined) {
                    this.chain_id = data.chain_id;
                }
                if ("decimals" in data && data.decimals != undefined) {
                    this.decimals = data.decimals;
                }
                if ("base_weight" in data && data.base_weight != undefined) {
                    this.base_weight = data.base_weight;
                }
                if ("metadata" in data && data.metadata != undefined) {
                    this.metadata = data.metadata;
                }
            }
        }
        get denom() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set denom(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get contract_address() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set contract_address(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get chain_id() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set chain_id(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get decimals() {
            return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
        }
        set decimals(value: number) {
            pb_1.Message.setField(this, 4, value);
        }
        get base_weight() {
            return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
        }
        set base_weight(value: number) {
            pb_1.Message.setField(this, 5, value);
        }
        get metadata() {
            return pb_1.Message.getFieldWithDefault(this, 6, "") as string;
        }
        set metadata(value: string) {
            pb_1.Message.setField(this, 6, value);
        }
        static fromObject(data: {
            denom?: string;
            contract_address?: string;
            chain_id?: string;
            decimals?: number;
            base_weight?: number;
            metadata?: string;
        }): Asset {
            const message = new Asset({});
            if (data.denom != null) {
                message.denom = data.denom;
            }
            if (data.contract_address != null) {
                message.contract_address = data.contract_address;
            }
            if (data.chain_id != null) {
                message.chain_id = data.chain_id;
            }
            if (data.decimals != null) {
                message.decimals = data.decimals;
            }
            if (data.base_weight != null) {
                message.base_weight = data.base_weight;
            }
            if (data.metadata != null) {
                message.metadata = data.metadata;
            }
            return message;
        }
        toObject() {
            const data: {
                denom?: string;
                contract_address?: string;
                chain_id?: string;
                decimals?: number;
                base_weight?: number;
                metadata?: string;
            } = {};
            if (this.denom != null) {
                data.denom = this.denom;
            }
            if (this.contract_address != null) {
                data.contract_address = this.contract_address;
            }
            if (this.chain_id != null) {
                data.chain_id = this.chain_id;
            }
            if (this.decimals != null) {
                data.decimals = this.decimals;
            }
            if (this.base_weight != null) {
                data.base_weight = this.base_weight;
            }
            if (this.metadata != null) {
                data.metadata = this.metadata;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.denom.length)
                writer.writeString(1, this.denom);
            if (this.contract_address.length)
                writer.writeString(2, this.contract_address);
            if (this.chain_id.length)
                writer.writeString(3, this.chain_id);
            if (this.decimals != 0)
                writer.writeUint64(4, this.decimals);
            if (this.base_weight != 0)
                writer.writeUint64(5, this.base_weight);
            if (this.metadata.length)
                writer.writeString(6, this.metadata);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Asset {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Asset();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.denom = reader.readString();
                        break;
                    case 2:
                        message.contract_address = reader.readString();
                        break;
                    case 3:
                        message.chain_id = reader.readString();
                        break;
                    case 4:
                        message.decimals = reader.readUint64();
                        break;
                    case 5:
                        message.base_weight = reader.readUint64();
                        break;
                    case 6:
                        message.metadata = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Asset {
            return Asset.deserialize(bytes);
        }
    }
}
