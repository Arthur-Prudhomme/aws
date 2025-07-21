import AgeGuess from "../src/components/AgeGuess.vue";
import { test, expect } from "vitest";
//import mount
import { mount } from "@vue/test-utils";

//import your component

test("mount component", async () => {
  expect(AgeGuess).toBeTruthy();

  const wrapper = mount(AgeGuess, {
    props: {
      title: "Guess User Age App",
    },
  });
  expect(wrapper.text()).toContain("Guess User Age App");
});