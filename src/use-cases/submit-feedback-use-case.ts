import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) {
    this.feedbacksRepository = feedbacksRepository;
  }

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;
    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });
    await this.mailAdapter.sendMail({
      subject: "Novo Feedback",
      body: [
        `<h1>Novo feedback</h1>`,
        `<p>${type}</p>`,
        `<p>${comment}</p>`,
      ].join("\n"),
    });
  }
}
