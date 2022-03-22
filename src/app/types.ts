
export interface Deserializer {

  deserialize(inp: Object): Deserializer;

  serialize(): Object;
}
