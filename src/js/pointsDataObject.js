class fieldData {
    constructor(position, value, isMine, isFlag, isOpened, isDefused) {
        this.position = position;
        this.value = value;
        this.isMine = isMine;
        this.isFlag = isFlag;
        this.isOpened = isOpened;
        this.isDefused = isDefused;
    }
};

export default fieldData;