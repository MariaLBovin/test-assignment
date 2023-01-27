/**
*@jest-environment jsdom
*/

import * as functions from "../ts/functions"
import { Todo } from "../ts/models/Todo";

beforeEach (()  => {
    document.body.innerHTML = " ";
     
    });

describe('should test all parts of function AddTodo', () => {
    test('should add new todo', () => {
        //arrange
        const listText ="Att göra"
        const list= [new Todo("", true)]
        const listLength = list.length
        
        //act
        functions.addTodo(listText, list);
        
        //assert
        expect(list.length).toBe(listLength +1)
    })

    test('should not add new todo', () =>{
        //arrange
        const listText ="A"
        const list= [new Todo("", true)]
        const listLength = list.length
        
        //act
        functions.addTodo(listText, list);
        
        //assert
        expect(list.length).toBe(listLength)
    })
})
test ('should change status on todo', () => {
    //arrange
    const todoItem :Todo = new Todo("", true)

    //act
    functions.changeTodo(todoItem)

    //assert
    expect(todoItem.done).toBe(false)
}) 

test('should remove all todos', () => {
    //arrange
    const todoList :Todo [] = [new Todo("handla", true)]

    //act
    functions.removeAllTodos(todoList)


    //assert
    expect(todoList.length).toBe(0)
})

