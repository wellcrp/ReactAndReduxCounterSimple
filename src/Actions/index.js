import { INCREMENT, DECREMENT, ADDTODO } from "./types";
// export function addTodo(text) {
//     return {
//         type: 'ADD_TODO',
//         text,
//     }
// }

// export const addTodo = (text) => ({ type: ADDTODO, text });
export const incr = () => ({ type: INCREMENT });
export const decr = () => ({ type: DECREMENT });