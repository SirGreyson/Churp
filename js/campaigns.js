/**
 * Created by Greyson on 5/9/16.
 */

/**
 * Reference to Firebase database for user campaign management
 * @type {Firebase}
 */
var root = new Firebase("http://magiccitycoders-c.firebaseio.com/users/admin");
var campaigns = root.child('campaigns');

function getCampaigns(context) {
    return campaigns.once("value", function () {
    }, context).then(function (snapshot) {
        return {
            value: snapshot.val(),
            context: context
        }
    })
}

function addCampaign(hashtag, target, title) {
    campaigns.push().set({balance: 0, hashtag: hashtag, target: target, title: title, transactions: []});
}

function removeCampaign(id) {
    //TODO Make this auto-update campaign page
    campaigns.child(id).set({});
}

function addTransaction(id, amount, username) {
    campaigns.child(id + "/transactions").push().set({amount: amount, username: username, timestamp: Date.now()});
}