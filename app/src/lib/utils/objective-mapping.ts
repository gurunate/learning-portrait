import { Course as TCourse, Objective as TObjective } from '@/types';

export const organizeObjectives = (objectives: TObjective[]): any[] => {
        // Step 1: Create a map of objectives by their ID
        const objectivesMap = new Map();
        objectives.forEach(obj => {
            objectivesMap.set(obj.id, { ...obj, children: [] });
        });

        // Step 2: Separate top-level objectives (where parentId is null)
        const topLevelObjectives: any[] = [];
        objectives.forEach(obj => {
            if (obj.parentId === null || obj.parentId === undefined) {
                topLevelObjectives.push(objectivesMap.get(obj.id));
            } else {
                // Step 3: Assign children to their parents
                const parentObjective = objectivesMap.get(obj.parentId);
                if (parentObjective) {
                    parentObjective.children.push(objectivesMap.get(obj.id));
                }
            }
        });

        return topLevelObjectives;
    }

export const filterSelectedObjectives = (course: TCourse, selectedObjectives: TObjective[]): TObjective[] => {
  const result: TObjective[] = [];

  // Helper function to get children that are selected
  const getSelectedChildren = (objective: TObjective): TObjective[] => {
    if (!objective.children) return [];
    
    // Filter children to include only those that are selected
    return objective.children.filter(child => selectedObjectives.includes(child));
  };

  // Loop through course objectives
  for (const objective of course.objectives || []) {
    if (selectedObjectives.includes(objective)) {
      // If the objective itself is selected, include it in the result
      result.push({
        ...objective,
        children: getSelectedChildren(objective), // Include selected children
      });
    } else {
      // If the objective is not selected, check if any of its children are selected
      const children = getSelectedChildren(objective);
      if (children.length > 0) {
        result.push({
          ...objective,
          children, // Include selected children
        });
      }
    }
  }

  return result;
};
