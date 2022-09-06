import * as FS from "../src/Firebase/FirebaseService";

describe("Rooms endpoint", () => {

    it("should return all rooms", (donne) => {
        const data = FS.getRooms();
        
        data.then(( res ) => {
            console.log( "WORKS!" );
            
            res.docs.map((item) => {
                console.log( item.data() );
            });

            donne();
        }).catch(( err ) => {
            donne( err );
        });
    }).timeout(10000);
});