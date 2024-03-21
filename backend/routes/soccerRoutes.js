import { 
    addNewPlayer, 
    getPlayers,
    getPlayerWithID,
    updatePlayer,
    deletePlayer 
} from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')
    // GET endpoint
    .get(getPlayers)

    // POST endpoint
        .post(addNewPlayer);
    
    app.route('/player/:PlayerId')
        // get specific player
        .get(getPlayerWithID)

        // update specific player
        .put(updatePlayer)

        // delete specific player
        .delete(deletePlayer)
}


export default routes;