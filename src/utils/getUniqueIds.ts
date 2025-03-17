
function getUniqueIds(ids: any) {
    const countMap = ids.reduce((acc: any, num: any) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc
    }, {});

    console.log("COUNT MAP:::", countMap)
    const uniqueIds = ids.filter((num: any) => countMap[num] === 1);
    console.log("FROM FUNCTION:::", uniqueIds)

    return uniqueIds;
}

export default getUniqueIds;