import Testing from '@/pages/Testing.vue';
import { render } from '@testing-library/vue';
import { screen } from '@testing-library/dom';

describe('Testing.vue', () => {
    describe('when emit button is clicked, ', () => {
        it('renders "emit was triggered"', () => {
            render(Testing);
            const emitStatusElement = screen.getByText(/emit was triggered:/i)
            expect(emitStatusElement).toBeInTheDocument();
        })
    })
})