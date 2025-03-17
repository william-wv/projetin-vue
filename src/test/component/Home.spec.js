import { mount } from "@vue/test-utils";
import { vi, describe, it, expect } from "vitest";
import HomeView from "@/views/HomeView.vue";

//  mocks para evitar que os componentes filhos sejam renderizados completamente
// mocks = "versao falsa"
vi.mock("@/components/SectionHome.vue", () => ({
  default: {
    props: ["image", "desc", "title", "paragraph"],
    template: "<div class='section-home'></div>", 
  },
}));


describe("HomeView", () => {
  // it =  Define uma ação ou comportamento que está sendo testado.
  it("renderizou os componentes SectionHome e SectionStocks", () => {
    const wrapper = mount(HomeView);

    // Expect = Verifica se o valor que você obteve está correto (por exemplo, se um valor é verdadeiro ou se dois valores são iguais).

    // Verifica se há dois componentes SectionHome
    expect(wrapper.findAllComponents({ name: "SectionHome" }).length).toBe(2);

    // Verifica se SectionStocks foi renderizado
    expect(wrapper.findComponent({ name: "SectionStocks" }).exists()).toBe(true);

  });

  it("passou as props corretamente para SectionHome", () => {
    // mount =  Cria uma versão "montada"
    const wrapper = mount(HomeView);

    // Obtém as props do primeiro SectionHome
    const firstSectionProps = wrapper.findAllComponents({ name: "SectionHome" })[0].props();
    expect(firstSectionProps.image).toBe("/company.jpg");
    expect(firstSectionProps.desc).toBe("foto da sede da empresa");
    expect(firstSectionProps.title).toBe("Life Balance - O equilibrio de suas financas");

    // Obtém as props do segundo SectionHome
    const secondSectionProps = wrapper.findAllComponents({ name: "SectionHome" })[1].props();
    expect(secondSectionProps.image).toBe("/cash.png");
    expect(secondSectionProps.desc).toBe("venha investir");
  });
});
