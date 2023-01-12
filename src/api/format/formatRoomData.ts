interface RoomInterface {
    __v?: number,
    _id?: string,
    name: string,
}

function formatRoomData(dt: any) {
    const headers = ["Name"];
    const body: Array<Array<string>> = new Array<Array<string>>();

    dt.map((item: RoomInterface) => {
        body.push([item.name]);
    });

    return { headers: headers, body: body };
}

export default formatRoomData;
