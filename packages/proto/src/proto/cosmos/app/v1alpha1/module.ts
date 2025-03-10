/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.28.3
 * source: cosmos/app/v1alpha1/module.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../google/protobuf/descriptor";
import * as pb_1 from "google-protobuf";
export namespace cosmos.app.v1alpha1 {
    export class ModuleDescriptor extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            go_import?: string;
            use_package?: PackageReference[];
            can_migrate_from?: MigrateFromInfo[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2, 3], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("go_import" in data && data.go_import != undefined) {
                    this.go_import = data.go_import;
                }
                if ("use_package" in data && data.use_package != undefined) {
                    this.use_package = data.use_package;
                }
                if ("can_migrate_from" in data && data.can_migrate_from != undefined) {
                    this.can_migrate_from = data.can_migrate_from;
                }
            }
        }
        get go_import() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set go_import(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get use_package() {
            return pb_1.Message.getRepeatedWrapperField(this, PackageReference, 2) as PackageReference[];
        }
        set use_package(value: PackageReference[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        get can_migrate_from() {
            return pb_1.Message.getRepeatedWrapperField(this, MigrateFromInfo, 3) as MigrateFromInfo[];
        }
        set can_migrate_from(value: MigrateFromInfo[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        static fromObject(data: {
            go_import?: string;
            use_package?: ReturnType<typeof PackageReference.prototype.toObject>[];
            can_migrate_from?: ReturnType<typeof MigrateFromInfo.prototype.toObject>[];
        }): ModuleDescriptor {
            const message = new ModuleDescriptor({});
            if (data.go_import != null) {
                message.go_import = data.go_import;
            }
            if (data.use_package != null) {
                message.use_package = data.use_package.map(item => PackageReference.fromObject(item));
            }
            if (data.can_migrate_from != null) {
                message.can_migrate_from = data.can_migrate_from.map(item => MigrateFromInfo.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                go_import?: string;
                use_package?: ReturnType<typeof PackageReference.prototype.toObject>[];
                can_migrate_from?: ReturnType<typeof MigrateFromInfo.prototype.toObject>[];
            } = {};
            if (this.go_import != null) {
                data.go_import = this.go_import;
            }
            if (this.use_package != null) {
                data.use_package = this.use_package.map((item: PackageReference) => item.toObject());
            }
            if (this.can_migrate_from != null) {
                data.can_migrate_from = this.can_migrate_from.map((item: MigrateFromInfo) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.go_import.length)
                writer.writeString(1, this.go_import);
            if (this.use_package.length)
                writer.writeRepeatedMessage(2, this.use_package, (item: PackageReference) => item.serialize(writer));
            if (this.can_migrate_from.length)
                writer.writeRepeatedMessage(3, this.can_migrate_from, (item: MigrateFromInfo) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ModuleDescriptor {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ModuleDescriptor();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.go_import = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.use_package, () => pb_1.Message.addToRepeatedWrapperField(message, 2, PackageReference.deserialize(reader), PackageReference));
                        break;
                    case 3:
                        reader.readMessage(message.can_migrate_from, () => pb_1.Message.addToRepeatedWrapperField(message, 3, MigrateFromInfo.deserialize(reader), MigrateFromInfo));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ModuleDescriptor {
            return ModuleDescriptor.deserialize(bytes);
        }
    }
    export class PackageReference extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            name?: string;
            revision?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
                if ("revision" in data && data.revision != undefined) {
                    this.revision = data.revision;
                }
            }
        }
        get name() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get revision() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set revision(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            name?: string;
            revision?: number;
        }): PackageReference {
            const message = new PackageReference({});
            if (data.name != null) {
                message.name = data.name;
            }
            if (data.revision != null) {
                message.revision = data.revision;
            }
            return message;
        }
        toObject() {
            const data: {
                name?: string;
                revision?: number;
            } = {};
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.revision != null) {
                data.revision = this.revision;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.name.length)
                writer.writeString(1, this.name);
            if (this.revision != 0)
                writer.writeUint32(2, this.revision);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PackageReference {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PackageReference();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.name = reader.readString();
                        break;
                    case 2:
                        message.revision = reader.readUint32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): PackageReference {
            return PackageReference.deserialize(bytes);
        }
    }
    export class MigrateFromInfo extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            module?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("module" in data && data.module != undefined) {
                    this.module = data.module;
                }
            }
        }
        get module() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set module(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            module?: string;
        }): MigrateFromInfo {
            const message = new MigrateFromInfo({});
            if (data.module != null) {
                message.module = data.module;
            }
            return message;
        }
        toObject() {
            const data: {
                module?: string;
            } = {};
            if (this.module != null) {
                data.module = this.module;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.module.length)
                writer.writeString(1, this.module);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MigrateFromInfo {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MigrateFromInfo();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.module = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MigrateFromInfo {
            return MigrateFromInfo.deserialize(bytes);
        }
    }
}
