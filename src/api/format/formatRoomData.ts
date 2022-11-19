function formatRoomData(dt: any) {
    const headers = ["Name"];
    const body: any[] = [];
    dt.map((item: any) => {
        body.push([item.name]);
    });
    return { headers: headers, body: body };
}

export default formatRoomData;