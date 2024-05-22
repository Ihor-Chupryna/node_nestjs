export class TransformerHelper {
  public static trim({ value }: { value: string }): string {
    return value ? value.trim() : value;
  }

  public static toLoverCase({ value }: { value: string }): string {
    return value ? value.toLowerCase() : value;
  }
}
