import React from 'react';
import { render } from '@testing-library/react';
import BlogContainer from '../components/BlogContainer';

describe('Rendering the blog container', () => {

  let getByTestId;

  beforeEach(() => {
    ({getByTestId} = render(<BlogContainer title="Test Title" body={["Test Body", "Et al"]} />))
  })

  test('Displays title of posts', () => {  
    expect(getByTestId('Test Title').innerHTML).toContain('Test Title');
  })

  test('Displays body of blogs', () => {
    expect(getByTestId('Test Title_0_preview').innerHTML).toContain('Test Body');
  })

  test('Displays body of blogs', () => {
    expect(getByTestId('Test Title_0_preview').innerHTML).not.toContain('Et al');
  })
})
