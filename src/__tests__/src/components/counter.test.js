import React from "react";

import renderer from "react-test-renderer";
import Counter from "../../../components/counter/counter.js";

describe("counter", () => {
  it("is alive", () => {
    expect(true).toBeTruthy();
  });

  it("exists", () => {
    let component = shallow(<section />);
    expect(component.find("section").exists()).toBeTruthy();
  });

  it("increases number when plus button is clicked", () => {
    let component = mount(<Counter />);
    let anchor = component.find("clickUp");
    anchor.simulate("click");
    expect(component.state("count")).toBe(1);
    expect(comonent.find("span").text).toContain("1");
  });

  it("decreases number when minus button is clicked", () => {
    let component = mount(<Counter />);
    let anchor = component.find("clickDown");
    anchor.simulate("click");
    expect(component.state("count")).toBe(-1);
    expect(component.find("span").text).toContain("-1");
  });
});
