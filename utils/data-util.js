export const replaceMongoIdInArray = (array) => {
    const mappedArray = array.map(({ _id, ...item }) => ({
        id: _id.toString(),
        ...item
    }));

    return mappedArray;
}