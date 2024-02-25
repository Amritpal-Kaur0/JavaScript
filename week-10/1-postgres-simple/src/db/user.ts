import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    const insertquery = (`INSERT INTO users (username, password, name) VALUES ($1, $2, $3);`)
    const values = [username, password, name];
    const res=await client.query(insertquery,values);
    // console.log('Insertion success:', res);
    return res;
    
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {


    const insertquery = (`SELECT * FROM users Where id = $1;`)
    const values = [userId];
    const res=await client.query(insertquery,values);
    // console.log('Insertion success:', res);
    return res.rows[0];
}
