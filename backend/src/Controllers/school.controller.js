// schoolController.js
import { prisma } from "../lib/prisma.js";

export const createSchool = async (req, res) => {
  try {
    const { title, courses, subjects, users } = req.body;
    const school = await prisma.school.create({
      data: {
        title,
        courses: { create: courses },
        subjects: { create: subjects },
        users: { create: users },
      },
    });
    res.status(201).json({ message: "Escola criada com sucesso!", school });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar a escola' });
  }
};

export const getSchool = async (req, res) => {
  try {
    const schoolId = req.params.id;
    const school = await prisma.school.findUnique({
      where: {
        id: schoolId,
      },
      include: {
        courses: true,
        subjects: true,
        users: true,
      },
    });
    res.json(school);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter a escola' });
  }
};

export const updateSchool = async (req, res) => {
  try {
    const schoolId = req.params.id;
    const { title, courses, subjects, users } = req.body;
    const updatedSchool = await prisma.school.update({
      where: {
        id: schoolId,
      },
      data: {
        title,
        courses: { update: courses },
        subjects: { update: subjects },
        users: { update: users },
      },
    });
    res.json(updatedSchool);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar a escola' });
  }
};

export const deleteSchool = async (req, res) => {
  try {
    const schoolId = req.params.id;
    const deletedSchool = await prisma.school.delete({
      where: {
        id: schoolId,
      },
    });
    res.json(deletedSchool);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir a escola' });
  }
};
