import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedbackUseCase = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);
describe("SubmitFeedbackUseCase", () => {
  it("should be able to submit a feedback with a valid screenshot", () => {
    expect(
      submitFeedbackUseCase.execute({
        type: "bug",
        comment: "exemple",
        screenshot: "data:image/png",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
  });

  it("should not be able to send feedback without a type", () => {
    expect(
      submitFeedbackUseCase.execute({
        type: "",
        comment: "exemple",
        screenshot: "data:image/png",
      })
    ).rejects.toThrow();
  });
  it("should not be able to send feedback without a comment", () => {
    expect(
      submitFeedbackUseCase.execute({
        type: "uepa",
        comment: "",
        screenshot: "data:image/png",
      })
    ).rejects.toThrow();
  });
});
