// Override type is partial, base type is full
export function mergeProcessWithOverrides<T extends { id: string | number }>(
  baseProcess: T[],
  overrides: Partial<T>[]
): T[] {
  const overrideMap = new Map(
    overrides.map(item => [item.id, item])
  );

  return baseProcess.map(item =>
    overrideMap.has(item.id)
      ? { ...item, ...overrideMap.get(item.id) }
      : item
  );
}
