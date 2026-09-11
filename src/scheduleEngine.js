// Agronomic Schedule Generator Engine

import { agronomicDefaults } from './agronomicDefaults.js';

export function generateScheduleTasks(commodityKey, plantingDateString) {
  const commodityDef = agronomicDefaults[commodityKey] || agronomicDefaults.sawit;
  const plantingDate = new Date(plantingDateString);

  return commodityDef.taskTemplates.map((template, index) => {
    const taskDate = new Date(plantingDate);
    taskDate.setDate(taskDate.getDate() + template.intervalDays);
    
    return {
      id: `task_${Date.now()}_${index}`,
      title: template.title,
      dueDate: taskDate.toISOString().split("T")[0],
      intervalDays: template.intervalDays,
      type: template.type,
      completed: false,
      completedAt: null
    };
  });
}
