const mainMethod = require('../main');



//---------isStartSmallerThanEnd---Test------------------//

it ('should return true when call isStartSmallerThanEnd given 1 and 100', () => {
    expect(mainMethod.isStartSmallerThanEnd(1, 100)).toBe(true);
});

it ('should return false when call isStartSmallerThanEnd given 2 and 1', () => {
    expect(mainMethod.isStartSmallerThanEnd(2, 1)).toBe(false);
});

it ('should return true when call isStartSmallerThanEnd given 2 and 2', () => {
    expect(mainMethod.isStartSmallerThanEnd(2, 2)).toBe(true);
});


//---------isInRange---Test------------------//

it ('should return true when call isInRange given 1 and 100', () => {
    expect(mainMethod.isInRange(1, 100)).toBe(true);
});


it ('should return true when call isInRange given 1 and 1000', () => {
    expect(mainMethod.isInRange(1, 1000)).toBe(true);
});



it ('should return false when call isInRange given -1 and 100', () => {
    expect(mainMethod.isInRange(-1, 100)).toBe(false);
});


it ('should return false when call isInRange given 0 and 1001', () => {
    expect(mainMethod.isInRange(0, 1001)).toBe(false);
});

//---------creatMutiplyTableByRange---Test------------------//
it ('should return "1*1=1 1*2=2 2*2=4 " when call creat Mutiply Table By Range given 1 and 2', () => {
    expect(mainMethod.creatMutiplyTableByRange(1, 2,mainMethod.isStartSmallerThanEnd(1,2),mainMethod.isInRange(1,2))).toBe("1*1=1 1*2=2 2*2=4 ");
});

it ('should return "3*3=9 " when call creat Mutiply Table By Range given 3 and 3', () => {
    expect(mainMethod.creatMutiplyTableByRange(3, 3,mainMethod.isStartSmallerThanEnd(3,3),mainMethod.isInRange(3,3))).toBe("3*3=9 ");
});

it ('should return "null" when call creat Mutiply Table By Range given 2 and 1', () => {
    expect(mainMethod.creatMutiplyTableByRange(2, 1,mainMethod.isStartSmallerThanEnd(2,1),mainMethod.isInRange(2,1))).toBe(null);
});

it ('should return "outOfRange" when call creat Mutiply Table By Range given 2 and 1001', () => {
    expect(mainMethod.creatMutiplyTableByRange(2, 1001,mainMethod.isStartSmallerThanEnd(2,1001),mainMethod.isInRange(2,1001))).toBe("outOfRange");
});


//---------isStartSmallerThanEnd---Test------------------//
it ('should return "1*1=1 1*2=2 2*2=4 1*3=3 2*3=6 3*3=9 " when call getMutiplyTableByRange given 1 and 3', () => {
    expect(mainMethod.getMutiplyTableByRange(1, 3)).toBe("1*1=1 1*2=2 2*2=4 1*3=3 2*3=6 3*3=9 ");
});

it ('should return "4*4=16 " when call getMutiplyTableByRange given 4 and 4', () => {
    expect(mainMethod.getMutiplyTableByRange(4, 4)).toBe("4*4=16 ");
});

it ('should return "null" when call getMutiplyTableByRange given 2 and 1', () => {
    expect(mainMethod.getMutiplyTableByRange(2, 1)).toBe(null);
});

it ('should return "outOfRange" when call getMutiplyTableByRange given -1 and 1001', () => {
    expect(mainMethod.getMutiplyTableByRange(-1, 1001)).toBe("outOfRange");
});