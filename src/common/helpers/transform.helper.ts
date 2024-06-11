export class TransformHelper {
  public static trim({ value }: { value: string }) {
    return value ? value.trim() : value;
  }

  public static toLowerCase({ value }: { value: string }) {
    return value ? value.toLowerCase() : value;
  }

  public static trimArray({ value }) {
    return value ? value.map((item) => item.trim()) : value;
  }

  public static uniqueItems({ value }) {
    return value ? Array.from(new Set(value)) : value;
  }

  public static toLoverCaseArray({ value }) {
    return value ? value.map((item) => item.toLowerCase()) : value;
  }
}
