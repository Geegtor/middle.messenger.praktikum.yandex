import Block from "../core/base/block";

export function getRefs<T extends string>(refs: Record<T, Block>) {
    return Object.fromEntries(Object.entries(refs)
        .map(([name, input]) => [name, (<Block>input).value()]
    ))
}
