
import { mount } from "@vue/test-utils";
import ViewCourse from "../../src/resources/app/pages/ViewCourse";

// every test file should include AT LEAST ONE "describe()", "it()", and "expect()"
describe("CourseCard Component", () => {
    describe("when loaded", () => {
        it("should renders", () => {
            const wrapper = mount(ViewCourse, {});

            const findCard1 = () => wrapper.find('#course-card');
            expect(findCard1().exists()).toBe(true);
        });
    })
});
