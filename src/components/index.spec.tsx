import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from './index';
import { expect, it, describe } from '@jest/globals';

const { getByRole, findByRole } = render(
  <Input id='username' label='Username' />
);

describe('Input', () => {
  const inputNode = screen.getByLabelText('Username') as HTMLInputElement;
  const inputText = 'Test Input Text';

  it('should empty in input on initial render', async () => {
    expect(inputNode.value).toBe('');
  });

  it('should show input text', () => {
    fireEvent.change(inputNode, { target: { value: inputText } });

    expect(inputNode.value).toBe(inputText);
  });

  it('should reset when user clicks button', async () => {
    const buttonNode = (await findByRole(
      'reset'
    )) as unknown as HTMLButtonElement;

    fireEvent.click(buttonNode);

    expect(inputNode.value).toBe('');
  });
});
