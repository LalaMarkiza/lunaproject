import { mainCategories } from './mainCategories';
import { physicalScenarios } from './physicalScenarios';
import { emotionalScenarios } from './emotionalScenarios';
import { cycleScenarios } from './cycleScenarios';
import { selfCareScenarios } from './selfCareScenarios';
import { stressScenarios } from './stressScenarios';
import { sleepScenarios } from './sleepScenarios';
import { nutritionScenarios } from './nutritionScenarios';
import { exerciseScenarios } from './exerciseScenarios';
import { relationshipScenarios } from './relationshipScenarios';
import { workLifeScenarios } from './workLifeScenarios';
import { mindfulnessScenarios } from './mindfulnessScenarios';
import { energyScenarios } from './energyScenarios';
import { symptomsScenarios } from './symptomsScenarios';
import { hormonalScenarios } from './hormonalScenarios';

export const scenarioCategories = {
  main: mainCategories,
  physical: physicalScenarios,
  emotional: emotionalScenarios,
  cycle: cycleScenarios,
  selfCare: selfCareScenarios,
  stress: stressScenarios,
  sleep: sleepScenarios,
  nutrition: nutritionScenarios,
  exercise: exerciseScenarios,
  relationships: relationshipScenarios,
  workLife: workLifeScenarios,
  mindfulness: mindfulnessScenarios,
  energy: energyScenarios,
  symptoms: symptomsScenarios,
  hormonal: hormonalScenarios
};

export type ScenarioCategory = keyof typeof scenarioCategories;