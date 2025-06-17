import { useState } from "react";

interface Room {
    name: string;
    capacity: number;
    isOccupied: boolean;
    location: string;
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
}

function Rooms() {
    const sampleRoom: Room = { name: "Jacob", capacity: 12, isOccupied: true, location: "Amazon", createdBy: "Joshua", createdAt: new Date(), updatedAt: new Date() };

    const [rooms, setRooms] = useState([sampleRoom]);

    return(
        <div>
            <h1 style={{ marginLeft: '16px' }}>Rooms</h1>

            <table>
                <tr>
                    <th>Name</th>
                    <th>Capacity</th>
                    <th>Occupied</th>
                    <th>Location</th>
                </tr>

                {rooms.map((room) => {
                    return(
                        <tr>
                            <td>{room.name}</td>
                            <td>{room.capacity}</td>
                            <td>{room.isOccupied ? "Yes" : "No"}</td>
                            <td>{room.location}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
} export default Rooms;
