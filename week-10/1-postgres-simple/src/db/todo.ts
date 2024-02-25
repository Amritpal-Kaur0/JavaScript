import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    const insertquery = (`INSERT INTO todos (title, description, user_Id) VALUES ($1, $2, $3) RETURNING title, description, done, id;`)
    const values = [title, description, userId];
    const res=await client.query(insertquery,values);
    console.log('Insertion success:', res);
    return res.rows[0];
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    const insertquery = (`UPDATE todos
     SET done = true 
     WHERE id = $1 
     RETURNING *;`)
    const values = [todoId];
    const res=await client.query(insertquery,values);
    // console.log('Insertion success:', res);
    return res.rows[0];

}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    const insertquery = (`SELECT * FROM todos WHERE user_id = $1; `) 
    const values = [userId];
    const res=await client.query(insertquery,values);
    // console.log('Insertion success:', res);
    return res.rows;
}