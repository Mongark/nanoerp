import { getDocs, collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import RoomInterface from "../../Interfaces/RoomInterface";

import { db } from './Firebase';

const getRooms = () => {
    return getDocs( collection( db, 'rooms' ));
}

const addRoom = ( room: RoomInterface ) => {
    return addDoc( collection( db, 'rooms' ), room );
}

const deleteRoom = ( id: string ) => {
    const docRef = doc( db, "cities", id );

    return deleteDoc( docRef );
}

export {
    getRooms,
    addRoom,
    deleteRoom,
};