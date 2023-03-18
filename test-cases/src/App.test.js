import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', ()=> {

  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/hello/i);
    screen.debug(linkElement)
    expect(linkElement).toBeInTheDocument();
  });
  
  test('Check button' , ()=> {
    render(<App />)
    const btn = screen.getByTestId('button')
    expect(btn).toBeInTheDocument()
  })
  test('Checkbtn Text', ()=> {
    render(<App/>)
    const btn = screen.getByRole('button', {name: 'Login'})
    expect(btn).toBeInTheDocument()
  })
  
  test('Check onClick', ()=> {
    render(<App/>)
    const btn = screen.getByText('Login')
    const val = fireEvent.click(btn)
    expect(val).toBe(true)
  })
  
  const Button = ({onClick, children}) => (
    <button onClick={onClick}>{children}</button>
  )
  
  test('Calls onClick prop when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click Me</Button>)
    fireEvent.click(screen.getByText(/click me/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})

