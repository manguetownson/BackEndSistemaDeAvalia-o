import { prisma } from "../lib/prisma.js";

export const createCourse = async (req, res) => {
  const { title, schoolId } = req.body;

  try {
    const course = await prisma.course.create({
      data: {
        title,
        schoolId,
      },
    });
    return res.status(201).json(course);
  } catch (error) {
    console.error('Error creating course:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = await prisma.course.findUnique({
      where: {
        id: courseId,
      },
    });
    res.json(course);
  } catch (error) {
    console.error('Error getting course:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const { title } = req.body;
    const updatedCourse = await prisma.course.update({
      where: {
        id: courseId,
      },
      data: {
        title,
      },
    });
    res.json(updatedCourse);
  } catch (error) {
    console.error('Error updating course:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const deletedCourse = await prisma.course.delete({
      where: {
        id: courseId,
      },
    });
    res.json(deletedCourse);
  } catch (error) {
    console.error('Error deleting course:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};