/**
 * Created by Greyson on 5/3/16.
 */

/**
 * Reference to Firebase database for user management
 * @type {Firebase}
 */
var ref = new Firebase("http://magiccitycoders-c.firebaseio.com");

/**
 * Create a User account on Firebase and save Twitter handle
 * @param email - the User's email address
 * @param password - the User's specified password
 * @param twitter - the User's registered Twitter handle
 */
function createUser(email, password, twitter) {
    ref.createUser({
        email: email,
        password: password
    }, function (error, userData) {
        if (error) {
            console.log("Error creating user:", error);
        } else {
            ref.child(userData.uid.toString()).set({twitter: twitter});
            console.log("Successfully created user account with uid:", userData.uid);
        }
    });
}

/**
 * Log an existing User into the site using their credentials
 * @param email - the User's email address
 * @param password - the User's specified password
 */
function authorizeUser(email, password) {
    ref.authWithPassword({
        email: email,
        password: password
    }, function (error, authData) {
        if (error) {
            console.log("Login Failed!", error);
        } else {
            console.log("Authenticated successfully with payload:", authData);
            return authData;
        }
    });
}