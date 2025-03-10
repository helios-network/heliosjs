/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: cosmos/vesting/v1beta1/vesting.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../amino/amino";
import * as dependency_2 from "./../../../gogoproto/gogo";
import * as dependency_3 from "./../../base/v1beta1/coin";
import * as dependency_4 from "./../../auth/v1beta1/auth";
import * as pb_1 from "google-protobuf";
export namespace cosmos.vesting.v1beta1 {
    export class BaseVestingAccount extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            base_account?: dependency_4.cosmos.auth.v1beta1.BaseAccount;
            original_vesting?: dependency_3.cosmos.base.v1beta1.Coin[];
            delegated_free?: dependency_3.cosmos.base.v1beta1.Coin[];
            delegated_vesting?: dependency_3.cosmos.base.v1beta1.Coin[];
            end_time?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2, 3, 4], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("base_account" in data && data.base_account != undefined) {
                    this.base_account = data.base_account;
                }
                if ("original_vesting" in data && data.original_vesting != undefined) {
                    this.original_vesting = data.original_vesting;
                }
                if ("delegated_free" in data && data.delegated_free != undefined) {
                    this.delegated_free = data.delegated_free;
                }
                if ("delegated_vesting" in data && data.delegated_vesting != undefined) {
                    this.delegated_vesting = data.delegated_vesting;
                }
                if ("end_time" in data && data.end_time != undefined) {
                    this.end_time = data.end_time;
                }
            }
        }
        get base_account() {
            return pb_1.Message.getWrapperField(this, dependency_4.cosmos.auth.v1beta1.BaseAccount, 1) as dependency_4.cosmos.auth.v1beta1.BaseAccount;
        }
        set base_account(value: dependency_4.cosmos.auth.v1beta1.BaseAccount) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_base_account() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get original_vesting() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.cosmos.base.v1beta1.Coin, 2) as dependency_3.cosmos.base.v1beta1.Coin[];
        }
        set original_vesting(value: dependency_3.cosmos.base.v1beta1.Coin[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        get delegated_free() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.cosmos.base.v1beta1.Coin, 3) as dependency_3.cosmos.base.v1beta1.Coin[];
        }
        set delegated_free(value: dependency_3.cosmos.base.v1beta1.Coin[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        get delegated_vesting() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.cosmos.base.v1beta1.Coin, 4) as dependency_3.cosmos.base.v1beta1.Coin[];
        }
        set delegated_vesting(value: dependency_3.cosmos.base.v1beta1.Coin[]) {
            pb_1.Message.setRepeatedWrapperField(this, 4, value);
        }
        get end_time() {
            return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
        }
        set end_time(value: number) {
            pb_1.Message.setField(this, 5, value);
        }
        static fromObject(data: {
            base_account?: ReturnType<typeof dependency_4.cosmos.auth.v1beta1.BaseAccount.prototype.toObject>;
            original_vesting?: ReturnType<typeof dependency_3.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            delegated_free?: ReturnType<typeof dependency_3.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            delegated_vesting?: ReturnType<typeof dependency_3.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            end_time?: number;
        }): BaseVestingAccount {
            const message = new BaseVestingAccount({});
            if (data.base_account != null) {
                message.base_account = dependency_4.cosmos.auth.v1beta1.BaseAccount.fromObject(data.base_account);
            }
            if (data.original_vesting != null) {
                message.original_vesting = data.original_vesting.map(item => dependency_3.cosmos.base.v1beta1.Coin.fromObject(item));
            }
            if (data.delegated_free != null) {
                message.delegated_free = data.delegated_free.map(item => dependency_3.cosmos.base.v1beta1.Coin.fromObject(item));
            }
            if (data.delegated_vesting != null) {
                message.delegated_vesting = data.delegated_vesting.map(item => dependency_3.cosmos.base.v1beta1.Coin.fromObject(item));
            }
            if (data.end_time != null) {
                message.end_time = data.end_time;
            }
            return message;
        }
        toObject() {
            const data: {
                base_account?: ReturnType<typeof dependency_4.cosmos.auth.v1beta1.BaseAccount.prototype.toObject>;
                original_vesting?: ReturnType<typeof dependency_3.cosmos.base.v1beta1.Coin.prototype.toObject>[];
                delegated_free?: ReturnType<typeof dependency_3.cosmos.base.v1beta1.Coin.prototype.toObject>[];
                delegated_vesting?: ReturnType<typeof dependency_3.cosmos.base.v1beta1.Coin.prototype.toObject>[];
                end_time?: number;
            } = {};
            if (this.base_account != null) {
                data.base_account = this.base_account.toObject();
            }
            if (this.original_vesting != null) {
                data.original_vesting = this.original_vesting.map((item: dependency_3.cosmos.base.v1beta1.Coin) => item.toObject());
            }
            if (this.delegated_free != null) {
                data.delegated_free = this.delegated_free.map((item: dependency_3.cosmos.base.v1beta1.Coin) => item.toObject());
            }
            if (this.delegated_vesting != null) {
                data.delegated_vesting = this.delegated_vesting.map((item: dependency_3.cosmos.base.v1beta1.Coin) => item.toObject());
            }
            if (this.end_time != null) {
                data.end_time = this.end_time;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_base_account)
                writer.writeMessage(1, this.base_account, () => this.base_account.serialize(writer));
            if (this.original_vesting.length)
                writer.writeRepeatedMessage(2, this.original_vesting, (item: dependency_3.cosmos.base.v1beta1.Coin) => item.serialize(writer));
            if (this.delegated_free.length)
                writer.writeRepeatedMessage(3, this.delegated_free, (item: dependency_3.cosmos.base.v1beta1.Coin) => item.serialize(writer));
            if (this.delegated_vesting.length)
                writer.writeRepeatedMessage(4, this.delegated_vesting, (item: dependency_3.cosmos.base.v1beta1.Coin) => item.serialize(writer));
            if (this.end_time != 0)
                writer.writeInt64(5, this.end_time);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BaseVestingAccount {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BaseVestingAccount();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.base_account, () => message.base_account = dependency_4.cosmos.auth.v1beta1.BaseAccount.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.original_vesting, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_3.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_3.cosmos.base.v1beta1.Coin));
                        break;
                    case 3:
                        reader.readMessage(message.delegated_free, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_3.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_3.cosmos.base.v1beta1.Coin));
                        break;
                    case 4:
                        reader.readMessage(message.delegated_vesting, () => pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_3.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_3.cosmos.base.v1beta1.Coin));
                        break;
                    case 5:
                        message.end_time = reader.readInt64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): BaseVestingAccount {
            return BaseVestingAccount.deserialize(bytes);
        }
    }
    export class ContinuousVestingAccount extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            base_vesting_account?: BaseVestingAccount;
            start_time?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("base_vesting_account" in data && data.base_vesting_account != undefined) {
                    this.base_vesting_account = data.base_vesting_account;
                }
                if ("start_time" in data && data.start_time != undefined) {
                    this.start_time = data.start_time;
                }
            }
        }
        get base_vesting_account() {
            return pb_1.Message.getWrapperField(this, BaseVestingAccount, 1) as BaseVestingAccount;
        }
        set base_vesting_account(value: BaseVestingAccount) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_base_vesting_account() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get start_time() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set start_time(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            base_vesting_account?: ReturnType<typeof BaseVestingAccount.prototype.toObject>;
            start_time?: number;
        }): ContinuousVestingAccount {
            const message = new ContinuousVestingAccount({});
            if (data.base_vesting_account != null) {
                message.base_vesting_account = BaseVestingAccount.fromObject(data.base_vesting_account);
            }
            if (data.start_time != null) {
                message.start_time = data.start_time;
            }
            return message;
        }
        toObject() {
            const data: {
                base_vesting_account?: ReturnType<typeof BaseVestingAccount.prototype.toObject>;
                start_time?: number;
            } = {};
            if (this.base_vesting_account != null) {
                data.base_vesting_account = this.base_vesting_account.toObject();
            }
            if (this.start_time != null) {
                data.start_time = this.start_time;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_base_vesting_account)
                writer.writeMessage(1, this.base_vesting_account, () => this.base_vesting_account.serialize(writer));
            if (this.start_time != 0)
                writer.writeInt64(2, this.start_time);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ContinuousVestingAccount {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ContinuousVestingAccount();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.base_vesting_account, () => message.base_vesting_account = BaseVestingAccount.deserialize(reader));
                        break;
                    case 2:
                        message.start_time = reader.readInt64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ContinuousVestingAccount {
            return ContinuousVestingAccount.deserialize(bytes);
        }
    }
    export class DelayedVestingAccount extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            base_vesting_account?: BaseVestingAccount;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("base_vesting_account" in data && data.base_vesting_account != undefined) {
                    this.base_vesting_account = data.base_vesting_account;
                }
            }
        }
        get base_vesting_account() {
            return pb_1.Message.getWrapperField(this, BaseVestingAccount, 1) as BaseVestingAccount;
        }
        set base_vesting_account(value: BaseVestingAccount) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_base_vesting_account() {
            return pb_1.Message.getField(this, 1) != null;
        }
        static fromObject(data: {
            base_vesting_account?: ReturnType<typeof BaseVestingAccount.prototype.toObject>;
        }): DelayedVestingAccount {
            const message = new DelayedVestingAccount({});
            if (data.base_vesting_account != null) {
                message.base_vesting_account = BaseVestingAccount.fromObject(data.base_vesting_account);
            }
            return message;
        }
        toObject() {
            const data: {
                base_vesting_account?: ReturnType<typeof BaseVestingAccount.prototype.toObject>;
            } = {};
            if (this.base_vesting_account != null) {
                data.base_vesting_account = this.base_vesting_account.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_base_vesting_account)
                writer.writeMessage(1, this.base_vesting_account, () => this.base_vesting_account.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DelayedVestingAccount {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DelayedVestingAccount();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.base_vesting_account, () => message.base_vesting_account = BaseVestingAccount.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): DelayedVestingAccount {
            return DelayedVestingAccount.deserialize(bytes);
        }
    }
    export class Period extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            length?: number;
            amount?: dependency_3.cosmos.base.v1beta1.Coin[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("length" in data && data.length != undefined) {
                    this.length = data.length;
                }
                if ("amount" in data && data.amount != undefined) {
                    this.amount = data.amount;
                }
            }
        }
        get length() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set length(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get amount() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.cosmos.base.v1beta1.Coin, 2) as dependency_3.cosmos.base.v1beta1.Coin[];
        }
        set amount(value: dependency_3.cosmos.base.v1beta1.Coin[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        static fromObject(data: {
            length?: number;
            amount?: ReturnType<typeof dependency_3.cosmos.base.v1beta1.Coin.prototype.toObject>[];
        }): Period {
            const message = new Period({});
            if (data.length != null) {
                message.length = data.length;
            }
            if (data.amount != null) {
                message.amount = data.amount.map(item => dependency_3.cosmos.base.v1beta1.Coin.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                length?: number;
                amount?: ReturnType<typeof dependency_3.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            } = {};
            if (this.length != null) {
                data.length = this.length;
            }
            if (this.amount != null) {
                data.amount = this.amount.map((item: dependency_3.cosmos.base.v1beta1.Coin) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.length != 0)
                writer.writeInt64(1, this.length);
            if (this.amount.length)
                writer.writeRepeatedMessage(2, this.amount, (item: dependency_3.cosmos.base.v1beta1.Coin) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Period {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Period();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.length = reader.readInt64();
                        break;
                    case 2:
                        reader.readMessage(message.amount, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_3.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_3.cosmos.base.v1beta1.Coin));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Period {
            return Period.deserialize(bytes);
        }
    }
    export class PeriodicVestingAccount extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            base_vesting_account?: BaseVestingAccount;
            start_time?: number;
            vesting_periods?: Period[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("base_vesting_account" in data && data.base_vesting_account != undefined) {
                    this.base_vesting_account = data.base_vesting_account;
                }
                if ("start_time" in data && data.start_time != undefined) {
                    this.start_time = data.start_time;
                }
                if ("vesting_periods" in data && data.vesting_periods != undefined) {
                    this.vesting_periods = data.vesting_periods;
                }
            }
        }
        get base_vesting_account() {
            return pb_1.Message.getWrapperField(this, BaseVestingAccount, 1) as BaseVestingAccount;
        }
        set base_vesting_account(value: BaseVestingAccount) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_base_vesting_account() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get start_time() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set start_time(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get vesting_periods() {
            return pb_1.Message.getRepeatedWrapperField(this, Period, 3) as Period[];
        }
        set vesting_periods(value: Period[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        static fromObject(data: {
            base_vesting_account?: ReturnType<typeof BaseVestingAccount.prototype.toObject>;
            start_time?: number;
            vesting_periods?: ReturnType<typeof Period.prototype.toObject>[];
        }): PeriodicVestingAccount {
            const message = new PeriodicVestingAccount({});
            if (data.base_vesting_account != null) {
                message.base_vesting_account = BaseVestingAccount.fromObject(data.base_vesting_account);
            }
            if (data.start_time != null) {
                message.start_time = data.start_time;
            }
            if (data.vesting_periods != null) {
                message.vesting_periods = data.vesting_periods.map(item => Period.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                base_vesting_account?: ReturnType<typeof BaseVestingAccount.prototype.toObject>;
                start_time?: number;
                vesting_periods?: ReturnType<typeof Period.prototype.toObject>[];
            } = {};
            if (this.base_vesting_account != null) {
                data.base_vesting_account = this.base_vesting_account.toObject();
            }
            if (this.start_time != null) {
                data.start_time = this.start_time;
            }
            if (this.vesting_periods != null) {
                data.vesting_periods = this.vesting_periods.map((item: Period) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_base_vesting_account)
                writer.writeMessage(1, this.base_vesting_account, () => this.base_vesting_account.serialize(writer));
            if (this.start_time != 0)
                writer.writeInt64(2, this.start_time);
            if (this.vesting_periods.length)
                writer.writeRepeatedMessage(3, this.vesting_periods, (item: Period) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PeriodicVestingAccount {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PeriodicVestingAccount();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.base_vesting_account, () => message.base_vesting_account = BaseVestingAccount.deserialize(reader));
                        break;
                    case 2:
                        message.start_time = reader.readInt64();
                        break;
                    case 3:
                        reader.readMessage(message.vesting_periods, () => pb_1.Message.addToRepeatedWrapperField(message, 3, Period.deserialize(reader), Period));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): PeriodicVestingAccount {
            return PeriodicVestingAccount.deserialize(bytes);
        }
    }
    export class PermanentLockedAccount extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            base_vesting_account?: BaseVestingAccount;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("base_vesting_account" in data && data.base_vesting_account != undefined) {
                    this.base_vesting_account = data.base_vesting_account;
                }
            }
        }
        get base_vesting_account() {
            return pb_1.Message.getWrapperField(this, BaseVestingAccount, 1) as BaseVestingAccount;
        }
        set base_vesting_account(value: BaseVestingAccount) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_base_vesting_account() {
            return pb_1.Message.getField(this, 1) != null;
        }
        static fromObject(data: {
            base_vesting_account?: ReturnType<typeof BaseVestingAccount.prototype.toObject>;
        }): PermanentLockedAccount {
            const message = new PermanentLockedAccount({});
            if (data.base_vesting_account != null) {
                message.base_vesting_account = BaseVestingAccount.fromObject(data.base_vesting_account);
            }
            return message;
        }
        toObject() {
            const data: {
                base_vesting_account?: ReturnType<typeof BaseVestingAccount.prototype.toObject>;
            } = {};
            if (this.base_vesting_account != null) {
                data.base_vesting_account = this.base_vesting_account.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_base_vesting_account)
                writer.writeMessage(1, this.base_vesting_account, () => this.base_vesting_account.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PermanentLockedAccount {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PermanentLockedAccount();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.base_vesting_account, () => message.base_vesting_account = BaseVestingAccount.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): PermanentLockedAccount {
            return PermanentLockedAccount.deserialize(bytes);
        }
    }
}
