import express from "express";
import nodemailer from "nodemailer";
import { prisma } from "./prisma";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedback-repository";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";

export const routes = express.Router();

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e839dd7bb6fc32",
    pass: "84c19965e6ea51",
  },
});

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository);
  /* 
  await transport.sendMail({
    from: ' "Feedback" <opa@feedget.com>',
    to: "Gus <gustavo.carvg@gmail.com>",
    subject: "Novo feedback",
    html: [
      `<h1>Novo feedback</h1>`,
      `<p>${type}</p>`,
      `<p>${comment}</p>`,
    ].join("\n"),
  }); */

  return res.status(201).json({ data: feedback });
});
