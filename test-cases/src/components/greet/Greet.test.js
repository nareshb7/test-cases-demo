import { fireEvent, render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe('Greet Component', ()=> {
    test('Checking greet message', ()=> {
        render(<Greet />)
        const el = screen.getByText('Hello')
        expect(el).toBeInTheDocument()
    })
    
    test('Checking greet message with name', ()=> {
        render(<Greet name={'Naresh'} />)
        const el = screen.getByText('Hello Naresh')
        expect(el).toBeInTheDocument()
    })
    test('Check Dismiss is Present', ()=> {
        render(<Greet/>)
        const text = screen.getByText('Dismiss')
        expect(text).toBeInTheDocument()
    })
    test('After Click dismiss will be remove', ()=> {
        render(<Greet />)
        const text = screen.getByText('Dismiss')
        expect(text).toBeInTheDocument()
        const btn = screen.getByRole('button', {name:'Clicked'})
        fireEvent.click(btn)
        expect(text).not.toBeInTheDocument()
    })
})

