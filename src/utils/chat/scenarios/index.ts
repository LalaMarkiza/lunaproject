import { ConversationScenario } from '../../../types/chat';
import { mainCategories } from './mainCategories';
import { physicalScenarios } from './physicalScenarios';
import { emotionalScenarios } from './emotionalScenarios';
import { cycleScenarios } from './cycleScenarios';
import { selfCareScenarios } from './selfCareScenarios';
import { stressScenarios } from './stressScenarios';
import { sleepScenarios } from './sleepScenarios';
import { nutritionScenarios } from './nutritionScenarios';
import { exerciseScenarios } from './exerciseScenarios';

export const scenarioTree = {
  main: mainCategories,
  branches: {
    physical: physicalScenarios,
    emotional: emotionalScenarios,
    cycle: cycleScenarios,
    selfCare: selfCareScenarios,
    stress: stressScenarios,
    sleep: sleepScenarios,
    nutrition: nutritionScenarios,
    exercise: exerciseScenarios
  }
};

export const findScenario = (message: string): ConversationScenario | null => {
  // Check main categories first
  for (const category of Object.values(mainCategories)) {
    if (category.trigger.some(t => message.toLowerCase().includes(t))) {
      return category;
    }
  }

  // Check all branches
  for (const branch of Object.values(scenarioTree.branches)) {
    for (const scenario of Object.values(branch)) {
      if (scenario.trigger.some(t => message.toLowerCase().includes(t))) {
        return scenario;
      }
    }
  }

  return null;
};