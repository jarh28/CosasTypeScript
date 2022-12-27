function union<T extends Set<any>>(setA: T, setB: T) {
    const union = new Set();
    setA.forEach((x) => union.add(x));
    setB.forEach((x) => union.add(x));
    return union;
}

function intersection<T extends Set<any>>(setA: T, setB: T) {
    const intersection = new Set();
    setA.forEach((x) => setB.has(x) && intersection.add(x));
    return intersection;
}

function difference<T extends Set<any>>(setA: T, setB: T) {
    const difference = new Set();
    setA.forEach((x) => !setB.has(x) && difference.add(x));
    return difference;
}

function symmetricDifference<T extends Set<any>>(setA: T, setB: T) {
    const symmetricDifference = new Set();
    setA.forEach((x) => !b.has(x) && symmetricDifference.add(x));
    setB.forEach((x) => !a.has(x) && symmetricDifference.add(x));
    return symmetricDifference;
}
