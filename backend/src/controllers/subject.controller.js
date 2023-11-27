import { prisma } from "../lib/prisma.js";

export const createSubject = async (req, res) => {
  try {
    const { title, value, courseID } = req.body;
    const subject = await prisma.subjects.create({
      data: {
        title,
        value,
        courseID,
      },
    });
    res.json(subject);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar matéria' });
  }
};

export const getSubjects = async (_, res) => {
  try {
    const subjects = await prisma.subjects.findMany();
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar matérias' });
  }
};

export const getSubjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const subject = await prisma.subjects.findUnique({
      where: { id },
    });
    if (subject) {
      res.json(subject);
    } else {
      res.status(404).json({ error: 'Matéria não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar matéria' });
  }
};

export const updateSubject = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, value, courseID } = req.body;
    const updatedSubject = await prisma.subjects.update({
      where: { id },
      data: {
        title,
        value,
        courseID,
      },
    });
    res.json(updatedSubject);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar matéria' });
  }
};

export const deleteSubject = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.subjects.delete({
      where: { id },
    });
    res.json({ message: 'Matéria excluída com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir matéria' });
  }
};
