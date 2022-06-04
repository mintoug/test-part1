import { render, screen, fireEvent} from '@testing-library/react';
import App from './App';

test('button has corretct initial color', () => {
  render(<App/>);
  //find an element with a role of button
  const colorButton = screen.getByRole('button',{name:'change to blue'})
  //expect the bg to be red
  expect (colorButton).toHaveStyle({backgroundColor:'red'})

//click button
fireEvent.click(colorButton)
  //expect to have blue button
  expect(colorButton).toHaveStyle({backgroundColor:'blue'});
// expect text to be change to red
expect(colorButton.textContent).toBe ('change to red');
});

test('initial conditions', (()=>{
  render(<App/>);
  const colorButton =screen.getByRole('button', {name:'change to blue'})
  expect (colorButton).toBeEnabled()
  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked()
}))

test('checkbox disables button on first click and enables on second click',(()=>{
  render(<App/>);
  const Checkbox = screen.getByRole('checkbox');
  const colorButton = screen.getByRole('button', {name:'change to blue'});
   
  fireEvent.click(Checkbox);
  expect(colorButton).toBeDisabled();
  fireEvent.click(Checkbox);
  expect(colorButton).toBeEnabled();

}))
test('disabled button has background gray and reverts to red', ()=> {
  render(<App/>);
  const checkbox = screen.getByRole('checkbox');
  const colorButton = screen.getByRole('button', {name: 'change to blue'});

  //disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color :gray');
  //re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color:red')
})
test('disabled button has background gray and reverts to blue', ()=> {
  render(<App/>);
  const checkbox = screen.getByRole('checkbox');
  const colorButton = screen.getByRole('button', {name: 'change to blue'});

  //disable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color :gray');
  //re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color : blue')
})