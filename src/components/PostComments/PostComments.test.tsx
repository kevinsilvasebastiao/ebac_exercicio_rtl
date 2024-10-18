import { fireEvent, render, screen } from '@testing-library/react';
import Post from './index';

describe('Teste para o componente Post', () => {
    it('Deve adicionar dois comentários', () => {
        render(<Post />);

        const commentInput = screen.getByTestId('comment-input');
        const submitButton = screen.getByTestId('submit-button');

        fireEvent.change(commentInput, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(submitButton);

        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();

        fireEvent.change(commentInput, { target: { value: 'Segundo comentário' } });
        fireEvent.click(submitButton);

        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();

        const comments = screen.getAllByText(/comentário/i);
        expect(comments.length).toBe(2);
    });
});
