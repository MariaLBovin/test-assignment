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
        let listText ="Att göra"
        let list= [new Todo("handla", true)]
        let listLength = list.length
        
        //act
        functions.addTodo(listText, list);
        
        //assert
        expect(list.length).toBe(listLength +1)
    })

    test('should not add new todo', () =>{
        let listText ="A"
        let list= [new Todo("handla", true)]
        let listLength = list.length
        
        //act
        functions.addTodo(listText, list);
        
        //assert
        expect(list.length).toBe(listLength)
    })
})

test('should remove all todos', () => {
    let todoList :Todo [] = [new Todo("handla", true)]

    functions.removeAllTodos(todoList)

    expect(todoList.length).toBe(0)
})

