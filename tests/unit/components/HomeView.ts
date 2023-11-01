import { render, screen } from "@testing-library/vue";
import HomeView from "@/views/HomeView.vue";//TODO why is this underlined as an error?
import { describe, it, expect } from "vitest"; //this import is our first step in Vitest
import '@testing-library/jest-dom'

//TODO before testing, rename this file back to HomeView.test.ts
describe("HomeView.vue", () => {

  it("renders a greeting", () => {
    render(HomeView);//TODO Can't get this to work
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  
});


  
