import { getDocs, collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import RoomInterface from "../../Interfaces/RoomInterface";

import { db } from './Firebase';

const getAll = ( collectionName: string ) => {
    return getDocs( collection( db, collectionName ));
}

const addOne = ( collectionName: string, docName: RoomInterface ) => {
    return addDoc( collection( db, collectionName ), docName );
}

const deleteOne = ( collectionName: string, docId: string ) => {
    const docRef = doc( db, collectionName, docId );

    return deleteDoc( docRef );
}

export {
    getAll,
    addOne,
    deleteOne,
};
