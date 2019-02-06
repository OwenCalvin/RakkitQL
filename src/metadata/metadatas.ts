import { getMetadataStorage } from "./getMetadataStorage";

export class Metadatas {
  static get Fields() {
    return getMetadataStorage().fields;
  }

  static get GenericFields() {
    return getMetadataStorage().genericFields;
  }

  static get InputTypes() {
    return getMetadataStorage().inputTypes;
  }

  static get ObjectTypes() {
    return getMetadataStorage().objectTypes;
  }

  static get Args() {
    return getMetadataStorage().args;
  }

  static get Subscritpions() {
    return getMetadataStorage().subscriptions;
  }

  static get Queries() {
    return getMetadataStorage().queries;
  }

  static get Middlewares() {
    return getMetadataStorage().middlewares;
  }

  static get GenericTypes() {
    return getMetadataStorage().genericTypes;
  }

  static get FieldResolvers() {
    return getMetadataStorage().fieldResolvers;
  }

  static get ObjectArgs() {
    return getMetadataStorage().objectArgs;
  }

  static get InterfaceTypes() {
    return getMetadataStorage().interfaceTypes;
  }

  static get Mutations() {
    return getMetadataStorage().mutations;
  }

  static get Params() {
    return getMetadataStorage().params;
  }

  static get WrapperTypes() {
    return getMetadataStorage().wrapperTypes;
  }

  static get SubTypes() {
    return getMetadataStorage().subTypes;
  }

  static get ResolverClasses() {
    return getMetadataStorage().resolverClasses;
  }

  static get Unions() {
    return getMetadataStorage().unions;
  }

  static get AuthorizedFields() {
    return getMetadataStorage().authorizedFields;
  }

  static get ArgumentTypes() {
    return getMetadataStorage().argumentTypes;
  }

  static get Enums() {
    return getMetadataStorage().enums;
  }
}
