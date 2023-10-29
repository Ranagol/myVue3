import { render, screen } from "@testing-library/vue";

//We have to import the component that we will test
import MainNav from '@/components/Navigation/MainNav.vue';

describe('MainNav', () => {
  it('Displays company name', () => {
    
    /**
     * Here we simulating a component rendering in virtual DOM. This is needed for testing a component.
     */
    render(MainNav);

    /**
     * screen.getByText("Bobo Careers") will search for 'Bobo Careers' in the virtual DOM. getBy
     * family of commands looks only for exactly one result. If there are multiple founds, then
     * this will be treated as an error.
     */
    const companyName = screen.getByText("Bobo Careers");

    /**
     * The previously found const companyName is checked if it is in the document. However, actually
     * this here is redundant, because if there is a companyName, it is in the document.
     */
    expect(companyName).toBeInTheDocument();

  });
});
