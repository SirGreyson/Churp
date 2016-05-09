/**
 * Created by Greyson on 5/9/16.
 */

/**
 * Reference to Firebase database for user campaign management
 * @type {Firebase}
 */
var root = new Firebase("http://magiccitycoders-c.firebaseio.com/users/admin");
var campaigns = root.child('campaigns');

function getCampaigns() {
    return campaigns.once("value", function (snapshot) {
        return snapshot.val();
    });
}

function addCampaign() {

}

function removeCampaign() {
}