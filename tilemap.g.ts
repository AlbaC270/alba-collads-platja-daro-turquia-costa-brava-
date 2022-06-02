// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000060606060600000000000000000000000606060606000606060606060606000006060006060006060600000000000000060600060600060606000606060000000606000600000006060006060606000006060006000600000600060606060000060600000006060006000606060600000606060006060600060000060606000006060600060606060606000000000000060006000006000000000000000600000000000000060006060600060606000200020202000302030402000202020002000202020003020304020002020200000002020200030203040200000002000102020202000002000000000202000000000000000005050505050505050505`, img`
. 2 2 2 2 2 . . . . . . . . . . 
. 2 2 2 2 2 . 2 2 2 2 2 2 2 2 . 
. 2 2 . 2 2 . 2 2 2 . . . . . . 
. 2 2 . 2 2 . 2 2 2 . 2 2 2 . . 
. 2 2 . 2 . . . 2 2 . 2 2 2 2 . 
. 2 2 . 2 . 2 . . 2 . 2 2 2 2 . 
. 2 2 . . . 2 2 . 2 . 2 2 2 2 . 
. 2 2 2 . 2 2 2 . 2 . . 2 2 2 . 
. 2 2 2 . 2 2 2 2 2 2 . . . . . 
. 2 . 2 . . 2 . . . . . . . 2 . 
. . . . . . 2 . 2 2 2 . 2 2 2 . 
2 . 2 2 2 . . . . . . . 2 2 2 . 
2 . 2 2 2 . . . . . . . 2 2 2 . 
. . 2 2 2 . . . . . . . . . 2 . 
2 2 2 2 2 . . 2 . . . . 2 2 . . 
. . . . . . 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath7,sprites.castle.tilePath5,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,sprites.castle.tilePath8,sprites.builtin.forestTiles0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
