import { fireEvent, render, screen, logRoles } from "@testing-library/react";
import Greet from "./Greet";

describe('Greet Component', ()=> {
    test('Checking greet message', ()=> {
        render(<Greet />)
        const el = screen.getByText('Hello')
        expect(el).toBeInTheDocument()
    })
    
    test('Checking greet message with name', ()=> {
        render(<Greet name={'Naresh'} />)
        const el = screen.getByRole('heading', {name: 'Hello Naresh' })
        expect(el).toBeInTheDocument()
    })
    test('Input Filed is present or not', ()=> {
        render(<Greet />)
        const inputElment = screen.getByRole('textbox')
        expect(inputElment).toBeInTheDocument()
    })
    test('Check Dismiss is Present', ()=> {
        render(<Greet/>)
        const text = screen.getByText('Dismiss')
        expect(text).toBeInTheDocument()
    })
    test('UL is present or not', ()=> {
        render(<Greet/>)
        const ul = screen.getByRole('list')
        expect(ul).toBeInTheDocument()
        const listItems = screen.getAllByRole('listitem')
        logRoles(ul)
        screen.debug(listItems)
        expect(listItems).toHaveLength(3)
    })
    test('Timeout header is render or not',async ()=> {
        render(<Greet />)
        // const timeEl = screen.getByRole('heading', {name: 'Timeout Check'})
        // If the El not found getBy method throws an error so for disapperance elements we use  queryBy method it returns null if el not found
        const timeEl = screen.queryByRole('heading', {name: 'Timeout Check'})
        expect(timeEl).not.toBeInTheDocument()
        const timeEl2 = await screen.findByRole('heading', {name: 'Timeout Check'}, {timeout:1300}) // default Timeout is 1 sec (1000 ms)
        expect(timeEl2).toBeInTheDocument()
    })
    test('Check image is present or not', ()=> {
        render(<Greet/>)
        const imgEl = screen.getByAltText('image')
        expect(imgEl).toBeInTheDocument()
    })
    test('After Click dismiss El has to be removed', ()=> {
        render(<Greet />)
        const text = screen.getByText('Dismiss')
        expect(text).toBeInTheDocument()
        const btn = screen.getByRole('button', {name:/Clicked/i})
        fireEvent.click(btn)
        expect(text).not.toBeInTheDocument()
    })
    test.only('Count Checking after click', ()=> {
        render(<Greet />)
        const countEl = screen.getByRole('heading', {name: 'Count 0'})
        expect(countEl).toHaveTextContent('Count 0')
        const countBtnEl = screen.getByRole('button', {name: 'SetCount'})
        fireEvent.click(countBtnEl)
        const countEl1 = screen.getByRole('heading', {name: 'Count 10'})
        expect(countEl1).toHaveTextContent('Count 10')
        expect(countEl).not.toHaveTextContent('Count 0')
    })
})

        // Query Methods :
        /* 
        getBy & getAllBy  --> for Appearance Elements
        queryBy & queryAllBy --> for disapperance Elements
        findBy & findAllBy --> Its combination of getBy and WaitFor queries supports async funcationality
        */

        // Queries 

        /*
        1.getByRole
        2.getByLabelText
        3.getByPlaceholderText
        4.getByText
        5.getByDisplayValue
        6.getByAltText
        7.getByTitle
        8.getByTestid

        */

        /* 
        // getByRole 
        => getByRole accepts two arguments one is role, and second is optional that maybe name, level, checked, hidden, pressed

        */

        /*
        // getByLabelText
        => getByLabelText is our second priority it also accepts two arguments, one is label name, and second one is optional that will be the selector , it accepts html tag to find the element
        */