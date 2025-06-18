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

interface AddModalComponentProps {
    isActive: boolean,
}

const AddRoomModalComponent =(props: AddModalComponentProps) => {
        if(props.isActive) {
            return(
                <div className="addroom-modal">
                    <div className="addroom-modal-card">
                        <h3>Create Room</h3>

                        <form>
                            <label>Room name</label> <br />
                            <input type="text"/>
                            
                            <br />

                            <label>Room capacity</label> <br />
                            <input type="text"/>

                            <br />

                            <label>Location</label> <br />
                            <input type="text"/>

                            <br />
                            
                            <input type="submit" id="addroom-modal-submitbutton" name="addroom-modal-submitbutton" value='Submit' />
                        </form>
                    </div>
                </div>
            );
        }

        return(<></>);
    }

function Rooms() {
    const sampleRoom: Room = { name: "Jacob", capacity: 12, isOccupied: true, location: "Amazon", createdBy: "Joshua", createdAt: new Date(), updatedAt: new Date() };

    const [ rooms, setRooms                                  ] = useState([sampleRoom]);
    const [ isCreateRoomFormOpen, setIsCreateRoomFormOpen    ] = useState(false);

    return(
        <div>
            <h1 style={{ marginLeft: '16px' }}>Rooms</h1>

            <button onClick={() => setIsCreateRoomFormOpen(true)}>Create room</button>

            <table>
                <tr>
                    <th>Name    </th>
                    <th>Capacity</th>
                    <th>Occupied</th>
                    <th>Location</th>
                    <th />
                    <th />
                </tr>

                {rooms.map((room) => {
                    return(
                        <tr>
                            <td>{ room.name                         }</td>
                            <td>{ room.capacity                     }</td>
                            <td>{ room.isOccupied   ? "Yes" : "No"  }</td>
                            <td>{ room.location                     }</td>

                            <td>
                                <button>Edit</button>
                            </td>
                            <td>
                                <button onClick={() => deleteRoom(room)}>Delete</button>
                            </td>
                        </tr>
                    );
                })}
            </table>

            <AddRoomModalComponent isActive={isCreateRoomFormOpen} />
        </div>
    );
} export default Rooms;
