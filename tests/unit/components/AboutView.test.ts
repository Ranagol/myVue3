import { render } from "@testing-library/vue"
import AboutView from "@/views/AboutView.vue"
import { screen } from "@testing-library/dom"
// import { it, expect, describe } from "vitest";



describe('AboutView', () => {//TODO describe, it, expect are globally availabe. They work. Ony TS is making problems here. How to solve this?
    it('renders a title', () => {  
        render(AboutView);
        const title = screen.getByRole('heading', {  name: /about/i})
        expect(title).toBeInTheDocument();
    });

    it('renders a paragraph', () => {
        render(AboutView);      
        const paragraph = screen.getByText(/some random text/i);
        expect(paragraph).toBeInTheDocument();
    });
})