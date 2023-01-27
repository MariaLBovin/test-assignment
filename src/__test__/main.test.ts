/**
*@jest-environment jsdom
*/

import * as main from "../ts/main";
import * as functions from "../ts/functions";
import { Todo } from "../ts/models/Todo";
import { IAddResponse } from "../ts/models/IAddResult";

beforeEach (()  => {
    document.body.innerHTML = " ";
     
    });

/******************************************************************************
 *                               Testar createNewToDo                         *
*******************************************************************************/
describe('test createNewToDo-functions', () => {

    test('should test if addTodo has been called', () =>{
        //arrange
        document.body.innerHTML = `<ul id="todos" class="todo"></ul>`
        let listText ="Att göra"
        let list= [new Todo("handla", true)]
        let listResult: IAddResponse = functions.addTodo(listText, list);
        let spyOnAddToDo = jest.spyOn(functions, "addTodo").mockReturnValue(listResult);

        //act
        main.createNewTodo(listText, list)

        //assert
        expect(spyOnAddToDo).toHaveBeenCalled();
        spyOnAddToDo.mockRestore();
    })

    test('should test if displayError has been called', () =>{
        //arrange
        document.body.innerHTML = `<div id="error" class="error"></div>`
        let spyOnDisplayError = jest.spyOn(main, "displayError").mockReturnValue();
        let listText ="H"
        let list= [new Todo("H", false)]

        //act
        main.createNewTodo(listText, list);

        //assert
        expect(spyOnDisplayError).toHaveBeenCalled();
        spyOnDisplayError.mockRestore();
    
    });
    test('should test if createHTML has been called', () => {
        //arrange
        document.body.innerHTML = `<ul id="todos" class="todo"></ul>`
        let spyOnCreateHtml = jest.spyOn(main, "createHtml").mockReturnValue();
        let listText ="Att göra"
        let list= [new Todo("handla", true)]
   
        //act
        main.createNewTodo(listText, list)

        //assert
        expect(spyOnCreateHtml).toHaveBeenCalled();
        spyOnCreateHtml.mockRestore();
    })

})
/******************************************************************************
 *                               Testar createHTML                        *
*******************************************************************************/

/******************************************************************************
 *                               Testar toggleToDos                         *
*******************************************************************************/
describe('test toggleToDo-functions', () => {

    test('should call changeToDo and createHTML ', () => {
        //arrage
        document.body.innerHTML = `<ul id="todos" class="todo"></ul>`
        let spyOnChangeToDo = jest.spyOn(functions, "changeTodo").mockReturnValue();

        //act
        main.toggleTodo({text: 'todo3', done: false});

        //assert
        expect(spyOnChangeToDo).toHaveBeenCalled();
        spyOnChangeToDo.mockRestore();

    })

    test('should call createHTML', () => {
        //arrange
        let Todo = {text: 'todo3', done: false}
        let spyOnCreateHTML = jest.spyOn(main, "createHtml").mockReturnValue();

        //act
        main.toggleTodo(Todo)

        //assert
        expect(spyOnCreateHTML).toHaveBeenCalled();
        spyOnCreateHTML.mockRestore();
})

})

/******************************************************************************
 *                               testar display-error                          *
*******************************************************************************/
describe ('should add or remove class from div error', () => {

    test('should add class if true', () => {
        //arrange 
        let text = "error";
        document.body.innerHTML = `<div id="error" class="error"></div>`;
        
        //act
        main.displayError(text, true)

        //assert
        let result = document.getElementById('error') as HTMLDivElement;
        expect(result.classList.contains("show")).toBe(true);
    })
    test('should remove class if false', () => {
        //arrange 
        let text = "error";
        document.body.innerHTML = `<div id="error" class="error"></div>`;
        
        //act
        main.displayError(text, false)

        //assert
        let result = document.getElementById('error') as HTMLDivElement;
        expect(result.classList.contains("show")).toBe(false);
    })
})

/******************************************************************************
 *                               Testar clearTodods                           *
*******************************************************************************/
describe("test clearToDos-function", () => {

    test('should call createHTML', () => {
        //arrange
        document.body.innerHTML = `<ul id="todos" class="todo"></ul>`
        let spyOnCreateHtml = jest.spyOn(main, "createHtml").mockReturnValue();
        //act
        main.clearTodos ([])
        //assert
        expect(spyOnCreateHtml).toHaveBeenCalled();
        spyOnCreateHtml.mockRestore();
    })

    test ('should call removeAllTodos', () => {
        //arrange
        document.body.innerHTML = `<ul id="todos" class="todo"></ul>`
        let spyOnRemoveAllTodos = jest.spyOn(functions, "removeAllTodos").mockReturnValue();
        //act
        main.clearTodos ([])
        //assert
        expect(spyOnRemoveAllTodos).toHaveBeenCalled()
        spyOnRemoveAllTodos.mockRestore();
    })
})

